---
layout: post
title: "C++ - Concept-based polymorphism in modern C++"
sitemap: true
description: >
  How to design clean, composable interfaces using C++20 concepts — covering contract programming, type erasure, static polymorphism, and std::variant overload resolution.
tags: [ cpp, cpp20, concepts, polymorphism, design, template-metaprogramming ]
gist_url: https://gist.github.com/GuillaumeDua/b0f5e3a40ce49468607dd62f7b7809b1
gist_date: "May 10, 2021"
---

|           |                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------- |
| Date      | 05-05-2021 - 10-17-2023                                                                             |
| Revision  | R3                                                                                                  |
| Author    | Guillaume Dua                                                                                       |
| Reviewers | [Loïc Joly](https://github.com/loic-joly-sonarsource), [Antoine Morrier](https://cpp-rendering.io/) |

---

- TOC
{:toc}

## Requirements

Basic understanding of the following elements may ensure a good reading experience.

### Mandatory

- C++ previous standards (11, 14, 17)
- C++ templates programming
- STL's `<type_traits>`
- Basic knowledge of software design

### Nice-to-have

- C++20's `concepts` feature
- C++20 concepts library
- SFINAE, detection idiom in C++
- Some design knowledge, such as :
  - SoC (separation of concerns)
  - LSP (Liskov substitution principle)
  - IBP/IBA (Interface-based programming/architecture)
  - SRP (Single Responsability Principle)

---

## Abstract

C++20 introduced the [concept](https://en.cppreference.com/w/cpp/language/constraints) keyword which provides a convenient way to define named sets of constraints - thus requirements - to restraint a template element instanciation.  

In this article, we will see how to create & use such requirements, and detail the way to make concepts participate in overload resolutions and template specializations.

Finally, it will be mentioned of new ways of designing and interfacing the components by clearly separating the concerns & responsibilities, and thus how to take advantage of the - static - polymorphic aspect provided by the concepts, from the LSP *(Liskov substitution principle)* perspective.

## Intro

To ensure a software architecture both stable & scalable, separating concerns - as well as partitioning components - is a key.  
We often hear about the single-responsability principle *(SRP)*, Interface-Based architecture *(IBA)* paradigms, among other other best-practices.

But factually, what we all observe is that reality is often different from these ideals.  

Who never complained about anti-patterns such as `callbacks hell`, `lava-flow`, or `spaghetti code` in a general manner ?  
From an architecture perspective, monolitic applications which - by design - promote the mixing of concerns, thus tight-coupling, seems to have become the established norm on many projects.  
So-called *god-classes* pop here and there, mixing-up multiples unclear purposes (so, violating SRP) and involving the use of many tricks and workaround so developers can provide a barely acceptable evolutivity to the codebase over the project's lifetime.

Beside greatly increasing both architecture technical debt (**ATD**) and the amount of messy implementation details (codebase technical debt, **CTD**), such architecture increases risks : by decreasing developers productivity, it endangers the team forecasting ability.  
Time spent on maintenance and bugfixes *(mostly caused by unexpected behaviors and crashes)* tends to increase, while new features delivery becomes difficult.  
And this, up to the well-known point of no-return, where any change become if nearly impossible, so not worth the cost.

Once this observation has been established, and if the project is to continue for several years to come, we must ask ourselves how to deal with such legacy.  
The point here is to spend just the right - *minimal* - amount of time refactoring, so then we can focus on generating business value.

Also, because sometimes new projects are created, we must ask ourselves how to prevent such degeneration.  
Meaning how can we create, or at least come close, to a long-lasting design that won't slowly mutate to become an indescribable abomination, quick-wins after quick-wins.

Today, we will leave technical debt payback and prevention strategies to the side, so we can focus on what benefits does **concept-based polymorphism in C++** can concretely bring to your architecture, codebase, but also productivity.

**About C++ standard prior to C++20 :**

Even if the `concept` feature was shipped with the C++20 standard, we have to keep in mind that many - *if not most* - companies does not use the latest standard.  
This is why this paper is not only about C++20 concepts, but also about the way to emulate such mechanism using C++17 or even older standards.

> A/N : This paper constitutes a feedback of the past 6 years spent as codebase auditor, focusing - *among other things we might discuss about in further papers* - on how to prevent any kind of inheritance-based polymorphism on the user/consumer side.

### About contract programming

*Designing by contract* is a way to promote software correctness by first formalizing components obligations.
Such paradigm aims to establish a clear contracts between callers and callees, defining each others responsibilities to fulfill the later.
Thus, each component - no matter its scale - can be restricted by a set of expectations that defines both its purpose and the perimeter it - *might* - impact.  
This way, contracts provide guarantees not only on component interfaces, but also behaviors.

> In short, contracts are materialized as a set of requirements by which *something* gets constrained with.

### Contract programming in C++

In C++, contracts can be materialized in three different - but complementary - ways.

- [Types](https://en.cppreference.com/w/cpp/language/type), supported by the language at compile-time.
- [Contracts](http://www.open-std.org/Jtc1/SC22/WG21/docs/papers/2006/n1962.html), which might become a standard feature with C++23

  Basically, a contract is made up of the following elements, that restraints runtime values :

  | category       | details                                                             |
  | -------------- | ------------------------------------------------------------------- |
  | Preconditions  | Expectations on inputs                                              |
  | Postconditions | Expectations on outputs                                             |
  | Postconditions | Behavior : resulting state of the impacted perimeter (side-effects) |
  | Invariants     | What does the contract guarantee to maintain ?                      |

- [Concepts](https://en.cppreference.com/w/cpp/language/constraints), which became a standard feature with C++20.

A common usage is to define `contract`s as sets of constraints on runtime values, while `concept`s are sets of constraints on compile-time elements (types, values).

> In C++, requirement clauses which constitute a `concept` might restrain both types and compile-time values, which might slightly differ from one's expectation of only restricting types.

> Thus, any function signature might be consider as a *(partial)* form of concept :
>
> - It takes a specific number and type of arguments (inputs) that can be `const`-qualified (invariants)  
>   *This includes the `this` pointer for const-qualified member-function*
> - It can return zero or one value, and impact its action perimeter (output).  
>   *Considering C++17 [structured-binding](https://en.cppreference.com/w/cpp/language/structured_binding), more values can be returned - even if wrapped in a single object.*
> - It has a behavior, best described by the function name (postcondition).

### DbC : How to express contracts ?

Let's start with the bad - *but common* - way: often, such contracts are *only* established as part of the software documentation.

Take the following function for instance :

```cpp
template <typename T>
auto maths_library::multiply_by_two(const T lhs) noexcept {
    return lhs * 2;
}
```

Here, the `maths_library::multiply_by_two` function documentation mention the following elements :

| Clause type   | Definition                                                                       |
| ------------- | -------------------------------------------------------------------------------- |
| precondition  | `T` values must be multipliable by an int value                                  |
| postcondition | The function cannot throw (`noexcept` qualifier)                                 |
| postcondition | The returned value is the result of `operator*` with `lhs` and `2` as parameters |
| postcondition | The output result must not exceed `T` limits                                     |
| invariant     | `lhs` is invariant, thus have `const` qualifiers (and passed by value)           |

While this looks kinda OK, we might notice few issues here.

- As a maths function, `maths_library::multiply_by_two` might - *if not should* - only handle numerical arguments by design.  
  An existing signature that matches `auto operator*(T, int)` for an arbitrary type `T` might have nothing to do with maths.

Also, after experiencing some int-overflows, the developer chose to add an assertion to restrict the input parameter.

```cpp
template <typename T>
auto maths_library::multiply_by_two(const T lhs) noexcept {
    assert(lhs <= (std::numeric_limits<T>::max() / 2));
    return lhs * 2;
}
```

While `assert` instruction are a common tool to restrict runtime values, we might notice new problems here :

- This new requirement differs from the documentation
- `std::numeric_limits<T>` must be well-defined for the type `T`.

The main issue here is not what the contract defines, but how: relying on documentation is risky, as it might be an outdated, erroneous, or simply ignored by both implementers and users.  

> Looks like a pretty error-prone context, right ?

Here is some production code I really had to deal with :

```cpp
namespace DB
{
    struct writer {

        // some code ...

        // warning : int-overflow if
        //      value > std::numeric_limits<decltype(auto)>::max()
        // warning : precision loss on floating-point values
        template <auto value>
        void insert_number() {
            connection->insert(static_cast<short>(value));
        };

        // some code ...
    };
}
```

Which, of course and as you may presume, eventually resulted in a bunch of unexpected values pushed into the database.  

| value                                   | result | OK or KO ? |
| --------------------------------------- | ------ | ---------- |
| `42`                                    | 42     | OK         |
| `std::numeric_limits<short>::max()`     | 32767  | OK         |
| `std::numeric_limits<short>::max() + 1` | -32768 | KO         |
| `std::numeric_limits<int>::max()`       | -1     | KO         |
| `0.2f`                                  | 0      | KO         |

Let's face the truth : peoples do not read documentation, especially in-code ones.

This is where `concept`s come really handy: to design set of requirements that are **checked at compile-time**.

Here, two things:

- Even if `insert_number` is a misleading name, the code simply **should not compile** if at least one of the contract preconditions is violated.  
  *A compilation error should mention which requirement was violated.*
- Instead of in-code documentation, simply use code.  
  *Coding is all about expressing an idea, which should not rely on any other form of communication nor media.*

Here is few ways to fix this, by generating an error at compile-time to prevent int-overflows.

- Rely on input type

    ```cpp
    template <short value>
    void insert_number() { /*...*/ }
    ```

- Rely on `static_assert()` instructions

    ```cpp
    template <auto value>
    void insert_number() {
        static_assert(value <= std::numeric_limits<short>::max(), "exceed size");
        // ...
    };
    ```

- Rely on template constraints (`requires` clause)

    ```cpp
    template <auto value>
        requires (value <= std::numeric_limits<short>::max())
    void insert_number() {/*...*/ }
    ```

To conclude, here we replaced a runtime unexpected behavior by a compile-time error.  
Pretty handy, right ?

> **A/N** : Even if this is perfectly legal for a user to create `concept`s with requirements on compile-time values,  
> we must keep in mind that this feature was first design to constraint types.

## Part I : Basics

In this first part, we will see what `concepts` are, how to define and use them.

### Why use concepts (compile-time sets of requirements) ?

As mentioned before, if runtime contracts are good, we sometimes can simply replace them with concepts to express compile-time requirements.

This has many benefits, in particular to provide a safeguard that prevents any contract violation to even compile, thus to be released. Concepts:

- Avoid compilation of erroneous, fallible code
- Provide static polymorphism
- Promote partitioning, thus low-coupling
- Replacing *some* compilation warnings - *which might be ignored* - by errors.
- Promote single-responsibility principle (SRP) for interfaces
- Strengthening designs, by ensuring designs integrity

> **A/N** And this is *to me* one of the main strength of C++ : doing many stuffs at compile-time, such as validating concepts requirements here.  

We can call this [defensive programming](https://en.wikipedia.org/wiki/Defensive_programming) from a design perspective.  

The goal here is to guarantee some software correctness using the predictive and restrictive nature of concepts which are present in the code base.  
Thereby, such a mechanism improves software designs stability over time - thus forecasting.

> Note : Because most companies tend to keep using previous standards, a dedicated section in this paper's appendix will detail [concepts emulation using C++17](#bonus--concepts-emulation-in-c17).  
> Also, most mechanisms are transposable into older standards *one way or another*, at the cost of reimplementing some pieces like `static_assert` using `char[(condition)]` for instance, `std::void_t`, etc.

### How to define concepts ?

My mental representation of a `concept` is the following :

- A set of requirements, which constraint a particular given type or *compile-time* value.  
  Each requirement ultimately result in a boolean which eventually uses the detection idiom with some kind of syntactic sugar.
  Finally, a `concept` is a named, compile-time predicate, made up of the conjunction of its requirements, that can participate in overload resolution and template specialization.

Thus, we can observe two kind of requirements :

- Requirements based on syntaxes **only**, which works perfectly fine with detection.  
  *In short, "If such a syntax compiles, then true, else false"*.  
  
  ```cpp
  template <typename T>
  concept addable = requires (T value){
      { value + value };
  };
  ```

  ```cpp
  template <typename T>
  concept has_member_content = requires (T value){
      value.content;
  };
  template <typename T>
  concept has_member_func = requires (T value){
      value.func();
  };
  ```

  Here, we do not care about `T::content` type, we only ensure that the syntax `value.content` does compile.

  ```cpp
  template <typename T>
  concept has_element_type = requires (T) {
      typename T::element_type;
  };
  ```

  Here, we check if `T::element_type` is a correct syntax that names a type. It can be a nested-struct declaration, a type-alias declared with the `using` keyword, etc.

- Requirements on syntax **and** values assertion

  ```cpp
  template <typename T>
  concept always_ok = (1 == 1 and true);
  ```

> ⚠️ **Warning** : A common error here is to declare concepts that mix-up **detection** and **value** in requires clauses.  
>  Considering the following concept declaration :
>
>    ```cpp
>    template <typename T>
>    concept Small = requires {
>        T::size < 4;
>    };
>    ```
> 
>   As you may read, this will *only* assert that `T::size < 4` is a valid syntax, not that the less-comparison of `T::size` and `4` results in something which is boolean-evaluable to `true`.
> 
> So, using the latest - *erroneous* - declaration of our `Small` concept, the following snippet does compile, which obviously is not be what the developer intended.
> Complete live demo available [here on godbolt](https://godbolt.org/z/ocqqezrxv).
> 
> ```cpp
> template <typename T>
> concept Small = requires { T::size < 4; }; // BAD
> 
> template <Small small_type>
> void func(small_type&&){}
> 
> struct big_type {
>     constexpr static auto size = 255;
> };
> 
> auto main() -> int {
>     func(big_type{});   // BAD : not what we expected
> }
> ```
> 
> A correct way to implement such concept is the following :
> 
> ```cpp
> template <typename T>
> concept Small = (T::size < 4);
> ```

In summary, a concept is a contract on types and compile-time values; and multiple concepts can be use in conjunction to create more complex *compile-time* contracts.

```cpp
template <typename T>
concept has_content_and_element_type = 
    has_member_content<T> &&
    has_element_type<T>   &&
    Small<T>
;
```

### `Requires` clauses without `concept` declaration

In addition to the previous section, it should be mentioned that `requires` clauses are not exclusive to the sole declaration of concepts.  
Declaring such clause to restraint a particular function or class template parameters is perfectly legal,  
which might be convenient in some cases, even if it goes against some reusability principle.

```cpp
template <typename T>
   requires (T::size < 4)
void func(const T & value) { /*...*/ }
```

Which is equivalent to :

```cpp
template <Small T>
void func(const T & value) { /*...*/ }
```

We mentioned in the previous part two syntaxes which use the `requires` keyword :

- `requires (<expr>)` where `<expr>` must be convertible to a boolean  which becomes the constraint.
- `requires { <expr>; }` which only evaluates whether or not `<expr>` is a valid syntax.

Both can be use in conjunction, as demonstrated in the following example :  
*(also available [here on godbolt](https://godbolt.org/z/oE5a9G3n4))*

```cpp
template <typename T>
   requires requires { T::size; }   // check if T::size if a legal syntaxe
auto get_size() {
    return T::size;
}

void usage() {
    
    auto small_size = get_size<small_type>();
    auto big_size = get_size<big_type>();
}
```

### Concepts vs. type_traits

Parallel are often made between concepts `requires` clauses and `type_trait`s resulting values.

In the previous section, we defined a `Small` concept that can - *like any concept* - participate in overload resolution.  

Let's consider the following scenario for implementation:

- We want to create a function that provides a specific implementation for types that match the `Small` concept.

Using our previously defined concept, we can now use it to split the compilation flow *(live example available [here on godbolt](https://godbolt.org/z/3o4h4qsG1))*:

```cpp
template <typename T>
concept Small = (T::size < 4);
template <typename T>
concept NotSmall = ! Small<T>;

template <Small small_type>
void func(small_type){
    // small-specific implementation...
}
template <NotSmall not_small_type>
void func(not_small_type){
    // default implementation...
}
```

Without `concept`s, we have several options to obtain a somehow similar behavior, one of them is to rely on type traits. Considering the following implementation:

```cpp
template <typename T, typename = void>
struct is_small : std::false_type{};
template <typename T>
struct is_small<T, std::void_t<decltype(T::size)>>
: std::bool_constant<(T::size < 4)>
  // alternatively :
  // std::conditional_t<(T::size < 4), std::true_type, std::false_type>
{};
template <typename T>
constexpr auto is_small_v = is_small<T>::value;
```

We can make this type-trait to participate in overload resolution when used in conjunction with `std::enable_if_t`.

```cpp
template <typename T, std::enable_if_t<not is_small_v<T>>* = nullptr>
void func(T) {
    // default implementation ...
}
template <typename T, std::enable_if_t<is_small_v<T>>* = nullptr>
void func(T) {
    // small-specific implementation
}
```

While producing - *in this case* - a similar behavior, this requires a much heavier syntax.  
Comparing type-traits and concepts for such usage, we must notice that one of the main asset of `concept`s is to make requirements expression straight-forward - without relying on a particular library feature.

> ⚠️ **Warning**
>
> For completeness sake, mentioned must be made that `concept`s are **not** a dropped-in replacement for `std::enable_if_t`-based constraints.  
> There is a corner case when a constraint depends on itself.
>
> For instance, consider a function which injects some code for a given type, but only if such type does not already have it.  
> Here is a quick demo that generates a default `operator+(T, U)` : [here on godbolt](https://godbolt.org/z/aaab7TrPP).  
>
> As you may see, the satisfaction of an atomic constraint cannot depend on itself, as it results in an endless recursive substitution.

### Concepts vs. type_traits : overload resolution

In the previous section, we illustrated a simple case where applying constraints using either `concepts` or `std::enable_if` produced the same behavior, while mentioning some limitations.

> ⚠️ However, this is **biaised** !  
> Indeed, `concepts` and `std::enable_if` does not participates in the same way to overload resolution.  

Using concepts, the **best candidate** is the most constrained one; While using `enable_if`, we conditionally generate the candidate function(s).  
Which means there might be more than one candidate - *with the same **priority*** - for a particular call, that may result an error caused by the **ambiguity**.

Let's condider the following example : we define a cat as something which is small, and can meow.  
Thus, the following class will match such `Cat` concept.

```cpp
struct kitty_cat {
    constexpr static std::size_t size = 2;
    void meow(){};
};
```

What we will do now is to create a function - *soberly named `func`* -,  
which will have different behaviors if resolved using something that match the `Small`, `CanMeow`, or `Cat` concept.

Using C++20 - thus, `concepts` - , we can write the following code :

```cpp
namespace cpp_20 {
    template <typename T>
    concept Small = (T::size < 4);
    template <typename T>
    concept CanMeow = requires (T value){ value.meow(); };
    template <typename T>
    concept CatType = Small<T> and CanMeow<T>;

    template <Small T>
    auto func() { return 1; }
    template <CanMeow T>
    auto func() { return 2; }
    template <CatType T>
    auto func() { return 3; }
}
```

And using C++17, we can write something somehow equivalent :

```cpp
namespace cpp_17 {
    template <class, class = void>
    struct is_small : std::false_type{};
    template <class T>
    struct is_small<T,
        std::void_t<decltype(T::size)>
    > : std::bool_constant<(T::size < 4)>{};

    template <class, class = void>
    struct can_meow : std::false_type{};
    template <class T>
    struct can_meow<T,
        std::void_t<decltype(std::declval<T>().meow())>
    > : std::true_type{};

    template <typename T>
    struct is_cat : std::conjunction<
        is_small<T>,
        can_meow<T>
    >{};

    template <typename T, std::enable_if_t<is_small<T>::value> * = nullptr>
    auto func() { return 1; }
    template <typename T, std::enable_if_t<can_meow<T>::value> * = nullptr>
    auto func() { return 2; }
    template <typename T, std::enable_if_t<is_cat<T>::value> * = nullptr>
    auto func() { return 3; }
}
```

Now, testing the two implementation above, what do we get ?

```cpp
auto main() -> int {
    static_assert(cpp_20::CatType<kitty_cat>);
    return cpp_20::func<kitty_cat>(); // returns 3
}
```

Which produced **`3`**, as expected.

However, when trying this with our C++17 implementation, the result is quite different.

```cpp
auto main() -> int {
    static_assert(cpp_17::is_cat<kitty_cat>::value);
    return cpp_17::func<kitty_cat>(); // compiler error : ambiguous overload resolution
}
```

As we get the following compiler error (here, using `GCC`) :

```log
<source>: In function 'int main()':
<source>:65:35: error: call of overloaded 'func<kitty_cat>()' is ambiguous
   65 |     return cpp_17::func<kitty_cat>();
      |            ~~~~~~~~~~~~~~~~~~~~~~~^~
<source>:42:10: note: candidate: 'auto cpp_17::func() [with T = kitty_cat; std::enable_if_t<cpp_17::is_small<T>::value>* <anonymous> = 0]'
   42 |     auto func() { return 1; }
      |          ^~~~
<source>:44:10: note: candidate: 'auto cpp_17::func() [with T = kitty_cat; std::enable_if_t<cpp_17::can_meow<T>::value>* <anonymous> = 0]'
   44 |     auto func() { return 2; }
      |          ^~~~
<source>:46:10: note: candidate: 'auto cpp_17::func() [with T = kitty_cat; std::enable_if_t<cpp_17::is_cat<T>::value>* <anonymous> = 0]'
   46 |     auto func() { return 3; }
      |          ^~~~
```

See the complete example [here on godbolt's compiler-explorer](https://godbolt.org/z/8f5xWvdMs).

At this point, we may wonder how to achieve the same behavior ?
Well, so far I used two differents way to solve this.

- Shamelessly use an `if-constexpr` cascade, in conjunction with tags

    ```cpp
    struct small_tag{};

    template <typename T>
    auto func_impl(small_tag) { return 1; }

    template <typename T>
    auto func() {
        // if-constexpr cascade ...
        if constexpr (is_small<T>::value)
            return func_impl<T>(small{});
        // else if constexpr () ...
        else
            static_assert([](){ return false; }(), "overload resolution failed");
    }
    ```

    Which is quite a heavy boilerplate. That we can furthermore increase, slightly enhancing safety :

    ```cpp
    namespace constraints_tag {

        template <typename T>
        struct small{ static_assert(is_small<T>::value); };
        template <typename T>
        struct meow{ static_assert(can_meow<T>::value); };
        template <typename T>
        struct cat{ static_assert(is_cat<T>::value); };
    };

    template <typename T>
    auto func_impl(constraints_tag::small<T>) { return 1; }
    template <typename T>
    auto func_impl(constraints_tag::meow<T>) { return 2; }
    template <typename T>
    auto func_impl(constraints_tag::cat<T>) { return 3; }

    template <typename T>
    auto func() {
        if constexpr (is_cat<T>::value)
            return func_impl<T>(constraints_tag::cat<T>{});
        else if constexpr (is_small<T>::value)
            return func_impl<T>(constraints_tag::small<T>{});
        else if constexpr (can_meow<T>::value)
            return func_impl<T>(constraints_tag::meow<T>{});
        else
            static_assert([](){ return false; }(), "overload resolution failed");
    }
    ```

    Still, such homebrew overload deduction guide is error-prone, and not that maintainable.  
    Also, the drawback here is that we do not expose any customisation point : adding more candidates requires to modify the `func` function, which might be an external library for instance.

    See the complete example here on [godbolt's compiler explorer](https://godbolt.org/z/T15WKf8Kx).

- Priority tags

    Another alternative is to generate a priority tags list.

    ```cpp
    namespace overload_resolution_priority {

        using value_type = std::uint8_t; // priority indexes range [min, max]
        template <value_type value> struct tag : tag<value - 1>{};
        template <>                 struct tag<0>{};

        using min_t = tag<std::numeric_limits<value_type>::min()>; // priority : min
        using max_t = tag<std::numeric_limits<value_type>::max()>; // priority : max
    }
    namespace details {
        template <typename T>
        auto func_impl(overload_resolution_priority::min_t) {   // default/fallback case
            static_assert([](){ return false; }(), "overload resolution failed");
        }
        template <typename T, std::enable_if_t<is_cat<T>::value>* = nullptr>
        auto func_impl(overload_resolution_priority::tag<3>) {  // is_cat
            return 3;
        }
        template <typename T, std::enable_if_t<can_meow<T>::value>* = nullptr>
        auto func_impl(overload_resolution_priority::tag<2>) {  // can_meow
            return 2;
        }
        template <typename T, std::enable_if_t<is_small<T>::value>* = nullptr>
        auto func_impl(overload_resolution_priority::tag<1>) {  // is_small
            return 1;
        }
    }
    template <typename T>
    decltype(auto) func() {
        return details::func_impl<T>(overload_resolution_priority::max_t{});
    }
    ```

    See the complete example here on [godbolt's compiler explorer](https://godbolt.org/z/YjqPKr8v4).

    Here, we used an inheritance tree to generate a range of tags, which are then used to specificy the priority order when resolving overload.  
    This works as intended, despite some build performances  - *as we here evaluate up to 255 candidates*;

    ⚠️ The issue here is, as we most likely will use namespaces - *other than the non-global one* - to wrap things up, only functions & types declared **before** the call are candidates. See the [complete demonstration here](https://godbolt.org/z/fT99be93h).  
    Which makes us unable to consider as a customisation point the declaration of others candidates defined after `func()`.  
    A work-around would be to **not** use any user-defined namespaces ... but one does not want to pollute the global namespace, right ?

    For completness sack, [here is an example](https://godbolt.org/z/EfbKb6Mnj) that works with a customisation point - *thus, all implementation details are in the global namespace*.

In conclusion, there is no simple, dropped-in replacement for `concepts` when using previous standards.  

See [here the complete example](https://godbolt.org/z/PPPbsaMEG) using C++20 concepts :

```cpp
template <typename T>
concept Small = (T::size < 4);
template <typename T>
concept CanMeow = requires (T value){ value.meow(); };
template <typename T>
concept CatType = Small<T> and CanMeow<T>;

namespace ns {
    template <Small T>
    constexpr auto func() { return 1; }
    template <CanMeow T>
    constexpr auto func() { return 2; }
    template <CatType T>
    constexpr auto func() { return 3; }
}

// --- user/consummer side :

struct kitty_cat {
    constexpr static std::size_t size = 2;
    void meow(){};
};

template <typename T>
concept MagicCat = CatType<T> and requires (T value) {
    value.do_magic();
};

struct magic_kitty_cat {
    constexpr static std::size_t size = 3;
    void meow(){}
    void do_magic(){}
};

namespace ns {
    template <MagicCat T>
    constexpr auto func() { return 42; }
}

auto main() -> int {
    // C++20 example, using concepts, with customisation point

    // kitty_cat
    static_assert(CatType<kitty_cat>);
    static_assert(ns::func<kitty_cat>() == 3);

    // magic_kitty_cat
    static_assert(CatType<magic_kitty_cat>);
    static_assert(ns::func<magic_kitty_cat>() == 42);
}
```

### Few words about the C++ detection idiom in C++11

The code examples presented in the previous section can be implemented using C++11, at the cost of some extra tricks usage *(mostly relying on commas though and variadic parameters)*.

See the example [here on godbolt](https://godbolt.org/z/ssrf9GTWo).

```cpp
template <typename T>
struct can_meow {

  template <typename U>
  static constexpr decltype(std::declval<U>().meow(), bool())
  value_impl(int) {
    return true;
  }

  template <typename U>
  static constexpr bool value_impl(...) {
    return false;
  }

  static constexpr bool value = value_impl<T>(int());
};
```

As well as minor adjustements in the usage part :

```cpp
// `static_assert` 2nd parameter is mandatory until C++17
static_assert(can_meow<cat_impl>::value, "can_meow : constraint violated");

// `std::enable_if_t` is a C++14 feature
template <typename T, typename std::enable_if<can_meow<T>::value>::type* = nullptr>
void func(T && value) { 
    value.meow();
}
```

More details about the evolution of the detection idom through the years [here](https://people.eecs.berkeley.edu/~brock/blog/detection_idiom.php).

### Few words about `std::experimental::is_detected`

The library fundamentals TS v2 introduced a feature that, even if is still an experimental one, is worth mentioning when writing about the detection idiom in C++ : [std::is_detected](https://en.cppreference.com/w/cpp/experimental/is_detected).

The core idea of this type-trait is, according to the SRP principle, to separate the way we express a detection expression, and its evaluation.

```cpp
// Detecting `.size()` syntax

template <class T>
using size_type = decltype(std::declval<T>().size());

template <class T>
using has_size_t = std::experimental::is_detected<size_type, T>;
template <class T>
constexpr auto has_size_v = has_size_t<T>::value;
```

That can be use the following way :

```cpp
struct container {
    auto size() const noexcept {
        return 42;
    }
};

static_assert(has_size_v<container>, "has_size constraint violated");

template <typename T, std::enable_if_t<has_size_v<T>>* = nullptr>
void only_types_that_with_size() {
    /* ... */
}
```

Another interesting feature is `std::detected_or_t`, which allows the user to provide a default argument to be used if the detection fails.  
This basically is an `std::conditional_t<detection_expr_v, detected_element, default_element>`.

```cpp
// Detecting `::id_type` type

template <typename T>
using id_type_identifier = typename T::id_type;

using default_id_type = unsigned int;
template <typename T>
using id_type = std::experimental::detected_or_t<default_id_type, id_type_identifier, T>;
```

Which usage might be :

```cpp
struct entity_A {
    using id_type = short;
};
struct entity_B{};

static_assert(std::is_same_v<id_type<entity_A>, short>);
static_assert(std::is_same_v<id_type<entity_B>, default_id_type>);
```

Complete examples available on godbolt :
- [C++14 example](https://godbolt.org/z/aYExz4Exj)
- [C++17 example](https://godbolt.org/z/rhWoq8Me1)

### Few words about `constexpr-if` instructions

Also note that either type-traits resulting values, and concepts can be evaluated in if-constexpr statements in a very similar way,  
which while not being a very scalable option, might be handy in some cases.  
For instance, when isolating a specific behavior for a particular type without resorting to function overloading.

- **Type traits** :

    ```cpp
    template <typename T>
    void func(T) {
        if constexpr (is_small_v<T>) {
            // small-specific implementation...
        }
        else {
            // default implementation...
        }
    }
    ```

- **Concepts** :

    ```cpp
    template <typename T>
    void func(T) {
        if constexpr (Small<T>) {
            // small-specific implementation...
        }
        else {
            // default implementation...
        }
    }
    ```

## Part II : Concrete example

### Defining our study case

For the purpose of this paper, we will study a kinda more meaningful and complete example.

Imagine that we are creating video game, with sereval entities.  
For the sack of simplicity, entities can be any type that match the following contract :

- An entity must implement a `behave()` member function
- An entity must implement a `get_hp()` member function, which must return a value which type is convertible with `unsigned int`

Now, let's dive into some code.

### Contracts basics : defining and using constraints

```cpp
#include <concepts>
namespace contracts::cpp20
{
    template <typename T>
    concept can_behave = requires(T value)
    {
        value.behave();
    };

    template <typename T>
    concept has_hp_getter = requires(const T value)
    {
        { value.get_hp() } -> std::convertible_to<unsigned int>;
    };

    template <typename T>
    concept entity =
        can_behave<T> and
        has_hp_getter<T>
    ;
}
```

In this C++20 example, we create an `entity` contract which is the conjunction of two previously defined one, `can_behave` and `has_hp_getter`.  

- `can_behave` detects `std::declval<T>().behave()` is a legal synthax.  
  
  Thus, the following types will work juste fine :

  ```cpp
  struct impl_1{ void behave(); };
  struct impl_2{ int  behave(); };
  struct impl_3{ int  behave(int = 42); };
  struct impl_4{ std::function<void()> behave; };

  static_assert(
      can_behave<impl_1> and
      can_behave<impl_2> and
      can_behave<impl_3> and
      can_behave<impl_4>
  ); // OK
  ```
- `has_hp_getter` not only ensure that `std::declval<T>().get_hp()` is valid,  
  but also that its return type is convertible to `unsigned int`.

What about C++17 ?  
We can achieve a similar behavior using type-traits :

```cpp
#include <type_traits>
#include <utility>

namespace contracts::cpp17
{
    // detection idiom
    template <typename T, typename = void>
    struct can_behave : std::false_type{};
    template <typename T>
    struct can_behave<T, std::void_t<decltype(std::declval<T>().behave())>>
    : std::true_type{};

    // detection idiom + return value check
    template <typename T, typename = void>
    struct has_hp_getter : std::false_type{};
    template <typename T>
    struct has_hp_getter<T, std::void_t<decltype(std::declval<const T>().get_hp())>>
    : std::is_convertible<decltype(std::declval<const T>().get_hp()), unsigned int>{};

    template <typename T>
    struct is_entity : std::conjunction<
        can_behave<T>,
        has_hp_getter<T>
    >
    {};
}
```

Here, we used the detection-idiom with [std::void_t](https://en.cppreference.com/w/cpp/types/void_t) to detect if `std::declval<T>().behave()` and `std::declval<const T>().get_hp()` are well-formed,  
but also an existing STL type-trait, `std::is_convertible`, to evaluate `get_hp()` return type.

With the previous code sample, we then can write :

```cpp
static_assert(
      can_behave<impl_1>::value and
      can_behave<impl_2>::value and
      can_behave<impl_3>::value and
      can_behave<impl_4>::value
  ); // OK
```

Which is close to our C++ 20 example, but not there yet.  
Now we can get ride of the `::value` by using a `constexpr auto` value, like most STL type-traits do with their associated `<name>_v` :

```cpp
template <typename T, typename = void>
struct can_behave_t : std::false_type{};
template <typename T>
struct can_behave_t<T, std::void_t<decltype(std::declval<T>().behave())>>
: std::true_type{};

template <typename T>
constexpr auto can_behave = can_behave_t<T>::value;
```

And so on for others. See the complete example [here on godbolt](https://godbolt.org/z/v7TTosonh).

Now, using either the C++17 or C++20 implementation, we can test our final `entity` contraint in a `static_assert` :

```cpp
struct entity_implementation
{   // example
    void behave(){}
    std::size_t get_hp() const { return 42; }
};
static_assert(contracts::cpp20::entity<entity_implementation>); // OK
static_assert(contracts::cpp17::entity<entity_implementation>); // also OK
```

### Contracts basics : restricting signatures

Historically in C++, we use SFINAE - often with helpers like `std::enable_if_t` to restrict instanciation of a particular symbol.  
Which semantically is applying a constraint, right ?

Let's continue with our `entity` example, by defining a `use_entity` function which symbol can be instanciated with any that match our contract.

In C++17, we could write :

```cpp
template <
    typename entity_type,
    typename = std::enable_if_t<contracts::cpp17::entity<entity_type>::value>
>
void use_entity(entity_type &&)
{}
```

Here, the following code is perfectly fine :

```cpp
use_entity(entity_implementation{});
```

However, and as you may already have experienced before, [std::enable_if_t](https://en.cppreference.com/w/cpp/types/enable_if) is far to be perfect solution.
Beside other criticisms, the plurality of available synthaxes for the same purpose comes to my mind first.  
This is not only confusing for beginners, but also takes some mental space by polluating codebases with such heavy synthax that does not simply best reflect what the developer wanted to express.  

Last but not least, as we most use this for years, we tend to forget that it is quite unsafe.

Take the following example ([here on godbolt](https://godbolt.org/z/49jf9MPre)) :

```cpp
#include <type_traits>

template <typename T>
struct always_false {
    // T-dependent false value
    constexpr static auto value = false;
};

template <
    typename T,
    typename = std::enable_if_t<always_false<T>::value>> // should never work
void func(){}

void usage()
{
    // func<int>(); // OK : no matching function
    func<int, int>(); // KO : this is legal, thus will compile
}
```

Because the second template type parameter is a default one, the user can by-pass it by explicitly specifying a type.  
From my perspective, such scenario is quite frequent, especially when the developer is not familiar with such idiom or semantic.  

This is exactly why in many cases, using a `static_assert` might be a better way to check for potential contract violation.

```cpp
template <typename entity_type>
void use_entity(entity_type &&)
{
    static_assert(
        contracts::cpp17::entity<entity_type>::value,
        "contract contracts::cpp17::entity violation"
    );
    // ...
}
```

However, the trade-off here is that we loose one of the - *main* - aspect of `std::enable_if`, which is to participate in overload resolution.

An - *debatable* - option here would be to use an `if-constexpr` clause :

```cpp
template <typename entity_type>
void use_entity(entity_type &&)
{
    if (contracts::cpp17::entity<entity_type>::value)
    {
        // ...
    }
    else
    {
        // deal with contract violation here,
    }
}
```

As conclusion, we should never underestimate how short delays and promoted quick-wins can deeply damage codebases over time.

This is why strong, reliable, compile-time check contracts are so important to guarantee design stability across a codebase lifetime. Shitstorms happend, and quick-wins - *with parsimony* - are necessary things.  
But this **should not** justify the sacrifice of any existing designs.

Luckily enough, C++20 introduced template restriction in an elegant way.  
By replacing the `typename` or `class` keyword in template declaration with a contract name,  
we ensure that such type fulfill the contract.  
Also, many concepts comes with the STL, see the [concept library documentation](https://en.cppreference.com/w/cpp/concepts).

```cpp
template <std::integral my_integral_type>
void func_1();

template <std::integral my_integral_type>
void func_2(my_integral_type my_integral_value);
```

This also works fine to restrict auto-values' types :

```cpp
template <std::integral auto my_integral_value>
void func_3(); // non-type template parameters (NTTP)

void func_4(std::integral auto my_integral_value); // dynamic value
```

Also, it is sometimes convenient to directly create constraint(s), for instance when a contract is not about to be used somewhere else.

```cpp
template <typename my_integral_type>
void func_5(my_integral_type my_integral_value)
    requires std::integral<my_integral_type>
{}
```

And this highlight something that is often confusing to beginners : 

- Why do I have in one hand `std::integral my_integral_type`, and on the other one `std::integral<my_integral_type>` ?

Because when using the first synthax, the type-parameter is automatically passed as the first argument of the concept.  
Take the `std::convertible_to<From, To>` concept for instance, that takes not one but two template-type-arguments ([here on godbolt](https://godbolt.org/z/s9o7KGoas)):

```cpp
#include <concepts>

template <std::convertible_to<int> some_type>
void func_1(){}

// is similar to :

template <typename some_type>
    requires std::convertible_to<some_type, int>
void func_2(){}
```

So we can now apply such mecanism to our example scenario :

```cpp
namespace usage::cpp20
{
    using namespace contracts::cpp20;
    template <entity entity_type>
    void use_entity(entity_type &&)
    {}
}
```

As you may read, this is much more reliable that our C++17 implementation, for the reasons we previously mentionned.  
Beside that obvious benefit, we may notice that contract violation will result in a much meaningful error message.

> **A/N** : This really depends on your compiler : as writing, Clang generates much simplier messages than GCC.

```cpp
struct entity_implementation
{   // example, BAD
    void behave(){}
    std::string get_hp() const { return "42"; } // BAD : return's type is not trivialy convertible to `unsigned int`
};
```

C++20 output (see [here on godbolt](https://godbolt.org/z/WeGWd5dfs)) :

```log
candidate template ignored: constraints not satisfied [with entity_type = entity_implementation]
    void use_entity(entity_type &&)
         ^
    because 'entity_implementation' does not satisfy 'entity'
    template <entity entity_type>
              ^
    note: because 'entity_implementation' does not satisfy 'has_hp_getter'
```

However, for the sack of completness, we must notice that using our C++17 implementation, **`Clang`** does a pretty good job by identifying `std::enable_if_t` usage as a constraint on type `(see [here on godbolt](https://godbolt.org/z/Pd54zbedj)) :

```log
error: no matching function for call to 'use_entity'
    usage::cpp17::use_entity(entity_implementation{});
    ^~~~~~~~~~~~~~~~~~~~~~~~
    note: candidate template ignored: requirement 'contracts::cpp17::entity<entity_implementation>' was not satisfied [with entity_type = entity_implementation]
    void use_entity(entity_type &&)
         ^
```

## Part III : Clean interfaces, components partitioning, and polymorphism using concepts

Basically, an interface is the description of a component capacities, without commiting to any particular implementation.

### Perils of inheritance

Most training materials, especially schools ones, use to teach that in C++ an interface is necessarily a class, that declares at least one pure virtual members.  
Thus, implementation must be defined in classes that inherit from such base class.

```cpp
class EntityInterface {
public:
    virtual void behave() = 0;
    
    using hp_type = unsigned int;
    virtual hp_type get_hp() const = 0;
};

class EntityImpl1 : public EntityInterface{
    void behave(){ /*...*/ }
    EntityInterface::hp_type get_hp() const { return 42; };
}
```

Which provides a flexibility on implementation details, but not on the interface itself.  

Using inheritance to expose interfaces - while providing some benefits from polymorphisme and reusability - often results in tight-couplings that endanger projects scalability.  
Why ? Because any implementation class needs to know each classes it depends on, directly.

That mean the user must not only include the files that define these classes, but also inherit from them explicitly,  
With all the related issues that this way to proceed involves - for instance in case of members names clash or diamond-shaped inheritance.

Let's have a look to the following example :

```cpp
#include <game_engine/components/physic.hpp>            // collisionable
#include <game_engine/components/rendering.hpp>         // renderable
#include <game_engine/components/details/entities.hpp>  // movable, damageable
// etc.

struct Hero final :
    ge::physic::collisionable,
    ge::rendering::renderable,
    ge::entities::components::moveable,
    ge::entities::components::damageable
    // etc.
    {
        // overriding a tons of pure-virtual member function here ...
    };

void usage() {
    Hero peter;

    if (ge::physic::check_collision<ge::physic::algorithms::AABB>(  // collisionable
            ge::physic::point{
                ge::screen::width / 2,
                ge::physic::screen::height / 2},
            peter.hitbox)
    )
        peter.hp -= 2;                              // damageable

    ge::rendering::engine re_engine;
    re_engine.render(peter);                        // renderable

    peter.move_toward(ge::physic::point{42, 42});   // moveable
    peter.velocity *= 0.5;                          // moveable
}
```

What happends here, if multiples base-classes define a `to_string` member function ? Or a `storage` member variable ?  
Even worst, what tricky work-around would you use, if these name clashes comes from base classes that are each defined in external libraries ?

As you might see, dangerous tight-coupling between interfaces and the final implementation class might be quite dangerous.  
`concepts` come handy to loosen thoses couplings up, by providing a way to design even more flexible - and up to a cetain limit, resilient to change - interfaces.

### Concepts as static & runtime polymorphism providers

Comparing to the concepts we defined in [the first part](#part-i--concrete-example), the polymorphism ability here is much more restrictive - from both a design and implementation perspective.

Why ?

Using inheritance, pure virtual members define strict signatures. Concepts, on the other hand, have the ability to only define requirements over synthaxes.

  ```cpp
  template <typename T>
  concept can_behave = requires (T value) {
      value.behave();
  };
  ```

  Here, what we required is that `T` has a `T::behave` member, where `std::declval<T>().behave()` is a legal synthax.  

  This way, `T::behave` can be anything from a member function, to any member variable that defines an `operator()`.  
  Also, no requirements on the invocation return type nor parameters are expressed here, which increase the flexibility futher.  
  Therefore, the following types match our previously defined `can_behave` contract requirements.

  ```cpp
  struct impl_1 {
      void behave();
  };
  struct impl_2 {
      std::string behave(int = 42);
  };
  struct impl_3 {
      std::function<int()> behave;
  }
  ```

We mentioned in the previous subsection that implementations classes need to know their base classes.  
Thus, interfaces are sealed upstream, proactively.  
By using concepts, the implementation can fulfill a contract requirements without even being aware of such.  
Thus can be define either **proactively** (a concept shared between parts) or **reactively** (the consumer creates a contract to ensure that a given type matches a set of requirements).

Another aspect that makes such mecanism particulary efficient is its ability to prevent unecessary escalation when introducing changes.  
Imagine that - for instance - your are using an external library which exposes the `can_behave` concept as defined above.  
For some reasons, in your project, you now need to restrict that concept futher more, according to the following specs :

- `behave()` must be `const`
- `behave()` must return a value, that is convertible to an error code

Using inheritance-based polymorphisme, because of its restrictive aspect, you would need to request to the library editor a change, that it could refuse,  
or use some additional indirections to wrap things up so it matches your need.  
Using `concepts`, you can always add new requirements by extending an existing set, or simply create a new one.

```cpp
// ext_libs/some_lib/entities.hpp
namespace some_lib {
    template <typename T>
    concept can_behave = requires (T value) {
        value.behave();
    };
}

// project/error_codes.hpp
namespace project::error {
    enum class code : uint8_t {
        none = 0,
        // ...
    };
}

// project/entities_implementations.hpp
#include <ext_libs/some_lib/entities.hpp>
#include <project/error_codes.hpp>
namespace project::entities {
    template <some_lib::can_behave T>
    concept can_behave = requires (const T value) {                         // const
        { value.behave() } -> std::convertible_to<project::error::code>;    // return value convertible to error code
    };

    struct hero {
        project::error::code behave() const{
            /* ... */
            return project::error::code{};
        }
    };
}

template <project::entities::can_behave entity_type>
void usage(const entity_type & entity_value) {
    if (const auto behavior_result = entity_value.behave();
        behavior_result not_eq project::error::code::none) {
        // ...
    }
}
```

> Also, C++ 20 concepts - *just like type-traits* -, can always be evaluated in `static_assert` instructions.  
> This is a convenient way to validate - *prior to usage* - that a given type fulfills a specific contract, such as :
> 
> ```cpp
> // impl.hpp
> struct my_impl{ /* details... */ };
> 
> // some_concept.hpp
> concept some_concept = /* ... */;
> 
> // usage.hpp
> static_assert(some_concept<my_impl>); // Contract evaluation at compile-time
> ```

In term of partitioning, what matters here is the dissociation of interfaces and implementations classes so they do not need see each others.  
The user might then check that the contract is fulfilled or not.

### C++17 : Type erasure example

An interesting demonstration of such contract evaluation is when implementing some type-erasure type,  
as this allows some runtime polymorphisme based on the compile-time one provided by `concept`s.

A key point here is that of course we are using inheritance to implement a type erasure mechanism,  
but as an **implementation detail** that is not visible - *so, **opaque*** - to the user.

Here, we will use our previously defined `entity` example :

***Disclaimer** : Here, we intentionaly skip some implementation details to focus on contracts validation.*  
*You might be willing to implement a move & copy constructors respectively using clone & swap member-functions for instance.*

```cpp
#include <memory>
namespace type_erasure::cpp17
{
    struct any_entity
    {
        template <typename T>
        any_entity(T && arg)
        : value_accessor{ std::make_unique<model<T>>(std::forward<decltype(arg)>(arg)) }
        {
            static_assert(concepts::cpp17::is_entity<T>::value);
        }

        void behave() {
            value_accessor->behave();
        }
        auto get_hp() const {
            return value_accessor->get_hp();
        }

    private:
        struct concept_t
        {
            virtual ~concept_t() = default;
            virtual void behave() = 0;
            virtual unsigned int get_hp() const = 0;
        };
        template <typename T>
        struct model final : concept_t
        {
            model(T && arg)
            : value{std::forward<decltype(arg)>(arg)}
            {}
            ~model() override {}
            void behave() override { value.behave(); }
            unsigned int get_hp() const override { return value.get_hp(); }
        private:
            std::decay_t<T> value;
        };
        std::unique_ptr<concept_t> value_accessor;
    };

    static_assert(concepts::cpp17::is_entity<any_entity>::value);
}
```

An alternative here would be to use `std::enable_if_t`, which would result in a behavior closer to what C++20 concept provide.  

```cpp
struct any_entity
{
    template <
        typename T,
        typename = std::enable_if_t<concepts::cpp17::is_entity<T>::value>
    >
    any_entity(T && arg)
    : value_accessor{ std::make_unique<model<T>>(std::forward<decltype(arg)>(arg)) }
    {}
    // ...
};
```

However, because of the reasons we mentioned before, it might be safier here - *from a defensive code perspective* - to use `static_assert` as it cannot be by-passed, in opposition to `std::enable_if`.

Now, we can use this newly implemented type as intended,  
with two additional types that match the entity contract :

```cpp
namespace usage
{
    struct hero
    {
        void behave(){}
        auto get_hp() const -> unsigned int { return 100; }
    };
    struct monster
    {
        monster(unsigned int hp_arg)
        : hp{hp_arg}
        {}
        void behave()
        {
            hp -= 1;
        }
        auto get_hp() const { return hp; }

    private:
        unsigned int hp = 13;
    };
}
```

The demonstration scenario here is to create a collection of entities, make them behave once,
then calculate the sum of their hit points.

```cpp
#include <vector>
#include <numeric>
namespace usage::cpp17
{
    auto use_entity_type_erasure()
    {
        using namespace type_erasure::cpp17;
        using namespace usage;

        using collection_type = std::vector<any_entity>;

        collection_type entity_collection;
        entity_collection.emplace_back(hero{});
        entity_collection.emplace_back(monster{42});
        // 💡 better initialization:
        //  Alternatively, to initialize a vector of move-only types,
        //  use an IILE that create an std::array of desired values,
        //  and a std::vector initialized with move_iterators from that array

        for (auto & element : entity_collection)
        {
            element.behave();
        }
        return std::accumulate(
            std::cbegin(entity_collection),
            std::cend(entity_collection),
            0,
            [](auto intermediate_sum, const decltype(entity_collection)::value_type & element){
                return element.get_hp() + intermediate_sum;
            }
        ); // returns 100 + (42 - 1) => 141
    }
}
```

### C++20 : Type erasure example

Using C++20, the implementation might slightly differs :

```cpp
struct any_entity
{
    any_entity(concepts::cpp20::entity auto && arg)
    : value_accessor{ std::make_unique<wrapper<decltype(arg)>>(std::forward<decltype(arg)>(arg)) }
    {}
    // ...
};
static_assert(concepts::cpp20::entity<any_entity>);
```

What matters here, is in both cases we restricted `T` to match our previously-defined `concepts::cpp20::entity` set of requirements.

Also, both `any_entity` type and the type wrapped in share the same interface, `concepts::cpp20::entity`.

In addition, we introduce here a new synthaxe called `abbreviated function templates / constrained auto`, which is somehow equivalent to :

```cpp
template <concepts::cpp20::entity T>
any_entity(T && arg)
: value_accessor{ std::make_unique<model<T>>(std::forward<T>(arg)) }
{}
```

For additional informations about constrained auto, please check [abbreviated function templates and constrained auto](https://devblogs.microsoft.com/cppblog/abbreviated-function-templates-and-constrained-auto/);

Finaly, if you are interested in the topic of interfaces and generic code, you may want to check the [meta-classes proposal](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2018/p0707r3.pdf) which introduce the `interface` keyword, `.as` and `.is` detection utilities, as well as many interesting mecanisms for generic programming.

### C++17 and C++20 : Why not use `std::variant` ?

An common pattern for runtime-polymorphism is to use `std::variant` in association with `std::visit` to provide an homogeneous synthax on use.

Here, we can improve such usage scenario, by restricting `std::variant` template-type arguments to types that match a specific contract.

```cpp
// in C++20 :
template <concepts::cpp20::entity ... entities_types>
using entity_variant = std::variant<entities_types...>;

// in C++17 :
template <
    typename ... entities_types,
    typename = std::enable_if_t<((concepts::cpp17::is_entity_v<entities_types> && ...))>
>
using entity_variant = std::variant<entities_types...>;
```

```cpp
#include <variant>
namespace usage::cpp20
{
    template <concepts::cpp20::entity ... entities_types>
    using entity_variant = std::variant<entities_types...>;

    auto use_entity_type_erasure()
    {
        using element_type = entity_variant<hero, monster>;
        using collection_type = std::vector<element_type>;

        auto entity_collection = collection_type{
            hero{},
            monster{42}
        };

        const auto behave_visitor = [](auto & any_entity){
            any_entity.behave();
        };
        for (auto & element : entity_collection)
        {
            std::visit(behave_visitor, element);
        }
        return std::accumulate(
            std::cbegin(entity_collection),
            std::cend(entity_collection),
            0,
            [](auto intermediate_sum, const decltype(entity_collection)::value_type & element){
                return
                    std::visit([](const auto & e){
                        return e.get_hp();
                    }, element) + intermediate_sum;
            }
        );
    }
}
```

> What is the trade-off here, comparing to our previously designed type-erasure ?
>
> - As you may notice, at the point where our `element_type` is defined, we need to declare - *thus know* - which types we allow as potential `std::variant` content.
> - We do not need to manually create a type-erasure class
> - We might consider the memory space of the resulting `std::variant`, which is a common criticism.

**Off-topic digression** : here, we use explicit types when initializing `std::variant`s values.  
However, in some cases where you do not know which types parameterize a specific `std::variant`, you might want to use overload resolution provided by the constructor, such as [demonstrated in this example](https://godbolt.org/z/Wexsah9bP).

### `std::variant`s & `concepts` : overload resolution

We mentionned before that concepts participate in overload resolution. Why not try to use such characteristic in conjunction with `std::visit` internal dispatch to create partially specialized, still homegenous use-cases ?  
The idea here to implement a context in which the user is guarantee that this last will only be reached by types that match a particular set of constraints.  
In a way, such system is somehow similar to an [ECS](https://en.wikipedia.org/wiki/Entity_component_system) pattern.

For this example, we will a create a quite naive - and suboptimal - entity system for a hypothetical video game.  
First, let's create a bunch of concepts to define which types we consider as being `moveable`, `renderable`, and such.

***Disclaimer** : for the sake of this example, we will skip some implementation details to keep the later simple.*

```cpp
namespace game::entity::concepts {
    template <typename T>
    concept moveable = requires (T value) {
        value.velocity;
        value.position;
    };
    template <typename T>
    concept renderable = requires (const T value) {
        value.render_to(std::declval<game_engine::rendering&>());
    };
    template <typename T>
    concept has_behavior = requires (T value) {
        value.behave();
    };
}
```

After what, we can provide some implementations that each might match some of the previously defined concepts.  
Here, :

- A `character` that is `moveable`, `renderable`, and which has a defined `behavior`.
- A `tree`, which only match the `renderable` requirement
- A `hidden magic spike`, that cannot move not be rendered, but only behave. (For instance, to deal damages to any character that walks on).

```cpp
namespace game::entity::implementations {
    struct character {  // moveable, renderable, has_behavior
        void render_to(game_engine::rendering&) const {};
        void behave(){};
        
        const int velocity = 2;
        const std::pair<int, int> position = {0, 0};
    };
    struct tree { // renderable
        void render_to(game_engine::rendering&) const {};
        const std::pair<int, int> position = { 0, 0};
    };
    struct hidden_magic_spike { // has_behavior
        void behave(){ };
    };
}
```

At that point, what we need is an homogeneous way to deal with a collection of entities. For this purpose, we will use a simple `std::vector` of `std::variant`.

```cpp
using entity_type = std::variant<character, tree, hidden_magic_spike>;
using entity_collection = std::vector<entity_type>;

auto entities = entity_collection {
    character{},
    tree{},
    hidden_magic_spike{}
};
```

Before we can use our collection, it remains to implement the actions themselves.

What we need here is an utility which ensures that overload resolution is able to infer template arguments,  
by providing a substitution - default - behavior in case a particular type does not match the set of requirements.

For this very purpose, we will use the [overload pattern](https://www.bfilipek.com/2019/02/2lines3featuresoverload.html), which might become part of the standard (see the [P0053r3 proposal](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2018/p0051r3.pdf)).

```cpp
template <typename ... Ts>
struct overload : Ts... {
    using Ts::operator()...;
};
```

```cpp
const auto move_visitor = overload{
    [](moveable auto arg){
        const auto [x, y] = arg.position;
        arg.velocity;
    },
    [](auto){ /* default case */ }
};
game_engine::rendering rendering_window;
const auto rendering_visitor = overload{
    [&rendering_window](renderable auto arg){
        arg.render_to(rendering_window);
    },
    [](auto){ /* default case */ }
};
const auto behave_visitor = overload{
    [](has_behavior auto arg){
        arg.behave();
    },
    [](auto){ /* default case */ }
};
```

Final, we can use this visitor to apply partially specialized behaviors to our set of entities :

```cpp
for (auto & value : entities) {
    std::visit(move_visitor, value);
    std::visit(behave_visitor, value);
    std::visit(rendering_visitor, value);
}
```

For illustration purpose, we will add a simple console output which diplays the type's name in each visitor internal logic,

```cpp
std::cout << " - " << typeid(decltype(arg)).name() << '\n';
```

and process them sequentially :

```cpp
std::cout << "move :\n";
for (auto & value : entities) {
    std::visit(move_visitor, value);
}
std::cout << "render :\n";
for (auto & value : entities) {
    std::visit(rendering_visitor, value);
}
std::cout << "behave :\n";
for (auto & value : entities) {
    std::visit(behave_visitor, value);
}
```

Which may result in the following output, depending on you type decoration convention :

```log
move :
 - character
render :
 - character
 - tree
behave :
 - character
 - hidden_magic_spike
```

You can find the complete example [here on godbolt](https://godbolt.org/z/9v4f7s93r)

For completness sake, we must consider limitations. As mentioned before, the compiler need to infer template argument, so substitution does not fail.

### Conclusion : Interfaces & components partitioning

In this second part, we saw that the `concept` - or its emulation in the standards prior to C++ 20 - is a powerful feature,  
that not only secure designs integrity by enhancing **SoC** (Separation of Concerns) principle, but also provide very flexible polymorphism in an **LSP** (Liskov Substitution Principle) way.  
Also, even if `concept` is a compile-time feature, we saw that opaque types - *like the previously demonstrated type-erasure implementation* - constitute a convenient solution for - *statically restricted,* - dynamic/runtime polymorphism.

As-is, `concept`s might be consider as a dropped-in solution to help dealing with large, legacy codebases, by providing a way to partition intricated designs,  
thus fixing tight-couplings that endanger projects scalability.

An relevant example that comes to my mind are class-definition-hells (or includes/fwd-declaration hells/mess).  
A few years ago, I had to deal with a codebase with files similar to the following, where `include` preprocessor-directives and forward-declarations was mixed-up on top of each files,  
making any change risky - if not quite impossible.  

Basically, such a problem is usually the result of a lack of partitioning, so multiple classes need to be aware of each others.

```cpp
#include <...>      // 30+ includes directives
class smthg;        // 50+ class-forward declarations
#include <...>
class smthgelse;    // 50+ class-forward declarations
// etc.

class some_implementation : ...able, ...able, ...able // many "-able" classes
{};

// another file
void usage() {
    some_implementation value;
    value.initialize_/*...*/able_interface(/*many args here...*/);  // was supposed to avoid constructors with 50+ parameters...
    value.initialize_/*...*/able_interface(/*many args here...*/);  // as well as avoiding 80+ chained setters like : `auto & set_smthg(){ return *this; }`
    value.initialize_/*...*/able_interface(/*many args here...*/);
    // etc.
}
```

In a nutshell, `concept`s are a way to :

- Restraint given types using syntactic-based sets of requirements, with user-defined flexibility
- Provide static polymorphism, with user-defined granularity
- Create safier & cleaner code easily
- Avoid error bloat when using `template`s

## Appendix & bonuses

### Bonus : Concepts & NTTP

In this paper, we saw that concepts can restraint types.  
While this is true, it suits for completeness sake to mention that such feature can also restrict NTTP in two ways :

- By value

   ```cpp
   template <auto N>
   concept less_than_four = (N < 4);
   
   static_assert(less_than_four<3>);
   ```

- By type

   ```cpp
   template <std::convertible_to<int> auto value>
   void usage(){}
   ```

   with is equivalent to :

   ```cpp
   template <auto value>
   requires(std::convertible_to<int, decltype(value)>)
   void usage(){}
   ```

### Bonus : Concepts emulation in C++17

Prior to C++20 `concept`s, we attempted to emulate such feature using simple utilities, such as :

```cpp
#include <type_traits>

template <template <typename...> class ... type_traits>
struct requires_t {
    template <typename T>
    constexpr static bool value = std::conjunction_v<type_traits<T>...>;
};
```

To illustrate how to use this, we will define the following concept :

- A `Cat`, that `is small` and can `meow`.

We then define theses two specificities using type traits :

```cpp
template <typename T, typename = void>
struct is_small : std::false_type{};
template <typename T>
struct is_small<T, std::void_t<decltype(T::size)>>
: std::bool_constant<(T::size < 4)>
{};

template <typename T, typename = void>
struct can_meow : std::false_type{};
template <typename T>
struct can_meow<T, std::void_t<decltype(std::declval<T>().meow())>>
: std::true_type
{};
```

And create our `Cat` emulated concept using our previously defined `requires_t` utility :

```cpp
template <typename T>
constexpr static auto Cat = requires_t<is_small, can_meow>::template value<T>;
```

So now, considering the following implementation :

```cpp
struct CatImplementation {
    constexpr static auto size = 2;
    void meow(){ /*...*/ }
};
```

We can then validate that our type `CatImplementation` matches the `Cat` concept defined above.

```cpp
static_assert(Cat<CatImplementation>);

// as well as :
template <typename T, std::enable_if_t<Cat<T>>* = nullptr>
void use_cat(const T & cat_value) {
    cat_value.meow();
}
// or, even better :
template <typename T, std::enable_if_t<Cat<T>, bool> = true>
void use_cat(const T & cat_value) {
    cat_value.meow();
}
```

See the complete example [here on godbolt](https://godbolt.org/z/KxEaf9sq6).

## Sources

- [What happened to C++20 contracts ?](https://www.reddit.com/r/cpp/comments/cmk7ek/what_happened_to_c20_contracts/), Nathan Myers, 2019-08-05
- [C++ Detection Idiom Through the Years](https://people.eecs.berkeley.edu/~brock/blog/detection_idiom.php), Benjamin Brock, 2018-12-11
- [2 Lines Of Code and 3 C++17 Features - The overload pattern](https://www.bfilipek.com/2019/02/2lines3featuresoverload.html), Bartlomiej Filipek, 2020-01-13
- [P0051r3 : C++ generic overload function (Revision 3)](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2018/p0051r3.pdf), ISO/IEC JTC1 SC22 WG21 - Vicente J. Botet Escribá, 2018-02-12.
- [Abbreviated function templates and constrained auto](https://devblogs.microsoft.com/cppblog/abbreviated-function-templates-and-constrained-auto/), Sy Brand, 2021-02-04.
- [P0707 R3 : Metaclasses: Generative C++](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2018/p0707r3.pdf), Herb Sutter, 2018-02-11.

## Special thanks

- 2021: I'd like to express special thanks to [Loïc Joly](https://github.com/loic-joly-sonarsource) and [Antoine Morrier](https://cpp-rendering.io/) for their kind advises and constructives reviews.  
- 2023: [Julien Solbach](https://www.linkedin.com/in/julien-solbach-429147155) for noticing misnaming in code example.
