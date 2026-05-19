---
layout: post
title: "Trip Report - CPPP 2021"
sitemap: true
description: >
  My trip report for the CPPP 2021 C++ conference
tags: [ cpp, trip-report, cppp, conference ]
gist_url: https://gist.github.com/GuillaumeDua/f1884df852fc99e4df258c8d404e844f
gist_date: "May 5, 2022"
---

|            |                          |
| ---------- | ------------------------ |
| Author     | Guillaume Dua            |
| Event date | 12/01/2021 - 12/03/2021  |
| Update     | 05/05/2022 (video links) |

> 📝 **Disclaimer**: I do not own the slides featured in this report for illustration purpose :  
> they belong to the speaker(s), his/her/their company or are under specific licenses.

This document is also available in [PDF here](https://gist.github.com/GuillaumeDua/f1884df852fc99e4df258c8d404e844f#file-cppp2021-trip-report-pdf) and for [downloading here](https://gist.github.com/GuillaumeDua/f1884df852fc99e4df258c8d404e844f/raw/4e6e87b880271afbca2232a54fc43f56b804cf00/CPPP2021%2520-%2520trip%2520report.pdf).

---

- TOC
{:toc}

## An international C++ Conference, with a hint of French accent

As [CPPP 2021](https://cppp.fr/) just ended, my feeling right now writing those lines is : what a great vintage !  
Just like wine, it taste ever better after a year stored in a cellar.  
It certainly hasn't escaped your notice, CPPP 2020 never happened because of covid pandemic.
However, this was certainly for the best because this conference came back with a lot of new things that I really enjoyed.

What are those new features ?

- First of all, it took place remotely, using a hybrid of **Discord** and **Zoom**.  
  It should be emphasized that remote conferencing has a huge advantage in bringing together people who might not otherwise be able to attend, for example due to travel duration/costs or health conditions.
  - [Discord](https://discord.com/) - because it feels so modern & ergonomic - became the last past years my favorite tool for gaming of course, but also for meetups, conferences, debates, and tchat with the C++ community.
  - [Zoom](https://zoom.us/) is really handy for scheduled events - like conferences and speeches - as it only requires users to click on a static link.
- Introducing slots in the schedule, dedicated to discussion & various debates.  
  From my point of view, many conferences lack this: as participants, the role of spectators is de-facto a passive one. Providing the opportunity to proactively share opinions, techniques and ideas in general was great; *but also to confront these with different points of view*.
- Last but not least, named/themed tracks : "Progress", "Produce", and "Push forward", which really helped to forcast the most appropriated content according to some balance : *"What I wanna learn?"* vs. *"What I need for my daily job"*.

What missed ?

- No one escaped it: there was a desperate lack of gourmet buffet - *in comparison of the 2019 edition* -, full of fine & tasty French food.  
  However, peoples shared a lot of picture of croissants and other pastries.  
  *(Ask any French what's a "pain au chocolat" comparing to a "chocolatine", and expect a long answer - don't want to take sides in this).*

As the [schedule](https://cppp.fr/schedule2021/) was really appealing, and like many other conference, I suffered from that one may refer as the fear-of-miss, or *"To choose is to renounce"* syndrom. However, I'm sure that the organizers will upload videos soon enough on the [CPPP Youtube channel](https://www.youtube.com/channel/UChti8oyWC3oW91LpfZ2bmSQ).

## 📅 Day 1 - 12/01/2021

### 🗣️ **Fred Tingaud - *"Welcome message"***

After warmly welcoming the public, Fred - *being the main organizer* - underlined few points that best picture the spirit of the CPPP conference :

- Everybody has something to teach to others, even beginners (about C++, tools, etc.)
- We are at the start of C++ (online) conferences, and at some point we'll reach the maturity so the efficiency of knowledge sharing is optimal
- This conference - *like many others* - is under the Berlin code of conduct, and a team were dedicated to help on that.

Before thanking the sponsors, the speaker also talked about how inclusivity and discrimination are what we should all be concerned about, alluding to a discussion scheduled on day 2.

Finally, registrations for the lightning talks have opened, and the first day's main event started.

### 🗣️ **Matt Godbolt - *"C++'s superpower"***

|          |                                                           |
| -------- | --------------------------------------------------------- |
| 📝 Slides | [link](https://github.com/mattgodbolt/cppp-fr-superpower) |
| 🎞️ Video  | [link](https://www.youtube.com/watch?v=0_UttFDnV3k)       |

For the main event of this first day, Matt gave a very nice talk on refactoring techniques, giving feedbacks on how he manages to convert a (very) old C project into post-modern C ++, and what challenges did he face, and how he managed to overcome them.  
What strikes me each time is how communicative his state of mind is: bringing motivation, passion and willingness to share with others `<3`.

---

What could C++'s superpowers be ?

- Ubiquity : it's everywhere and makes the world work
- Performance: not necessarily fast (depends on implementation details), but we can write at several levels up to assembly, precise memory management
- Multi-paradigm  
  *(procedural, functional, OOP, and everything in-between : No need to choose, you can mix as much as you want)*
- Clean objects lifetime  
  *(Mostly thanks to the RAII idiom)*

What C++'s superpowers surely aren't ? (**cryptonite** of C++)

- Undefined behavior
- Wrong defaults  
  *(some confusing synthaxes, explicit/implicit constructors, etc.)*
- Legacy support
- Confusing syntaxes

However, we must stress that the combination of erroneous defaults and legacy support gives us backward compatibility.

---

**What** is Matt's goal ?

- Take a 25 years-old codebase
  *of a game that he really loves, and played a lot*
- Port to modern C++ *(C++17)*
- Do this incrementally (no need to completely rewrite the project, almost line by line)

**Why** : About the project itself

First of all, it's a [MUD](https://fr.wikipedia.org/wiki/Multi-user_dungeon#:~:text=Un%20multi%2Duser%20dungeon%2C%20plus,personnages%20dans%20un%20monde%20virtuel.) : a multi-player dungeon, which can be defined as the ancestor of modern MMORPGs.  
*I loved that idea, because years ago ago (back in school) I had such a great time creating one (in C).*
The one he picked is called **Xania**, and the project is already available [here on Github](https://github.com/mattgodbolt/xania).  
Why this one ? Matt admitted he spent about 3 years playing it at university.  
If you want to give it a try, the beta's open - *using TelNet of course* - `mud.xania.org 9000`.

What basically the **challenge** is ?

- Dig into a pile of old hard-drives to find source code
- Take a mostly C-written (>50k lines) project, with just little pieces of C++ code  
  *Taking into account that C was not the best choice for such project at first*
- That is not much more than a giant text processor

What's the **groundwork** ?

- Git : wanna be able to revert changes back in time, not break everything, etc.
- CMake to build the project
- Clang-format : formatted all the codebase  
  *(as many peoples worked on this one, with different styles)*
- Enable all compiler's warnings (`-Wall -Wextra -fsanitize= ALL`)
- Add Conan  
  *As this paquet/dependency manager works well with CMake*
  - And several useful dependencies :
    - [Catch2](https://github.com/catchorg/Catch2) for testing
    - [fmt](https://github.com/fmtlib/fmt) for formatting  
      *(`std::format` is only available in C++20)*
    - [range-v3](https://github.com/ericniebler/range-v3) for ranges manipulation
- Run & test !

What the **process of C++-i-fication** is ?

First, renaming files :

```bash
rename .c .cpp *.c
rename .h .hpp *.h
ninja
```

... which did not work : not all C programs are valid C++ programs !

- In C++, `class` is a keyword (`struct char_data{ int class; };` does not compile)
- Same for `template`, etc.

**How** : The work process : it's all about incremental changes

- Do small changes
- Build, run, test (mostly manually)
- Leave TODOs
- *... and do it again*

**How** : About Techniques

- [TDD](https://fr.wikipedia.org/wiki/Test_driven_development) : Test driven development
  - Testing with zero, one, and many elements
  - Testing boundaries
- `CEDD` : Compiler-error-driven-development  
- `JRIASWHDD` : *"Just run it and see what's happening"*

**How** : to improve the code ?

- Hand-rolled linked list
- Make as many mutable values const as possible
- Convert C-style strings into `std::string` in case they own the memory area they refer to
- Remove unecessary `typedef`s (`typedef struct ...`)
- Get rid of global variables
- Set appropriate encapsulation for classes members  
  *as everything have public visibility in C-`struct`s*

**How** : About **STL-i-fication**

- Convert linked lists into `std::vector`s
  However, if pointers/adresses stability is required, then use `std::vector<std::unique_ptr>`

**How** : **Class-i-fy**

- Convert C-`struct`s into `class`
- Set encapsulation so members are private everytime it's possible
- Move functionalities, by converting related free functions into member-functions  
  *(proper declaration scope)*

**How-to** : Modernisation of strings manipulations

- Fmt library
- `std::string_view`
- Range-v3

---

**What** topics were not covered by the talk ?

- strong-types & enums
- bit fields enums
- `std::function`
- `std::optional`
- `std::variant`

What's interesting so far, is that Matt also mentioned a bunch of **regrets** he has about this project :

- Spending more time on this talk rather than on the codebase itself
- Not using fuzzing techniques to increase test coverage (like [libfuzzer](https://llvm.org/docs/LibFuzzer.html) for instance)
- Many `TODO : unglobalisation` remaining
- Not targeting `C++20` for now

**What** helped along the process of refactoring ?

- Compilers warnings
- Sanitizers
  *"You should definitly run your tests with some sanitiser !"*
- `CEDD` & `TDD` (ish)
- Backwards compatiblity !

**What** are the benefits of modernising your code ?

- Easier to find & fix bugs
- Get a more understandable, thus maintainable code
- Keep coders happy -> use latest standard, not trapped in old-style coded code
- Incremental changes keep the management happy

*Ready to change yours ?*

### Lunch break - rounds tables

During the lunch break, three rounds-rables were available to discuss about very interesting topics :

- Rule for coding rules
- Code reviews dos and don'ts
- What do you like about C++ ?

However ... well I am French so I went AFK to cook a good meal that I enjoyed with the one I love 😋. Yes this is a cliché indeed.

### 🗣️ **Victor Ciura - *"Exceptional C++"***

|         |                                                     |
| ------- | --------------------------------------------------- |
| 🎞️ Video | [link](https://www.youtube.com/watch?v=PSgY2ZLSrY0) |

As I already saw the great talk from [Andreas Fertig](https://andreasfertig.info/) about how concepts can improve template programming about 3 weeks ago at [Meeting CPP 2021](https://meetingcpp.com/2021/),  
I chosed this time to attend Victor's about handling unexpected scenarios - *to get an overview of such topic, I hardly know anything about*.

**What** is this talk about ?

- **Exception internals**.  
  What are basic functionalities & components involved in building exceptions and orchestrating the workflow when exception occurs.

This talk, *if very Windows-oriented*, was not intended to discuss *"exceptions vs. error codes"*,  
but to detail what the [SEH](https://docs.microsoft.com/fr-fr/cpp/cpp/structured-exception-handling-c-cpp?view=msvc-170) (Structured Exception Handling) machinery is, and why as C++ developers we should care about;  
as C++ exceptions are built on-top of this - despite the compiler does all the bookkeeping work.

The speaker mentioned [P0881 std::stacktrace](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2020/p0881r7.html), highlighting the following points of interest:

- This is the first major library features voted, embedded in C++23
- [std::stacktrace_entry](https://en.cppreference.com/w/cpp/utility/stacktrace_entry) provides context informations like
  - description
  - source_file + source_line
  - etc.

- ```cpp
  auto trace = basic_stactrace::current();
  for (stacktrace_entry frame : trace)
      std::cerr << frame; // or std::to_string(frame)
  ```

What does SEH synthax looks like ?

```cpp
__try {
    int * p = nullptr;
    *p = 5;
}
__except(ExceptionFilter(GetExceptionInformation())) // the compiler take care of the boilerplate
```

SEH's game changer is how such a feature provides opportunities to react, reclaim, and regain control after some UBs.  
What Victor mentioned, is that UBs are not undefined-behaviors anymore if we well-defined interruption handlers, so the OS gives us proper SEH.  
Here, Windows give us a convenient way to inspect the execution context with snapshots that contains context datas *(register data in the CPU, etc.)*.

---

**Why** are we bothering to understand all this ?

- C++ exceptions are built on top of SEH machinery
- The compiler does all the bookkeeping work
- You may have already experienced this while using the Visual Studio debugger

**How** does the compiler maps C++ exception to SEH ?

| C++                        | SEH                  |
| -------------------------- | -------------------- |
| `throw`                    | RaiseException       |
| `try` `catch`              | `__try` `__except`   |
| local variable destruction | `__try`  `__finally` |
| `_CxxFrameHandler()`       | `_except_handler()`  |

> ... or even backward : mapping SEH into C++ typed exception *(using translator exceptions, per thread)*

### 🗣️ **Arno Schoedl - *Rvalue lifetime disasters***

|         |                                                     |
| ------- | --------------------------------------------------- |
| 🎞️ Video | [link](https://www.youtube.com/watch?v=XXsZBZjzS-E) |

After a quick reminder of what values, move semantics, and universal references are,  
Arno mentioned common pitfalls about the `move-semantic`.

**Pitfalls :**

- **NRVO** (named return value optimization) - [copy/move elided](https://en.cppreference.com/w/cpp/language/copy_elision)
- `std::move` can make things worst
- No NRVO in case of const values (becomes a copy), if-branches, or when returning member-variable of non-rvalue object value

**Recommendations :**

- return values non-const
- Use Clang warning [-Wmove](https://clang.llvm.org/docs/DiagnosticsReference.html#wmove)

**About** temporary lifetime extension and rvalues, the speakers underlined multiples way to get dangling references - especially when rvalues-references implicitly become const lvalue-references, just like in the example below :

```cpp
bool operator<(A const &, A const &);
struct C {
  A getA() const &;
} c1, c2;
auto const & a = std::min(c1.getA(), c2.getA());  // `std::min` forgets about rvalue-ness
                                                  // thus `a` dangles
```

To fix this, using universal-references for algorithm parameters can be a way,  
however, because of reference collapsing on the return type, the result would still dangle (because the value expired).  

The key-point here is that temporary lifetime extension does not keep rvalue references alive, thus one may want to consider creating a copy instead.

**auto vs decltype(auto)** : Which to use when returning lifetime-extended variables ?

```cpp
/* ??? */ foo() {
  auto const & a = some_A();
  // ...
  return a;
}
```

- `decltype(auto)` : create a dangling reference, if `some_A()` returns a value
- `auto` : always copy

✨After such analysis, Arno then suggested that **temporary lifetime extension should be deprecate**,  
and that we should - *as developers* - automatically delare variables either :

- `auto` if constructed from value or rvalue-reference
- `auto const &` if constructed from lvalue-reference

✨ To solve this problem, the speaker proposed an implementation of an `auto_cref` macro which produces such behavior.

**About** what Arno calls the *"RValue amnesia"* issue

- `const &` binds to anything, including rvalues

To best explain such concept, the speaker demonstrated it using conditional operators :

```cpp
struct A;
A const& L();
A const&& R();

decltype(false ? L() : L()) // A const &
decltype(false ? R() : R()) // A const &&
decltype(false ? R() : L()) // A const (C++ forces a copy here)
```

C++20's `std::common_reference` is a new trait, invented for C++20 ranges.  
However, it does not seem to fix such issue, yet embraces rvalue amnesia :

```cpp
std::common_reference_t<A const &, A const&>;   // A const &
std::common_reference_t<A const &&, A const&&>; // A const &&
std::common_reference_t<A const &&, A const&>;  // A const &
std::common_reference_t<A const, A const&>;     // A (!!!)
```

```cpp
A const & getA() const && = delete;
```

✨ Arno's idea : temporary lifetime extension should be deprecated
New behavior :

- You **should not** be able to bind lvalue from rvalue  
  *(and `const &` should not have bound to `rvalues` in the first place)*,  
  as it expands lifetime from short to long one

### 🗣️ **Jules Penuchot - *"ctbench: compile-time benchmarking for Clang"***

|          |                                                     |
| -------- | --------------------------------------------------- |
| 📝 Slides | link                                                |
| 🎞️ Video  | [link](https://www.youtube.com/watch?v=1RZY6skM0Rc) |

For this session, Jules presented an amazing, truly thrilling talk about `ctbench`, a tool he developed and which is already available [here on github](https://github.com/JPenuchot/ctbench).  
Also, if you feel interested in, there are plenny of examples available in [this repository](https://github.com/JPenuchot/rule-of-cheese/).

**What** is `ctbench` ?

- A set of tools for compile-time benchmarking and analysing datas with Clang.

Here is a more precise definition extracted from the project's README :

> Set of tools for comprehensive benchmarks based on clang's time-trace feature.
>
> `ctbench` allows you to declare and generate compile-time benchmark batches for given ranges, run them, aggregate time-trace reports, and plot them. This allows you to get more comprehensive data than just compiler runtime or single-size flame graphs.
>
> `ctbench` was made to fit the needs of scientific data collection and analysis, thus it is not a one-shot profiler, but a set of tools that allow you to get reproductible data from user-defined compile-time benchmarks.

---

**Why** `ctbench` ?

The speaker made the following statement : metaprogramming is evolving, fast.  
This refers to a lot of things, for instance :

- Existing libraries
  - Boost.Mpl
  - Boost.Fusion
  - Boost.Hana
  - Boost.Mp11,
  - Brigand
  - That bunch of code snippets everybody own
- The C++ core-language and standard library, with features which are already available :
  - type traits
  - constexpr specifiers
  - if-constexpr
  - more constexpr containers in C++20
- But also incoming features, like the one those proposal are about :
  - [reflection proposal p0194](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2017/p0194r3.html)
  - [metaprogramming proposal p2237](https://github.com/cplusplus/papers/issues/937)

At this declaration, Jules continues with a vast question :

- Might C++ finally get a proper metaprogramning API ?

Currently, many libraries heavily relies on template-metaprogramming, like :

- [Eigen](https://eigen.tuxfamily.org/index.php?title=Main_Page),  
  *A C++ template library for linear algebra: matrices, vectors, numerical solvers, and related algorithms.*
- [Blaze](https://bitbucket.org/blaze-lib/blaze/src/master/),  
  *A High-performance C++ math library for dense and sparse arithmetic, initiated and mainly developed by [Klaus Igleberger](https://de.linkedin.com/in/klaus-iglberger-2133694).*
- [CTRE](https://github.com/hanickadot/compile-time-regular-expressions)  
  *A Library for compile-time regex expression, which generates a FSA (finite-state automaton) at compile-time to process either ct or run-time datas.*  
  *(That the author, **Hana Dusíková** presented during an amazing talk at CPPP-2019, available [right here](https://www.youtube.com/watch?v=i7H5TSVJy0Y))*
- [CTPG](https://github.com/peter-winter/ctpg),  
  *A library that takes a language description as a C++ code and turns it into a LR1 table parser with a deterministic finite automaton lexical analyzer, all in compile time.  
  What's more, the generated parser is actually itself capable of parsing in compile time.  
  (like `yakk` or `bison` into your compiler)*

- > Are we going toward compile-time compilers ?

**Is** all of this a good thing ? Sure ! As we get :

- Better **eDSL** *(embedded domain-specific languages)*
  - Which makes C++ libraries easier to interact with, for non C++-savvy audiences
- Metaprograms that **scale** better
  - Better performing tools and more regular project management
- Make metaprograming **mainstream**
  - Which brings more peoples to the table for contributing

**What** is the problematic then ?

- Metaprogramming lack tools : debuggers, profilers, etc.

**How** to measure compile times ?

- [Templight](https://github.com/mikael-s-persson/templight)
  - Drop-in replacement for clang
  - measure time & memory usage of template instanciations
  - interactive debugging
  - mostly a one-shot profiler
  - templatelight-tool provide several conversion options (graphivz, xml, etc.)
- [Metabench](https://github.com/ldionne/metabench)
  - framework + compile time benchmarks for librairies
  - generates benchmarks of different sizes using Ruby template (ERB)
  - black-box approach (only measures compiler execution time)
  - support all compilers (not just clang)
  - nice web export function
  - > kinda hard to use, as this is a framework and not a library
- [build-bench](https://www.build-bench.com/)
  - simple web interface
  - black-box approach (no details)
  - supports all compilers
  - make it easy to compare one-shot benchmarks
  - make per-compiler comparisons possible
  - > nice to play with, but not extensive enough
- **Clang time-trace** *(`-ftime-trace`)*
  - code-aware profiler provided by clang
  - output flame graph JSON files for chrome://tracing
  - breaks down compile passes for **every symbol**
  - works for the frontend **and** the backend
  - > very strong reuse potential, available everywhere
- **Clang build analyser**
  - built on-top of time-trace
  - provides a user-friendly interface

---

**What** about [ctbench](https://github.com/JPenuchot/ctbench) then ?

- compile-time benchmarking & data analysis tool for clang
- built on-top of time-trace
- repeatability & accuracy in mind
- variable size benchmarks
- C++ developpers friendly
  - C++ only benchmark files
  - CMake API
  - JSON config files (with a few ones already provided)

**How** does ctbench works ? About `ctbench` methodology

- benchmark `set`
  - collection of benchmark cases to compare
- benchmark `case`
  - compilable C++ file
  - compiled several times for a given **range of sizes**
  - benchmark iteration size passwed as a preprocessor define
- benchmark `iteration`
  - terminology for a benchmark case compiled with a given size
  - several samples for each iteration size for improved accuracy
- Sample
  - one time-trace file

**Example** : To best picture this, Jules provided some example/demo :

- Benchmark case : sum values implementation *(recursive vs. fold-expression implementations)*
- CMake API
  - declare benchmarks : `ctbench_add_benchmark`
  - graph : `ctbench_add_graph`
- JSON configurations
  - graph options
    - plotter
    - output file format (Gnuplot based using Sciplot)
    - other plotter-specific graph options
  - data options
    - define named data groups
    - implement predicated to target specific data
    - predicates : regex matching, json inclusion matching, logical operators
  - > pre-made configurations available

> need ninja -j1 so no parallelisation are made

---

**Rule** of thumb : ordering of compile-time impact for several meta-programming techniques

- **Expensive**
  - SFINAE
  - instantiating a function template
  - instantiating a type
  - Calling an alias
  - adding a parameter to a type
  - adding a parameter to an alias
- **Cheap**
  - looking up a memorized type

To conclude the demonstrations, the speaker highlighted pressure on frontend and backend using the following test scenario :

- Comparing `std::enable_if` vs. `std::enable_if_t` vs. `requires-clause` vs. `if-constexpr`

  ![`std::enable_if` vs. `std::enable_if_t` vs. `requires-clause` vs. `if-constexpr`](/publications/assets/img/cppp-2021/Capture_ctbench_01.PNG)

---

**Overview** of the project

- cmake api
  - benchmarking.cmake (documented)
- grapher subproject
  - CLI, time-trace file reading, predicate engine, and plotting
  - designed as a library + CLI drivers
  - relies heavily on Sciplot
  - new plotters can be written easily
- tooling
  - time-trace-wrapper : clang exec wrapper to extract time-trace files
  - cmake-doc-extractor

**What**'s the purpose of ctbench ?

- Better measurement and analysis tools where it's lacking, for a better understanding of compile-time.  
  To get our hands deeper on what clang does at compile-time

**What** do we have ?

- A flexible toolset to run and analyse clang/llvm compile-time benchmarks

**Is** it perfect then ?

- Time-trace has blindsports, and we can't ignore GCC (as this is a major compiler)

## 📅 Day 2 - 12/02/2021

### Discussion - Living with legacy code

Unsurprisingly, I joined this discussion rather than any other, as my job is mostly to deal with legacy code.  
I was curious about the points being discussed, but expected stuff like:

- Testings
- Refactoring plans
- ATD mitigation strategies
- Adding modern interfaces to legacy (IBA/black-box/opaque) implementation details
- How to make legacy code complient with modern(er)s APIs

But also how to create long-lasting, resilient design & code that won't become so painful to modernize.

Beyond the strict opposition to the liability of technical debt (managers vs developers), we have detailed the why and how.

- Should we, as developers, consider the management as an impediment ?
- What about developers who are not willing to get trainings ?
- Can managers force modernization/refactoring/promoting best-practices ?
- Because meeting deadlines is the top priority, how to effectively manage quick-wins and mitigate their impact on maintainability?

Afterwhat we evoked the cost of change :

- Proverbs like *"if it ain't broken, then don't fix it"*
- Technical debt mitigation strategies, like *"clean-up fridays"*
- The cost of turn-over & onboarding (and the difference between juniors & seniors in such process)
- How to deal with management pressure ?
- How to deal with policies promoting quick-wins (e.g "We want to get something that works" - understand, some behavior correctness, in opposition to well-tested, scalable and maintainable code)
- How to deal with project that basically stack-up features over a prototype ? - e.g projects suffering from organical growth

And in conclusion :

- Can/should we consider refactoring as an integral part of our development tasks ? - for example, spending half our time cleaning the perimeter we are about to impact.

### 🗣️ **Loic Joly - *"MISRA"***

|         |                                                     |
| ------- | --------------------------------------------------- |
| 🎞️ Video | [link](https://www.youtube.com/watch?v=uL8f0N2WkmQ) |

*To be honest, I did not know what to expect from such topic, yet was convinced that Loic would deliver an interesting talk.*

**What** is this talk about ?

This one is all about mindset and perspective over rules, and what MISRA is.

---

**What** is MISRA ?

- A set of guidelines for safety-critical software
- Has its root in thew automative industry
- One of the most followed guideline
- current version : MISRA C++ 2008

**About** History :

- MISRA started with C in 1998
  - was updated in 2004
  - then forked to C++ in 2008 and MISRA C 2012
- MISRA C++ 202x (ISO 24772)
  *(MISRA C++ 2008 with agreement from AUTOSAR and the cppcoreguideline)*

**What** does a MISRA **guideline** looks like ?

- title
- category (mandatory, required, advisory)
- analysis :
  - decidable or not
  - single translation unit or system
- amplification
- rationale
- examples

**Why** did Loic hated MISRA with such a passion ?

- Some context
  - He do loves C++
    - teaching it
    - spreading good practices
  - He is writing a static analysis tools
    *thus, implements rules*
- Very often, when implementing a MISRA rule, he and his team were unhappy
  - the rule felt odd
  - it makes people write C++ in a C style
  - make people write overly verbose code
  - code following the rule can often be inferior to code ignoring it
  - Felt outdated (2008 -> today)
  - some rules go against the spirit of C++

Some **examples** of odd rules :

- **MISRA-6.6.5** : A function shall have a single point of exit at theend of the function
  - Lead to more internal states
  - Thus code being harder to read
  - Looks inconsistent with the fact that MISRA allows exceptions
- **MISRA-14.7.2** : For any given template specialization, an explicit instantiation of the template with the template-arguments used in the specialization shall not rend the program ill-formed
  - Goes against the philosophy of C++
    - A class is not just one block : it's something with optional features
    - ex : `std::list<std::complex<double>>`

**What** are the design goal for MISRA ?

- Focus on **safety** only
  - if you're not working on safety-critical software, it may be too much of a pain to follow
  - it does not care about other aspects, and should be mixed with other guidelines
    *(quality, security, style, etc.)*
- Guidelines should be tool-checkable
  - different tools should have the same opinion about some code
  - rule amplification is more for tool vendors than for users
- Guidelines should prevent bad code, not promote good code
  - for instance, no guideline about using strong-types *(but you should anyway)*
  - but rules against things that happen when using fundamental types

**What** are the design goal for MISRA ? *(details, philosophy)*

- Undefined behaviour should be prevented as much as possible
  - Even if it restrict what kind of code can be written
  - Even if it is slightly painful
- Explicit is better than terse
- Decidability is important
  - sometime, a set of rule works together
  - one non-decidable to catch the real issue
  - several decidable that make sure that code is written in a way that the real issue won't happen (those might be more constraining)
  - examples :
    - you should not access object ouf if its lifetime (non-decidable)
    - you should not return a reference to a local variable (decidable)
    - you should not use unions (decidable, much broader, but deemed acceptable) as you might access an inactive member of a union

**How** does such rules applies ?

- When MISRA says : You should not write code that way
  - the goal is not to prevent you from writing code that way
  - the goal is that if you do, it should be validated
  - exception : mandatory rules
- Deviation process
  - You should explain why it is safe to deviate from t he rule in that case
  - In many environments, it also mean that someone else should agree with you

**Case study** : for-loops in MISRA 2008

- It is difficult to write a loop and make sure it will end
- A group of rules for for-loops that enforce constant increment of loop variable and fixed final value
- For instance : the loop-counter shall not be modified within condition or statement
- Difficult notion of loop-counter
- Those rules prevent writing useful code
- > **Consequence** : Everybody use the less constrained while loops,  
  even when a for-loop would have been clearer : we have a cognitive dissonance here
- Rule : legacy iteration statements should not be used
- Also covers while loops and do-while loops
- Common advice : prefer algorithms and range-based for loop
  - So people don't have to use for-loop
  - If you are wrinting your own loop, you are not in the easy case => special case so
  - It does not mean you cannot use legacy iteration statements
  - It means each time you use one, you'll have to
    - justify why other solutions were inferior
    - validate that your loop is correctly written
  - exceptions for common patterns

**Case study** : `std::terminate`

- Calling `terminate` has unspecified behaviour with stack unwinding
- 2008 : the `terminate()` function shall not be called implicitly
- 202x : program-terminating function should not be used
- changes
  - we added explicit calls
  - we added more functions
  - we removed implicit calls => other more specific rules
  - we added taking the address -> make it decidable
    - not only when you call a function, but also when you take the adress of the function
  - > we really don't mean those function cannot be used !
    - In such case, when you need to stop your program fast and avoid stack unwinding, it's still ok to use terminate() but you need to explain why

**What** other changes did we do ?

- Update all rules to C++17,  
  *so those still make sense*
- Incorporate rule ideas from **AUTOSAR** and **MISRA C**
  - Not all the rules : clear reflexion on what should and should not be merged, and how
- Remove rules that we considered without real safety case
- Be more accurate in the rule amplification
- Rework/remove rule that were just not that good
  - evaluation of the operand to the sizeof operator shall not contain side effects
- Remove rules that were only requiring documentation
- and more ...

**What**'s coming next ?

- **MISRA C++ 202x**
  *('x' is still unknown, the lower the better. Target : C++17)*
- Partial drafts should be available for review soon
  - See the [misra-cpp-202x-review-process](https://www.misra.org.uk/misra-cpp-202x-review-process/)
- Tool vendors will provide updated tools
- We have no plans to stop after that
  - some rules are omitted but could be added
  - a set of guidelines targeting parallel programming
    - Dedicated working group focusing on it
  - some guidelines about dynamic memory management ?
  - C++20, C++23

### ⚡ **Phil Nash** - Lightning talks

> *5 minutes-long entertaining talks*

#### ⚡ ***Chris Croft-White** - a brief introduction to time travel debugging*

|         |                                                     |
| ------- | --------------------------------------------------- |
| 🎞️ Video | [link](https://www.youtube.com/watch?v=YA4--v_0DNA) |

This talk was about time travel debugging - *hereafter, TTD* - using the [UDB](https://undo.io/solutions/products/udb/) solution tool from [Undo](https://undo.io).

**What** are conventional methods of debugging ?

- logging (printf)
- core dumps
- traditional debugguers

**What's** wrong with such technics ?

- The first challenge is often to **reproduce the failure**,  
  like the steps you should follow every single time you run a debugger

**What is** Time Travel Debugging (TTD) ?

- It works by recording the application's execution, allowing you to rewind and trace the code execution back to the cause
- Following effects back to cause directly save a considerable amount of efforts
  - both in repeatedly coming up with hypothesis about the cause
  - know how to test those

After this introduction, Chris demonstrated - *using UDB* - some simple use-case,  
like jumping back in time to previous steps, up to a point when the stack is not corrupted/destroyed anymore, so we get better/valuable informations to investigate a crash.

> FYI, a workshop was planned the day after about this tool, at 12:30 : *"**Undo** hands on workshop"*

#### ⚡ ***Loic Joly** - as simple as 1 + 1 = 2*

|         |                                                     |
| ------- | --------------------------------------------------- |
| 🎞️ Video | [link](https://www.youtube.com/watch?v=JiFIDOQXHs4) |

For these lightning talks, Loic came up with a game, so participants had to guess what would appear when code was compiled and executed.  
Sounds simple, right ? Well, this were all about c-preprocessor macros ! 😭

**What** rule to remember about this game/demonstration ?

- Overflows for **preprocessor** and **C++** deal with different rules

#### ⚡ ***Sandor Dargo** - Why clean code is not the norm ?*

|         |                                                     |
| ------- | --------------------------------------------------- |
| 🎞️ Video | [link](https://www.youtube.com/watch?v=srQi9D1B724) |

**What** is clean code ? Some code that is easy to understand and easy to change

- **Understand**
  - execution flow
  - object relationship
  - role & responsabilities
  - purpose of each expression

- **Easy to change**
  - api are concise
  - tested

**is** clean code part of software quality ? 4 pillars :

- security
- reliability
- performance
- maintainability

For some peoples, **no** :

- as long as the code works w/o bugs
- the user doesnt see it anyway
- it's simply for devs fun

For others, **yes** :

- help reducing the numb if bugs
- time to fix bugs
- decreases maintenance costs
- it's part of making your do right

Reminder of alignement trap (see **Allan Kelly**'s talk *"Do it right, then do the right thing"*, [6th slide](https://www.slideshare.net/DevConFu/do-itright-35422417)).

**What** happend if you write low quality code ?

- decreasing productivity
- up to a point of "apocalypse"

**Who's** responsible of bad code quality ?

- It's them, the project managers !  
  *as they don't understand what technical debt is*
- It's then, the juniors developers !
  *as they are pretty unexperimented*

Sandor concluded by asking the participants : *"aren't we all ultimately responsible ?"*

Clean code is hard, we must learn it

- requires effort & discipline
- peoples are lazy, need to do our job

The job is not only about coding, but also to communicate :

- document
- teach
- explain
- alert
- say no !
  - technical debt must be paid back, on time
  - we cannot afford better solution

#### ⚡ ***Ahmad Atwi** - "Jeopardy - C++ edition"*

A bunch of questions on C++, using `kahoot`

#### ⚡ ***Olafur Waage** - Artificial problems*

|         |                                                     |
| ------- | --------------------------------------------------- |
| 🎞️ Video | [link](https://www.youtube.com/watch?v=sZVptoGqCiE) |

Olafur presented an interesting & great way to learn - *that I've been using for years so far* - which is to create fake walls/restrictions.  

The key here is fake restrictions often, if not always, lead to discovering new ways to deal with common issues and to developing creativity.

Olafur's examples :

- no heap allocation
- no for-loops
- etc.

My examples :

- no OOP
- no pointers
- as less as possible runtime code

#### ⚡ ***Arseniy Zaostrovnykh** - finding Nemo or evolution of a for-loop*

|         |                                                     |
| ------- | --------------------------------------------------- |
| 🎞️ Video | [link](https://www.youtube.com/watch?v=Bf4yl9XZL8o) |

Arseniy discussed about cognitive complexity, illustrated with an `any_of` examples :

| technic               | C++ standard |
| --------------------- | ------------ |
| for-loops             | C++ 98       |
| range-loop            | C++ 11       |
| `std::any_of`         | C++ 11       |
| `std::ranges::any_of` | C++ 20       |

**How** to compare those code/implementations ? Using :

- counting line of codes
- tokens
- words
- cognitive complexity

All the implementations are valid C++20, thanks to backward compatibilities

- So we need to improve code when upgrading our C++ standard
- static analysis tools like SonarLint can help for this !

#### ⚡ **Fred Tingaud - *"Organizing a conference"***

|         |                                                     |
| ------- | --------------------------------------------------- |
| 🎞️ Video | [link](https://www.youtube.com/watch?v=Z9qX8tXJl5I) |

For this lightning talk, Fred shared his feedback on the organization of the CPPP 2019 & CPPP 2021 conferences.

Real name *"Why you should not organize a C++ conference"* :

- not doing some C++ talk for a while
- Cannot see talks
- Cannot really meet speakers, more into fixing tech issues
- make some ennemies with refused speakers

Then, **why** doing it once again ?

- Nice feedback from attenders, speakers, etc.
- happy make people learn & share, especially peoples who attend to such conference for the first time

#### ⚡ **Pavel Novikov - *"Formatting ISO 8601 date and time fast"***

|         |                                                     |
| ------- | --------------------------------------------------- |
| 🎞️ Video | [link](https://www.youtube.com/watch?v=rkE0PTb4YlI) |

For this talk, Pavel explained how to fine-tune some of the time-formatting implementation details over and over again,
focusing on speed of execution.

**How** to improve time formatting ?

| Speed     | Implementation strategy                                                                                                                                           |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1x (base) | `stringstream` and `iostream`                                                                                                                                     |
| 4.2x      | `fmt`                                                                                                                                                             |
| 4.5x      | `char buf[20]` instead of `stringstream`                                                                                                                          |
| 5.8x      | `std::strftime`                                                                                                                                                   |
| 9x        | `FMT_COMPILE` (pattern parsed at compile-time)                                                                                                                    |
| 100x      | manual formatting                                                                                                                                                 |
| 330x      | manual formatting<br>+ removing to_chars<br>+ directly using uint64_t as bytes storage<br>+ bitwise operations like shifting, masks, and various tricks for maths |

#### ⚡ **Phil Nash - *"I'll build myself (from the source, don't want your libs)"***

Phil showed us a very fun - *old-school* - video of a song he created, about coding practices, tools, feelings, and how he likes to build libraries itself from the sources.

Quite unexpected, yet lovely 😉🎵

### 🗣️ **Philippe Bourgau - *"Live-test legacy-code with the mikado method and test data-builders"***

|         |                                                     |
| ------- | --------------------------------------------------- |
| 🎞️ Video | [link](https://www.youtube.com/watch?v=2wWQosot85I) |

For this talk, Philippe shared about an interesting large-scale refactoring techniques called the **mikado method**.  
In order to best explain how such method works, the speaker used [coggle.it](https://coggle.it/) as mind-mapping tool, but also a lot of live-coding/demo examples.

If you are interested into experimenting such technique, a 2-3 hours long workshop is available at : [murex.github.io/mikado-testbuilders-kata](https://murex.github.io/mikado-testbuilders-kata/).  
This format is perfect for [code retreats](https://www.coderetreat.org/).

More informations about the mikado method are [available here](http://mikadomethod.info/).

---

**How** to (efficiently) refactor code ?

**Technique #1** - brut force debugging

- tunnel effect
- take a lot of time in legacy code
- code duplication between tests

*How can we do this better ?*

**technique #2** - Test data builders

> build test data first
>
> - using the builder pattern
> - avoid code duplicate between tests
> - > remove the noise, only specifying what we care about

- We improved testability
- but writing it is even slower
- tests are more readable
- adding new tests easiers
- less code duplication in tests

**technique #3** - Mikado method

- It's a refactoring technique to avoid tunnel effect
- create a graph - *mind-maps works well for that* - of the refactoring steps, up to the goal
- instead of doing it all at once, we do it incrementally, small steps after small steps
  - a goal
  - a non-reg criteria
- so you can always go back to the previous step

---

**How** use the Mikado method ?

- try to do your change
- check for regressions
- try trivial fixes (scratch refactoring)
- if non-reg pass
  - commit
  - stop if end goal is achieved
- if not, extend your graph with pre-requisites (if any)
- revert
- recursive on the pre-requisites

![Capture_mikado](/publications/assets/img/cppp-2021/Capture_mikado.PNG)

**What** are mikado pros & cons ?

pros

- no tunnel effect
- safer
- buys us time to avoid mocks
- we can use the graph as a team communication tool
- we can use the graph to parallelize work

cons

- code duplication between tests
- duplication between graphs

**What if** we use both **test builders** + **mikado method** ?

cons

- overhead of writing builders

pros

- still no tunnel effect
- write test incrementally
- no code duplication between tests
- it snowballs

---

Philippe concluded his talk by mentioning three other (must-know) refactoring or testing techniques :

- [Golden Master](https://github.com/approvals/ApprovalTests.cpp)
- [Bubble Context](https://www.domainlanguage.com/wp-content/uploads/2016/04/GettingStartedWithDDDWhenSurroundedByLegacySystemsV1.pdf)
- [Strangler Application](https://martinfowler.com/bliki/StranglerFigApplication.html)

As mentioned in the intro, a workshop is available if you are willing to give the mikado method a try, at : [murex.github.io/mikado-testbuilders-kata](https://murex.github.io/mikado-testbuilders-kata/)

### 🗣️ **Barry Revzin - *"Iterators and Ranges: Comparing C++ to D, Rust, and Others"***

|         |                                                     |
| ------- | --------------------------------------------------- |
| 🎞️ Video | [link](https://www.youtube.com/watch?v=95uT0RhMGwA) |

This talk from Barry was all about design & implementation philosophy,  
comparing how ranges are designed in C++, D, Rust, C#, Java, and Python.

**What** are ranges ?

The speaker defined ranges as uniform access to sequences, thanks to 3 kind of basic operations (which are not necesseraly distinct functions) :

- read
- advance
- done ? *when the sequence is exhausted*

**About** C++

The C++ programming language uses iterators pair model (Alexander Stepanov) to decouple containers from algorithms.

- From `begin` to `past-end`
| -       | operations   | synthax |
| ------- | ------------ |
| read    | `*it`        |
| advance | `++it`       |
| done ?  | `it == last` |

- Basic C++ range structure
  - end is either not necessarily an iterator, can be a sentinel

Adapting ranges in C++ : transform (map in other languages), filter, etc. are producing new ranges

**Comparing** with D model (simplier than C++)

- `r.front()`
- `r.popFront()`
- `r.empty()`

**Comparing** with C# model

- `e.Current()`
- `e.MoveNext()` (for both advance + done?)

**About** C++, D, C# : *"Reading languages"*

All theses three programming languages have in common that

- `read` is a distinct, idempotent function
- but one interesting downside
  - `range | transform | filter` then print each elements of the view
    - elements that satisfy the predicate are transformed **twice**

Note : *C++ model is more complex than D, yet have more functionnalities*

**About** The Rust, Python and Java iterator model : *"Iterators languages"*

  ![Ranges model comparison](/publications/assets/img/cppp-2021/Capture_ranges.PNG)

The author underlined the gap in implementation philosophy between these two sets of languages,  
and end his talk comparing how many times functions (like, filtering or transforming ones) are called for each languages, roughly for the same code.

## 📅 Day 3 - 12/03/2021

### Round table - C++ template-metaprogramming : why, when, and when not ?

Very interesting discussion about TMP and templates in general.

- Error bloat
  - how to debug it ?
  - how to reduce it ?
    - stop compilation ASAP, give a clear/clean error message to the user
- Training
  - Proper C++ TMP requires additional training, especially for junior developers
- Management perspective
  - We discussed a lot about how teams's manager can perceive template metaprogramming (as a costly developers whim, etc.)
- HR constraints
  - Hiring C++ developers who know TMP can be hard, thus should be considered at some point in order to guarantee the project's maintainability, especially for companies with high turn-over.

### 🗣️ **Ivica Bogosavjevic - *"The performance price of virtual funtions"***

|         |                                                     |
| ------- | --------------------------------------------------- |
| 🎞️ Video | [link](https://www.youtube.com/watch?v=oy-lG3JiqSI) |

For this talk, Ivica detailed about a scientific approach of performance analysis, which basically is the following process :

- experiment -> results -> conclusion

What struck me with this one was how well-structured, and rigorous this talk was; as well as the numerous examples.

**Introduction** :

- virtual function are the most beloved feature of C++ because of the flexibility it provides
- yet come at performance cost
- theses costs depends on several factors, we will detail later

**How** virtual functions work ?

- C++ standard doesn't mandate implementation of virtual functions
- Most compilers, however, implement virtual functions in a similar way
  - the adress of the function is unknown at compile-time
  - thus has to be lookup
  - each type has a virtual function table, and each nstance of the type has a pointer to this (shared) table
  - the function poisition of the table (offset) is know at compile-time
- When the call to the virtual function is made, the program :
  - Follows the instance's virtual table pointer
  - in the virtual table, it goes to the compile-time defined position

---

**Initial analysis** :

- Initially, more works is involved when it comes to calling a virtual function,  
  compared to when calling a function whose address is known at compile-time
- The compiler just has to perform a jump for non-virtual function to a adress known at compile-time

**Initial analysis** - experiment

- A vector of 20 millions object of the same type
- 20 millions calls to virtual function, compared vs. to non-virtual function

**Initial analysis** - experiment result

- Short and fast function : slower, but not much (18%)
- Long and slow function : almost negligeable

**Initial analysis** - experiment conclusion

- The results don't look that bad
- Noticeable overhead for small functions
- Not much for long functions

---

**About** vector of pointers : optimal & non-optimal layouts

- Virtual dispatching mechanism is activated when we are accessing objects through pointers
- So, to use virtual dispatching, we need to allocated objects on the heap
  - can be very slow because of cache misses
  - become worst when the program grow larger
- Vector of objects is much better for the performance compared to vector of pointers
  - does not suffer from cache misses

  ![optimal vs. non-optimal layout](/publications/assets/img/cppp-2021/Capture_virtual.PNG)

The speaker then underlined that a common alternatives to vectors of pointers exists, like :

- `std::variant` + `std::visitor`
- polymorphic_vector
- per-type vector

---

**Compiler optimizations** :

- Compiler knows the address of non-virtual functions at compile-time
  - thus can inline, saving the function call
- Inlining saves a few instructions on the function call, but that is not all
- After inlining, the compiler can perform many other compiler optimizations
  - move loop invariant outside of the loop body
  - SIMD

**Compiler optimizations** - conclusion

- Virtual functions inhibit compiler optimizations because theu are esentially not inlinable
- A solution for this is type-cased processing
  - don't mix the types, each type has its own loop and its own processing
  - the compiler can inline small functions and performance optimizations
  - already implemented in boost::base_colection
  - this approach works only ifobjects in the vector don't have to be sorted

---

**Jump destination** guessing

- to speed-up computation, modern hardware does a lot of guessing (speculative execution)
- in case of virtual function, the CPU guesses which virtual function will get called and start execution the instructions belonging to the guessed type

**Jump destination guessing** - experiment

- Three vectors of 20 millions objects
  | -                   | order                | example |
  | ------------------- | -------------------- |
  | sorted by type      | AAA BBBB CCCCC       |
  | predictable fashion | ABCD ABCD ABCD       |
  | random              | BABCBABDBDDABADBCBAD |
- Measure time to call a virtual function

**Jump destination guessing** - results

- Sorted by type ~=  sorted in a round-robin fashion
- Unsorted is much more costly

**Jump destination guessing** - conclusion

- If the types are **sorted** in a predictable manner, the CPU can predict the address of the virutal function it needs to call and this speeeds up the computation
- If types are **unsorted**, the cpu cannot guess
- mostly pronounced with virtual functions

---

**Instruction cache evictions** :

- Modern CPUs rely on *"getting to know"* the instructions they are executing
- the code that has already been executed is "hot code"
  - its instructions are in the instruction cache
  - its branch perdictors know the outcome of the branch (true/false)
  - its jump predictor know the target of the jump
- the CPU is faster when executing hot code compared to executing cold code
- the CPU's memory is limited
  - hot code eventually become cold unless executed frequently
- virtual functions, especially large virtual functions where each object has a different virtual function, mean that we are switching from one implementation to another
  - the CPU is constantlty switching between implementations and is always running cold code

**Instruction cache evictions** - experiment

- measuring the effect of instruction cache eviction is the hardest, because it depends on many factors
  - the number of different virtual function impls - the bigger, the slower
  - the number of executed instructions in the virtual functions - the bigger, the slower
    - the size of virtual function correlated to the number of exected instructions, but they are not the same
  - how sorted are the objects in the container (by type)
    - best case : sorted by type (AAABBBBCCCCDDD)
    - worst case : sorted by type in a round robin fashion (ABCDABCDABCD)

**Instruction cache evictions** - conclusion

- in the example, the code code was running at the speed of 0.6 of the speed of the fast code
- the phenomenon is not related to the virtual functions themselves

---

**Conclusion** :

- Virtual functions do not incur too much additional cost by themselves (because of the increased number of executed instructions)
- it is the environment where then run which determines their speed
- the hardware craves perdictability : same type, same function, neighboring virtual address
  - when this is try, the hardware run at its fastest
  - it's difficult to achieve this with casual usage of virtual functions
- in game dev, they use another paradugm instead of OOP called data-oriented design (ECS)

- if you need to use virtual functions, bear in mind
  - the number one factor responsible of bad performance are data cache misses
    - avoiding vector of pointers on a hot path is a must !
  - other factors also play their role, but to as alesser extend
  - with careful design, you can reap most benefit of virtual functions without incurring too much additional cost
- here are a few idea to fix your code with virtual functions
  - arrangement of objects in memory is important

*Note : The author relied on tools like [Intel VTune](https://www.intel.com/content/www/us/en/developer/tools/oneapi/vtune-profiler.html) to measure performances.*

### 🗣️ **Sébastien Gonzalve - *"Why you should move your legacy code to smart pointers"***

|         |                                                     |
| ------- | --------------------------------------------------- |
| 🎞️ Video | [link](https://www.youtube.com/watch?v=OanwYoajPQw) |

**Preamble** :

- This talk is about refactoring
- good refactoring rely heavily on tests (any kind of, e.g non-regression)
- if you do not have tests, your priority is to have them, not to "change"the code
- If your code is near end-of-life, don't change it

The author underlined the fact that - as developers -, we most likely feel pulsions to fix bad code.

---

C++11 introducted `smart-pointers`, but many large codebase are formely written in C++03.

Common motivation for **not** changing

- **Fear of loss/confusion**
  - One need to understand the reason(s) for the change
  - Evidences :
    - "That worked so far"
    - **How** do we know that it works ?
      - Are there unit tests and/or validations test ? (with the correct coverage)
      - Does it always work ? (what about exceptions ?)
        - *e.g code randomly crashing in parallelization / concurrent programming*
      - Are there tools passed to check leaks and/or corruptions ?
- **Requires more work**
  - Changing former code is unplanned work
  - Evidences
    - *"we'll do that next year"*
    - *"we need to take it into account for the next product"*
    - *"ROI is null"*  
      (for new languages features, etc. you're having fun with those, but it's not that usefull)
  - Cost of adding new features
    - one need to be convinced that benefits of change will come fast
    - are there upcoming evolutions of the code
      - How will we make sure that new code is correct ?
      - How will we make sure that new code does not break the former code ?
      - What will be the price of having it work again ?
    - What about enforcing correct use of APIs ?
- **Fear of failure**
  - One need to feel he will be able to be successful
  - Evidences
    - *"Compiler keeps giving me 6 pages of error bloat that I don't understand"*
    - *"Our codebase is too large"*
    - *"I don't like C++11"*

Get help

- Training team is sometime needed prior to start
- You may try different compilers
- there are a lof of resources available on the internet - especially the CppCoreGuideline

When to pass a smart-pointer as function parameter

- When not expression ownership, don't pass them
  - [CppCoreGuideline F.7](https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md#Rf-smart) : For general use, take T* or T& arguments rather than smart pointers
  - [CppCoreGuideline R.3](https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md#Rr-ptr) : A raw pointer (a T*) is non-owning
- When ownership need to be shared
- when need to be able to reseat content, pass references
  - [CppCoreGuideline R.33](https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md#r33-take-a-unique_ptrwidget-parameter-to-express-that-a-function-reseats-thewidget) : Take a `unique_ptr<widget>&` parameter to express that a function reseats thewidget
  - [CppCoreGuideline R.35](https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md#r35-take-a-shared_ptrwidget-parameter-to-express-that-a-function-might-reseat-the-shared-pointer) : Take a `shared_ptr<widget>&` parameter to express that a function might reseat the shared pointer

> *"You can be the one that bear the change in your company !"*

---

Examples : some **usual patterns**

- **Example** : evolving class
  - copying using default assign-operator a member-variable  which is an allocated buffer, deleted in the constructor
  - using `std::unique_ptr` result in a compilation error, as calling the deleted function `operator=` is illegal (ill-formed).
- **Example** : callback use-case
  - observee pattern
  - use `shared_ptr` + `weak_ptr::lock` to check if the shared resources was not destroyed

Using **C APIs**

- `unique_ptr` + custom deallocator (2nd parameter)

Use shared_ptr **wisely**

- Smart pointer are really helpful to express ownership
- Refactor to use smart pointers should be a chance to challenge design and implementation
- Resist the *"let's put `shared_ptr` everywhere because we don't understand who owns this"* urge.

---

**Advices** :

- Start from upper layer, then go down to your class hierarchy
- Migrate one thing at a time (one variable, one function, etc.)
- Work with little iterations and tests as soon as you get something to compile
- Be ready to put on hold some part when discuvering higher priority work

This is **really** better

- Eliminate dangling pointers - reducing bugs
- Enforce design + make the code self documented about ownership of datas

### 🗣️ **Damien Buhl - *"Our Adventure building a massively scalable C++ remote compiler cloud"***

|         |                                                     |
| ------- | --------------------------------------------------- |
| 🎞️ Video | [link](https://www.youtube.com/watch?v=pUnrvCuqVUs) |

This talk was more like a return of experience on building the [Tipi](https://tipi.build/) project.

**What** is Tipi ?

From the company's [homepage](https://tipi.build/) & [documentation](https://tipi.build/documentation) :

- "[...] combines its smart dependency management with powerful ad-hoc cloud environments to enable C and C++ developers to do their best work."
- "Write your app, **not** build scripts"

**Tipi** solves three of the most common problems C++ developper face day to day: dependency management, long build times and environments:

- speed up your workflow with powerful multiplatform cloud environments
- fetch dependencies straight from git repositories, no need to wait for package definitions
- shipped with a useful set of tools on three platforms

---

**Problems** with C & C++

- code reuse requires a lot of work, dealing with dependencies from build system
- build & deploy takes time

**Why** did Tipi choose **C++** for webapps ? *(rather than **PHP**, that represents 77% of pages, etc.)*

- The environment : carbon footprint.  
  Enable environmentally friendly software : 1.32bn CO2 tons emitted each year by the industry
- Less servers is better : requires 7 times less
- Efficiency !

---

First part of our journey : **microservice**s vs. **monolith**

- **Monolith**
  - cons
    - vertically scalability only
    - availability issues
  - pros
    - often requires less servers
- **Microservices**
  - cons
    - lot of marshalling code between services
    - shared state data race
    - requires more servers
  - ~prone to Conway's law
  - pros
    - horizontal scalability
    - high availability
    - degraded operation mode

**About** Monolithization

Definition from [Oatpp documentation](https://oatpp.io/docs/monolithization/) :  

- *Monolithization is the technique that enables you to scale your microservices better. You can develop regular microservices in Oat++, and when there is a little to no load in your system, you can consolidate your services in a single monolith. Also, consolidated services perform better and consume less memory. Thus you can reduce your infrastructure costs by reducing network overhead and minimizing the number of running instances.*

Choose if you want :

- components communicating over the network
- are all components inside the same executable

---

**How** is Tipi.build built ?

- Architecture details
  - relies on [Docker-Swarm](https://docs.docker.com/engine/swarm/)
  - bind with [Github](https://github.com/)
  - homogeneous build in local or remote
  - [oat++](https://oatpp.io/docs) RESTful webservice *(Github repo [here](https://github.com/oatpp))*

Tipi.build helps **reusing** code

- Thanks to *.tipi/deps* file

Tipi.build is **built** with tipi.build

**How** to build scalable REST *(representational state transfer)* APIs with C++ ?

- Quick demo with [oat++](https://github.com/oatpp) as single dependency
  - Oat++ OpenAPI Server
    - [Swagger](https://swagger.io/)

**How** do you scale on server side, and deal with security ?

- [JWT](https://jwt.io) : user authorisation
  - Even if scalable database exists, we should still avoid such potential bottleneck

**What** database ?

- [Jsonb](https://www.depesz.com/2014/03/25/waiting-for-9-4-introduce-jsonb-a-structured-format-for-storing-json/) : faster than [Mongodb](https://www.mongodb.com/)

### 🗣️ **Sy Brand - *"On the Aesthetics of Code"***

|         |                                                     |
| ------- | --------------------------------------------------- |
| 🎞️ Video | [link](https://www.youtube.com/watch?v=CkGqINHZit0) |

More than a talk, Sy offered the audience a masterclass on the aesthetics of code,  
that **you'd really better watch** rather than read those lines, as it cannot be sum-up easily.
I must therefore warn you: you will only find a large part of my notes - *which are sketchy* -,
because at some point I decided to give up typing a bit, in favor of better capturing the essence of the keynote.

Full of quotes, deep philosophical thoughts, interesting books references, paints, poems, pieces of codes, etc. this talk was dense, or I'd better say intense & well-structured - yet very enjoyable.  
I always admire the way Sy makes me - *like the rest of the audience* - feels smarter and cultured.

Before the talk, I only knew the famous E.W. Dijkstra quote :

- *"How do we convince people that in programming simplicity and clarity -- in short: what mathematicians call 'elegance' -- are not a dispensable luxury, but a crucial matter that decides between success and failure?"*
  **Edsger W. Dijkstra**

But as you'll see if you watch the talk, there's much more to dig here.

---

**Introduction** : Is code art ?

> Context : ("I" there designs Sy)

What are - if any - interactions between code and art. The more I researched about this questions, the less I cared.  
Instead of following this guideline, the author chosed to structure the talk as a **Miscelanea** (spanish essaie), which can be defined as a collection of curiosities or heterogeneous materiallas that only have in common the arousal effect.

> *"When we learn code, we do not take time not learn to see the beauty"*

---

**Whirlwind history of western aesthetics** :

- Greek aesthetics : (platonic) pure ideals that differs from reality
  - art is imitation - of something in the real work
  - beauty is closely linked to virtue
- Medieval aesthetics
  - St.Augustine : beautiful vs. it pleases : which is the cause, which the consequences ?
  - beauty is essential
- Renaissance aesthetics - when painted skill increased a lot
  - shift away from virtue & religious
  - ex : *the perfect city* painting
  - single-point perspective (from "on painting" book)
  - art is imitation - sfumato
  - Beauty is skill
- Modern
  - art functions cognitively and perceptually (aesthetically)

- previously : Beauty is essential
  - started to destruct that

- Immanuel Kant
  - Critique of judgement : beauty claims universality
    - when we see something and think it's beautiful, we expect others to feel the same
  - purposive without purpose : reason to exists, yet does not fulfill any reason to
- Arthur schopenhauer
  - The world as will and representation
    - constant suffering. We're not seeking to fulfill any need (//me not sure about this one)

**What is art** ?

- What is art, what is not ?
- When things become arts ?
  - description
  - criteria
  - categories

Morris weitz - The role of theory in Aesthetics

- "What is art" is the wrong question

Not answering / about to answers "Is code art ?"

**On beautiful code** :

- Code encode our feeling into other things
  - referers to K.Gregory "Emotional code", CPPP 2019
    - "By choosing to show position emiotions in your code, your code become easier to read & maintain"
- the idea of functional beauty
  - Aeshetic of some code also relate to how to fulfill its purposes - with performance
- form matters - indentation
  - impact how well the reader will understand it
- KISS principle
  - "simple is beautiful" / minimalism

Zdzislaw Beksinski -> scary/disturbing yet kinda beautiful

Context matters -> help/makes understand

**On code art** :

"Is code art" ?

- Nelson goodman - ways of worldbuilding
  - Art is contextual

Sy Brand "Code::art"

Richard Carter : Flow programming language
Daniel Temkin : programming language as FS hierarchy

**on language** :

haskell (monad, functors)

**on discovery** :

Serge Lang - The beauty of doing Mathematics

- Listening to music requires a lower level of concentration & personal effort, as your are passive - in comparison with Mathematics

**on knowledge** :

**on execution** :

**on representation** :

**history revisited** :

People think : Beauty is essential ? subjective ?
beauty claims universality

"Is code art ?" => Who cares ? This is the wrong question !

- Can I experience code as art ?
- Can my code reflect me ?
- Can code be beautyful

### **Joël Falcou & Fred Tingaud - Conclusion**

Fear that the conference won't work

- Because of technical issues
- Yet, great feedbacks from speakers, attenders

Thanks to the volunteers, peoples responsibles for the video/recording/multimedia side, peoples helping for the discord, and of course speakers & sponsors

## 🧙 About the author

> C++ & software architecture enthousiast,  
> I've been learning & teaching C++/software-design as an expert for the last past +10 years.

For a living, I mainly create **audits** to then save sinking projects 🚣🏻‍♂️.  
*(codebase, design & architecture, tools, methodology, management & HR policies*)

[🔗 linkedIn](https://fr.linkedin.com/in/guillaume-dua-541a40144) | [🔗 Github](https://github.com/GuillaumeDua) | [🔗 gist.Github](https://gist.github.com/GuillaumeDua)
