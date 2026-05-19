---
layout: gist-post
title: "Trip Report - Meeting Cpp 2024"
sitemap: true
description: >
  My trip report for the Meeting Cpp 2024 conference
tags: [ cpp, trip-report, meeting-cpp, conference ]
gist_url: https://gist.github.com/GuillaumeDua/d6a82cd83178a38566464a78505a2669
gist_date: "January 13, 2025"
---

|                       |                                                              |
| --------------------- | ------------------------------------------------------------ |
| Event                 | [Meeting C++ conference, 2024](https://meetingcpp.com/2024/) |
| Author                | Guillaume Dua                                                |
| Date                  | 11/14/2024 - 01/13/2025                                      |
| My attendance sponsor | [Fairmat](https://www.fairmat.tech/)                         |
| Revision              | R2                                                           |

---

- TOC
{:toc}

## Introduction

Today marks the beginning of the 2024 edition of the **MeetingCpp** conference, running from November 14th to November 16th.  
As a dedicated C++ enthusiast, I'm excited to seize this opportunity to explore emerging trends, deepen my knowledge, and gain insights from leading experts in the field.  
Over the next three days, I look forward to expanding my perspectives and enhancing my understanding through a diverse lineup of talks and discussions.

This year, the MeetingCpp conference adopted a **hybrid model**, combining an onsite event in Berlin with remote participation through the [Hubilo](https://events.hubilo.com/meeting-cpp-2024) platform  
*(As opposed to the [2021 edition (see my trip report here)](https://gist.github.com/GuillaumeDua/b354dd4c46df160dbfd04c31b2a51c80) with was purely online because of the pandemic)*.

Notably, this year also marks the **10th anniversary** of the conference taking place in Berlin *(and the 13th overall anniversary)*, a significant milestone in bringing the C++ community together to meet, share and grow.

While I'm attending the conference remotely and will miss the in-person experience (socializing & drinks),  
I'm grateful to [Fairmat](https://www.fairmat.tech/) for sponsoring my participation at the conference this year.  
Their support allows me to stay engaged with the latest in C++ and continue growing professionally.

With [multiple tracks running simultaneously](https://meetingcpp.com/mcpp/schedule/), it's always a challenge - *if not a dilema* - to decide which talks to attend to.  
The diverse lineup makes it difficult to choose, as each session offers unique insights and learning opportunities from interesting speakers.
There's a well-known French saying, often attributed to [André Gide](https://fr.wikipedia.org/wiki/Andr%C3%A9_Gide), that perfectly captures how I feel when planning my attendance at any conference: *"Choisir, c'est renoncer."*.  
It translates to *"To choose is to give up"* - on all the other options.

*For the sake of completeness, the only issues occurred on day 2: a minor audio glitch on Track C at 2 PM and a brief streaming issue during Herb's talk.*

### Personnal thoughts about the conference

I particularly enjoyed talks/keynotes from Titus Winters, Peter Muldoon, and Peter Sommerlad, as they resonated deeply with the practices I advocate for on daily basis.  
From my perspective, *much like Kate Gregory's talks*, this is a must-watch for everyone in the tech industry.  
Their insights not only reinforced my beliefs but also added fresh perspectives and valuable details, enriching my understandings,  
as I have been working on writing on a book about related topics since the first French COVID lockdown *(A pragmatic approach of software development & project management: humans, tech-debt, decision-making, etc.)*.  
It will influence how I approach team leadership and technical decision-making moving forward, to help build a more resilient, collaborative, and effective team culture while driving sustainable technical success.

> The slides from most keynotes & talks of the conference are already [available here](https://meetingcpp.com/mcpp/slides/?year=2024),  
> while videos are already being uploaded on the [MeetingCPP youtube channel](https://www.youtube.com/@MeetingCPP/videos).

### Disclaimer

The last time I wrote a trip report, someone from the C++FrUG (C++ French User Group) playfully teased me,  
saying: *"This isn't a report; but the entire trip!"*.  

He wasn't wrong: this document is more of a detailed transcription of all the notes I took.  
It helps me stay focused and retain information during talks, countering any tendencies toward distraction.

While this is primarily a resource for my future self to easily revisit and retrieve specific details,  
I hope reading this will also be profitable to you - *dear reader* - in some way.

---

## 📅 11/14/2024

### 🗣️ **Jens Weller**: Welcome Message

The conference began with a warm welcome from Jens Weller, the founder and organizer of Meeting-C++.  
In his address, Jens reflected on the journey of the conference, marking its 13th anniversary and the 10th taking place in Berlin, *despite the new Berlin COVID variant*.

### 🗣️ **Titus Winters**: Opening Keynote - Fear in tech

[🎥 Video](https://www.youtube.com/watch?v=_dLLIjKz9MY), [📄 slidedeck](https://meetingcpp.com/mcpp/slides/2024/Fear%20in%20Tech803284.pdf).

> In a nuthshell:
>
> - *"No code in this talk. The ones who are disappointed can leave now"*  
> - `Software engineering == programming x time x people`  
> - Tech isnt just computers, it's also **peoples**. With weaknesses, feelings.

---

Titus Winters delivered a thoughts-provoking keynote that focused not on technical details, but on the emotional and human aspects of software development.  
At a C++ conference, this was a bold and refreshing approach, which made me think of some Kate Gregory's talks.  

By addressing **fear**, **anxiety**, and promoting **psychological safety** within teams,  
Titus emphasized the importance of **culture**, **communication**, and **trust** in building **sustainable** software and effective teams.

#### **Psychological safety** over **fear** & **anxiety**  
  
Fear of mistakes, judgment, and uncertainty can cripple team dynamics and innovation.  
Effective **tools**, **processes**, and **open communication** are essential for reducing these anxieties.  
The best teams foster an environment where members **feel safe** to admit mistakes, ask questions, and share feedback.  
Trust and openness outweigh technical expertise alone.

- Creating a **psychologically safe environment**

  Encouraging open feedback, where team members can give and receive constructive input, and openly share mistakes without shame, as a cathartic but also information-sharing process.

- **Reducing fear and control-driven behaviors**

  Addressing hypes, [fear of missing out (FOMO)](https://en.wikipedia.org/wiki/Fear_of_missing_out), and authoritarian power, leads to decisions that lack rational grounding.

- **Ensuring recognition** of technical efforts

  Bridging the perception gap between managers (~90% acknowledgment) and individual contributors (~25%) by making sure all work is visible and appreciated.

#### **Culture** is key
  
Organizational culture directly impacts 30% or more of a team's - *thus projects* - success.  
Writing down shared values and expectations, rather than relying on unspoken rules, promotes clarity and reduces fear.

- Fostering a **culture of gratitude**

  Actively promoting a ***"thanks culture"*** to acknowledge individual contributions and strengthen team cohesion.

- Rely on **truth and facts**

  Leverage **tools to reduce uncertainty**: Integrating and relying on tools as formal sources of truth to enhance **predictability and confidence**, and to reduce anxiety.  
  [A.N] *"Facts over beliefs"* is probably the phrase I say most often. Using more tools will help me avoid becoming an authority figure.

#### **Learning** and growth as a team
  
Continuous learning isn't a luxury-it's a necessity.  
Senior team members should lead by fostering **knowledge-sharing** and ensuring others grow alongside them.

- Supporting **team growth**

  Providing clear guidance and mentorship to help team members ramp up effectively and feel supported.

#### **Sustainability** in software
  
Fear-driven decisions lead to unsustainable systems *(e.g: tech-debt, etc.)*, where change becomes risky or impossible.  
Sustainable projects must adapt to new challenges without fear of failure.

- Prioritizing **sustainable practices**

  Incorporating **cleanup strategies** and **technical debt mitigation** into regular workflows to maintain long-term project health.

- **Avoiding hype cycles and buzzwords**

  Maintaining a critical perspective to ensure decisions are based on practical utility rather than fleeting trends.

- **Reducing decision-making biases**

  Striving for fair, balanced, and inclusive decisions that minimize subjective biases.

- Focusing on **meaningful progress**

  Emphasizing that speed is not equivalent to velocity and prioritizing long-term impact over short-term gains.

#### Conclusion

This keynote was a powerful reminder of the **human factor**/elements in software engineering, beyond code.  
As a lead developer, I recognize the importance of **fostering psychological safety** within my team, encouraging **open communication**, and focusing on **sustainable practices**.

### 🗣️ **Andreas Weis**: C++ Modules - Getting Started Today

[🎥 Video](https://www.youtube.com/watch?v=NI7dAiWwibY), [📄 slidedeck](https://meetingcpp.com/mcpp/slides/2024/C++%20Modules%20-%20Getting%20Started%20Today731788.pdf).

---

> Hello world example [available here on compiler-explorer](https://godbolt.org/z/Ea54d1Ta3).  
> Ref. to Daniela Engert "The three secrets spices of C++ Modules - Visibility, Reachability, Linkage"

Andreas Weis provided an insightful deep dive into named **modules**,  
offering a practical perspective on how they improve upon traditional header-based C++ code organization.

#### Includes limitations

- **Lack of structure**  
  
  Includes can occur anywhere, even in the middle of a function body, which can lead to confusion.

- **Inter-dependency**  
  
  Headers are not required to be self-contained, which can leads to unexpected situations where the orders matter somehow.

- **Redundant compilation**  
  
  Each translation unit re-compiles included files, leading to inefficiency.

#### How modules address such issues

A module is a **self-contained** unit of code, explicitly declaring what it exports.  
Modules separate **visibility** and **reachability**: non-exported entities are still visible within the module but inaccessible externally.
However, modules are still vulnerable to [ODR](https://en.cppreference.com/w/cpp/language/definition) violations.

#### Challenges in adopting modules

Importance of using the latest tools, which have still plenty of bugs and inconsistent behaviors.

- [CMake](https://cmake.org/): at least 3.28. And at least cmake >= 3.30 for `import std`.
- [Ninja](https://ninja-build.org/manual.html) 1.11
- [Clang](https://clang.llvm.org/) 19
- [GCC](https://gcc.gnu.org/) 14, but consider using `trunk`

About mixing headers and modules

- Mixing traditional headers with modules can lead to unexpected results.  
  Best practices include importing headers at the global fragment or using modularized legacy libraries *(best world: no more include files)*.
- Preprocessor directives cannot be exported, necessitating constexpr replacements.

#### Practical advice for getting started

- Use modules as self-contained units and minimize reliance on header files.
- Sticking with the `.cpp` extension for module files to maintain compatibility with build systems.
- Modularize legacy libraries by exporting names explicitly or detaching specific elements from the module.
- Always include the standard library before modularizing legacy code.

#### Conclusion

Modules represent a significant shift in how C++ codebases are structured, aiming to improve scalability, compile-time performance, and maintainability.  
Although the tooling ecosystem is still evolving, these advancements promise a more efficient and less error-prone development experience.

### 🗣️ **Philipp Dominik Schubert**: The Notorious B.U.G. - The Most Popular Bugs and Code Smells in C and C++

[📄 Slidedeck](https://meetingcpp.com/mcpp/slides/2024/the_notorious_bug769726.pdf).

---

Philipp Dominik Schubert ([Sonar](https://www.sonarsource.com/)) explored the most prevalent bugs and code smells in C and C++, leveraging [Sonar](https://www.sonarsource.com/)'s tools and insights.  
He offered practical advices on identifying and addressing common pitfalls, tooling, and modern C++ best-practices.

#### Bug hunting at **Sonar**

- [Sonar](https://www.sonarsource.com/) aims to detect issues in C and C++ code by applying a set of predefined rules that describe undesirable patterns or constructs. These rules are implemented through a combination of:

  - **AST matchers** (Abstract Syntax Trees), which can be use like [this in compiler-explorer](https://godbolt.org/z/9qEdrsjaq).  
    *(In compiler-explorer: source editor panel > '+' > compiler > compiler panel > '+' > AST)*
    - as a C++ DSL to query LLVM's AST for patterns.
  - **Symbolic execution**
    - Simulates execution to analyze control flow paths and states, performing a path-by-path analysis  
      (as opposed to merge-first data-flow analysis)
    - Evaluates control flow, state constraints, and path conditions.
    - Unknown values
      - Are evaluated as symbols
      - branches and post-conditions used to contrain values
  - Static analysis tools:
    - Identify error-prone paths using `clang --analyze -Xclang -analyzer-checker=core`, etc..

#### Challenges while detecting bugs

- Exponential path explosion: 2^𝑁 paths for 𝑁 branches in the worst case.
- [Rice's theorem *(1951, his doctoral dissertation at Syracuse University)*](https://en.wikipedia.org/wiki/Rice%27s_theorem): All non-trivial properties of programs are **undecidable**.
- Balancing precision (false negatives) and recall (false positives) remains a significant hurdle.

See a live demonstration [here on compiler-explorer](https://godbolt.org/z/KzoTvsnz9).

#### Top 10 bugs and code smells in C++

- Uninitialized variables

  - One should always initialize variables.
  - Turn compiler warnings on: `-Wall -Werror`,  
    even if it might not help in some cases:
  
    ```cpp
    void magic_init(int &)
    int func(){
      int a;
      magic_init(a);
      return a;
    }
    ```

  - Use default initialization when you can
  - Be careful with default constructors, even with PODs members
  - Use IILE for non-trivial initializations

    ```cpp
    int a{};
    int b = [&]{
      if (cond()) return 42;
      return 9001;
    }();

    auto [x, y] = [&]{
      if (p) return std::make_tuple(1, 0);
      return std::make_tuple(0, 1);
    }
    ```

- Buffer overflows

  - Avoid C-style arrays. Prefer `std::array`, `std::vector`, `std::string`, or `std::inplace_vector`.
  - Use range-based for-loops and `<algorithm>`, and `<range>`
    - For indexes, use `std::views::enumerate`: `const auto [index, value]: std::views::enumerate(range_value)`
  - Mitigate risks inherent to legacy code by using tools: sanitizers, `FORTIFY_SOURCE`, stack canaries, ASLR *(address space layout randomization)*, and fuzzing.

- Null pointer dereferences

  - Prefer references over pointers.
  - Always check for `nullptr` before dereferencing.
  - Example: [Tony Hoare](https://en.wikipedia.org/wiki/Tony_Hoare#Apologies_and_retractions)'s [billion-dollar mistake](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare/) (null refs in `ALGOL`)

- Unreachable code

  - Indicates logical flaws and confuses readers.
  - Often hides untested and unmaintained chunks of code.
  - Example: [Apple](https://en.wikipedia.org/wiki/Apple_Inc.)'s infamous [`goto fail;` bug](https://dwheeler.com/essays/apple-goto-fail.html).

- Resource leaks

  - Avoid manual memory management: prefer smart pointers and containers.
  - Use [RAII idiom](https://en.cppreference.com/w/cpp/language/raii).
  - Use semantic: `std::move` to transfert ownership/resources, `const`-qualified types for read-only access.

- Identical binary operator expressions

  - Often a sign of copy-pasted errors.
  - logical expressions can be tricky: simplify it, and use tools when it's too complicated.

- Incorrect return values

  - Ensure functions return - *appropriate* - values on all paths.
  - Add compiler warnings (`-Wall`, `-Wreturn-type`, and consider using`-Werror`)
  - Use attributes like `[[noreturn]]`, `[[nodiscard]]`.

- Identical branches

  - Another indicator of logical flaws or copy-paste mistakes.

- Destructors throwing exceptions

  - Destructors are implicitly `noexcept` since C++11.  
    Throwing exceptions from destructors thus causes abrupt, unclean, implementation-defined termination, effectively calling `std::terminate`.
  - Be extra careful with containers of objects

- Loops with at most one iteration

  - Indicates serious logical flaws.
  - Replace with `if`-statement for clarity.

#### Questioning root causes

- **Legacy code**: Many bugs stem from outdated practices and lack of modern C++ features.
- **Teaching C++** effectively: Are educators failing to teach best practices ?
- **Default behavior**: Should C++ provide safer defaults, like mandatory zero-initialization ?

#### How to improve code quality ?

- Adopt **modern C++ practices**: Use safer standard library types,  
  effectively avoiding raw pointers and manual memory management.
- Use **static and runtime analysis** and other available **tools**:
  - Turn **compilers warning** on (`-Wall -Werror`) and use **static analyzers** for blind spots.
  - Employ dynamic analysis tools like **sanitizers** (undefined behavior, address, memory, thread).
  - **Test and validate** your code by running your test suites with tools like [valgrind](https://valgrind.org/) to catch runtime errors and race conditions.
- **Express your intent** clearly: Leverage attributes like [[nodiscard]], [[noreturn]], and [[maybe_unused]]

As a conclusion, Philipp's insights highlighted that while static analysis can't solve every problems, combining modern C++ practices with effective tools can eliminate many common pitfalls.

### 🗣️ **Goran Aranđelović**: Introduction to Sender/Receiver framework

> Goran Aranđelović is a developer in the adtech industry, and founder of the C++ Serbia user group.

In his talk, Goran underlined the differences between concepts often confused with each others: multithreading, concurrency and parallelism.

- Concurrency: multiple computations at the same time. Processing tasks on 1 core result in a concurrent but not parallel execution.
- Parallelism: multiple calculations/processes running simultaneously. Processing taks on N cores can be concurrent and parallel.  
- Compared to serial execution, concurrency requires stronger scheduling guarantees, and while parallelism requires weaker ones.
- In a nuthshell: concurrency encompass parallelism, while multithreading is a one of the way to achieve concurrency

#### Why do we need such a new framework ?

- C++11 introduced `std::thread`, `atomic`, `memory_order`, (recursive)`mutex`, `future`, `promise`, `async`, etc., but ...
  - That was a while ago: we'd better clean up such primitives in our codebase
  - We need to focus on expressing intents (what), not low-level implementation details (how)

What are the current proposals ?

- [Networking TS (N4771)](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2018/n4771.pdf)
- [Unified executors for C++ (P0443R13)](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2020/p0443r13.html)
- [`std::execution` (Senders & Receivers, P2300R10)](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p2300r10.html)
- [Sender/Receiver interface for networking (P2762)](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2023/p2762r2.pdf)

What is the current available implementation ?

- [Nvidia's stdexec](https://github.com/NVIDIA/stdexec)

#### Introducing senders & receivers, as described in P2300

Key ideas:

- A self-contained design for managing asynchronous execution on generic execution resources.
- An idiomatic way of expressing async work in C++.
- Provides unified, high level abstractions, effectively enabling async API composition

Core concepts:

- **Schedulers**: Lightweight handle that represent strategies for scheduling work on an execution resources (e.g., CPU, GPU).
- **Senders**: Describe some work to be done, as a monad.
  - A sender can be choosed at runtime
- **Receivers**: Multiple channels callbacks:
  - Value (results).
  - Error (exceptions).
  - Stopped (cancellations).

Minimal control flow API:

- `stdexec::on`: Specify where the work is executed.
- `stdexec::just`: Lift a concret value into a sender.  
   *Equivalent to `pure` in Haskell*.
- `stdexec::then`: Continuation: chain computations with transformed value from previous sender.
  *Equivalent to `fmap` in Haskell*.
- `stdexec::let_value(F)`: Dynamically choose a sender at runtime.  
  (`F` is an runtime invocable which returns a sender)
- `stdexec::sync_wait`: Block and wait for the result.

#### Advantages of senders & receivers when compared with existing models

See a complete example [here on compiler-explorer](https://godbolt.org/z/r731KWWPn).

- straight-forward
- Combines async tasks without the overhead of allocations, synchronization, or type erasure.
- Composition and blocking *(`sync_wait`)* are standard, generic algorithms.
- Replace/unifies heterogeneous/disparate async APIs, enabling greater interoperability.
- Example

  ```cpp
  auto s1 = then(just(42), [](int i){ return i + 1; });
  auto op1 = stdexec::connect(s1, print_receiver{});
  stdexec::start(op1)
  ```

#### Senders & Receivers are not a replacement for coroutines

They complement each other:

- All awaitables are senders.
- Many senders can trivially be made awaitable.

#### Key takeaways

- The sender/receiver framework simplifies and standardizes asynchronous programming in C++.
- It encourages writing clean, composable, and efficient code for managing async workflows.

### 🗣️ **Klaus Iglberger**: There is no Silver Bullet

[🎥 Video](https://www.youtube.com/watch?v=5F3d3LocM3k).

Klaus Iglberger delivered an insightful talk that explored the challenges and trade-offs in software design,  
focusing on object-oriented programming (OOP) inheritance and its modern alternatives (`std::variant`, type-erasure, etc.) to implement homgeneous abstractions.
Highly entertaining and dynamic talk with a great sense humor, a noticeable hint of irony, and some references to Lord of the Rings !
And like always, he used the classic shape design example, to illustrate how working with massive, legacy codebases can be challenging.

> [A.N] Personnal fun-facts:
>
> - This talk has the same name as the very first software-design lecture I attended to, when studying in Seoul (South Korea), years ago.
> - I wrote a few *(sometime, clumsy ?)* articles myself on related topics:
>   - [(2021) Concept-based polymorphism in modern C++](https://gist.github.com/GuillaumeDua/b0f5e3a40ce49468607dd62f7b7809b1)
>   - [(2018) C++ polymorphism without vtables](https://gist.github.com/GuillaumeDua/0239fda353264b67ddcb39b5d9a01105)

#### Traditional **OOP**/`vtable` approach

- **Classic design patterns**: Klaus started with a classic OOP solution, leveraging `virtual` functions and design patterns like `strategy`.
  Example: A `Shape` interface with derived classes (`Circle`, `Square`) delegating drawing responsibilities to an injected `draw` strategy design pattern.
- **Architectural principle**: This separation maintained a clean boundary between
  - **high-level** (stable, low dependencies) `shape` logic and
  - **low-level** (volatile/maleable, high dependencies) `drawing` implementation *(e.g., OpenGL)*.
  - emphasizing the separation of concerns (SoC) principle.

Critique of classic `OOP`

- Klaus highlighted its dated nature: it mirrors 1996 [GoF (Gang of Four) style](https://www.google.fr/books/edition/Design_Patterns/jUvf7wMUGcUC?hl=en) practices and doesn't align with truly modern, progressive C++.
- Referenced prominent criticisms of `OOP`, such as:
  - [Sean Parents - Inheritance is the base class of evil](https://www.youtube.com/watch?v=bIhUE5uUFOA)  
    *([A.N]: the original upload on [channel9.msdn.com](http://channel9.msdn.com/Events/GoingNative/2013/Inheritance-Is-The-Base-Class-of-Evil) does not work anymore)*
  - [Phil Nash - OO considered harmful](https://www.youtube.com/watch?v=pH-q2m5sb04)
  - Jon Kalb
    - [Why don't the cool kids like OOP ?](https://www.youtube.com/watch?v=x1xkb7Cfo6w)
    - [Back to Basics: Object-Oriented Programming](https://youtu.be/32tDTD9UJCE?t=61)
  - [Jonathan gopel: using modern C++ to eliminate virtual functions](https://www.youtube.com/watch?v=gTNJXVmuRRA)
- Even if as experts we care about our level of C++, we're living in a bubble: such an approach remains used in a roughly estimated 90% of existing C++ codebases.

#### Is `std::variant` (a modern) alternative ?

Benefits:

- Less and simplier code to write.
- Avoids inheritance, pointers, and dynamic allocation - thus, increases performances.
- Automatic, elegant lifetimes.
- Potentially improves performance.
- Functional programming style

Challenges:

- Architecturally speaking, using `std::variant` for runtime polymorphism is a total disaster/failure,  
  as it violates the open-close *(OC, the "O" of `SOLID`)* principle.
- He emphasized that std::variant isn't a silver bullet. It excels in scenarios with a fixed set of types and open operations but struggles with extensibility.

#### Templates to the rescue ?

- Adding template-type-parameters (TTP) to function helps removing some tight-couplings from the library to the userland code
- But it is slow to compile, as the compiler needs to instanciate each template function instance.

#### What about type-erasure ?

Achieving value-based OOP using type-erasure *([A.N]: which I call "opaque type: inheritance as an implementation detail")* might be a middle-ground here.

- Changes/extensions works as expected
- The architectural boundaries are adhered to
- Fewer pointers, fewer virtual functions (only one indirection)
- Less inheritance, less manual memory management
- Better performance  
  Small Buffer/Base Optimization (`SBO`) using `std::aligned_storage` avoids dynamic allocation (which works fine for small objects).

#### Conclusion

- **There is no universal, unique solution** that one can use everytime, everywhere.
  There is always a trade-off, and one technic might suite a specific situation better than the other.
  - `std::variant` is not a replacement to virtual function: both are dynamic polymorphism technics, but differs.
  - OOP and `std::variant` are the two side of the same coin.

    | /                              | `std::variant` | **OOP**         | type-erasure    |
    | ------------------------------ | -------------- | --------------- | --------------- |
    | programming style              | functional     | object-oriented | object-oriented |
    | set of types                   | fixed          | open            | open            |
    | sets of operations             | open           | closed          | closed          |
    | recommanded architecture level | low            | ?               | higher          |

- **Architectural design matters**
  - Features and language details are secondary to the overall design.
  - Successful projects rely on well-thought-out architecture, not individual features.
- **Document your decisions**
  - Create an **Architectural Decision Record** (ADR) to document your decision-making process *(e.g, pros & cons, trade-offs, final call, etc.)*.
  - Consider each approach pros & cons. Effective design requires balancing these based on current needs,  
    thinking first about the architectural properties of the solution: what do you want to achieve ?

Klaus advocated moving away from the term "modern C++" to "progressive C++," reflecting its constant evolution.

He then closed with a reminder: *"There is no silver bullet"*:

- The fun - *and difficulty* - of software design lies in finding the right trade-offs for each unique situation.  
- The talk emphasized the importance of a **pragmatic architectural thinking** over dogmatically chasing the latest language features, leaving the audience with valuable perspectives on crafting robust, maintainable C++ code.

## 📅 11/15/2024

### 🗣️ Jens Weller: Good Morning Meeting C++

Jens started the second day of Meeting C++ 2024 with a warm welcome and shared updates and reflections on organizing the conference:

- **Respect for speakers**: he emphasized that every speaker deserves an engaged audience, reminding attendees of the effort behind each talk.
- **Conference recordings**: All sessions will be available for viewing after the conference (first on Hubilo for attendees only, then on the [MeetingCpp Youtube channel](https://www.youtube.com/@MeetingCPP/videos)).
  - *[A.N] I'll update this trip report when there are available.*
- **Behind-the-Scenes**: Jens touched on the complexities of organizing a large event, particularly handling last-minute changes such as speakers unable to attend.

#### A journey to produce Meeting C++ tshirts

Jens humorously described the challenges (understand, pain) of designing conference T-shirts with C++ code printed on them:

- Design hurdles:
  - `PNG` vs. `SVG` for graphics.
  - Issues with colors and floating-point precision during the process.
- Tools explored:
  - Learned to use build tools like [Conan 2.0](https://docs.conan.io/2/) and [Jason Turner's CMake starter template](https://github.com/cpp-best-practices/cmake_template) *(presentation available [here on Youtube](https://www.youtube.com/watch?v=ucl0cw9X3e8&ab_channel=C%2B%2BWeeklyWithJasonTurner))* with [CPM](https://github.com/cpm-cmake/CPM.cmake).

### 🗣️ Hana Dusíková: Center Keynote - my favorite data structures

[🎥 Video](https://www.youtube.com/watch?v=jAIFLEK3jiw).

Hana Dusíková delivered a delightful - *yet, sometimes mind-bending* - keynote, exploring the intricacies of `constexpr` programming and containers,  
highlighting her *favorite data structure* - but also experience hacking the **Clang** compiler to address some personal frustrations and deeper her understanding of how things work under the hood.

#### About the speaker

Hana works at **Woven by Toyota** - *one of the conference sponsor* - and is the chair of the reflection and compile-time study group.  
Her last talks are about her projects: [CTRE](https://github.com/hanickadot/compile-time-regular-expressions), [co_curl](https://github.com/hanickadot/co_curl), [cthash](https://github.com/hanickadot/cthash) (sha-2, sha-3).

> [A.N] I loved so much her talk about [CTRE at the CPPP-2019](https://www.youtube.com/watch?v=i7H5TSVJy0Y), I strongly encourage you to watch it if you haven't already.

#### Exploring symbolic execution in C++

- **LLVM Clang**'s `ExprConstant.cpp`: The core of symbolic execution in C++, essentially a CPU arch independent interpreter written in one file.
- `APValue`: Represents C++ values during constant evaluation,  
  - encompassing various "stuffs"
    - can be nothing
    - types (int, float, array, unions, struct, pointers).
    - lvalues (references or pointers)
  - Detailed description on how arrays, unions, and pointers are represented and their constraints.
  - Highlighted how pointer provenance and undefined behavior arise from the lack of symbol ordering in pointers,  
    as well as how rvalue are marked as temporary as such a value is about to be destroyed soon, thus one can steal from it, and expressing lifetime concerns in general.
- **Enhanced safety**: the interpreter helps detect violations of the C++ abstract machine, making **constexpr code safe and deterministic**.

#### `constexpr` containers in the standard library

Hana analyzed which STL containers are currently constexpr and why:

- Supported: `vector`, `array`, `string`, `optional`.
- Not supported (yet): `deque`, `map`, `set`, `unordered_map`, `unordered_set`, `list`, `flat_set`, `flat_map` *(even if it's a new feature)*.

Challenges like exception safety, memory allocation, and reallocation explain these limitations.  
Hana calls for more `constexpr`-compatible containers to leverage C++'s evolving capabilities.

#### About `constexpr` limitations

The speaker then outlined the historical progress of `constexpr` features/milestones, and their limitations:

- C++14 introduced control flow and variables.
- C++17 added lambda calling.
- C++20 brought `try`/`catch`, trivial initialization, changing active member of a union, and virtual functions.

And what are our future needs, which are mostly covered by the following proposals - *that she mostly authored*:

- [P3068](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3068r4.html): allowing exceptions throwing in constant-evaluation *(Hana)*
- [P3378](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3378r0.html): constexpr exception types *(Hana)*
- [P3309](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3309r0.html): constexpr atimic and atomic_ref *(Hana)*
- [P3037](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3037r3.pdf): constexpr `std::shared_ptr` *(Paul Keir)*
- [P3125](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3125r1.html): constexpr pointer tagging *(Hana)*
- [P3074](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3074r4.html): trivial unions *(Barry Revzin)*
- [P3372](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3372r2.html): constexpr containers and adapters *(Hana)*
- [P3295](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3295r2.html): freestanding constexpr containers and constexpr exception types *(Ben Craig)*
- [P3367](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3367r0.html): constexpr coroutines *(Hana)*
- [P3391](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3391r0.html): constexpr `std::format` *(Barry Revzin)*
- [P3449](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3449r0.html): constexpr `std::generator` *(Hana)*
- [P1974](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2020/p1974r0.pdf): non-transient constexpr allocation using propconst *(Jeff Snyder)*

#### Her favorite data-structure: [Hash array mapped trie (HAMT)](https://en.wikipedia.org/wiki/Hash_array_mapped_trie)

> *A hash array mapped trie (HAMT) is an implementation of an associative array that combines the characteristics of a hash table and an array mapped trie.*  
> *It is a refined version of the more general notion of a hash tree.* - [wikipedia](https://en.wikipedia.org/wiki/Hash_array_mapped_trie)  

Usage scenario:

- Ideal for snapshot systems due to its structure and efficiency.

Advantages:

- O(1) for insert, search, delete.
- Linear growth with no rehashing.
- Lock-free.
- Persistent, compatible with flat storage (using offsets instead of pointers).

#### Closing thoughts

This keynote - *like her other ones* - showcased Hana's deep expertise in `constexpr` programming and her passion for pushing the boundaries of C++.  
Her vision for the future of `constexpr` includes extending support for all containers, coroutines, and generally speaking bringing most of the C++ runtime world into the compile-time realm; effectively refining C++ as a language for both runtime and compile-time efficiency with no safety compromise.

> [A.N] My **question**: Do you use a specific/dedicated test framework to create unit test for constant-evaluated code, or do you only use some static_asserts ?
>
> Answer:
>
> - test suite of LLVM code for such a code
> - `static_assert`
> - [Catch2](https://github.com/catchorg/Catch2)
> - Issue: measuring code coverage in `constexpr` code is a hassle

### 🗣️ Olivia Quinet: Applied modern c++ : beyond type-erasure and visitor design patterns

[📄 Slidedeck](https://meetingcpp.com/mcpp/slides/2024/OliviaQuinet_Applied_Modern_C++_Beyond_TypeErasure_And_Visitor_Design_Patterns426537.pdf).

Olivia Quinet's talk tackled heavily used C++ polymorphism design techniques,  
with a focus on **type-erasure** and the **visitor** design pattern, questionning such designs **scalability** and **limitations**.  
Despite being visibly nervous, she successfully presented her design, which echoed with Klaus Iglberger's talk from the previous day *"There is no Silver Bullet"*.

#### Key ideas

What is a software ?

- Software processes inputs to produce outputs, relying on models for transformations and error handling.
- Building software is analogous to building a factory, with frequent updates and increasing complexity management.

Challenges for **flexible** architectures: modern software grows in **complexity** due to:

- Increasing number of object types.
- Expanding processing pipelines.
- Greater number of transformations and actions.

**Orthogonality** in C++: as the source code is compiled, the amount of types and operations are finite.

- More types -> Shall use **type-erasure** for flexibility.
- More operations -> Shall use the **visitor** pattern.

#### Revisiting design patterns

Visitor pattern with `std::variant` + `std::visit`

- Visitors allow operations on the current alternative *(of a compile-time set of types)* value being held by a given `std::variant<Ts...>`

- Type-deduced visitor: lambda with `auto arg`.
- Type-matching visitor: `if constexpr`.
- Overloaded visitor: using function overloads for type matching.

Pros and cons of the `visitor pattern`:

- Pros: Easy to add new operations to a pipeline.
- Cons: Adding a new type requires updating the variant and all related visitors.

Type-erasure pattern:

- Provides a value-semantic interface to work with unrelated types (an open set of types).
- Using technics such as Pimpl, concepts, and models.
- Ideal for adding new types without modifying the existing pipeline.

#### Combining type-erasure and visitor patterns: Olivia's hybrid approach

Prerequisites:

- Pipeline-based processing.
- Known types at compile time for a given pipeline version.
- No dynamic library loading.

Requirements:

- Non-intrusive implementation.
- Value semantics.
- Type-erasure for type extensibility, with a common interface
- Visitor pattern for adding functionalities.

A complete demonstration is available [here on github.com/olivia76/cpp-te](https://github.com/olivia76/cpp-te).
This approach allows for flexibility in both adding types and operations, while retaining most of the advantages of both patterns.

#### Lessons learned

After performing a live demo and presenting some benchmarks *(comparing several ways to implement type-erasure, using either function ptrs, std::function, and/or vtables)*, Olivia shared her insights:

- Promote iterative process: *"Think, try, test, repeat."*
- Stay updated with evolving C++ standards and features.
- There is no universal solution (silver bullet), as trade-offs are inevitable.

### 🗣️ Kate Gregory: The Aging Programmer

[📄 Slidedeck](https://meetingcpp.com/mcpp/slides/2024/The%20Aging%20Programmer714822.pdf)

Kate Gregory delivered an insightful and deeply personal talk on the challenges and opportunities of aging as a programmer.  
With practical advice grounded in her own experiences, research, and surveys, she encouraged attendees to think long-term about their careers, health, and happiness.  

> [A.N] Having been profoundly influenced by Kate Gregory's previous talks - *each questioning & reshaping how I approach my work, and my relationship with code and design in general* -,  
> I was particularly eager to attend this one. It didn't disappoint: I **loved** it.
>
> The talk resonated deeply, aligning with personal reflections and offering invaluable insights for tackling the uncertainty - *thus, anxiety* - of aging *(after all, no one gets to grow old twice)*.  
> As always, I was struck by her caring, positive, and hopeful ton and outlook.  
> Her words didn't just stay with me; I found myself immediately sharing my notes with friends & family, eager to spread the wisdom she offered.

In a nutshell: Embracing the aging process

- Aging is inevitable: if you're not aging, then you're already dead.
- Not everyone gets to be an "old programmer" due to life changes, health, or retirement.
- The goal is to enjoy programming into your later years, which requires **planning** and **efforts**.

#### About health: **body** and **mind**

Physical health challenges and tips to age better

- **Eyesight**: Regular checkups are essential.  
  Tools like glasses for different tasks can boost productivity and reduce strain.
- **Exercise**: Strength, stamina, and flexibility exercises improve overall health, reduce pain, and enhance cognition.
- **Hearing**: Protect your hearing now; damage is irreversible.  
  Hearing loss can isolate you socially and professionally.
- **Wrists and joints**: Ergonomic setups and exercises can mitigate strain.  
  Night braces or posture adjustments may help.
- **Injuries and illness**: Preventative care, vaccines, and addressing issues promptly are vital to aging well.

Mental and emotional health

- **Short-term memory**: Use habits, routines, checklists, and tools to stay organized and focused.  
  Avoid multitasking.
- **Learning new skills**: With experience, you've already mastered learning-embrace change and connect new concepts to what you know.
- **Mood and cynicism**: Aging doesn't have to mean grumpiness.  
  [A.N] After the talk, someone in the audience advised *"Don't let the old in"*: One does not have to play that **role**, it's not a fatality.  
  Staying positive requires planning, preparation, and flexibility.

#### Addressing challenges in the Workplace

- **Age discrimination**: Common in tech, especially for women.  
  Combat biases, but recognize some environments may not fit.
- **Physical limitations**: Workplace setups often create unnecessary barriers *(e.g., stairs, lighting)*.  
  Evaluate whether the issue lies with your body or the environment.
- **Adapting work**: Adjusting expectations or shifting roles can keep you engaged.
- **Retirement or industry changes**: Choosing to retire or switch fields is valid and not inherently negative.

#### Building a long, happy career **and** life

Practical steps for longevity

- **Exercise**: Supports body, brain, and emotional well-being.
- **Health maintenance**: Regular checkups, a balanced diet, and avoiding harmful habits *(e.g., drinking, smoking)* are critical.
- **Finances**: Save and invest for long-term stability.

Social connections

- Losses are inevitables, but building new friendships through hobbies, work, and community can sustain you emotionally.
- Younger friends keep your perspective fresh as you age.

Finding purpose

- Hobbies, mentorship, or other activities can provide meaning beyond professional work.

#### The upsides of aging

- **Freedom**: Aging reduces fear and dependence on others' opinions.
- **Perspective**: Experience brings confidence and the ability to give up things that no longer serve you.
- **Resources**: Time and money often increase with age, enabling new adventures and priorities.

#### Kate's core advices

- **Take care of yourself**: Health, exercise, and nutrition are investments in your future.
- **Build relationships**: Maintain and create friendships throughout your life.
- **Stay curious**: Try new things, embrace changes, and **find purpose**.

Aging is not a barrier to a fulfilling life or career: it's an opportunity to grow, adapt, and thrive.  
As Kate emphasized: *"It's never too soon, and it's never too late."*.

### 🗣️ Peter Muldoon: Software Engineering Completeness : Knowing when you are Done and Why it matters ?

[🎥 Video](https://www.youtube.com/watch?v=pE8k3RXdp8s).

> *"Achieving sustainability should be the main goal of every engineer,  
> as it means reaching a level of mastery where you can confidently guide decisions and advise your boss - though many may feel unprepared for such a responsibility."*  
> *"Are we done yet ? Probably not ! Why ?"*

Context: Inspirations & motivations behind this talk

- Stemmed from discussions about the cost of software ownership
- Software engineering is not just about writing code but **maintaining it over time**.
- Many struggle with **defining when something is done** (DoD) or setting realistic completion dates.

#### About the definition of **done** (DoD)

What does "*Done*" mean ? Peter opposed two definitions:

- From the dictionary definition: Work until task fulfillment.
- From an engineering perspective: Formal declaration that a product meets defined quality standards.

Why shall we define and share a **DoD** ?

- Establishes a **shared understanding** and unified language for delivering software.
- Ensures new employees have access to essential knowledge and expectations.
- Encourages acknowledgment of shared responsibilities across teams.

#### Software value: customer vs. engineering perspectives

**Customer**-focused software value actualized value when software is:

- **Available**: Accessible to users.
- **Usable**: Practical and user-friendly.
- **Reliable**: Stable and dependable.

**Engineering**-focused software value includes future-looking value:

- **Configurable**: Easy to adjust.
- **Flexible**: Handles changes gracefully.
- **Maintainable**: Quick issue resolution.
- **Evolvable**: Can adapt to market and requirements changes.

#### Delivering changes to production

Types of improvements:

- New features.
- Bug fixes.
- Feature flag updates.
- Configuration changes.
- Technical debt mitigation/reduction (e.g., refactoring, deprecations, etc.).
- Infrastructure/environment upgrades (e.g., compiler updates, architecture support, etc.).

Risks introduced:

- Broken or missing functionality.
- Performance and security issues.
- System unreliability.

#### About acceptance criterias (AC)

> What are acceptance criteria ? Conditions a product must meet to be accepted by the user.

Characteristics of good ACs:

- **Clarity**: Easy to understand.
- **Conciseness**: No unnecessary details.
- **Testability**: Results visible to the customer.
- **Observability**: Outcomes measurable.

How to write ACs:

- **Author**: Product owner or team member.
- **Process**: Shared with the team and validated by customer/proxy.
- Can follow the **Gherkin** style: given (context), when (action), then (result).

#### Problem domains & complexity

Complexity levels influence predictability and risk, thus forecasting:

- **Unknown**: Minimal information, low confidence.
- **Simple**: Well-understood, low risk.
- **Complicated**: Multiple moving parts, requires analysis.
- **Complex**: Many unknowns, dependencies, and risks.

[The Cynefin framework](https://en.wikipedia.org/wiki/Cynefin_framework) is helpful in categorizing problems domains.

#### Time, scope, and estimates

Why engineers struggle with time estimates:

- Misplaced optimism.
- Lack of consideration for start dates alongside deadlines.

How to produce better estimates ?

- Break tasks into smaller pieces.
- Clearly define requirements and scope.
- Acknowledge uncertainty and plan for delays.
- Communicate updated timelines as new information arises.

#### Are we done yet ? The software-engineering completeness pyramid

> The software-engineering completeness pyramid is like the [Maslow pyramid of needs](https://en.wikipedia.org/wiki/Maslow%27s_hierarchy_of_needs), for software development.

Development done ?

- Changes verified and meet all ACs.
- All tests passed *(unit, non-regression, integration, etc.)*.
- Code reviewed, committed, and ready for release.

Deployment done ?

- Code deployed everywhere *(not just one site, etc.*).
- Dependencies tracked and resolved.

Feature flags done ?

- Fully enabled and utilized in production.
- Removed once changes are stable.

#### Code health: refactoring, decommissioning, and technical debt

Technical debt:

- Accumulated shortcuts in the codebase.
- Can be **intentional**: strategic trade-offs with planned mitigation.
  - [A.N] So-called quick-wins requires mitigation planning
- Can be **unintentional**: non-strategic, no plan to resolve.

Refactoring:

- Improves internal structure without altering behavior.
- **Challenges**: Time constraints, poor reviews, and lack of planning/forecasting.
- Not refactoring leads to system rewrites over time.

Decommissioning:

- Process of retiring outdated code.
- Identifies unused or redundant functionality.

How to **prevent** new technical debt introduction ?

- Proper **timelines**, code & design **reviews** (with appropriate guidelines), coding **standards**, and documentation.
- Track *(but try not to add too much items to the backlog)* and address debt **regularly** *(e.g quarterly sprints, etc.)*.
- **Trainings**, best-practices, and knowledge sharing.

#### Testing and sustainability

Is the testing done ?

- **Coverage** across all levels: unit, integration, system, non-regression, etc.
- Lessons from past failures applied as new tests.
- Use **test automation**, triggering alerts (slack, emails, etc.) in case of failure.

Sustainability goals:

- Decreasing technical debt.
- Structurally maintainable codebase.
- Satisfied developers, clients, and stakeholders.

#### Conclusion

Codebase health/substainability differs from new feature implementations and bug-fixes.

When are you done ?

- The feature or bug fix meets all acceptance criterias
  - Possibly injects intentional tech-debt to meet the deadline - which must be addressed **immediately** after.
- It is **deployed** everywhere in production.
- Code is **maintainable** and team-supported.
- The tech-debt is decreasing - *not increasing*
- Users and the business are **happy**.

### 🗣️ Nico Heidtke: Growing Pains - Lessons from Seeing Codebases Mature

[📄Slidedeck](https://docs.google.com/presentation/d/1a01QDBjjLndO11i3J83w6-OwUgnJJ-mS8TOQFzBQ1sk/edit?usp=drive_link).

> "Give me six hours to chop down a tree, and I will spend the first four sharpening the axe" - *Abraham Lincoln*.

Nico Heidtke shared insights into the challenges of growing and maintaining C++ codebases, focusing on lessons learned from real-world experiences.  
He emphasized the need to balance technical excellence with team alignment, knowledge transfer, and sustainable practices in general.

#### Team-related challenges

As teams expand, new hurdles arise: efficiently onboarding new contributors, mitigating knowledge loss when members depart, and ensuring sustained team alignment requires well-defined processes.

#### Codebase layout & conventions

Early decisions on structure and standards can have long-lasting impacts.  
Clear organization and consistent conventions improve - *or help maintain* - productivity and onboarding but require ongoing attention.

#### Knowledge transfer & documentation

Reliance on verbal communication leads to information loss over time.  
Good documentation - *both code-specific and design/architectural* - is essential, and updates must be aligned with code changes.

#### Development tools & automation

Tools like linters, formatters, and CI/CD pipelines help **scale processes** and **maintain quality**.  
Early integration of such tools avoids technical debt, and "warning flood/fatigue" must be managed immediatly.

#### Managing dependencies & abstractions

Portability matters, more than you might think. Favor **standard library abstractions** rather than plateform-specific code.  
When platform-specific logic is unavoidable, **encapsulate** it within dedicated libraries and ensure your CI/CD pipeline tests across all targeted platform and compiler combinations *(e.g using GH-action matrixes)*.
These practices help prevent significant future overhead, keeping third-party dependencies and platform-specific code maintainable in the long term.

#### Interoperability & localization

Interfacing with other languages and systems is almost inevitable - *C remains the go-to for cross-language compatibility*.  
For globalization, adhering to standards like `UTF-8` - *for text* - and `UTC` - *for time* - minimizes future rework.

#### Conclusion

Overall, the talk highlighted the importance of proactive planning, clear communication, and leveraging tools to navigate the growing pains of maturing codebases.

### 🗣️ Herb Sutter: Peering forward - C++'s next decade

[🎥 Video](https://www.youtube.com/watch?v=sbcOdb37n8o), [slidedeck](https://meetingcpp.com/mcpp/slides/2024/Meeting%20C++%202024606565.pdf).

> Herb Sutter made a grand entrance, arriving just in time to kick off his keynote:  
> "Does everybody have a beer ? Do I have until midnight ?"  
> He set the stage for an exciting journey into the future of C++, comparing C++26/29 to a treasure chest slowly being filled with gems,  
> each feature being a valuable addition to the language's evolution.

Herb Sutter presented an insightful and visionary outlook on C++'s evolution, focusing on three key pillars: **reflection**, **safety**, and **simplicity**.  
These advances, already shaping C++26 and beyond, aim to revolutionize the way we write and maintain code, while ensuring that C++ continues to meet evolving industry demands.

#### Reflection

Reflection is an important metaprogramming milestone, allowing programs to - *at compile-time* - inspect and modify their own structures, thus with zero **runtime** overhead *(to use such informations at runtime, one have to store them)*.  
By making the structure of types directly usable as inputs, it simplifies tasks like options parsing and code generation. Reflection and compile-time programming mark a natural progression in C++'s journey, offering transformative potential for future development patterns.

See the [P3096 proposal](https://github.com/cplusplus/papers/issues/1764),  
and this [live example here on compiler-explorer](https://godbolt.org/z/rvdabTb5M), which uses the [EDG front-end](https://en.wikipedia.org/wiki/Edison_Design_Group).

#### Safety

> See ["C++ safety, in context"](https://herbsutter.com/2024/03/11/safety-in-context/), *aka the **"cold" war**, in progress*,  
> *also available on [tinyurl.com/sutter-safety](https://www.tinyurl.com/sutter-safety)*.

New tools aim to address type, bounds, initialization, and lifetime safety-critical sources of vulnerabilities in C++.  
What is nowadays *"watch out"* features (performance & control by default, safety always available),  
will become *"opt-out"* ones (safety by default, performance & control always available).

Features like **erroneous behavior**, introduced in C++26, provide defined outcomes for mistakes,  
**reducing risks** like uninitialized values without compromising performance or control.  

**Erroneous behaviors** semantically differ from **undefined behaviors**: *"well-defined as being wrong"* vs. *"anything can happend"*.  
These changes improve the safety of existing codebases simply by recompiling, bridging a gap historically filled by manual effort or third-party tools.

#### Simplicity, through generalization

C++ continues to simplify by enabling developers to **directly express intent** rather than relying on verbose annotations,  
effectively *focusing on the **"what"**, not **"how"***.  

Features such as range-for loops or reflection align with such a philosophy, reducing complexity while maintaining power.  
Simplification is achieved not by subtraction but through carefully chosen additions (features) that abstract away common patterns and pitfalls.

#### Looking ahead

The combination of increased compile-time capabilities and enhanced safety mechanisms promises to make C++ more approachable and robust.  
Challenges remain, particularly in ensuring these features are widely adoptable and scalable for existing codebases.  
Nonetheless, Herb envisions a future where developers write **safer**, **simpler**, and **more expressive** code, setting the stage for C++ to remain a cornerstone of systems programming for the decade ahead.

## 📅 11/16/2024

### 🗣️ Rainer Grimm: An overview on the C++26 highlights

[📄 Slidedeck](https://meetingcpp.com/mcpp/slides/2024/Cpp26643772.pdf).

C++26 introduces a wealth of features which - *from my perspective* - meet industry demands, emphazing **simplicity**, **safety**, and **performances**.  
These advancements are set to make the language more **intuitive** and **robust**, catering to both modern industry challenges and developer expectations. *In a nutshell: less code, more value*.

#### Reflection

- [P2996r5](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p2996r5.html) as a MVP
- Introduces the reflection operator `^`
- Splicer `[:…:]`, and metafunctions (in `std::meta` namespace), and `std::meta::info`.

#### Contracts

- Preconditions and postconditions - `post(condition)`/`pre(condition)` - as contextual function keywords.
- Assertions/invariants `contract_assert(condition)` as keyword.
- Live example available [here on compiler-explorer](https://godbolt.org/z/Wd7q3eMGf).

#### Placeholders

- Highlights unused variables using `_`
- `auto [_, a, _] = func();`

#### Static assertions

- `static_assert` supports user-defined type properties
- `static_assert(sizeof(S) == 1, std::format("unexpected size: {}", sizeof(S)));`

#### Templates parameter pack indexing

- Provides direct access to elements of a pack
- `T...[0]; values...[0];`

#### `delete(reason)`

- clearer function restrictions

```cpp
void func(double){}
template <typename T> void func(T) = delete("only for double");
```

#### String-likes improvements

- Compare `<charconv>` function results to bool *(`from_char`, `to_char`)*
- Improves interfacing (`std::stringstream` with `std::string_view`), concatenations (`std::strings` and `std::string_views`), and arythmetic overloads (`std::to_string` and `std::format`).

#### `std::inplace_vector`

- Drop-in replacement for `std::vector` in memory-constrained contexts, dynamically resizable with compile-time fixed capacity.
- See [P0843R8](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2023/p0843r8.html)

#### `std::format`

- Expanded support for pointers and newlines.

#### `<ranges>`

- New views `std::ranges::generate_random` and `std::ranges::concat_view`.

#### More `constexpr` support

- `<algorithm>`, `<ranges>`: `std::stable_sort`, `std::stable_partition`, `std::inplace_merge`
- `<linealg>`: free-function algebra interface based on [BLAS](https://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms)

#### `std::submdspan`

- Improvement of C++23's `std::mdspan`
- See [P2630r4](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2023/p2630r4.html)

#### Debugging support

- `std::breakpoint`
- `std::is_debugger_present`
- `std::breakpoint_if_debugging`: `if (std::is_debugger_present) std::breakpoint();`.

#### `std::execution` (sender/receiver)

- See [P2300R10](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p2300r10.html), and the reference implementation [NVIDIA/stdexec](https://github.com/NVIDIA/stdexec).

- Execution resources represent locations like GPUs or threadpools.
- Schedulers represent the execution resource, defined with `execution::schedule`
- Senders describe tasks; receivers handle workflow termination.
- Sender types:
  - Factories : `execution::just`, `execution::just_error`.
  - Consumers : `this_thread::sync_wait`.
  - Adaptors  : `execution::then`, `execution::when_all`.
- Receivers support three channels: value, error, stopped.

### 🗣️ Frances Buontempo: An introduction to swarm intelligence algos

[📄 Slidedeck](https://meetingcpp.com/mcpp/slides/2024/SwarmMeetingCpp602422.pdf).

Frances Buontempo presented an engaging introduction to swarm intelligence algorithms, blending theoretical insights with practical programming demonstrations. Her talk emphasized the simplicity and creativity behind implementing such algorithms, encouraging attendees to write code for fun and problem-solving.

As someone unfamiliar with such a topic, I found her presentation intellectually stimulating.  
The first slide title, *"Swarm to get your way out of a paper bag"* made me remember her earlier publications in `ACCU's Overload journal` ["How to Diffuse Your Way Out of a Paper Bag", 2016](https://accu.org/journals/overload/24/132/buontempo_2225/) and on [ResearchGate](https://www.researchgate.net/publication/309210110_How_to_diffuse_your_way_out_of_a_paper_bag) about [Brownian motion](https://en.wikipedia.org/wiki/Brownian_motion), which inspired me years ago to begin experimenting with naive particle simulations and the [SFML](https://www.sfml-dev.org/) as a playground.

#### What is swarm intelligence ?

Swarm intelligence refers to the *"emergent collective intelligence of a group of simple agents"*.  
Inspired by nature - *such as flocking birds or foraging ants* -, these metaheuristics are designed to tackle intractable optimization problems.

They operate using two fundamental modes:

- Exploration: discovering new solutions (unexplored area of the feasble region)
- Exploitation: refining existing solutions (search of the neighborhood of a promising region)

Metaheuristic search algorithms are broadly categorized into :

- Trajectory-based approaches *(e.g., [simulated annealing](https://en.wikipedia.org/wiki/Simulated_annealing))*.
- Population-based approaches, which are also subcategorized into
  - [evolutionary computation](https://en.wikipedia.org/wiki/Evolutionary_computation)
  - [swarm intelligence](https://en.wikipedia.org/wiki/Swarm_intelligence) *(e.g., [particle swarm optimization](https://en.wikipedia.org/wiki/Particle_swarm_optimization) & variants)*

> [A.N] see also [AI Search Algorithms for Smart Mobility, 2021, by Alaa Khamis and Yinan Wang](https://smartmobilityalgorithms.github.io/book/content/TrajectoryAlgorithms/index.html)

#### [Particle Swarm Optimization](https://en.wikipedia.org/wiki/Particle_swarm_optimization) (PSO)

- Agents (particles) have positions and velocities in a given space.  
- They adjust their movement based on a formula involving constants.

#### [Ant Colony Optimization](https://www.researchgate.net/publication/2330246_The_Ant_Colony_Optimization_Metaheuristic_Algorithms_Applications_and_Advances) (ACO)

- Ants traverse grids or graphs, guided by virtual pheromones (numeric values).

#### [Abstract Bee Colony](http://www.scholarpedia.org/article/Artificial_bee_colony_algorithm) (ABC)

See also [A comprehensive review of artificial Bee Colony Algorithm](https://www.researchgate.net/publication/324986068_A_Comprehensive_review_of_Artificial_Bee_Colony_Algorithm)

Bees assume distinct roles:

- **Scouts**: exploring new areas for resources, remember the best locations.
- **Workers**: gathering food and investigate nearby.
- **Inactive**: waiting at home to be recruited.

Communication via a "waggle dance" recruits other bees to promising food sources.

#### [Cat Swarm Optimization](https://www.researchgate.net/publication/221419703_Cat_Swarm_Optimization) (CSO)

- A playful algorithm simulating cat behaviors.
- Steps involve sprinkling cats randomly in the solution space, memory pools for seeking, and tracing.
- Incorporates randomness and decision-making for problem-solving.

#### Implementation & demonstrations

Frances demonstrated implementations using the [Simple and Fast Media Library (SFML)](https://www.sfml-dev.org/) , highlighting its simplicity for setting up a game loop and employing discrete distributions to model "how one could get the cat out of the bag."

Her demo underscored how solving problems in a 2D rendering environment can be both engaging and educational. It showcased the power of creating, experimenting, and learning programming skills in a visually intuitive and fun way.

### 🗣️ Timur Doumler: Contracts for C++

Timur Doumler provided an in-depth exploration of [P2900R10](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p2900r10.pdf) and the concept of contracts in C++, explaining their role, benefits, and the new mechanisms introduced.

#### What are contracts and why do they matter ?

Contracts - rooted in the [design by contract (DbC)](https://en.wikipedia.org/wiki/Design_by_contract) paradigm - define formal, precise, and verifiable interface specifications for software components.  
These extend typical function definitions with:

- **Pre-conditions**: conditions that must be true before function execution.
- **Post-conditions**: conditions expected after function execution.
- **Invariants**: conditions that remain constant during execution (e.g., class or loop invariants).

Historically, C++ contracts were expressed as comments and documentations through [named requirements](https://en.cppreference.com/w/cpp/named_req), custom assertion macros (based on `<cassert>`), or even `if` used in conjunction with `throw` statements.  
**P2900 "Contracts for C++"** introduces contract assertions to express these directly in code, enhancing not only clarity and **readability**, but also **tool support**.

#### The purpose of contracts

Contracts allow programmers to:

- Express **expectations** about program **correctness** (using pre/post-conditions).
- Verify these expectations dynamically to identify defects.
- Improve documentation, debugging, and static analysis without altering the program semantics.

While contracts share similarities with unit tests, they **are not** error-handling mechanisms and focus on specifying program correctness rather than runtime behavior guarantees.

Contracts assertions are redundant, acting as additional layers of verification.

#### **P2900** main features

- **Keywords**
  - `pre` and `post` for function declarations.
    - `post(r : r.isValid())` where `r` names the returned object
  - `contract_assert` within function bodies.
- Seamless integration
  - Unlike macros, contracts are fully integrated into the language and support modern C++ features like copy-elision.  
    - `ret` in `post(ret: ....)` refers to the value in the caller side

#### Practical implementation and integration

- A customizable contract **violation handler**, defined program-wide.
- Integration with the standard library using header `<contracts>`, in namespace `std::contracts`.
- Implicit constification of variables in contract predicates to ensure safety.

#### Evaluation semantics

Contracts can be evaluated with different semantics, allowing flexibility based on performance and safety requirements:

- **Ignore**: Parse but do not check the predicate.
- **Observe**: Check the predicate, call the **violation handler** on failure, then continue.
- **Enforce** (default): Check the predicate, call the violation handler, and **terminate** on failure.
- **Quick_enforce**: Terminate immediately on predicate check failure.
- *(not part of P2900)* **assume**: do not check the predicate and optimise on the assumption that it is try *(understand: if false, the behaviour is undefined)*

Such a choice is implementation defined, and can be defined either:

- at compile-time *(e.g `-fcontract-semantic=enforce`)*
- at load time
- at link time
- at runtime *(e.g enable with a debugger is attached)*

Which means that one can't - *and should not, anyway* - rely on side-effect.

#### Challenges & limitations

- Contracts focus on runtime-verifiable predicates and cannot address all aspects of plain-language contracts  
  (e.g *"points to an existing object", "this function will return a value", etc.*).
- They are **not** substitutes for **formal correctness proofs** or exhaustive static analysis.  
  > ***A.N**: For exhaustive correctness and formal proof, see [TrustInSoft static analyzer](https://www.trust-in-soft.com/).*
- Writing **predicates without side effects** is critical to maintaining program semantics.

> What's coming next/post-MVP ?
>
> - Referring to "old" values at the time of call in contract checks.
> - Expanding the scope of contracts to cover more advanced scenarios and improve their utility.
> - See
>   - [P2461 - Closure-Based Syntax for Contracts](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2021/p2461r0.pdf)
>   - [P3098r1 - Postcondition captures](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2024/p3098r1.pdf)

#### Conclusion / takeaway

- Contracts provide a structured way to **express and verify correctness expectations**.
- Checks must be carefuly designed and used
- They enhance static analysis, documentation, and debugging **without altering program behavior**.
- While limited in scope, contracts - *as proposed by P2900* - lay a strong foundation for future extensions and **safer programming practices**.

### 🗣️ Jens Weller: Meeting C++ update

Jens provided updates on the **Meeting C++** ecosystem,  
retrospecting about the platform's growth over the last past 12 years, its strategic direction, and plans for the future.

#### Meeting C++ 2.0

- **Online** user groups, job fairs, and books & tools fairs - using [meetup.meetingcpp.com](https://www.meetup.com/meeting-cpp-online/) and [meetingcpp.com/mcpp/online/](https://meetingcpp.com/mcpp/online/).
- [**Job fairs**](https://meetingcpp.com/mcpp/online/jobfair.php): help connecting employers (using [job board submissions](https://meetingcpp.com/mcpp/jobsubmission/)) with candidates through [CV uploads](https://meetingcpp.com/mcpp/recruiting/cvupload.php) and visibility within the C++ community.
- [Training](https://meetingcpp.com/mcpp/training/)
- [Survey](https://meetingcpp.com/mcpp/survey/)s

#### The Meeting C++ conference

- Continues to refine its **hybrid** model - *since 2020* -, offering both onsite and online experiences - which is a real improvement when it comes to **accessibility**. And will keep it that way for the 2025 edition.
- Expand to more content (LinkedIn newsletter, sponsored blog articles, ads, etc.) and ways to monetized the reach.
- **2024** recordings will be available to attendees post-conference on [Hubilo](https://events.hubilo.com/meeting-cpp-2024), then will later be available on the [MeetingCPP Youtube channel](https://www.youtube.com/@MeetingCPP).
- **2025** will see enhanced tools like [Tito](https://ti.to/home) for ticketing and [Eventbrite](https://www.eventbrite.com/) integration.
  - The call for paper will start in April 2025, and will probably end in July.

#### Future vision: Meeting C++ 3.0

- Expansion into mentoring and commercial training offerings.
- Help more C++ users to create local meetup groups, offering advices on starting and running them.
  - Encouraged diverse formats, including C++ quizz, coding dojos, book clubs, and lightning talks, to attract varied audiences.

### ⚡ Secrets Lightning talks

#### ⚡ Ivan Cukic - a brave new world

Ivan Cukic explored the growing focus on safety, energy efficiency, and the broader societal and environmental responsibilities of software development.  
He discussed how governments are beginning to regulate IT by responding to popular buzzwords,  
and how the C++ committee is reacting to these changes.

Ivan emphasized that the real challenge lies not in tools but in people.  
He proposed that - *like Agile principles* - safety should be a mindset rather than a strict set of tools and practices.  
This mindset should encompass a **clear definition and manifesto**, **education** for all developers, **integration** into the **software development cycle**, and **regulations** that genuinely improve outcomes for people.

Ivan concluded with a call to action: to **educate** developers and embrace this *"safe new world"* with a proactive and adaptable mindset.

#### ⚡ Hana Dusikova - Hashing

See this lightning talk's [video here](https://www.youtube.com/watch?v=JOZdyukFCz4).

Hana introduced [cthash](https://github.com/hanickadot/cthash), her single-header C++ library for compile-time hashing,  
designed to offer a modern and user-friendly alternative to cumbersome APIs like `OpenSSL`'s.

Highlighting the verbosity of traditional C interfaces (e.g., `SHA256_init` + `SHA256_update` + `SHA256_final`),  
Hana demonstrated how `cthash` simplifies the process with clean, modern C++ syntax.
Streamlined/monadic API, and user-defined string literals `_sha256`.

Example from the [project's Github repository](https://github.com/hanickadot/cthash):

```cpp
using namespace cthash::literals;

constexpr auto my_hash = cthash::sha256{}.update("hello there!").final();
// or
constexpr auto my_hash = cthash::simple<cthash::sha256>("hello there!");

static_assert(my_hash == "c69509590d81db2f37f9d75480c8efedf79a77933db5a8319e52e13bfd9874a3"_sha256);
```

#### ⚡ James Mc.Nellis - My **least** favorite C++ feature

See this lightning talk [video here](https://www.youtube.com/watch?v=sjOCouCbKGI).

James's least favorite C++ is not like some peoples template nor RAII, but **functions pointers**.  
Why that ? Mostly for a memory safety reason, which in this case lead to security vulnerabilities: attackers can override function pointers.  
James highlighted [CFI (Control Flow Integrity)](https://en.wikipedia.org/wiki/Control-flow_integrity) technics, which can be used to make the code crash rather than executing the attacker's code.

- Clang CFI (`-fsanitize=cfi`)
- GCC `-fstack-protector`
- Microsoft control flow guard `/guard:cf`
- Armv8.3 pointer authentification

[Where are we on security features? - Kees Cook, Qing Zhao, Linux Plumbers Conference](https://www.youtube.com/watch?v=tQwv79i02ks&ab_channel=LinuxPlumbersConference)

#### ⚡ Phil Nash - Live Demo using `Undo.io` tool on `Doom`

For this demonstration, the speaker used `chocolate-doom` ([website](https://www.chocolate-doom.org/wiki/index.php/Chocolate_Doom), [github](https://github.com/chocolate-doom/chocolate-doom)) 
to illustrate how simple, efficient, and perhaps fun [Undo.io's live-recorder](https://docs.undo.io/UsingTheLiveRecorderTool.html) can be.

- Started to play doom, while live-recording using `Undo`'s `live-recorder`.
- Then ran the recorded `.undo` file, which immediatly stops at the point when the record ended.
- Demonstrated how display a frame with the game buffer in memory.
- Asked the audience for a `(x,y)` coordinates: 206 and 148.
- Used the undo command line `last` to find out the last time a specific address in memory was changed,  
  here the pixel matching the x,y coordinates chosed by the audience `last I_VideoBuffer[206+148*320]`,  
  effectively rewinding and pausing the execution back to this very moment.
- Then find out when was the last time an ennemy was on that pixel, and its matching memory address.
- As the ennemy's health at this moment is `0`,  
  then rewind the record back to the precise moment such thing was alive.  

  The `last thing->health` command then lead to `target->health -= damage`,  
  with the old value `0` and the new value `5`
- Show the matching rendered game frame, which is exactly when the player killed that ennemy.

#### ⚡ Titus Winters - On parameter sinks

See this lightning talk [video here](https://www.youtube.com/watch?v=iH86aQrzIKU).

Titus Winters delved into the considerations of API design and parameter passing in contemporary C++.

- **Rvalue** references (`&&`) and move semantics
  
  Rvalue references **may** be moved but are not inherently moved - but it's a common misconception that rvalue references always guarantee a move.

- **Overload sets** are the fundamental unit of API design in C++

  *"Overload operations that are roughly equivalent"*, [C++ Core Guidelines, C.162](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#c162-overload-operations-that-are-roughly-equivalent).  
  Ensure APIs clarify intent, aligning function signatures with how resources are managed.

- Functions call cost and move operation **cost**

  - Whether data is too expensive to copy is a property of the type, not of a function.
  - Cost of function ~= cost of a move: **overload set**

    ```cpp
    f(const T&);
    f(T&&);
    ```

  - Cost of function > cost of a move: pass **by value**, don't care about the extra move operation.

    ```cpp
    f(T);
    ```
  
  - **Maybe** move ? Such a function had better returns the information is the parameter were actually moved.

#### ⚡ Jens Weller - Networking

Jens shared some insights on common patterns in his networking code,  
emphasizing the importance of async programming and robust data handling in scenarios like authentication protocols.

He mentioned:

- Popular libraries like [QNetworkManager](https://doc.qt.io/qt-6/qnetworkaccessmanager.html), [POCO](https://pocoproject.org/), and [Boost.Asio](https://www.boost.org/doc/libs/1_83_0/doc/html/boost_asio.html) to implement asynchronous task jobs.
- Data management strategies, included handling formats like `JSON`, `XML`, raw binary, and compressed streams
- Alongside with error-handling considerations.  

### 🗣️ Peter Sommerlad: Collective Amnesia?

[🎥 Video](https://www.youtube.com/watch?v=g6QYGW-TwwY), [📄 slidedeck](https://meetingcpp.com/mcpp/slides/2024/Collective%20Amnesia969332.pdf) *(shared using a **QR code** on the first slide of the deck !)*.

> *"Pay attention - don't become the grumpy old man ranting"*  
> [A.N] From my perspective, definitly a keynote every developer should attend to or watch online !

In his talk, - *with a notable frank speaking* - Peter explored the phenomenon of *"Collective amnesia"* in software development:  
our tendency to forget **timeless principles**, **proven practices**, and **historical lessons** in favor of **trends**, **complexity**, or **convenience**.  
He encouraged revisiting and applying foundational concepts to modern development, in order to stop repeating the same mistakes over and over again.

> For examples, he mentioned that **CO2 causing global warming** were something studied more than a century ago - *see ["On the influence of carbonic acid in the air upon global warming", 1896, Svante Arrhenius](https://www.rsc.org/images/arrhenius1896_tcm18-173546.pdf)* -,  
> and - *as a [Godwin's law](https://en.wikipedia.org/wiki/Godwin%27s_law) point* -, that the current **rise of fascism** one can observe all over the world: world war 2 is **NOT** a thing to repeat **ever** *(concentration camps, etc.)*.

#### Why do we forget ?

Amnesia & nostalgia

- Forgetting past insights and **overvaluing recent trends**.
- However, nostalgia leads to overlooking the positive aspects of past practices.

Neglected knowledge

- Well-established principles *(e.g., modularity, type systems)* and **scientific evidence** are ignored.
- Proven practices - *like unit testing, DRY/OAOO, refactoring, etc.* - are underutilized.

Cultural and structural factors

- Advances in hardware promote inefficient software.
- **Trend-driven development** repeats mistakes.
- **Buzzwords-driven design**: e.g *AI, ML, VR, cloud, blockchain, XML, Java/EJB, CORBA, etc.*
- Powerful men influence/impact: drunk by power, money and eagerness for control while being socially irresponsible, which results in too few benefit at the cost of most.
- Lack of investment in **education** and **fundamentals**: Badly paid teachers/trainers teaching obselete technics, while techs suffer from a long learning curve.

Risk aversion and populism

- Following the crowd for safety - e.g *"if everybody is doing it, we also should", "nobody gets fired for buying IBM/Cisco"*.
- **Simplistic** (loud) solutions and **populist thinking** overshadow **realistic** (calm) approaches.
- Ignorance, lack of pragmatism/forecasting: cost & consequences of a trend.

#### Forgotten foundations

Timeless principles

- Simplicity, **SoC** *(separation of concerns)*, high cohesion, loose coupling, testability, and exchangeability,  
  which often result in **untestable** product, and **unmaintainable** codebase - *thus no more delivered **value***.
- Neglecting these principles increases **long-term costs** and **complexity**.

Historical insights

- **Modularization**: Independence, changeability, SoC, and hiding design decisions.  
  *["On the criteria to be used in decomposing systems into modules", **1972**, D.L. Parnas](https://dl.acm.org/doi/10.1145/361598.361623)*
- **Type systems**: Clarity and prevention of misinterpretation.  
  *["A Formulation of the Simple Theory of Types", **1940**, A. Church](https://www.classes.cs.uchicago.edu/archive/2007/spring/32001-1/papers/church-1940.pdf)*
- **Refactoring**: Continuous improvement of existing code.  
  *["Refactoring Object-Oriented Frameworks", **1992**, William F. Opdyke & Ralph Johnson](https://www.researchgate.net/publication/2498589_Refactoring_Object-Oriented_Frameworks)*
- **Unit Testing**: A proven practice often overlooked.  
  *["Simple Smalltalk Testing: With Patterns", **1989**, Kent Beck](https://web.archive.org/web/20150315073817/http://www.xprogramming.com/testfram.htm)*

#### Software architecture and design patterns

> "Lower quality is the **most expensive thing** in software: Good-enough is never good-enough."

Pitfalls

- Often biaised and reduced to 23 [GoF design patterns](https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns).
- Overemphasis on cloud, distribution, and increasing complexity.
- Ignoring internal quality and codebase, leading to hard-to-maintain systems.

Dependencies management

- Avoid singletons, global variables, and hidden side effects.
- Avoid tight-couplings and hidden relationships.
- Refactor regularly to improve maintainability.

Caution with patterns

- Understand liabilities before adopting patterns.
- **Layers** and **tiers** must balance abstraction and granularity.
- Challenge designs and architecture decisions.

#### The C++ type system as a key tool

- Ensures meaning & safety: associating types with expressions and entities, preventing misinterpretation of data and raising errors when meaningless operations are attempted.
- Facilitates efficient & flexible code: detects type errors with strong safety, supports both implicit & explicit conversions, and enables type deduction through features like auto and templates, for a smaller and more flexible code.

#### Best practices

Testing

- Replace interactive debugging with **automated testing**.
- Favor [TDD](https://en.wikipedia.org/wiki/Test-driven_development) for immediate feedbacks.
- Write [Good Unit Tests (GUTS)](https://www.youtube.com/watch?v=cfh6ZrA19r4&ab_channel=MeetingCpp).

Simplicity over complexity

- Refactor mercilessly, *as a demonstration of **love** to your future self and colleagues*.
  - Focus on naming, function & classes granularity, parameterization, and algorithms.
- Less code equals more software, move value.
- Start with the simplest solution, not the newest nor a complicated one.

#### Conclusion, key takeaway, and broader thoughts

Human/societal lessons

- Learn from history to avoid repeating mistakes (e.g., climate crisis, fascism).
- Promote responsibility, equity, and sustainable practices.

Developer mindset

- Love your codebase by simplifying and improving it for future maintainers.
- Prioritize timeless principles over fleeting trends.

Takeaways

- Revive and apply forgotten software principles.
- Simplify architecture and code through regular testing and refactoring.
- Embrace C++'s strengths to write maintainable and efficient software.
- Act responsibly in both software and societal contexts by valuing simplicity, sustainability, and human connection.

#### Additional inputs from questions

- Peoples who are not willing to learn continuously should not be doing softwares. Learning is a life-long experience.
- Code should not even be consider existing if it not paired with tests.

- **Question**: What are your thoughts about mocking ?  
  **Answer**: CppCon-2017: mocking considered harmful. It hides dependencies. Make the codebase less likely to change, in order not to break changes.

- **Question** (me): Any advise for a professional C++ trainer who struggle a lot with juniors strong beliefs,  
  and the inertia we have in the academic which often make teachers to teach very deprecated content ?  
  Same to fight dogmas, and bring more pragmatism into leaders/managers mind ?  
  **Answer**: There's no easy answer. Had to quit my jobs before when my values were too much violated.  
  It's always hard to solve peoples problems because it involes peoples.  
  Show love. Peer-programming actually works. Build trust, learn new things. Code katas.

## Conclusion

Attending Meeting C++ 2024 was, as always, an very enjoyable and interesting experience.  
The event provided an incredible blend of technical depth and thought-provoking discussions on broader topics that resonated with the C++ community current concerns and needs.  
I particularly appreciated how some talks and keynotes echoed and complemented each others, weaving a coherent narrative across diverse sessions.  
This interplay added significant value to the conference and highlighted the care put into curating the program.

Another standout aspect was the inclusion of more talks that focused not just on technical challenges but also on delivering value sustainably, while preserving developers' mental and physical health.  
These sessions offered underscored the importance of fostering a holistic and pragmatic approach to software development.

I would like to extend my heartfelt thanks to Jens and all the organizers for their dedication and hard work in making this event a success.  
My gratitude also goes to the speakers, who shared their insights and expertise, and to the sponsors, whose support made this gathering possible.  
Together, they created an environment that inspires learning, collaboration, and growth.

*One area for improvement, however, was the scheduling system, particularly for remote attendees managing time zone differences.  
While the MeetingCpp and Hubilo platforms allow users to set their own time zones, the feature felt buggy.  
For instance, selecting Paris CET resulted in the schedule being shifted one hour earlier, despite Berlin *(where the conference is hosted)* and Paris are sharing the same time zone.  
Addressing this issue would enhance the remote attendee experience next year.*

Also, while attending the conference remotely, I had a great experience interacting with the online chat during talks,  
and really appreciated that some of my questions were upvoted and asked to the speakers.

I definitly look forward for next year's event (perhaps, on-site !).  
The Meeting C++ conference is like fine wine or aged cheese: each year adds depth and character, refining the experience and making it richer, more rewarding, and ever more enjoyable with age.  
I'm excited to see what 2025 will bring!

Until then, take care, keep learning & love C++. See you folks !  

Guillaume.

---

If you enjoyed this paper:

- 👍 Consider leaving a *"like"* and a **comment** - at the bottom of this page, and on **LinkedIn**.
- 📩 Share this paper with your friends, colleagues, teachers, students.
- 📖 You might be interested in last year's: [Conference - Meeting Cpp 2024 - Trip report](https://gist.github.com/GuillaumeDua/d6a82cd83178a38566464a78505a2669).
