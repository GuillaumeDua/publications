---
layout: post
title: "CMake - 13 Valuable Things I Learned Using CMake"
sitemap: true
description: >
  Tips and tricks collected while writing CMake scripts for a large codebase — covering versioning, stages, generator expressions, debugging, dependencies, and project structure.
tags: [ cpp, cmake, build-system ]
gist_url: https://gist.github.com/GuillaumeDua/a2e9cdeaf1a26906e2a92ad07137366f
gist_date: "April 26, 2020"
---

Author : Dua Guillaume  
Date   : 04-26-2020  

Requirement : A first experience with CMake

---

- TOC
{:toc}

## Intro

As a **modern C++ specialist**, my job is to focus on software development, from a **performance** and **quality** perspective.  
I daily deal with template metaprogramming, modern design patterns implementation, and new concepts experimentation.  
Thus, I spend most of my time improving codebases quality, increasing softwares performances, as well as training teams to modern C++.  
Beside, migrating existing code from legacy to modern C++ is such a rewarding work, as it usually both increase **quality** and **performances**, while greatly decreasing the amount of code.

Since about a year, I  work for a famous French telecoms company.  
According to the company size, I was pretty surprised when I was requested to create **CMake scripts**.  
Indeed, I used to work in teams where someone's job was dedicated to CI/CD tools, including build scripts, Git, Jenkins, Gitlab CI, Dockers, etc.

I was suprised at first. However, being always ready for **new challenges**, and eager to **learn**, I accepted the request.  
Thus, I spent the last past months writing CMake scripts, experimenting and learning new tricks along the way.

> It is these **tips & tricks** that I'm willing to share with you across this article.  

Before we start, few **warnings** :

- Learning CMake is **painful**. Especially because of the lack of **standard practices** in CMake usage, and in particular the insufficient adoption of **modern design patterns**.  
- Googling for advises was more a source of frustration than answers.  

> **Disclaimer** : I still do not know if I use CMake the right way. I strongly encourage you to read the documentation and make your own experience.

*Make sure to read until the end, I'll show you a pattern I use to create CMake modules for targets importation !*

## 1 - Know your CMake version(s)

First, know which CMake release are your targets. Especially the **lowest**.  

For instance, if you work with Ubuntu 14.04 LTS Docker containers, you are more likely to use GCC 4.8.4 and CMake 2.8. On MS Windows 10 with Ms Visual Studio 2019, CMake 3.10 or greater.

This **matters a lot**, as a single CMakelist.txt may result in different behaviors when processed across multiple release. What works perfectly fine locally may be a total mess on another system.

Most projects are likely to build on different systems, involving different OS, compilers, generators, and of course cmake releases.

> *"Hope for the best, be prepared for the worst"*  
> This popular saying best reflects the requested mindset here.

### 1.1 Use modern CMake, not legacy

> In short, modern CMake starts from **CMake 3.1**.

Just like C++, CMake has a paradigm gap between so-called legacy and modern releases.

Modern CMake is a nice way to replace unreadable & unmaintainable "2k-lines-long" CMakelists.txt files with clean, short bunches of instructions.

Opting for modern CMake seems like a pretty straight-forward decision to make. However, considering **technical constraints** may interfere in that choice, as mentioned in section 1.

Even if CMake is greatly backward compatible, the CMake 3.x.x series introduced some **breaking changes**.

For more information, you may have a look to [cmake policies](https://cmake.org/cmake/help/latest/manual/cmake-policies.7.html). These are mecanismes introduced to ensure backward compatibilities. Basically, the user can explicitly select an **NEW** or **OLD** behavior for each policy.  
See policy [CMP0083 related to PIE support](https://cmake.org/cmake/help/latest/module/CheckPIESupported.html#module:CheckPIESupported) for instance.

> Also, CMake releases prior to 3.0 are not referenced anymore in the [documentation](https://cmake.org/cmake/help/latest/guide/tutorial/index.html).  
> This only fact should be self-explanatory enough.

### 1.2 Protect your build, save your time

> Use `cmake_minimum_required` as first instruction.

This prevents use of **deprecated** CMake releases.  
Imposing your choice will make you save hundreds, if not thousands, of unmaintainable lines, and thus days of hard but avoidable work.

> tip : It's often way easier to install a **newer** CMake release than wasting time learning and using legacy tricks.  

Documentation :

```cmake
cmake_minimum_required(VERSION <min>[...<max>] [FATAL_ERROR])
```

For instance :

```cmake
# This will trigger an error and stop if used with a cmake version < 3.1
cmake_minimum_required(VERSION 3.1)
```

Please note that the extra argument `FATAL_ERROR` was omited on purpose here, as it is accepted but ignored for CMake 2.6 and higher

### 1.3 Match your C++ standard version

CMake needs to know your compiler's options. I strongly advise you to use a CMake release that was released **after** your compiler.  
For instance, CMake 2.8 was released **before** C++11.

For instance :

| CMake standard | C++ standard support              |
| -------------- | --------------------------------- |
| CMake 2.8      | C++98                             |
| CMake 3.7.2    | C++98, C++11, C++14               |
| CMake 3.8.2    | C++98, C++11, C++14, C++17        |
| CMake 3.12.4   | C++98, C++11, C++14, C++17, C++20 |

### 1.4 - Make sure to read the good documentation

CMake has a lot of different versions.  
When checking the [documentation](https://cmake.org/documentation), make sure to read the matching one. There's a combo-box at the bottom of each page that allow you to select your matching release.

## 2 - Understand CMake stages

```log
Processing CMakeLists.txt
...
-- Configuring done
...
-- Generating done
...
<etc.>
```

What disturbed me the most when I used CMake at first, is that the same script file is processed multiple times, for multiple steps.  
`Configure` and `generate` steps both process CMakeLists.txt, executing `message(...)` instructions.

### Configure step

This step **parses** the sources tree, reading all CMakeLists.txt linked from top to bottom.  
It will create CMakeCache.txt files, filled with **cache variables**.

> tip : From the command line, `configure` and `generate` steps are combined.  
> These are complete when the `"-- Configuring done"` CMake message appears.

### Generate step

This step uses both informations from CMakeLists.txt and CMakeCache.txt files, to **generate** **native build tool** files.

> This is complete when the `"-- Generating done"` CMake message appears.

### Build step

On this step, the **native build tool** will build all the project's **targets**.

Take `my_fancy_target` for instance :

``` log
Scanning dependencies of target my_fancy_target
[ 50%] Building CXX object CMakeFiles/my_fancy_target.dir/my_fancy_target.cpp.o
[100%] Linking CXX executable my_fancy_target
[100%] Built target my_fancy_target
```

### Test step

Here is a step where `CTest` tool can be use to create a **test suite**, in order to run multiple executable files, and/or the same executable with different parameters.

This requires `enable_testing()` and `add_test(NAME <target> COMMAND <CMD_ARGS...>)`.

```cmake
cmake_minimum_required(VERSION 3.12.4)
project(demo)

# 3 tests binaries
add_executable(test_1 test_1.cpp)
add_executable(test_2 test_2.cpp)
add_executable(test_3 test_3.cpp)

enable_testing()

add_test(NAME test_1 COMMAND test_1)
add_test(NAME test_2 COMMAND test_2)
add_test(NAME test_calc_sum COMMAND test_calc_sum)

# assuming test_calc_sum <args...> expects (arg_1 + arg_2 == arg_3)
add_test(NAME test_calc_sum COMMAND test_calc_sum_1 2 1 3)
add_test(NAME test_calc_sum COMMAND test_calc_sum_2 40 2 42)
```

In the build destination directory, run `ctest` command.

```log
Test project /.../tests
    Start 1: test_1
1/5 Test #1: test_1 ...........................   Passed    0.00 sec
    Start 2: test_2
2/5 Test #1: test_2 ...........................   Passed    0.12 sec
    Start 3: test_calc_sum
3/5 Test #3: test_calc_sum ....................   Passed    0.00 sec
    Start 4: test_calc_sum_1
4/5 Test #4: test_calc_sum_1 ..................   Passed    0.01 sec
    Start 5: test_calc_sum_2
5/5 Test #5: test_calc_sum_2 ..................   Passed    0.01 sec

100% tests passed, 0 tests failed out of 5
```

### Install step

This final step basically copy each targets output files to specified directories, such like `include`, `bin`, etc., as described in its `install()` instruction.  

## 3 - CMake generator expression

CMake's [generator-expressions](https://cmake.org/cmake/help/latest/manual/cmake-generator-expressions.7.html) is a convenient way to introduce conditions in your scripts without code-bloat, such like platform-specifics, compiler-specifics, or configuration-specifics instructions.

However, quoting the documentation, CMake's generator-expressions are *"evaluated during **build system generation** to produce informations specifics to each build configuration"*.  
Meaning that during previous steps, these are not evaluated yet.  

For instance :

```cmake
add_library(my_library INTERFACE)
set(DEBUG_ONLY_PROPERTIES <...>)
set_target_properties(TARGET my_library
    PROPERTIES
    POSITION_INDEPENDENT_CODE TRUE
    $<$<CONFIG:DEBUG>:DEBUG_ONLY_PROPERTIES>
)
```

This works because generator-expressions `$<$<CONFIG:DEBUG>:DEBUG_ONLY_PROPERTIES>` is evaluated **before** `set_target_properties`.

On the contrary, these examples that use generator expressions **before** generator-expression evaluation are wrong :

```cmake
add_executable ($<$<CONFIG:DEBUG>:${PROJECT_NAME}_debug, ${PROJECT_NAME}_release> # wrong !
    <...> # sources files ...
)
set_target_properties(TARGET ${target_name}
    PROPERTIES
    POSITION_INDEPENDENT_CODE TRUE
    <...> # other properties
)
```

```log
1> [CMake] CMake Error at <...>\my_project\CMakeLists.txt:8 (add_executable):
1> [CMake]   The target name "$<$<CONFIG:DEBUG>:Test_CMake_debug," is reserved or not
1> [CMake]   valid for certain CMake features, such as generator expressions, and may
1> [CMake]   result in undefined behavior.
1> [CMake]
1> [CMake]
1> [CMake] CMake Error at <...>\my_project\CMakeLists.txt:12 (set_target_properties):
1> [CMake]   set_target_properties Can not find target to add properties to: TARGET
```

Printing messages using `message()` instruction produces a self-explanatory result :

```cmake
message(STATUS "$<$<CONFIG:DEBUG>:this_is_debug, this_is_release>")
```

```log
$<$<CONFIG:DEBUG>:this_is_debug, this_is_release>
```

## 4 - Debugging

### Print variable

I use this pattern to print variables, here `any_variable`.  
The extra enclosing brackets helps for extra spaces detection at both the beginning and the end of any variable's value.

```cmake
message(STATUS "any_variable=[${any_variable}]")
message(STATUS "! extra space here        ^") # for example purpose
```

```log
any_variable=[hello, world ]
! extra space here        ^
```

Also, I recently started using a CMake **module** that makes variables printing **way easier**, called [CMakePrintHelpers](https://cmake.org/cmake/help/v3.17/module/CMakePrintHelpers.html).

#### cmake_print_variables

**CMakePrintHelpers** module provides a convenient function that supports variadic arguments :

```doxygen
cmake_print_variables(var1 var2 ..  varN)
```

For instance :

```cmake
cmake_print_variables(CMAKE_C_COMPILER CMAKE_MAJOR_VERSION DOES_NOT_EXIST)
```

```log
-- CMAKE_C_COMPILER="/usr/bin/gcc" ; CMAKE_MAJOR_VERSION="2" ; DOES_NOT_EXIST=""
```

#### cmake_print_properties

But also allows per-target usage, which makes it really efficient :

```cmake
cmake_print_properties(TARGETS foo bar PROPERTIES
                       LOCATION INTERFACE_INCLUDE_DIRECTORIES)
```

> tip : Use `CMakePrintHelpers` (`cmake_print_variables`, `cmake_print_properties`) to print variables and targets properties.

### Tracing runs

#### Verbose

CMake supports an [verbose-mod option](https://cmake.org/cmake/help/v3.17/manual/cmake.1.html#build-tool-mode), `[--verbose, -v]`, which enable verbose output.  

#### trace

CMake provides few `--trace` options, to print a trace of all calls made and from where.

This will most likely generate **a tons** of **logs**.  
Thus, you may be willing to use `--trace-redirect="filename.ext"` to store this output into a file.  
This is also available for specific files, using `--trace-source=<filename.ext>`.  
To expand variables in this trace, `--trace-expand` is what you are looking for.

Another useful option is `--trace-format=<format>` that formats the output to `human` or `json-v1`. This is mint for external tools such like CIs or debuggers.

## 5 - Do not trust your variables

> tip : Use scopes !  
> tip : Never assume that variables have values you set it to.

Most, if not all, CMake variables ca be omitted or overriden with an environment or cache variables.  
Take the `verbose` option mentioned above for instance. According to the documentation :

> This option can be omitted if `VERBOSE` environment variable or `CMAKE_VERBOSE_MAKEFILE` cached variable is set.

This is why `scopes` matters so much. In particular, `PARENT_SCOPE` and `CACHE`.  
Have a look to the `set()` [documentation](https://cmake.org/cmake/help/latest/command/set.html).

```doxygen
set(<variable> <value>... [PARENT_SCOPE])
```

> "If the PARENT_SCOPE option is given the variable will be set in the scope above the current. Each new directory or function creates a new scope. This command will set the value of a variable into the parent directory or calling function (whichever is applicable to the case at hand). The previous state of the variable’s value stays the same in the current scope (e.g., if it was undefined before, it is still undefined and if it had a value, it is still that value)."

### Variables overriding

> tip : Don't do this !

Let's have a look to a self-explanatory, **error-prone pattern** I actually saw in production code few years ago :

top-level CMakelists.txt :

```cmake
set(CMAKE_BUILD_TYPE "top")
message(STATUS "Top-level CMakeLists.txt : CMAKE_BUILD_TYPE=[${CMAKE_BUILD_TYPE}]")
add_subdirectory(a_subdirectory)
message(STATUS "Top-level CMakeLists.txt : CMAKE_BUILD_TYPE=[${CMAKE_BUILD_TYPE}]")

<... add targets, libraries, executables, etc. ...>
```

subdirectory CMakelists.txt :

```cmake
message(STATUS "subdir-level CMakeLists.txt : CMAKE_BUILD_TYPE=[${CMAKE_BUILD_TYPE}]")
set(CMAKE_BUILD_TYPE "RELEASE" PARENT_SCOPE)
message(STATUS "subdir-level CMakeLists.txt : CMAKE_BUILD_TYPE=[${CMAKE_BUILD_TYPE}]")

<... add targets, libraries, etc. ...>
```

```log
1> [CMake] -- Top-level CMakeLists.txt : CMAKE_BUILD_TYPE=[Debug]
1> [CMake] -- subdir-level CMakeLists.txt : CMAKE_BUILD_TYPE=[Debug]
1> [CMake] -- subdir-level CMakeLists.txt : CMAKE_BUILD_TYPE=[Debug]
1> [CMake] -- Top-level CMakeLists.txt : CMAKE_BUILD_TYPE=[RELEASE]
```

As you can see, this is very dangerous. Not only the subdirectory CMakelists.txt did not get what seems to be the expected build type, but the top-level CMakelists.txt was polluted.

In fact, the example above was **even worst**, as for some obscure reasons, the scope `PARENT_SCOPE` was set using a variable !

```cmake
set(CMAKE_BUILD_TYPE "RELEASE" ${XX_VARIABLES_SCOPE})
```

### Options are better than cache variables

The `option()` instruction is the best way to provides an option that the user can optionally select. [Documentation here](https://cmake.org/cmake/help/v3.17/command/option.html).

In **legacy** CMake, we used to see :

```cmake
set(FOO true CACHE BOOL "description")
```

In **modern** CMake, we now can write :

```CMake
option(FOO "description" ON)
```

At first sight, the two snippets above seems to result in the same behavior ... but is it really the case ? No.

`option()` is more restrictive than `set()` : it allows only boolean values defaulted to `OFF`.  
What would append for instance if you are indeed execting a boolean value, and the user provide something else, like a `string` or a `list` ?

In fact, a `list` will most likely generate an error during the CMakeCache generation step.  
However, CMake allows `string` evaluation as a boolean.

### Options values are `booleans`

Let's have the following snippet for instance :  

```cmake
# An option `BUILD_SHARED_LIBRARIES` and a condition that evaluates it.

option(BUILD_SHARED_LIBRARIES "Build also shared libraries, or only statics ?" ON)

if (BUILD_SHARED_LIBRARIES)
   message(STATUS "Building shared libraries ...")
else ()
   message(STATUS "Building only static libraries ...")
endif()
```

| value (-D\<name\>=\<value\>) | output                                                                                        |
| ---------------------------- | --------------------------------------------------------------------------------------------- |
| SHARED                       | 1> [CMake] -- Building only static libraries ...                                              |
| True                         | 1> [CMake] -- Building shared libraries ...                                                   |
| A;B;C                        | 1> [CMake] CMake Error at <...>\CMakeLists.txt:10 (if):<br>if given arguments:<br>"A" "B" "C" |

Another issue is the CMake inconsistency when it comes to boolean values.  
Semantically, boolean values can only be `true` or `false`. But CMake is quite permissive :

| true values | false values |
| ----------- | ------------ |
| True        | false        |
| Yes         | No           |
| ON          | OFF          |

Also, all the above values, like most CMake variables and values, are **case-insensitive**.
And as mentioned before, `string` can be evaluated as booleans.

Options can even depends on each others, using the [CMakeDependentOption](https://cmake.org/cmake/help/v3.17/module/CMakeDependentOption.html#module:CMakeDependentOption) module.

```doxygen
CMAKE_DEPENDENT_OPTION(USE_FOO "Use Foo" ON
                       "USE_BAR;NOT USE_ZOT" OFF)
```

This module greatly **avoid code bloat** that previously existed using legacy CMake releases.

### Use CMake to list available options

> tip : Use `CMake -L`

Use `CMake -L[A][H]` to list available options for you, instead of reading the CMakeLists.txt or using some `grep` commands.  
Here is the output format :

```console
<name>:<type>=<value>
```

As mentioned before, make sure that the value matches the type.

Even better, as mentioned in this [stackoverflow post](https://stackoverflow.com/a/42945360) :

```console
cmake -LA | awk '{if(f)print} /-- Cache values/{f=1}'
```

Also, most CMake tools with GUIs provide way to show and edit these variables.

## 6 - Hardcode is evil

Avoiding use of hardcoded stuff is a **best practice** in most, if not all, programming and script languages.  
This is also the case for CMake.

### Always use absolute paths

Projects structure may change. Maybe not the one you are creating, but your external dependencies may.

CMake provides a bunch of variables to prevent relatives paths usage :

- CMAKE_BINARY_DIR
- CMAKE_SOURCE_DIR
- CMAKE_CURRENT_BINARY_DIR
- CMAKE_CURRENT_SOURCE_DIR

The two first are full paths to the top-level of the current CMake build tree, the two lasts are full paths to the directory that is currently being processed by cmake.

### Top-down variables pollution

As mentioned before, it is easy using CMake to produce unexpected behavior, when spreading values through subdirectories.

#### Compilers options

The [add_compiler_options](https://cmake.org/cmake/help/latest/command/add_compile_options.html) instruction will spread compilers options from the current directory and below.

A traditional usage of this is to handle compiler-specific options, when and **only when** there is not **idiomatic way** to add these.

For instance, compilers warning options :

```cmake
if (MSVC)
    add_compile_options(/W4 /WX)
else()
    add_compile_options(-Wall -Wextra -pedantic -Werror)
endif()
```

However, it's often better to add this options per-targets, and using generator-expressions.

```cmake
target_compile_options(my_library PRIVATE
     $<$<OR:$<CXX_COMPILER_ID:Clang>,$<CXX_COMPILER_ID:AppleClang>,$<CXX_COMPILER_ID:GNU>>: # Clang or GCC
          -Wall>
     $<$<CXX_COMPILER_ID:MSVC>: # MSVC
          /W4>
)
```

The snippet above may be improved using per-configuration specifications.

add_compile_definitions

#### Global directories

> tip : Do not use `include_directories` and `link_directories`

Many CMake scripts use `include_directories` and `link_directories` to add directories to those the compilers search for includes and librairies.

```cmake
set(my_sources_directory  some/path/to/sources)
set(my_includes_directory some/path/to/includes)

include_directories(${my_includes_directory})

add_library(my_lib SHARED ${my_sources_directory} ${my_includes_directory})
```

This is so wrong. CMake has many way to carry dependencies properly, instead of global directories pollution. We will see that in the nexts sections.

#### Sources paths

This is an execption to this section : hardcoded source paths are better than `file(GLOB_RECURSE <...>)`.

Let's say you have something like :

```cmake
file(GLOB_RECURSE MY_SOURCES
    src/*.cpp
    include/*.hpp
)
add_library(my_lib SHARED ${MY_SOURCES})
```

This is error-prone. Some files may remain in the source tree while being not compiled for instance. Or not compiled in this specific configuration, plateform, release, etc.

The following is safier, but increase the amount of lines :

```cmake
add_library(my_lib SHARED
    ${CMAKE_CURRENT_SOURCE_DIRECTORY}/src/file_1.cpp
    ${CMAKE_CURRENT_SOURCE_DIRECTORY}/src/file_1.hpp
    ${CMAKE_CURRENT_SOURCE_DIRECTORY}/src/file_2.cpp
    ${CMAKE_CURRENT_SOURCE_DIRECTORY}/src/file_2.hpp
    <...>
)
```

## 7 - Do not trust the documentation

> Tip : Also check for **unfixed issues**

There are many [unfixed open issues](https://gitlab.kitware.com/cmake/cmake/-/issues/) *(2800+ as I write this article)* that may prevent you from using **CMake** properly.

Such like :

- [INTERFACE_INCLUDE_DIRECTORIES does not allow non-existent directories, but INCLUDE_DIRECTORIES does](https://gitlab.kitware.com/cmake/cmake/issues/15052).
- [ExternalProject_Add fails when archive name is the same as target name](https://gitlab.kitware.com/cmake/cmake/-/issues/20600)

## 8 - Take care of dependencies

> tip : Utopically, only deal with your own dependencies.  
> tip : Use `FIND_PACKAGE` and/or `ExternalProject_Add` to use an external dependency.

Each target may have dependencies.  
Most likely, each library depends on third-party libraries, which may themselves depends on other third-parties, etc. This creates what we call the **dependency tree**.

Idealy, each dependency takes care of its own ones. Meaning that there is no need for the user to dig down the dependency tree to understand which component is missing.

Adding a new dependency should be as easier as using a `FIND_PACKAGE` or `ExternalProject_add` instruction. We will mention this last one later.

**Options** and **minimum CMake versions** are the only **requirements** the user should care of.  
However, this is not an utopia world, and some *(old ?)* libraries relies on manual actions, such like manual package installations, paths as mandatory options, etc.

### A study case : Boost

> tip : Use [FindBoost](https://cmake.org/cmake/help/latest/module/FindBoost.html) module using `FIND_PACKAGE(Boost)`

This is a common pattern : a C++ project that requires some of the **Boost** libraries.  
There is many way to do this, but only a good one.

Bad :

```cmake
set(boost_include_dir /path/to/boost/includes)
set(boost_library_dir /path/to/boost/libraries)

include_directories(boost_include_dir)
link_directories(boost_library_dir)
```

Bad :

```console
Even worst : set these variables as environment values.
```

This is so wrong.  
First, what append if the user needs multiple versions of **Boost** in the project ?  
Or what guarantee do we have that the paths even exist ?  
Also, this is polluating all of the subdirectories with potential unexpected values.

The good solution is to use the [FindBoost](https://cmake.org/cmake/help/latest/module/FindBoost.html) module using FIND_PACKAGE(Boost).  
As mentioned in the documentation, this will set all required variables.

Good :

```cmake
find_package(Boost
    1.65.1
    REQUIRED spirit <...>
)
```

Also, a quick tip : CMake provides a way to run the [find-package tool](https://cmake.org/cmake/help/latest/manual/cmake.1.html#run-the-find-package-tool) directly.

```console
cmake --find-package <package_name>
```

### A study case : Apache/httpd

Create a project that depends on Apache/httpd, I expected something like the following to work :

```cmake
add_executable(my_binary_target <... sources ...>)

FIND_PACKAGE(APACHE_HTTPD) # Attempt to find the package
IF(NOT APACHE_HTTPD)       # If not found, then create it using URL, GIT, etc.
    ExternalProject_add(APACHE_HTTPD
        <...>
    )
ENDIF()
add_dependencies(my_binary_target APACHE_HTTPD)
```

However, `ExternalProject_add` is not a complete solution here.

Have a look to [Apache/httpd's CMakeLists.txt](https://github.com/apache/httpd/blob/trunk/CMakeLists.txt) :

- At the beginning, it indeed use `FIND_PACKAGE` which is the good way to add external dependencies :

```cmake
FIND_PACKAGE(LibXml2)
FIND_PACKAGE(Lua51)
FIND_PACKAGE(OpenSSL)
FIND_PACKAGE(ZLIB)
FIND_PACKAGE(CURL)
```

- But then, for other dependencies that are also developed by Apache such like [APR](https://github.com/apache/apr) *(Apache Runtime)*, we end up with something quitehow unexpected :

```cmake
# Options for support libraries not supported by cmake-bundled FindFOO

# Default to using APR trunk (libapr-2.lib) if it exists in PREFIX/lib;
# otherwise, default to APR 1.x + APR-util 1.x
IF(EXISTS "${CMAKE_INSTALL_PREFIX}/lib/libapr-2.lib")
  SET(default_apr_libraries "${CMAKE_INSTALL_PREFIX}/lib/libapr-2.lib")
ELSEIF(EXISTS "${CMAKE_INSTALL_PREFIX}/lib/libapr-1.lib")
  SET(ldaplib "${CMAKE_INSTALL_PREFIX}/lib/apr_ldap-1.lib")
  IF(NOT EXISTS ${ldaplib})
    SET(ldaplib)
  ENDIF()
  SET(default_apr_libraries ${CMAKE_INSTALL_PREFIX}/lib/libapr-1.lib ${CMAKE_INSTALL_PREFIX}/lib/libaprutil-1.lib ${ldaplib})
ELSE()
  SET(default_apr_libraries)
ENDIF()
```

```cmake
SET(APR_INCLUDE_DIR "${CMAKE_INSTALL_PREFIX}/include" CACHE STRING "Directory with APR[-Util] include files")
SET(APR_LIBRARIES ${default_apr_libraries} CACHE STRING "APR libraries to link with")
```

```cmake
IF(NOT EXISTS "${APR_INCLUDE_DIR}/apr.h")
  MESSAGE(FATAL_ERROR "APR include directory ${APR_INCLUDE_DIR} is not correct.")
ENDIF()
FOREACH(onelib ${APR_LIBRARIES})
  IF(NOT EXISTS ${onelib})
    MESSAGE(FATAL_ERROR "APR library ${onelib} was not found.")
  ENDIF()
ENDFOREACH()
```

Which means that you need to manually provide `APR_INCLUDE_DIR`, as well as `APR_LIBRARIES` if  not already installed in `CMAKE_INSTALL_PREFIX`.

This should be a sufficient warning :

```cmake
PROJECT(HTTPD C)
CMAKE_MINIMUM_REQUIRED(VERSION 2.8)
```

The probleme is, as frustrating as it is, is that `httpd` DOES NOT manage all of its dependencies. And this is the same for the dependencies themselves.

A solution would then be :

```cmake
ExternalProject_add(APACHE_APR <...>)
ExternalProject_add(APACHE_HTTPD <...>)
add_dependencies(APACHE_HTTPD APACHE_APR)
```

But this leads to a bunch of missing symbols error. After a quick investigation, an option was missing :

```cmake
OPTION(APR_INSTALL_PRIVATE_H  "Install selected private .h files (for httpd)"  OFF)
```

Just like the `APR` case, the same pattern goes on for other dependencies.  
Again, this is both frustrating and a waste of time.

> tip : Create a `Apache_httpd.cmake` module that provides a complete `httpd` target, ready for including/linking.

### Create a clean dependency tree

> tip : Use `add_dependencies`

Many times, I saw CMakeLists.txt in production that required *"multiple run, as it crash sometimes for unknown reasons"*.

Feels like concurrency issue, right ? It is.  

Let's take a simple case for example :

- A custom library that is part of the project's solution
- An first external project that manage its own dependencies correctly
- A second external project that depends on the first one.  
*(see the previous section for instance)*

Bad : 

```cmake
add_library(library_1 <...>)

ExternalProject_add(library_2 <...>)

ExternalProject_Get_Property(INSTALL_DIR library_2)
list(APPEND library_3_CMAKE_ARGS "-Dlibrary_2_INCLUDEDIR=${INSTALL_DIR}/include")
list(APPEND library_3_CMAKE_ARGS "-Dlibrary_2_LIBDIR=${INSTALL_DIR}/libs")
list(APPEND library_3_CMAKE_ARGS "-Dlibrary_2_BINDIR=${INSTALL_DIR}/bin")

ExternalProject_add(library_3
    <...>
    CMAKE_ARGS ${library_3_CMAKE_ARGS}
)

add_executable(my_binary <...>)
add_target_dependency(my_binary library_1 my_library_3)
```

In this case, `library_1` is guaranteed to be ready when my_binary needs it.  
However, we have no guarantee that `library_2` is complete when `library_3` needs it.
`library_2` could still be in its `download step` for instance.

An easy way to fix this is :

```cmake
ExternalProject_add(library_3
    <...>
    DEPENDS library_2                 # Here we explicitly requires library_2
    INDEPENDENT_STEP_TARGETS DOWNLOAD # ... but not for the download step
)
```

An even more error-prone case is when a target relies on [include_directories](https://cmake.org/cmake/help/latest/command/include_directories.html) or [link_directories](https://cmake.org/cmake/help/latest/command/link_directories.html).

### Dependencies visualisation

CMake provides a way to generate [graphviz](https://www.graphviz.org/) diagrams of your dependency tree, using the [--graphviz=<file>](https://cmake.org/cmake/help/latest/module/CMakeGraphVizOptions.html) option.  
This is a great way to get the big picture of an existing projet dependency tree, in order to clean unexpected dependencies for instance.

```console
cmake --graphviz=foo.dot <...>
dot -Tpng -o foo.png foo.dot
```

## 9 - Generators matters

I noticed some minor differences in CMake scripts, dependening on [CMake generators](https://cmake.org/cmake/help/latest/manual/cmake-generators.7.html) requirements.

For instance, [Ninja](https://ninja-build.org/) as opposed to Unix makefile, requires the BUILD_BYPRODUCTS options of `ExternalProject_add` to be properly set, useless CMake will produce an error like :

```console
> No known rule to build <target_name> target
```

Also, [LINKS_DEPENDS](https://cmake.org/cmake/help/latest/prop_tgt/LINK_DEPENDS.html) property, which is mint to specify additional files on which a target binary depends for linking, is only supported by `Ninja` and `Makefile` generators.

## 10 - Use modules

Modern CMake enhanced modules usage, to partition and share useful functions and targets.

At the end of section 9, I mentioned a "Apache_httpd.cmake" module that download, build and install Apache's httpd with all of its dependencies.

> How to use modules ?

Take a `foo.cmake` for instance :

```cmake
function(foo_function)
  <commands>
endfunction()
```

This can be use this way in any other CMakeLists.txt, using [CMAKE_MODULE_PATH](https://cmake.org/cmake/help/latest/variable/CMAKE_MODULE_PATH.html) and [include()](https://cmake.org/cmake/help/latest/command/include.html) :

```cmake
list(APPEND CMAKE_MODULE_PATH ${CMAKE_SOURCE_DIR}/my_custom_cmake_modules/)
include(foo)

foo_function()
```

There is plenny of [available CMake modules](https://cmake.org/cmake/help/latest/manual/cmake-modules.7.html), just like [CMakePrintHelpers](https://cmake.org/cmake/help/latest/module/CMakePrintHelpers.html) and [CMakeDependentOption](https://cmake.org/cmake/help/latest/module/CMakeDependentOption.html) we mentioned before.

## 12 - Project's structure matters

A special attention must be paid to project's structure, and paths in general.  

During both build and install steps, files path may collide and result in an unexpected behavior.

For instance, multiple external projects may use installation paths like :

- `/usr/bin`
- `${INSTALL_DIR}/../`
- `${SOURCE_DIR}/install/`

Which is so much error-prone.

> Tip : Use [GNUInstalldir module](https://cmake.org/cmake/help/latest/module/GNUInstallDirs.html?highlight=gnuinstalldir) to handle installation paths.  
> Tip : Use a `${INSTALL_DIR}/<project_name>/3rd_party` directory to install your dependencies in.

## 13 - External projects importation

> Tip : Use `ExternalProject_*` to import external projects  
> Tip : Let CMake manage libraries prefix, suffix and extensions

### Filename suffix/prefix/extension

Does this looks familiar ?

```cmake
IF (UNIX)
    IF (CROSS_MINGW32)
        SET(MY_TARGETLIB_PREFIX "")
        SET(MY_TARGETLIB_SUFFIX ".dll")
    ELSE (CROSS_MINGW32)
        SET(MY_TARGETLIB_PREFIX "lib")
        SET(MY_TARGETLIB_SUFFIX ".so")
    ENDIF (CROSS_MINGW32)
ENDIF (UNIX)
```

Using [CMake variables](https://cmake.org/cmake/help/v3.0/manual/cmake-variables.7.html), we can write the following :

```cmake
${CMAKE_SHARED_LIBRARY_PREFIX}foo${CMAKE_SHARED_LIBRARY_SUFFIX}
```

Which may results in `foo.dll` on Windows, and `libfoo.so` on Linux.

### My "library import" pattern

Here is the pattern I use to import external projects, using [ExternalProject_add](https://cmake.org/cmake/help/v3.0/module/ExternalProject.html?highlight=externalproject_add).

All of my `import_<library_name>.cmake` modules actuall use it.

```cmake
set(ExternalComponentName foo)
set(${ExternalComponentName}_INSTALL_DIR ${CMAKE_INSTALL_PREFIX}/3rd_party/${ExternalComponentName})

list(APPEND ${ExternalComponentName}_external_CMAKE_ARGS
    "-DCMAKE_INSTALL_PREFIX=${${ExternalComponentName}_INSTALL_DIR}"
    # <.. other CMAKE_ARGS ...>
)
### Libraries
# Raw names
list(APPEND ${ExternalComponentName}_external_LIBS_RAW_NAMES
    lib${ExternalComponentName}
    # <.. other output librairies ...>
)
# Static librairies paths
list(TRANSFORM ${ExternalComponentName}_external_LIBS_RAW_NAMES
    REPLACE "^(.+)$"
    "${${ExternalComponentName}_INSTALL_DIR}/${CMAKE_INSTALL_LIBDIR}/${CMAKE_STATIC_LIBRARY_PREFIX}\\1${CMAKE_STATIC_LIBRARY_SUFFIX}"
    OUTPUT_VARIABLE  ${ExternalComponentName}_external_STATIC_LIBS_PATHS
)
# Dynamic librairies paths
list(TRANSFORM ${ExternalComponentName}_external_LIBS_RAW_NAMES
    REPLACE "^(.+)$"
    "${${ExternalComponentName}_INSTALL_DIR}/${CMAKE_INSTALL_BINDIR}/${CMAKE_SHARED_LIBRARY_PREFIX}\\1${CMAKE_SHARED_LIBRARY_SUFFIX}"
    OUTPUT_VARIABLE  ${ExternalComponentName}_external_SHARED_LIBS_PATHS
)
# Products
list(APPEND ${ExternalComponentName}_external_BUILD_BYPRODUCTS_ARGS
    ${${ExternalComponentName}_INSTALL_DIR}/include
    ${${ExternalComponentName}_external_STATIC_LIBS_PATHS}
    ${${ExternalComponentName}_external_SHARED_LIBS_PATHS}
)

ExternalProject_Add(${ExternalComponentName}_external

    # DEPENDS                <... dependencies ...>
    INDEPENDENT_STEP_TARGETS DOWNLOAD

    # Use URL, GIT, SVN, etc.
    URL          <... url ...>.tar.gz
    URL_HASH     SHA256=<... sha256 ...> 

    PREFIX       ${ExternalProject_PREFIX}

    # boiler plate
    TMP_DIR      ${ExternalProject_PREFIX}/ExternalProject_BoilerPlate/${ExternalComponentName}/tmp
    STAMP_DIR    ${ExternalProject_PREFIX}/ExternalProject_BoilerPlate/${ExternalComponentName}/stamp
    DOWNLOAD_DIR ${ExternalProject_PREFIX}/ExternalProject_BoilerPlate/${ExternalComponentName}/download
    SOURCE_DIR   ${ExternalProject_PREFIX}/ExternalProject_BoilerPlate/${ExternalComponentName}/source
    BINARY_DIR   ${ExternalProject_PREFIX}/ExternalProject_BoilerPlate/${ExternalComponentName}/binary
    # installation
    INSTALL_DIR  ${${ExternalComponentName}_INSTALL_DIR}
    CMAKE_ARGS   ${${ExternalComponentName}_external_CMAKE_ARGS}
    # ninja specific
    BUILD_BYPRODUCTS ${${ExternalComponentName}_external_BUILD_BYPRODUCTS_ARGS}
)
ExternalProject_Get_Property(${ExternalComponentName}_external INSTALL_DIR)
if (NOT EXISTS ${INSTALL_DIR}/include/)
    file(MAKE_DIRECTORY ${INSTALL_DIR}/include/) # hack to fix https://gitlab.kitware.com/cmake/cmake/issues/15052
endif()

add_library(${ExternalComponentName} INTERFACE)
# target_link_libraries(${ExternalComponentName} INTERFACE <... dependencies ...>)
add_dependencies(${ExternalComponentName} ${ExternalComponentName}_external)
message(STATUS " - ${ExternalComponentName} : Processing output libraries ...")
# CMake 3.17 : ZIP_LISTS
# foreach(raw_name static_library_name shared_library_name
#     IN ZIP_LISTS
#     ${ExternalComponentName}_external_LIBS_RAW_NAMES
#     ${ExternalComponentName}_external_STATIC_LIBS_PATHS
#     ${ExternalComponentName}_external_SHARED_LIBS_PATHS
# )
# Previous CMake release :
LIST(LENGTH ${ExternalComponentName}_external_LIBS_RAW_NAMES libraries_count)
MATH(EXPR libraries_count "${libraries_count} - 1")
FOREACH (library_it RANGE ${libraries_count})
    LIST(GET ${ExternalComponentName}_external_LIBS_RAW_NAMES    ${library_it} raw_name)
    LIST(GET ${ExternalComponentName}_external_STATIC_LIBS_PATHS ${library_it} static_library_name)
    LIST(GET ${ExternalComponentName}_external_SHARED_LIBS_PATHS ${library_it} shared_library_name)

    set(library_name ${ExternalComponentName}::${raw_name})
    message(STATUS "   - ${library_name} : ${shared_library_name} => ${static_library_name}")

    add_library(${library_name} SHARED IMPORTED)
    set_target_properties(${library_name} PROPERTIES
        IMPORTED_IMPLIB                 ${static_library_name} 
        IMPORTED_LOCATION               ${shared_library_name}
        INTERFACE_INCLUDE_DIRECTORIES   ${INSTALL_DIR}/include/
    )
    add_dependencies(${library_name} ${ExternalComponentName}_external)

    target_link_libraries(${ExternalComponentName} INTERFACE ${library_name})
    add_dependencies(${ExternalComponentName} ${library_name})
endforeach()
```

Time to make a module from this ?

### Explaination

The purpose of this pattern is to add an external project as one and only target, no matter how many librarires it contains. It relies on `ExternalProject_Add` and `GNUInstallDir` CMake modules.

Of course, this is not bullet-proof, especially when it comes to libraries naming conventions. But it works for most, if not all, **modern CMake** third parties I used so far.

Also, this can be simplified if the external project only produce one library. Just remove `LIST`s and `foreach-loops` to do so.

There are four steps here that requires more than a simple *copy and paste* :

- Set the target's **name**. *Here, `foo`*.
- Set the external project's **CMake arguments**.
- List all **libraries** generated by the project you want add to your target.
- The project's source *(`URL`, `GIT`, `SVN`, ...)*

Now, we can imagine something like the following :

```cmake
FUNCTION(import_any_project
    target_name                     # string
    target_librairies_list          # list
    project_source_arguments_list   # list
    CMakeArgs                       # list (optional)
)
    string (REPLACE ";" " " source_args "${project_source_arguments_list}")

    # Importation parttern ...
    set(ExternalComponentName ${target_name})
    set(${ExternalComponentName}_INSTALL_DIR ${CMAKE_INSTALL_PREFIX}/3rd_party/${ExternalComponentName})

    list(APPEND ${ExternalComponentName}_external_CMAKE_ARGS ${CMakeArgs})
    # etc ... (see above, previous section)

endfunction()
```

And then :

```cmake
FIND_PACKAGE(Foo
    COMPONENTs
        Foo::component_1
        Foo::component_2
)

LIST(APPEND components_list
    component_1
    component_2
)
LIST(APPEND source_arguments_list
    URL          <... url ...>.tar.gz
    URL_HASH     SHA256=<... sha256 ...> 
)

IF (NOT Foo_FOUND)
    import_any_project(Foo
        ${components_list}
        ${source_arguments_list}
    )
ENDIF()

# use target `Foo`
```

As mentioned above, this is no silver-bullet nor bullet-proof. But it actually do the job all cases I tested it.

## Bonus : CMake dependency management module

After typing this article, I found out this morning during my daily check of reddit.com/r/cpp 's thread a project called [CPM](https://github.com/TheLartians/CPM.cmake), for **CMake Dependency Management**.  
Its syntax is close to `ExternalProject_add`, with a much smaller codebloat, which makes it interesting.

To quote the author, this module is a wrapper built around the [FetchContent](https://cmake.org/cmake/help/latest/module/FetchContent.html) CMake module.

The main difference between `FetchContent` and `ExternalProject_add` is when the download step occurs. `ExternalProject_Add` downloads at **build time**, while the `FetchContent` module makes content **available immediately**, allowing the **configure step** to use the content for its commands.

## Bonus : MS Visual Studio cross-plateform

MS Visual Studio and CMake synergize pretty well.

### Cross-configuration, cross-plateform

Using the "Manage configuration" panel, the user is able to create many configurations that will match its needs.

In combination with the "cross-platform" management *(Debug > Options > Cross Platform)*, you can create any platform/architecture/build-type/Cmake-options/options combinaison.

These are stored into a `CMakeSettings.json` file.

For instance, I use to create the following configurations :

- Local Windows 10, x64, debug, msvc_x64_x64
- Local Windows 10, x64, release, msvc_x64_x64
- Local Windows 10, x64, debug, clang_x64
- Local Windows 10, x64, release, clang_x64
- Remote Fedora 32, x64, debug, GCC 10
- Remote Fedora 32, x64, release, GCC 10
- Local Ubuntu 18_04 docker container, x64, debug, GCC 7.4
- Local Ubuntu 18_04 docker container, x64, release, GCC 7.4
- Local Ubuntu 18_04 docker container, x64, debug, Clang 6
- Local Ubuntu 18_04 docker container, x64, release, Clang 6

This way, I save a **huge** amount of time.  
In few clicks, and **no command line**, I am able to select a configuration, build and run my project.  
This is especially handy when its comes to debug, as Visual Studio handles remote debug session through SSH.

One tool to rules them all ?

## Conclusion

I hope you enjoyed reading this article.

*As you surely noticed, English is not my mother tongue, and I'd like to apologize for the lack of grammar and vocabulary.*

Anyway, I wish you a great experience using CMake.  
I wish that some tips above will soften the pain. =)

Sincerely,  
Guillaume Dua.
