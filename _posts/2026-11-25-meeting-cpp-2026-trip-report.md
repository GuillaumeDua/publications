---
layout: post
title: "Trip Report - Meeting Cpp 2026"
image_path: /assets/img/meeting-cpp-2026/screenshots
sitemap: true
description: >
  My trip report for the Meeting Cpp 2026 conference
tags: [ cpp, trip-report, meeting-cpp, conference ]
---

<!-- TODO: replace with a screenshot from the stream. This placeholder is the conference's own title card,
     https://meetingcpp.com/files/mcpp2026.jpg (600x300) - reuse rights are not stated on the site. -->
![Meeting Cpp 2026 - logo]({{ page.image_path | relative_url }}/meeting-cpp-2026-logo.jpg)

|                       |                                                              |
| --------------------- | ------------------------------------------------------------ |
| Event                 | [Meeting C++ Conference, 2026](https://meetingcpp.com/2026/) |
| Author                | Guillaume Dua                                                |
| Date                  | 11/26/2026 - 11/28/2026                                      |
| My attendance sponsor | Myself ! (for once, it’s an exception)                       |
| Revision              | R1                                                           |

---

- TOC
{:toc}

## Introduction

<!-- TODO: this year's framing - the themes that dominated the lineup, and a word on the remote experience:
     hallway discussions, chatting with attendees online. -->
<!-- Recurring themes visible in the 2026 schedule: C++26 static reflection (5+ talks), contracts and the
     hardened standard library, safety profiles, compile-time guarantees, and the effect of AI coding agents
     on practice and on teaching. -->
<!-- 15th edition ? -->

This year - and like every year: see my [trip-report for last year's conference]({{ '/2026/03/13/meeting-cpp-2025-trip-report/' | relative_url }}) - I attended Meeting C++ 2026.  
This is the **15th** edition of the conference, held in Berlin (Vienna House by Wyndham Andel's Berlin Hotel) and online.  
As last year, I joined remotely, from home.

> ⚠️ **Disclaimer**:
>
> The opinions, interpretations, and conclusions expressed in this report - *and the "my takeaway", "digression", and "conclusion" sections in particular* - are solely my own and do not necessarily reflect the views of my employer.

From this - admittedly far too long - trip report, I hope that if you couldn't attend the conference this year, you can at least take away a small piece of the experience. And who knows, if you enjoy reading it, perhaps you'll join in person or remotely next year 😉.

> ❓ Why spend so much time writing such a long trip report?
>
> First and foremost, this document is for future me. I cannot `ctrl+f` my own memory, but I can search this report to quickly recover who said what, about which topic, and in what context.  
> Like any conference report, it cannot fully capture the depth, precision, and nuance of every talk; what follows is therefore my own understanding and interpretation of the speakers' messages.  
> Beyond documentation, the act of writing itself matters: it helps me internalize the ideas, connect themes across talks, and turn fleeting impressions into lasting knowledge.

> ⏩ What's coming next?
>
> I'll make sure to add [🎥 videos](https://www.youtube.com/@MeetingCPP/videos) and [📄 slides](https://meetingcpp.com/mcpp/slides/?year=2026) links when available.

Resources:

- [Schedule](https://meetingcpp.com/mcpp/schedule/)
- [Slides](https://meetingcpp.com/mcpp/slides/?year=2026)
- [Youtube Channel](https://www.youtube.com/@MeetingCPP/videos)

## 📅 11/26/2026

### 🗣️ **Jens Weller**: Welcome Message

<!-- Slot: 09:30 - Track A (Saphir) -->
<!-- TODO: keynote/talk/track counts, onsite and remote attendance figures -->

- Hubilo changed name to Virtual pro, but same plateform
- badges disappeared lolz
- like always, some words about safety for the covid pandemic
- Sponsors
  - Main sponsors: Thinkcell
  - Booths: HRT (Hudson River Trading), Thinkcell, Conan.io by JFrog
  - Video sponsor: Bloomberg
  - KDAB -> dedicated photographer
  - online sponsor -> Andreas Feretif
- Since I'm attending online, I'll miss the social events
  - speakers & staff dinner on thursday
  - social reception
- inclusivity: vegan food
- social media
  - `#meetingcpp`
  - `Include C++` discord: `includecpp.org` -> `#meetingcpp`
  - Slack: `cpplang.slack.com` -> `#meetingcpp`

Code of conduct:
- berlincodeofconduct.org
- coc.meetingcpp.com
- condict@meetingcpp.com
- Trust & safety team, code of conduct team

Track D is online track

RIP Rainer Grimm
- had ALS
- One of the big meetingc++ contributor
- check books, blog, etc.
- blog will continue thanks to Klaus Igleberger and other writer/maintainer

Cippi is back ! (Klaus Igleberger)

Lougne track (along the hall)

- Diversity meeting (today 15:30)
- C++ committee meetup (tomorrow 15:30)

Meeting  C++ started in 2012
- 2012: 150 attendees
- 2026: 300 onsite, lots online

#### Sponsors

<!-- TODO: gold, video, t-shirt, online sponsors -->

#### Creating a **safe** and **inclusive** environment

<!-- TODO: (Berlin?) code of conduct, trust and safety team -->

### 🗣️ **Mateusz Pusz**: Why Great C++ Libraries Fail (And How to Fix That) (Opening Keynote)

<!-- Slot: 10:00 - Track A (Saphir), hybrid -->
<!-- Summary, paraphrased from https://meetingcpp.com/mcpp/schedule/talkview.php?th=7478d33323476961fe3019d9911c924b5dfba771
     Why technically strong C++ libraries remain hard to adopt and to contribute to.
     Follows a user through six stages - Discovery, Evaluation, Understanding, Integration, Contribution,
     Community - with mp-units as the running example, and ends on a checklist of eleven changes. -->

[🎥 Video](), [📄 slidedeck]()

<!-- TODO: content -->

"11 tips to elevate from repo to professional product"

Known from his units library: mpunits. Evolution working group at the iso comitee

Opening questions:

- who ever wanted to use a 3rd party library, but found it too use to hard ?
- who contributed ?
- why likes writing documentation -> no one ?

Why some projects fails, and how to improve that ?

"Which project should I contribute/choose to learn modern c++ ?" -> well, it depends ...

- builder are people who identify problems no one assigned them to solve
- the specific pursuite matters less than the fact that you chose it yourself

#### 1

Choose:
- the project you're interested in.
- open source
  - no contraints
    - no limit specific to production project
    - you decide which compilers and language version to target
    - no customer requirements, no company coding standards
  - you need a mission
    - otherwise, it might become another boring job -> and you have a life, perhaps a family, etc.

C++ libraries are great, but often frustrating to use
Technical excellence != project excellence

The "fortress" library syndrome:

- hard to enter: tons of requirements like "install clang, cmake, conan, etc."
- hard to understand the project itself -> no documentation, have to read the header files, which tools to use, etc.
- defensive maintenainers: refuse to challenge design, refuse some contributions
- no clear path to contributing: no CONTRIBUTING.md file, no "good first issue" label, etc. -> "just look at the code to see how it works"

#### cost of friction

- users -> give up and write their own project/libraraies -> NIH syndrome
- contributors move to easier ecosystem: rust, python, etc.

Goal of the talk:

- 11 points on how to improve
- tranform your repo from "code dump" to "production ready product"
- turn curious visitors -> into active contributors and advocate

#### user journey

- discovery: one have to find the library
- evaluation: does it work ? still maintained ? covered by some CI ?
- understanding: how to use it ? how to integrate it to your project ?
- integration
- contribution -> do the project maintainers need some help ?

#### stage 1 - discovery

example: `mpusz/units`

- not a good idea to provide such a generic name -> find a unique name
- mpunits is unique, as opposed to just "units"
- be consistent -> use it everywhere -> github repo, cmake target, conan package, namespace, include paths, etc.
- straight-forward names, not some obscur acronyme
- dont aggregate multiples projects into one repo

The "5 minutes README test"

- logo & badges: build status, coverage, license, version, etc.
- the pitch
- quick-start
- live demo -> compiler explorer link

Bad vs. good pitch

- not too short, not too generic

Track your reach as a project creator/maintainer

- Star history -> track how your library is being adopted, compared to similar projects

Discoverability blueprint

- dont be a hidden gem ! If you dont advertise, it does not exist !
- unique, searchable project name
- consistent naming (namespace, cmake, package, header, etc.)
- README
- code example on the first screen
- etc.

#### Stage 2: evaluation

the "green master" philosophy

- one broken build is enough to loose some users's trust
- portability is not a "future goal" -> it's a requirement

have a CI/CD pipeline

- github actions are the gold standard for OS
  - compilers
  - architectures
  - configurations
    - c++ standard
    - formatting: fmtlib vs. std::format
    - contracts: std, gsl-like, ms-gsl, none
    - build: debut vs. release
    - modules, import std, free standarding

We should test all of those.

For testing:

- `-Wall` is not enough. your users compile your headers with their flags, not yours
- you have to be the most restrictive user of your own library -> setup everything, all the most restrictivbe warnings: conversions, shadown, old-style-cast.
- waarning as error in CI

Only package AFTER the CI build matrix is successful

Fuzz the build matrix: it is not possible to test everything -> CI workers limitation, causing timeout, long wait, etc.

- each vector catches different bugs
  - modules: missing export
  - import std: header/module mixing conflicts
  - freestanding: accidental `<iostream>`, etc.
  - gsl-like vs. ms-gsl
  - fmt vs. std::format
  - oldest compiler

Aim for 100% coverage

- different compilers
- different STL implemenations
- etc.

Random, but reproducible CI runs

- random seed: github actions workflow_dispatch inputs
  - specify seed
  - seed = 0 -> generate new randomized matrix

The quality gate: pre-commit hooks

- static analysis (clang-tidy)
- sanitizers (asan, usan, etc.) for runtime-heavy code
- unit tests
- measure code-coverage -> still a pain for consteval code
- integration test

Verify cmake consomption works (find_package)
verify conan consumption works
etc.

Performance: prove it, track it

- hard/cannot measure wall time on gh runner -> depends on the machine, different eveyrtime -> cannot be trusted
- have proper instrumentalisation: CodSpeed or valgrind: count instructions, not seconds
- relative comparison: cancels differences between machines, but not varied workload
- diff the assembnly: against a hand-written

If something fails -> have some report generated in github

Keep the `main` branch always working !

- branch protection
- require passing CI
- no direct push to main
- no force pushes, no deletions
- require PR reviews

For solo developers:

- local CI mirror -> some `check-all.sh` script for instance
- pre-commit hooks
- run both before every push
- PR anyway for breaking changes

#### stage 3: understanding

the documentation paradox

- how many of you enjoy writing documentation vs. how many of you appreciate a good documentation in a 3rd party software
- doxygen encourages "invetory documentation"
- be careful about useless documentation "set_width(width) width is the width to set" -> favor self-explainatory code
- doxygen as a dictionary, prose documentation as a textbook -> complementary for users
- writing documentation is not actually boring -> can be a fascinating design-related exercise

What to do:

- show off -> you spent weeks on a feature
- explain
- improve
- repeat

Systematic approach to technical documentation (diataxis.fr).
Quadrants:

- tutorials -> "I wanna lear"
- how-to guides -> "I need to solve X"
- explanation -> "I want to understand, how it works"
- references -> "what's the API ?"

Only doxygen -> mostly only the "Reference" quadrant

beyond the 4 quadrants: each serves a spcific user need in the lifecycle

- getting started
- examples
- migration guide -> from another library to this one
- blog/release notes
- bibliography: iso standards, academic references

Encouraging you to have great documentation

- `ProperDocs` with Material theme
  - drop-in continuation of `MkDocs 1.x`
  - used for mp-units
  - API reference input generated by `MrDocs`
- Sphinx with ReadTheDocs
  - python ecosystem
  - conan documentation
- write the prose in Markdown

#### zero-cost prototyping/playing

- compiler explorer demo -> so users can instantly play with your library
  - no install
  - instant sharing
  - libraries support, especially for header-only
  - supports the fill lifecycle coverage
    - prototyping -> explore ideas in seconds
    - design discussion
    - bug report -> add shared link in your bug-report filled form
    - nice as part of the documentation
  - zero-overheaad/MVE proofs
  - contributors onboarding

Don't claim overhead, show the assembly with compiler-explorer links

Tutorials -> shared "play with it" comnpiler-explorer links
interactive embeds in doc tutorials

Provide release tags for your library -> stabilite guarantee

#### seemless integration -> dependencies hurt the most

- "managing libraries is the most pain-point in the C++ ecosystem"
- lot of libraries have cmake written not for consumption -> hard to be consumed by others -> "asocial libraries"
  - build.sh script
  - no cmake exported target
  - no ... (FILL WITH SLIDE)

Seamless integration

- users have their own build system -> repsect iut
- cmake + conan/vcpkg

No everyone is using package managers today -> and that's ok -> meet users where they are
Lots of different consumption paths

- legacy & coroporage environments
  - strict dpenedency policies
  - air-hgapped networks
  - existing monorepo
- niche and experimental builds
  - cpm/fetchcontent
  - bazel, meson, build2
  - add_subdirectory

Package manager use tend to grow a bit, but slowly -> conan/vcpkg vs. source integration

#### modern cmake

- target, not variables
- simple consumption: find_package(yourlib required) + target_link_libraries

#### C++ standard -> which C++ standard your users use ?

- newest stand may loose some users ...
- 28% of users cannot upgrade because compilers or libraries do not support a newer standard ...

#### wide compatibility: the C++ reality

- compiler have regression: ABI break, etc. -> may force you to skip some specific versions. For instance, mpunits support clang >= 16 but not 19 and 22.

Conan is great because you can have different configuration options -> each can be turned on/off -> strategy

#### Stage 5 - contribution "do peoples wants to help ?

Have some collaborative triage
Communication is the heart of your library

First: separate issue from discussions

Issues

- actionable bugs
- tasks
- spcific feature requests

Discussions

- Q&A
- show and tell
- ideas
- design proposals / RFCs, etc.

The  "it doesnt work" loop -> waste time,  create confusion when users cannot explain what does not work for them

- have issues templates -> build config, compiler-explorer MVE as a shared link, etc.
- be nice to your users
  - always thanks for reporting
  - Empathy for the user's frustration
  - professionalism > ego.
  - be welcoming to everyone

One-click dev environment

- docker devcontainer -> everything in a clic to start working in one place. Greatly integrated in most IDEs live `vscode`. Embed the toolchain, etc.
- compilers, build, analysis, docs, profiles, cache -> all required tools at once
- not just for external contributors -> for your team -> consistency -> everyone have the same configuration, environment, etc.
- can be run locally, not only in code spaces
- provide better PR testing

CI failing report can then integrate some "how to reproduce" command line that can be fed to some docker container

#### community

- a git tag is not user communication
- How to migrate ?
- What if it breaks something ?
- Need to explain how change will affect users

Inform the community about cool stuffs that you've done -> release are marketing events.

Prose-based release notes

- the "why": why did this version happend
- the "what": what does it brings to users
- etc.

In C++, "breaking" is often invisible, until a user's build fail.

- in the code, using `[[deprecated("reaason")]]` attribute
- in the release blog:  explain breaking change, reason, etc.
- crerate release announcement
  - what is deprecated
  - what is breaking
  - what are the new features, fixes etc.
- spread the work on linkedin, twitter, reddit, etc.

A culture of appreciation

- open-source runs on human motivation -> most peoples don't get paid for it
- who ?
  - your own users
  - people who care about the domain
  - contributors for the resume line (CV), or to learn bleeding-edge C++ on real codebase

Your job is not make contribution rewarding enough -> don't loose them

The problem: it's hard nowadays for junior developers to proove their impact. Companies look for experienced peoples.

- have a CONTRIBUTORS.md
- Release blog credits -> "special thanks to @someone for the new SI conversions"
- Testimonial -> offer the write linkedin recommendation

All this cause multiplier effect -> cause the community growing

#### Recognition strategies

easy win:

- thanks users for their interests, efforts, interactions
- mention contributors by name in release notes
- use github "co-authored by" for pair-programming
- create a "hall of fame" section in docs
- share contributor spotlight on social media

advanced:

- help contributors write blog post about their work
- invoke them to co-present at conferences
- proviode reference letters for job applications/appliance

Good first issues done right -> label them, and then mentor the people who them up

#### let AI write the first draft

The worlflow

- feed C++ headers + design notes to an LLM
- clearlydescribe what you need
- human review for accuracy and for voice

benefit

- faster

(SEE SLIDE)

Warning: some users are allergic to AI, and will stop at the first sentence that sounds like AI.

- a correct and userful page can be rejected unread -> some communities ban ai-written post outright
- check the facts first -> most of the editing time goes there
- check the wording -> does it sounds like you ?
- skip idions and clever list -> readers who learner english elsewhere lose them

Read the page before you judge it.

#### Managing the AI influx

The challenge

- llm-generated PRs are increasing
  - lower quality
  - tons of them
  - longer

the danger

- low effort, high volume contributions
- ai refactors enrie designs without understanding rational

Have an AI contribition policy guide !

- contributors must understand and build able to defend any line
- keep diff minimal
- build and test yourself first
- be transparent: if generated by llm, state it.
- watch for confident-but-wrong code

The "primary author" principle

- protect design integrity
  - dont replace a class design just because AI suggested it
  - Do: ask the primary author about their rationale first

remember

- the original design often had specific reasons
  - compile-time performance
  - edge cases the AI doesnt see
  - consistency with the broader architecture
- most of thenm were never written down
  - approach you tried and dropped
  - discussions that settled the design
  - what your learned since

A model reas the code: it cannot read the experience that produce it

#### Building a welcoming culture

The foundation

- be respectful to all users and contributors
- help users will provide you more users, and so one

Be proactive in building a community

Passive maintancne leads to project death. You must be the "chief evangelist"
Niche projects (like mp-units) need education
provide opportunities to improve your codebase -> anything that can be added, improved, any use-case that can be added

You have to seek for production feedback

- creat an issue "im looking for production users" -> if you're just waiting, it might never show up !
- be prepared for complaints rather than praise
- listen to the "boring" problems
  - compilation time
  - header bloat
  - etc.
- providing feedback is super helpful, just as much as financially sponsoring
- also use Slack, and other discussions

#### from perspnal repo to community project

- grwoth from personal hobby to ISO standadization candidate

Avoid maintainer burnout -> you can't do it all, and you should not !

Automate what's possible/boring

- CI
- clang-format
- boths
- etc.

Empower others

- triage permission to active contributors
- documentation your decision-making prcess
- it's ok to say "not now, not for this release"

About burnout

#### back to the initial question: "which project should I contribute to learn modern C++ ?"

Green flags:

- Contributing.md
- maintainers respond kindly to questions
- has github codebase -> one-cloickl setup
- active CI with cleara error messages
- documentation explains the "why"

Don't be afraid of bleeding edge repos if they're welcoming

If you are a maintainer -> be the one you with you had !

when reviwering PRs

- always thanks
- explain your design
- etc.

From fortress to forum -> make easy to work with (project, peoples, etc.)

#### Conclusion

TIP: dont try to implement all 11 tips at once -> baby steps, incremental improvements

Consider supporting mp-units to reach the C++ standard -> call for help -> still hundreds if not thousands more hour of works

#### Insights from the question

- asking AI the review AI only work to some extent -> developers/maintainers still need to understand and be able to defend every single line
- Every developer needs to be able to write code on their own - without AI - so they are able to understand, review, and challenge AI-generated code
- have your code injected/usesd in the documentation be tests by so the CI, so you know when something's broken.
- try to convert contributors to active maintainers -> avoid burnout -> dont try to do everything all by yourself -> explain how you do stuffs.
- Documentation - depending on the quadrants - will somehow overlap, it's normal/ok
- 90% of my tests are `static_assert`, I have thousands for of them it's my main testing framework. So when my code compiles, well it basically work.

#### My takeaway

<!-- TODO -->

<!-- Also I started to draft a book about how to design a C++ component, library -->
<!-- CppShelf is a collection of my C++ libraries -> might want to split it at some point, when mature enough -->

like: About the talk's structure: announced the plan first, then expand/unfold it

### 🗣️ **Andreas Reischuck**: Simple use cases for Coroutines

Dresden C++ usergroup host

<!-- Slot: 13:15 - Track E (Amethyst), hybrid -->
<!-- Alternative track of interest:
       - Dušan Jovanović (Track C, Jade), "The Algebra Behind Great C++ APIs" -->
<!-- Summary, paraphrased from https://meetingcpp.com/mcpp/schedule/talkview.php?th=54a2a302afa1c55f804e44122ae996a9349572d2
     Practical C++20 coroutines in two scenarios: simplifying REST API data acquisition, and restructuring
     asynchronous procedure calls on Windows. -->

[🎥 Video](), [📄 slidedeck]()

Issue with the sounds on the livestream -> no sound for the first ~10 minutes, so I had a look at Dušan Jovanović (Track C, Jade), "The Algebra Behind Great C++ APIs"

#### 1st use case: hourglass app -> using QNetworkAccessManager with coroutines

- redmine + hourglass -> http/rest -> QT

stack:

- QT
  - GUI + QML
  - multimedia
  - file + settings
  - Devices
  - network
  - etc.

#### basic: QNetworkAccessManager get(request) -> reply

- connect to finished signal -> get reply
- nice, but always end in some "callback hell"

#### How to improve

NetworkTask for CoRoutine

(See slide with code example)

- simple, small, straight-forward
- coroutines are binding together all the part we have, to avoid obfuscating our code with complex stuffs.

Hourglass app summary

- use existing qt networkting
- qt signa/slot as coroutine runtime
- minmal infrsstructuren eeded
- readable network orchestration

#### 2nd example: desktop duplicated

- do live conding, but also have notes to remember what to show/demonstrate
- select screen parts -> duplicate to presentation
- useful for Ms-teams share: streaming extra-wide screen is just unreadable for other users
- encompass/highlight the shared part of the screen, so you know what's shared

Core loop

- capture (acquire change) -> render (update texture + draw) -> main (update ui status) -> then starts over
- one solution how to do it -> 3 differents threads. on windows, use QueueUserAPC (enqueue some function pointer)

Show some code with the windows thread API.

With coroutine, we end up with a simpler solution: simpler to implement, simpler to read, simpler to understand

Show some code about how to encapsulate the winders thread API with coroutines

(see slides for more code examples)

#### Where are your low-hanging coroutines ?

nice use-cases for coroutines, to simplify your code :

- sagas over multiple steps
- state machine managed in one place
- callback chains

#### conclusion

play more with coroutines

- smart small
- read the flow
- respect the lifetime

From questions:

- How slides are built ? Slidery, a javascript framework (to be confirmed) + AI for animation


#### My takeaway

<!-- TODO -->

I definitly wanna try how coroutine can be used in conjunction with qt signal/slots to simplifiy implementations -> making code simpler to read, thus maintain.


### 🗣️ **Ivan Čukić**: Contracts and hardened libraries - a bright future for C++ safety?

KDAB employee, author of "functional programming in C++", KDE developer, WG21, former university professor

<!-- Slot: 14:30 - Track A (Saphir), hybrid -->
<!-- Summary, paraphrased from https://meetingcpp.com/mcpp/schedule/talkview.php?th=9b787e508d55dc9cd5c06baf0026c220eae0a106
     C++ contracts - preconditions, postconditions, invariants - and hardened standard library
     implementations are checked at runtime today. The talk asks whether contract violations can be
     detected at compile time instead. -->

[🎥 Video](), [📄 slidedeck]()

The deck carries a running subtitle on every slide, which is also its plan: *"Introduction to the first steps of fortification and minimization experiment"*.

Opening slide, titled "Vulnerabilities":

> When I breakdown  
> Just a little and lose my head  
> Nothing I try to do can work the **same way**
>
> - The Alan Parsons Project

#### Introduction: some changes made to this presentation vs. what was first planned

- The abstract starts with "contracts are in"
- DISapproved due to constracts
- P4451R2 "early adoption of an always-enforced label" by Joshua Berne

We can just believe and hope ? Let's see what comes with C++26

Statement: ~~invalid~~ unhandler state that the system encourtered

- leads to vulnerability
- context/situation matters: example of how an astronaut fix something on the space station ->  same protocole cannot be applied on earth, as it's not the same environment

Slide "Guardrails", two kinds of guardrail:

- data validity:
  - encapsulation, and keeping the internal state valid
  - state modelling using sum types (`std::variant`)
- operation validity:
  - contracts
  - API minimization

Making program assuymptions explicit and checkable:

- pre(condition)
- post(result: condition) -> promise the result is a valid result, if the preconditon was met
- contract_assert(condition)

Treat contact as death things

- fail early, fail often
- plan for failure and handle it -> dont run out of the room

part of defensive programming

#### How can we handle contracts ?

- ignore -> do not evaluate
- observe -> evaluate, invoke handler, continue
- enforce -> evaluate, invoke handler, terminate or throw
- quick_enforce -> evaluate, terminate (the most problematic one according to Cuvic)

30 to 50% of error handling is not error-handling: just some logs and continue, etc.

The two studies he put on the slide behind that figure:

- Kery, M. B., Le Goues, C., and Myers, B. A. 2016 - *Examining Programmer Practices for Locally Handling Exceptions*
- Cabral, B. and Marques, P. 2007 - *Exception Handling: A Field Study in Java and .NET*

#### P3471 standard library hardening

Detects violations of selected standard-library preconditions:

- out-of-bounds `vector::operator[]`
- `front()` on an empty container
- dereferencing an empty `optional`
- invalid `span` access

Let's terminate: each failure have impact, but different impact

- games
- text editors, word processors, image editors
- databases, bank software
- autopilot, medical devices
- operating systems
- services in a multi-service system (threads or processes)

The question he hangs on that list, over a Bjarne Stroustrup CppCon slide ("Profiles for Simplicity and Guarantees", notions of what constitutes safety violations): **what is NOT OK to terminate?**

- the line he boxed in red on Stroustrup's slide: *"Termination errors: a library that terminates in case of 'unanticipated conditions' being part of a program that is not allowed to unconditionally terminate"*

From ignore semantic to

Killing a program is NOT safety -> even when some security issues, we don't want to loose all the system

termination is a first step of fortification -> to be confirmed, not sure about that one

- the deck's own subtitle backs this reading: fortification first, minimization second

safety at compile-time -> the index comes from a function whose postcondition already bounds it, slide "Ave compiler":

```cpp
// numbers : std::array<int, 6>;

numbers[some_function()] = 42;
//      ^ post(r: r >= 0 && r < 4)
```

- the postcondition, not the array size, is what the compiler gets to reason with - and here it is narrower than the array

#### Formal verification ?

impossible, becaus

- halting problem
- arbitrary inputs

with:

- encoded class invariants
- encoded preconditions and postconditions

if precondition for a function call cannot be proven -> mark the call as invalid
if the postcondition cannot be proven for the return value -> mark the call as invalid

Be careful of false-negatives

Slide "Frama-C", the annotation is ACSL:

```cpp
/*@ requires x > INT_MIN
    ensures (x >= 0 ==> \result == x)
         && (x <  0 ==> \result == -x); */
int abs(int x) { ... }
```

Imagine a C++29 profile that enforces this for contracts, or at least a clang-tidy check

"Make interfaces easy to use correctly, and hard to use incorrectly" - Scott Meyers

- can now be improved to "impossible to use incorrectly"

We usually think this applies to higher-level class/type design

Would `std::array::operator[](std::size_t) -> std::optional<T&>` ? -> just move the problem to another sector -> `optional::operator*`/`get`.

UB and fast, vs. safe and slow

Example: CloudFlare outage -> error properly detected, but not handled -> "internal server error"

Terminating a program IS NOT the answer.

Slide "Thought experiment":

- `std::array` and `std::vector` as member variables in a non-trivial class are a **code smell**
- using `operator[]: size_t -> T&` is outright **forbidden**
- range-based access is fine

Then, next slide:

> They must understand that great responsibility is the inseparable consequence of great power.
>
> - French National Convention, 1793

- Do we want something easy to implement, or something that is safe ?

In most situation, you don't need the full API of a vector
One might want std::queue, stack, flat_set -> subset APIs

#### Quicksort, as a worked example

Slide "Quicksort", reading `⊢` as "entails" / "gives you":

- non-empty range ⊢ random element position
- element position ⊢ element value
- set of element positions ⊢ midpoints, edges, random picks
- valid range ⊢ partitioned sub-ranges

#### API minimization

- shrink API of vocabulary types to exactly what you need - then uise wrappers in your classes
- Atomic API - do one thing, do it right
- add invariants, preconditions and postconditions, and prove them
- go to the next level of abstraction

Slide "Gone fishin'", the runtime-checked starting point he then wants to beat:

```cpp
auto operator[](std::size_t index)
    pre(index < N)
{
    // ...
}
```

What the compiler can do - or how can we use the compiler - to have some magic compile-time logic that ensure we only pass values that are safe -> compile-time checks

`ctc::array`: compile-time check array, slide "Array indexing":

```cpp
ctc::array<engine_t, 42> engines;
ctc::index<0, 40> index;
ctc::index<0, 2>  offset;

engines[index];                    // Ok
engines[index + 1_ctc];            // Ok
engines[index + offset];           // Ok
engines[midpoint(index, offset)];  // Ok

engines[index + 3_ctc];            // Error
engines[index + index];            // Error
```

- the bounds ride in the index type, so it is the arithmetic on the bounds that gets checked: `40 + 2` still fits in 42, `+ 3_ctc` and `index + index` do not
- the slide spells the two declarations `ctx::index` and everything else `ctc::` - typo on the slide

GOAL: have compiler check stuffs at compile-time, so we dont have to check at runtime

pattern-matching helps ! -> second "Array indexing" slide, narrowing a wide index back into a bounded one:

```cpp
good = match(bad,
    [] (index<0, 10> i) { return ... },
    [] (index<0, 30> i) { return ... },
    [] (auto i)         { return ... }
);
```

see github.com/intel/safe-arithmetic

#### Vector indexing

Way more difficult to do that array, since the size is a runtime info

#### about class design

- list all features you nee

Narrow argument types, pass exprerssions instead of values, or use inversion of control

- the one bullet he highlighted on the closing "Summary" slide, which is otherwise the API minimization list above

prove your current level is safe, then move on to the next level, and so on

#### From questions

- Stop writing complex classes -> if you do so, you stop partitioning, you stop designing
  - a function should have either a single loop, or no loop at all
  - dont break SRP, SoC, etc.
  - etc.
- What about checks that are performed tons of time ? -> for instance, on the same callstack

#### My takeaway

<!-- TODO -->

#### Additional resources

Cited on the slides:

- P3471 Standard Library Hardening
- Frama-C and its ACSL annotations
- <https://github.com/intel/safe-arithmetic>
- Bjarne Stroustrup, *Profiles for Simplicity and Guarantees* (CppCon)
- Kery, M. B., Le Goues, C., and Myers, B. A. 2016 - *Examining Programmer Practices for Locally Handling Exceptions*
- Cabral, B. and Marques, P. 2007 - *Exception Handling: A Field Study in Java and .NET*

<!-- TODO -->

### 🗣️ **Henrik Vallgren**: Compile time is the future of Automotive Software

experienced a bit of lagg on this talk, and low quality video

<!-- Slot: 16:00 - Track A (Saphir), hybrid -->
<!-- Alternative track of interest:
       - Lieven de Cock (Track B, Opal), "A gentle introduction to Reflection" -->
<!-- Summary, paraphrased from https://meetingcpp.com/mcpp/schedule/talkview.php?th=39974b3abf4e225876836a8d0b8a1d3d790986de
     An embedded system in which every object dependency is a constant expression and class members are
     exposed as a constexpr tuple.
     Pitch line from the page: "Can the compiler verify not only your types, but your entire system
     architecture?" -->

[🎥 Video](), [📄 slidedeck]()


AUTOSAR rules
failure can cause loss of lifes

Why automotive needs predictability -> safety: a software-defined vehicle needs absolute dependability

The same defect, caught at two different moments:

- found at build time: the compiler rejects it, it fails on a developer's machine or on the build server -> cost is a failed build
- found at run time: the vehicle hits it, it fails in a car, possibly while driving -> cost is field issues, recalls, safety risk

> Moving as much as possible to build time minimises risk: **breakage moves outside the car**

DBC -> signal description/specs in the automotive industry

What should be known at compile time:

- signal definitions: CAN messages and signals from DBC files become C++ types and values the compiler can use
- dependency graphs: who reacts to which message is declared as types, so the call graph is fixed at build time
- sections 1 to 3 below are the compile-time half, 4 and 5 are about keeping it predictable at run time

#### 1 - message and signal model

Message content as a compile-time collection

- DBC as input -> generated C++

```text
BO_ 2364539904 EEC1: 8 Vector__XXX
 SG_ EngineSpeed : 24|16@1+ (0.125,0) [0|8031.875] "rpm" Vector__XXX
```

```cpp
struct MessageEEC1 {
    static constexpr std::string_view messageName {"EEC1"};
    static constexpr uint32_t         messageId   {2364539904};

    Property<float, 24, 16,
             propertyName_EngineSpeed, LittleEndian,
             FactorOffset<float, factorOffset_EngineSpeed>,
             MinMaxTest<float, minMax_EngineSpeed>>
        property_EngineSpeed;

    constexpr auto properties() { return std::tie(property_EngineSpeed); }
};
```

- `properties()` returns a tuple of references: a heterogeneous collection the compiler can walk

#### 2 - generic serialisation: one operation per signal

Compile-time iteration over that heterogeneous collection:

```cpp
template <typename Operation, std::size_t index = 0,
          typename Collection, typename... Params>
void iterate_collection(Collection& collection, const Params&... params)
{
    if constexpr (index < std::tuple_size<Collection>::value)
    {
        Operation::call(std::get<index>(collection), params...);
        iterate_collection<Operation, index + 1>(collection, params...);
    }
}
```

- `if constexpr` ends the recursion, and the operation is a type, so each element gets its own instantiation

The entry point - template functions make the compiler handle type correctness:

```cpp
template <typename Collection, typename Input>
void decode_impl(Collection collection, const Input& input)
{
    iterate_collection<DecodeOp>(collection, input);
}

template <typename MSG, typename Input>
void decode(MSG& msg, const Input& input)
{
    decode_impl(msg.properties(), input);
}
```

- one `decode()` for every message type, and zero per-signal code

The operation itself:

```cpp
struct DecodeOp
{
    template <typename Value, typename Input>
    static void call(Value& data, const Input& input)
    {
        constexpr uint16_t offset  = Value::bit_start;
        constexpr uint64_t bitmask = (uint64_t{1} << Value::bit_count) - 1;
        if constexpr (Value::endian == LittleEndian)
        {
            data.value = static_cast<typename Value::ValueType>(
                (input >> offset) & bitmask);
        } // else ...
        Value::FactorOffset::applyFactorOffset(data.value);
    }
};
```

- DecodeOp example: insanly fast (about a nanosec)
- offsets and masks are constants, so the compiler folds each signal down to a shift and a mask

#### 3 - dependency graph

Just a few lines of code, very simple, compile-time

Dependencies are expressed as collections too:

```cpp
declare_dependencies(MessageEEC1,        MonitorEngineSpeed);
declare_dependencies(MonitorEngineSpeed, DomainX, UseCaseY);
```

- which draws `MessageEEC1 -> MonitorEngineSpeed -> { DomainX, UseCaseY }`

How it works:

```cpp
// default: a type has no dependants
template <typename T>
constexpr auto dependants() { return std::tie(); }

// references to the dependants' single instances
template <typename... Ts>
constexpr auto makeDependencies() { return std::tie(instance<Ts>()...); }

// each declaration is an explicit specialisation
#define declare_dependencies(Tin, ...)              \
    template <> constexpr auto dependants<Tin>()    \
    { return makeDependencies<__VA_ARGS__>(); }

// helper: one object per type
template <typename T>
T& instance() { static T object; return object; }
```

- no declaration means an empty tuple, which is where the graph ends
- standard C++17, no compiler extensions

Executing it:

```cpp
template <typename T>
void apply_dependencies(const T& t)
{
    auto dependencies = dependants<T>();
    constexpr std::size_t count =
        std::tuple_size<decltype(dependencies)>::value;
    iterate_impl<0, count>([&](auto index)
    {
        auto& val = std::get<index>(dependencies);
        val.on_event(t);
        apply_dependencies(val);
    });
}
```

- notify each dependant, recurse into its own dependants, stop where `dependants<T>()` is empty

Putting it together, one call per incoming message type:

```cpp
template <typename MSG, typename Input>
void handleMsg(const Input& input)
{
    MSG msg;
    decode(msg, input);
    apply_dependencies(msg);
}

handleMsg<MessageEEC1>(frame);
```

- `MSG msg;` is created on the stack: no allocation
- `decode(msg, input)` fills every property from the input
- `apply_dependencies(msg)` walks the compile-time graph
- every type is known at compile time, so the compiler sees the whole path from bytes to reactions

#### 4 - runtime model

- directed single-producer/single-onsumer lock-free queues.
- when a module has work, it gets a thread from the pool, processes, and returns
- a module never runs concurrently, runs then returns, and owns all its objects
- single-threaded means never concurrent: inside a module, everything is sequential and predictable

Fast lookup, from messageId to handler: select N bits of the messageId to pick a bucket, then `bucketStart[i]` and `bucketStart[i + 1]` bound a short linear search, like begin and end iterators.

```cpp
std::size_t i = (messageId >> shift) & ((1u << N) - 1);            // select N bits
for (std::size_t k = bucketStart[i]; k < bucketStart[i + 1]; ++k)  // short linear search
    if (handlers[k].id == messageId) { handlers[k].fn(input); break; }
```

- `bucketStart` holds 2^N + 1 entries, `handlers` holds `{id, fn}` sorted by bucket
- `bucketStart[i] == bucketStart[i + 1]` means an empty bucket

Error model:

- error handling can be quiet complexe -> exception in C++ rely on memory allocation, and we can't simply allow this.
  - but think that C++ exception are a great model, and one does not want to create another model
  - the constraint as he puts it: memory allocation is not allowed in automotive after startup
  - use some preallocations -> preallocate the memory buffer at startup; you might also consider some thread local storage in some case
  - throw simple errors, integers for instance, with no methods that might allocate

Attempt at crash recovery - a crash in a self-driving vehicle could be a disaster, but when an integer error is caught in a dependency call chain, several properties work in our favour:

- we're in a signle-threaded module
- memory was laid out at compile-time -> only static members allowed
- dependency graph was laid out at compile-time
- we know the type of the object that crashed

```cpp
template <typename T>
void restore(T& object)
{
    // skip ~T(): state is unreliable
    new (&object) T{};  // fresh initial state
}
```

> running the constructor with placement new restores the object to its original state

ASIL -> automotive Safety Integrity Level

#### 5 - testing

Testing with inputs from logs: a CSV file, one line per entry, first the object type then the object data.

- CSV line: the object type, then its data
- create the object: the type name picks the type
- read the properties, one by one from the line
- feed the graph: same code path as in the car

It is only another input operation for `iterate_collection`.

#### Why "future"?

- single implementation of each aspect of the system
- minimal code generation: only the DBC-to-types step
- no boilerplate code, the generic operations do the work
- high performance, the compiler folds it all away

#### Outlook

Using the same generic serialisation concept, he wrote a program that reads XSD files and generates classes from them.

- generic serialisation (this talk) -> XSD reader and generator (working) -> classes for ARXML and FMI (in progress) -> automated system creation (the goal)
- the same reader and generator handle both ARXML (AUTOSAR) and FMI, the Modelica Association's Functional Mock-up Interface

#### Insights from questions

my own question: "First, sorry to be the bad guy here: in many companies, peoples argue that one cannot use compile-time code - especially with templates - because it makes the code more complicated, thus hard to understand for regular developer (understand, not experts), and thus prevent us from using such feature"

- answer: that's a question I often get. most C++ developers think of classic OOP, but I'm thinking of more modern C++ as a way to automate/generic what I need. type checking by the compiler. compilers are smarter than most peoples. we're all jaw-dropping like "how the hell can it be so efficient". Without template, we'll all get tons of function all the way. I think this is a safe system for intermediate developers. Anyway, we should not all mess up with safety.

#### My takeaway

very stressed and exhausted speaker -> first talk/presentation ever

### 🗣️ **Dawid Zalewski**: C++26 static reflection: All you need is annotations

<!-- Slot: 17:15 - Track A (Saphir), hybrid -->
<!-- Alternative tracks of interest:
       - Joel Falcou (Track D, online), "std::complex Ate My Performances! - Making Faster Hyper-complex Maths"
       - Philipp Jeske (Track B, Opal), "Modern Craft in Ancient Codebases - A Survival Guide"
       - Rahel Natalie Engel (Track C, Jade), "Simplifying Language Implementation with C++26 Reflection" -->
<!-- Summary, paraphrased from https://meetingcpp.com/mcpp/schedule/talkview.php?th=88c5431ed3f2a6c1b729fa0d13a5911b51dd0d61
     Combines reflection, std::meta::define_aggregate and annotations for compile-time code injection.
     Examples: a structured-bindings enabler, annotation-based access control, and a validating generic
     builder. -->

[🎥 Video](), [📄 slidedeck]()

Subtitle of the deck: *Compile-time programming with C++26 static reflection*.

- first, a small intro to reflection, so attendees can then understand annotations

C++ reflection is not a smaller thing, it's a monster. But coupled with annotation that's something that enable us to write user-facing APIs in another way.

- "use our APIs in a declarative way, out of the box"
- we all want things that work out of the box
- problems appear when we want to do weird things -> we then have to write our own code
- frustrating, especially for beginners but not only

Only one compiler supports annotations so far: GCC >= 16. Try it, it's fun

> Within C++, there is a much smaller and cleaner language struggling to get out.
>
> - Bjarne Stroustrup

The opening example, hand-written:

```cpp
class WeirdData {
public:
  WeirdData(uint32_t machine_id, std::string_view batch, std::string_view serial_nr);

  friend constexpr auto operator<=>(const WeirdData&, const WeirdData&);

  std::string unique_id() const { return batch_ + " " + serial_nr_; }

private:
  uint32_t    machine_id_;
  std::string batch_;
  std::string serial_nr_;
};

constexpr auto operator<=>(const WeirdData& lhs, const WeirdData& rhs) = default;
```

and the same thing declared, which is where the talk is going:

```cpp
class [[=derive(spaceship)]] WeirdData {
public:
  WeirdData(uint32_t machine_id, std::string_view batch, std::string_view serial_nr);

  [[=compare_key(0)]]
  std::string unique_id() const { return batch_ + " " + serial_nr_; }

private:
  [[=compare_key(1)]] uint32_t    machine_id_;
                      std::string batch_;
                      std::string serial_nr_;
};
```

- <https://godbolt.org/z/nobGKn8dr>

The roadmap, compile time on the left, runtime on the right:

- 01 Reflection 101 - `^^T`, `[: r :]`
- 02 How to annotate - `[[=Min(3)]]`
- 03 Bind any class - `auto [a, b] = obj;`
- 04 Secure views - `define_aggregate`
- 05 Validating builder - `Builder<T>{}.build()`

#### Reflection 101

- not likes templates
- std::meta::info is not template -> but it's only consteval info -> you can't do anything with it at runtime

reflection annotation and meta::info are the ying and yang of reflection

```cpp
struct Account {
  int    id;
  double balance;
};

int main() {
  constexpr auto refl = ^^Account;

  auto account = typename [: refl :]{42, 42.24};
}
```

- `^^Account` produces a consteval-only reflection value
- `[: refl :]` is a splice: it turns the reflection back into its underlying entity, here with `typename`, the type `Account`
- the round trip he draws as a circle: `^^Account` goes one way, `[: reflection :]` comes back

#### Reflection 101: things to do with `std::meta::info`

```cpp
struct Account { int id; double balance; };

identifier_of(^^Account)                 // "Account"sv

constexpr auto ctx = std::meta::access_context::current();
nonstatic_data_members_of(^^Account, ctx) // std::vector<std::meta::info>
type_of(^^Account::balance)               // ^^double
is_public(^^Account::balance)             // true
```

- names come back as `std::string_view`
- multiple items are put in a `std::vector` of reflections
- a member is a reflection too: ask for its type, its access, its offset, ...

#### Reflection 101: anything changed yet ?

- wanna get what changed between two values of some aggregate type

```cpp
Account before{42, 42.24};
Account after = before;
after.balance += 100;

auto diff = changed_fields(before, after);  // => {"balance"sv}
```

- any aggregate goes in, the names of the members that differ come out

The naive implementation does not build:

```cpp
template <typename T>
auto changed_fields(const T& a, const T& b) {
  std::vector<std::string_view> changed{};
  constexpr auto ctx = std::meta::access_context::current();
  for (auto m : nonstatic_data_members_of(^^T, ctx)) {
    if (a.[:m:] != b.[:m:])
      changed.push_back(identifier_of(m));
  }
  return changed;
}
```

```text
error: the value of 'm' is not usable in a constant expression
note: 'm' was not declared 'constexpr'
```

- `std::meta::access_context::current()` -> only visible data member from this place -> so here, public
- `[:m:]` -> splice expression -> needs `m` to be a constant-expression
- first fix, `template for (constexpr auto m : ...)`: the body is stamped out once per member, and in each copy `m` is a constant
- `nonstatic_data_members_of` returns a `vector` -> not a constant expression because it references to a result of operator new
- `std::define_static_array(nonstatic_data_members_of(^^T, ctx))` -> delegate to some static storage -> fix, it copies into a static storage array

```cpp
template for (constexpr auto m :
              std::define_static_array(nonstatic_data_members_of(^^T, ctx))) {
```

#### Reflection 101, the toolbox

- reflect: `^^Entity` - a program's entity becomes a `std::meta::info` value
- splice: `[: reflection :]` - a reflection goes back to code
- query: `identifier_of(r)`, `type_of(r)`, `nonstatic_data_members_of(r, ctx)` - consteval queries
- repeat: `template for (constexpr auto m : ...)` - one copy of the body per element
- keep: `std::define_static_array(...)` - compile-time static storage made easy

#### How to annotate ?

- annotation look like - but are not - attribute: `[[= value]]`
- annotation are linked to something in your code
- to get back the information of an annotation, use `extract`
- you can put annotation on anything that has a name: class, namespaces, etc.

```cpp
[[=42]]
void function(){/*---*/}

constexpr auto a = annotations_of(^^function)[0];  // a reflection of it
static_assert(extract<int>(a) == 42);              // its value

function();                                        // nothing special here
```

- an *annotation* is a value: `[[= any constant expression ]]`, of *structural type*
- grab them with `annotations_of(refl)`
- get the value of one with `extract<TypeOfAnnotation>(refl_of_ann)`
- **an annotation does nothing by itself**

#### How to annotate: a tag

- for instance, to turn a feature on or off in some place

```cpp
struct skip_t {};
constexpr skip_t skip{};

struct Account { int id; double balance; [[=skip]] std::int64_t last_seen; };
```

Reading it back: `annotations_of_with_type(refl, ^^type) -> std::vector<std::meta::info>`, that is, a reflection of an annotated entity plus an annotation type, giving a vector of reflections of annotations.

```cpp
template for (constexpr auto m : dsa_nsdm(^^Account, ctx)) {
  if constexpr (annotations_of_with_type(m, ^^skip_t).empty())
    if (a.[:m:] != b.[:m:])
      changed.push_back(identifier_of(m));
}
```

- `dsa_nsdm` is his own shorthand for `define_static_array(nonstatic_data_members_of(...))`, to keep the slides narrow
- the same goes for the predicate, which he factors out and reuses for the rest of the talk:

```cpp
template <typename Type>
consteval bool has_annotation(std::meta::info r) {
  return !annotations_of_with_type(r, ^^Type).empty();
}
```

#### How to annotate: a wrapped value

The motivation is floating-point comparison: `changed_fields` reports `{"balance"sv}` for a balance that went `0.1 + 0.2` against `0.3`, because `0.3 - (0.1 + 0.2) == -5.55112e-17`. So the annotation carries the tolerance:

```cpp
struct tolerance_t { double eps; };

struct Account {                    int id;
  [[=tolerance_t{0.005}]]           double balance;
};

template for (constexpr auto m : dsa_nsdm(^^Account, ctx)) {
  bool differ = a.[:m:] != b.[:m:];
  if constexpr (has_annotation<tolerance_t>(m)) {
    constexpr auto tol = extract<tolerance_t>(annotations_of_with_type(m, ^^tolerance_t)[0]);
    differ = std::abs(a.[:m:] - b.[:m:]) > tol.eps;
  }
  if (differ)
    changed.push_back(identifier_of(m));
}
```

- why write this abomination ?
- instead, use splice ?
  - cannot

Reason: annotation contains tons of other meta infos (position in code, etc.)

- the slide puts it as: **annotations are special, they carry extra information, not just a value**
- what does work is going through `constant_of`:

```cpp
constexpr auto tol = [: constant_of(annotations_of_with_type(m, ^^tolerance_t)[0]) :];
```

- and the whole thing gets a helper, used from here on:

```cpp
template <typename Type>
consteval Type extract_first(std::meta::info r) {
  return extract<Type>(annotations_of_with_type(r, ^^Type)[0]);
}
```

#### How to annotate: a value with a default

- do the conversion operator for the tolerance, then all the rest is automatic

```cpp
struct tolerance_t {
  double eps{ 0.005 };
};
constexpr tolerance_t tolerance{};

struct Account {           int id;
  [[=tolerance]]           double balance;       // eps == 0.005
  [[=tolerance]]           double prev_balance;
  [[=tolerance(1E-9)]]     double interest_rate;
};
```

- the `tolerance(1E-9)` form needs a call operator on `tolerance_t`; `unpack_t`, further down, is the same pattern spelled out in full

#### How to annotate: a list of values

- span are not structual type, since it has private members -> so cannot be a NTTP -> won't work
- work-around for now: old-school const * + std::size_t

```cpp
enum class role { owner, admin, auditor };

struct accessible_by {
  const role* roles;
  std::size_t count;

  consteval accessible_by(std::same_as<role> auto... rs)
    : roles{std::define_static_array(std::array{rs...}).data()},
      count{sizeof...(rs)} {}
};

struct Account {
  [[=accessible_by(role::owner, role::admin)]] double balance;
  /* ~~~ */
};
```

```text
error: annotation does not have structural type
note: 'accessible_by::roles' has a non-structural type
```

- that error is what you get with `std::span<const role> roles;`, hence the pointer plus count

#### How to annotate: the rust way

for opt-ins

```cpp
struct diffable_t {};
constexpr diffable_t diffable{};

template <typename T>
struct derive { T what; };

struct [[=derive(diffable)]] Account { /* ~~~ */ };

template <typename T>
  requires (has_annotation<derive<diffable_t>>(^^T))
auto changed_fields(const T& a, const T& b) { /* ~~~ */ }
```

- aggregate initialization plus template argument deduction at work
- the wrapped tag is `derive<diffable_t>`

#### How to annotate, the toolbox

- tag: `[[=skip]]`
- value: `[[=tolerance_t{0.005}]]`
- value with a default: `[[=tolerance]]`, `[[=tolerance(1E-9)]]`
- a list of values: `[[=accessible_by(role::owner, role::admin)]]`
- the rust way: `[[=derive(diffable)]]`

#### structured binding

- works with aggregates, std::array and tuplelikes
- does not work with inaccessible members -> wont build
- one then have to expose a custom tuplelike interface -> tuple_element, tuple_size -> how to access such members

```cpp
class Account {
public:
  Account(int id, double balance) : id_{id}, balance_{balance} {}
  int    id()      const { return id_; }
  double balance() const { return balance_; }
private:
  int    id_;
  double balance_;
};

Account acc{42, 42.24};
auto [id, balance] = acc;
```

```text
error: cannot decompose inaccessible member 'Account::id_' of 'Account'
note: declared private here
```

The tuple protocol, written out by hand:

```cpp
template <> struct std::tuple_size<Account> {
  static constexpr std::size_t value = 2;
};
template <> struct std::tuple_element<0, Account> { using type = int;    };
template <> struct std::tuple_element<1, Account> { using type = double; };

template <std::size_t I>
auto get(const Account& acc) {          // found by ADL
  if constexpr (I == 0) return acc.id();
  else                  return acc.balance();
}

auto [id, balance] = acc;
```

> Defining tuple-like access (...) for simple classes is (...) tedious, repetitive, slightly error-prone, and easily automated.
>
> - P0197R0 *Default Tuple-like Access* (2016), Vicente J. Botet Escriba

#### structured binding: once and for all

- let's generate it for anything that can bind

```cpp
template <TupleLike T> struct std::tuple_size<T> {
  static constexpr std::size_t value = members_to_bind(^^T).size();
};
template <std::size_t I, TupleLike T> struct std::tuple_element<I, T> {
  using type = [: type_of(members_to_bind(^^T)[I]) :];
};

template <std::size_t I, typename T> requires TupleLike<std::remove_cvref_t<T>>
auto&& get(T&& obj) {
  constexpr auto m = members_to_bind(^^std::remove_cvref_t<T>)[I];
  return std::forward<T>(obj).[: m :];
}
```

- it still won't compile, though, mostly because the code silently moved from *getters* to *private data members*

#### structured binding: access context

unchecked

```cpp
struct tuple_like_t {};
constexpr tuple_like_t tuple_like{};

template <typename T>
concept TupleLike = has_annotation<derive<tuple_like_t>>(^^T);

class [[=derive(tuple_like)]] Account { /* ~~~ */ private: int id_; double balance_; };

constexpr auto ctx = std::meta::access_context::unchecked();

consteval auto members_to_bind(std::meta::info type) {
  return nonstatic_data_members_of(type, ctx);
}

auto [id, balance] = acc;   // compiles => id == 42, balance == 42.24
```

- `access_context::unchecked()` has god-like powers: every member, whatever its access
- against `access_context::current()`, which sees what this spot in the code may access

#### structured binding: let's mess up

- if someone add some data members, or if reorder data members -> it breaks
- we dont want our private layout to be the public api

```cpp
class [[=derive(tuple_like)]] Account {
  /* ~~~ */
private:
  double balance_;
  int    id_;
};

auto [id, balance] = acc;   // => id == 42.24, balance == 42
```

- the slide's one-liner: **private layout != public API**

#### structured binding: pick the members

```cpp
struct unpack_t {};
constexpr unpack_t unpack{};

class [[=derive(tuple_like)]] Account {
  /* ~~~ */
private:
  [[=unpack]] int         id_;
  [[=unpack]] double      balance_;
              std::int64_t last_seen_;
};

consteval auto members_to_bind(std::meta::info type) {
  std::vector<std::meta::info> membs;
  for (auto m : nonstatic_data_members_of(type, ctx))
    if (has_annotation<unpack_t>(m))
      membs.push_back(m);
  return membs.empty() ? nonstatic_data_members_of(type, ctx) : membs;
}
```

- annotate nothing and you get every member back, so the opt-in costs nothing by default

#### structured binding: fix the order

- using a parameter for the unpack annotation

```cpp
struct unpack_t {
  std::size_t ord = -1;
  constexpr unpack_t operator()(std::size_t n) const { return {n}; }
};
constexpr unpack_t unpack{};

class [[=derive(tuple_like)]] Account { /* ~~~ */
  [[=unpack(1)]] double       balance_;
  [[=unpack(0)]] int          id_;
                 std::int64_t last_seen_;
};
```

```cpp
consteval auto members_to_bind(std::meta::info type) {
  struct entry { std::size_t ord, pos; std::meta::info m; };
  std::vector<entry> entries;
  for (auto m : nonstatic_data_members_of(type, ctx))
    if (has_annotation<unpack_t>(m))
      entries.push_back({extract_first<unpack_t>(m).ord, entries.size(), m});
  if (entries.empty())
    return nonstatic_data_members_of(type, ctx);
  std::ranges::sort(entries, {}, [](entry e) { return std::pair{e.ord, e.pos}; });
  return entries | std::views::transform(&entry::m) | std::ranges::to<std::vector>();
}

auto [id, balance] = acc;   // => id == 42, balance == 42.24
```

- the recipe as he states it: `membs` becomes `entries` (order from the annotation, layout position, member info), then sort by (unpack order, layout position) to pin the order

#### BTW, we can throw compile-time exceptions

```cpp
for (std::size_t i = 1; i < entries.size(); ++i)
  if (entries[i].ord == entries[i - 1].ord && entries[i].ord != unpack.ord)  // two -1's are OK
    throw std::meta::exception("two members bind to the same position", entries[i].m);
```

```text
error: uncaught exception of type 'std::meta::exception'; 'what()': 'two members bind to the same position'
```

#### structured-binding: functions (a.k.a getters)

```cpp
consteval auto members_to_bind(std::meta::info type) { /* ~~~ */
  for (auto m : members_of(type, ctx)) /* ~~~ */
}

template <std::size_t I, TupleLike T> struct std::tuple_element<I, T> {
  static constexpr auto m = members_to_bind(^^T)[I];
  using type = [: std::meta::is_function(m) ? return_type_of(m) : type_of(m) :];
};

template <std::size_t I, typename T> requires TupleLike<std::remove_cvref_t<T>>
decltype(auto) get(T&& obj) {
  constexpr auto m = members_to_bind(^^std::remove_cvref_t<T>)[I];
  if constexpr (std::meta::is_function(m)) return std::forward<T>(obj).[: m :]();
  else                                     return (std::forward<T>(obj).[: m :]);
}

auto [overdrawn, id, balance] = acc;
```

- `members_of` instead of `nonstatic_data_members_of` brings in member functions, not only data members
- `decltype(auto)` is what makes a function result forwarded and a member returned by reference, hence the parentheses in the `else`

#### The toolbox

- surprise: `obj.[: m :]` - the splice does not check access
- access: `access_context::unchecked()` sees what your eyes can see, `access_context::current()` sees what this spot in the code may access
- POC++: `std::vector`, `std::ranges::sort`, `std::pair` - annotations are plain values, `extract<AnnType>(m)` gives a value, and most containers and algorithms work in `consteval` code
- throw: `throw std::meta::exception(msg, r)` - errors at compile time; uncaught gives a compile error with a message, `try` / `catch` works at compile time too, and `std::meta` functions throw it themselves

#### Secure views: the why

```cpp
struct Account {
  int         id;
  double      balance;
  std::int64_t last_seen;
  std::string pin;
};

void audit(const Account& acc) {
  std::println("{} last seen {}", acc.id, acc.last_seen);
  std::println("pin: {}", acc.pin);        // compiles, runs & prints
}
```

Where he wants to land:

```cpp
void audit(secure_view<Account, role::auditor> acc) {
  std::println("{} last seen {}", acc.id, acc.last_seen);
  std::println("pin: {}", acc.pin);
}
```

```text
error: 'secure_view<Account, role::auditor>' has no member named 'pin'
```

- `private` and `friend` are all-or-nothing relationships, which is the whole problem

#### Secure views: we need `define_aggregate`

- let's do it from the bottom-up
- express the same thing as classic c++, but with reflection-driven C++

```cpp
struct auditor_view;
consteval {
  define_aggregate(^^auditor_view, {
    data_member_spec(^^const int&,          {.name = "id"}),
    data_member_spec(^^const std::int64_t&, {.name = "last_seen"}),
  });
}

auditor_view v{acc.id, acc.last_seen};
```

- a struct of references, so that nothing is copied
- an incomplete class, which `define_aggregate` then completes
- one `data_member_spec` per data member
- only inside a `consteval { }` block

#### Secure views: who sees what

```cpp
enum class role { owner, admin, auditor };
struct accessible_by { const role* roles; std::size_t count; /* ~~~ */ };

struct Account {
  [[=accessible_by(role::owner, role::admin, role::auditor)]] int          id;
  [[=accessible_by(role::owner, role::admin)]]                double       balance;
  [[=accessible_by(role::admin, role::auditor)]]              std::int64_t last_seen;
                                                              std::string  pin;
};
```

- `accessible_by` says who may see each member
- no annotation, no biggie: no one sees it, which is what keeps `pin` out of every view

#### Secure views: the visible members

- list annotations

```cpp
consteval bool can_see(std::meta::info m, role who) {
  if (!has_annotation<accessible_by>(m)) return false;
  auto a = extract_first<accessible_by>(m);
  return std::ranges::contains(std::span{a.roles, a.count}, who);
}

consteval auto visible_members(std::meta::info type, role who) {
  return nonstatic_data_members_of(type, ctx)
       | std::views::filter([who](auto m) { return can_see(m, who); })
       | std::ranges::to<std::vector>();
}
```

#### Secure views: one view per role

```cpp
template <typename T, role Who>
struct secure_view_impl {
  struct type;
  consteval {
    std::vector<std::meta::info> specs;
    for (auto m : visible_members(^^T, Who))
      specs.push_back(data_member_spec(add_lvalue_reference(add_const(type_of(m))),
                                       {.name = identifier_of(m)}));
    define_aggregate(^^type, specs);
  }
};

template <typename T, role Who>
using secure_view = secure_view_impl<T, Who>::type;
```

- `add_const`, `add_lvalue_reference` and friends are `std::meta` type traits for reflections
- one synthesized `secure_view` type per `<T, Who>`

What the compiler ends up building, for the three roles:

```cpp
// role::owner                 // role::admin                      // role::auditor
struct type {                  struct type {                       struct type {
  const int&    id;              const int&          id;             const int&          id;
  const double& balance;         const double&       balance;        const std::int64_t& last_seen;
};                               const std::int64_t& last_seen;    };
                               };
```

#### Secure views: making one

- how to initialize such values
- C++26 -> structured-binding pack

```cpp
template <role Who, typename T>
secure_view<T, Who> view_as(const T& obj) {
  constexpr auto [...ms] = [: reflect_constant_array(visible_members(^^T, Who)) :];
  return { obj.[: ms :]... };
}
```

- `auto [...ms]` is a structured binding pack (C++ *hopefully* 26)
- the first attempt used `std::define_static_array(...)` there and did not compile; `reflect_constant_array` turns a range into a reflection *of an array*, and arrays bind

And it works:

```cpp
Account acc{42, 42.24, 1'700'000'000, "1234"};
audit(view_as<role::auditor>(acc));

auto [id, balance, last_seen] = view_as<role::admin>(acc);
std::println("{}, balance {}, last seen {}", id, balance, last_seen);
// 42, balance 42.24, last seen 1700000000
```

#### Secure views: the toolbox

- feed: `[[=accessible_by(role::owner, role::admin)]]` - a list of values
- fetch: `visible_members(^^T, Who)` - consteval, plain old C++
- describe a member: `data_member_spec(^^m_type, {.name = ...})` - a data member, as a reflection
- generate: `define_aggregate(^^a_type, {specs...})` - fills an incomplete class with data members, only in a `consteval { }` block, and the block sits right next to the class
- initialize: `auto [...ms] = [: reflect_constant_array(...) :]` - one constant per member, as a pack
- <https://godbolt.org/z/8zYoTfYY5>

#### My takeaway

Fucking masterclass ! OMG loved it !

<!-- 18:45 - Speaker and Staff Dinner, at Peridot. Speakers and staff only. -->

## 📅 11/27/2026

### 🗣️ **Jens Weller**: Good Morning Meeting C++26?!

<!-- Slot: 10:00 - Track A (Saphir) -->
<!-- TODO -->

### 🗣️ **Kate Gregory**: Brains And Belonging (Center Keynote)

<!-- Slot: 10:30 - Track A (Saphir), hybrid -->
<!-- Summary, paraphrased from https://meetingcpp.com/mcpp/schedule/talkview.php?th=52293dcd849b272a3e84b84476ff969421cddb15
     Brain differences, statistical distributions, results from the speaker's own survey, and what it means
     to feel normal and to belong. -->

[🎥 Video](), [📄 slidedeck]()

<!-- TODO: content -->

#### My takeaway

<!-- TODO -->

### 🗣️ **Guy Davidson**: What to look forward to in C++26

<!-- Slot: 13:15 - Track B (Opal), hybrid -->
<!-- Alternative tracks of interest:
       - Andreas Fertig (Track A, Saphir), "When Your Compiler Runs Your Code"
       - Tina Ulbrich (Track C, Jade), "Starting a Modern C++ Project" -->
<!-- Summary, paraphrased from https://meetingcpp.com/mcpp/schedule/talkview.php?th=538405bfda021d35d5d3c5c7653593036c76e5eb
     A tour of C++26's major features - reflection, contracts, std::execution - and smaller items such as
     the hardened standard library, then a look ahead to C++29. -->

[🎥 Video](), [📄 slidedeck]()

<!-- TODO: content -->

#### My takeaway

<!-- TODO -->

### 🗣️ **Matt Godbolt**: Compiler Explorer in 2026: Sandboxes, Storage and Strangers' Code

<!-- Slot: 14:30 - Track A (Saphir), hybrid -->
<!-- Summary, paraphrased from https://meetingcpp.com/mcpp/schedule/talkview.php?th=d8ab26911642f939699ceda6a25c95755925a9f3
     Running untrusted compilers at scale: sandboxing, the storage problem and the content-addressable
     filesystem that fixed it, operational stories, and recent features. -->

[🎥 Video](), [📄 slidedeck]()

<!-- TODO: content -->

#### My takeaway

<!-- TODO -->

### 🗣️ **Antoine Morrier**: Thread-safety compile-time guaranteed in C++

<!-- Slot: 16:00 - Track A (Saphir), hybrid -->
<!-- Alternative tracks of interest:
       - Nicolai Josuttis (Track C, Jade), "C++ Trap Quiz"
       - Andreas Pfaffenbichler (Track B, Opal), "Static and Dynamic External Polymorphism in C++23 and Beyond" -->
<!-- Summary, paraphrased from https://meetingcpp.com/mcpp/schedule/talkview.php?th=bbb99154527c748cc4f3ca28582503d64e217695
     A library using move-only types, RAII guards and constrained APIs to turn a class of multithreading
     bugs into compile errors, drawing on Rust's ownership model.
     Godbolt example linked from the talk page: https://godbolt.org/z/T4evYhf19 -->

[🎥 Video](), [📄 slidedeck]()

<!-- TODO: content -->

#### My takeaway

<!-- TODO -->

### 🗣️ **Daniela Engert**: Same C++, but quicker to the finish line

<!-- Slot: 17:15 - Track A (Saphir), hybrid -->
<!-- Summary, paraphrased from https://meetingcpp.com/mcpp/schedule/talkview.php?th=30963a895a147e9b29a7733fd7887e632af52650
     Compilation speed: language features that slow compilers down or speed them up, the pitfalls, and
     measurements from in-house applications. -->

[🎥 Video](), [📄 slidedeck]()

<!-- TODO: content -->

#### My takeaway

<!-- TODO -->

<!-- 18:30-19:30 - Social reception, sponsored by Hudson River Trading. -->

## 📅 11/28/2026

### 🗣️ **Kerstin Keller**: Another Kind of Bug - The Subtleties of ODR Violations

<!-- Slot: 09:00 - Track B (Opal), hybrid -->
<!-- Alternative track of interest:
       - Mathieu Ropert (Track E, Amethyst), "The Performance Mindset" - C++ FrUG -->
<!-- Summary, paraphrased from https://meetingcpp.com/mcpp/schedule/talkview.php?th=e7fbe646abfad72719bfc3d791fa7e1051388267
     Crashes that appear only in some environments, often caused by ABI incompatibility or ODR violations in
     how the program is composed. Covers static and dynamic libraries, linkage and symbol visibility, and
     component design. -->

[🎥 Video](), [📄 slidedeck]()

<!-- TODO: content -->

#### My takeaway

<!-- TODO -->

### 🗣️ **Guy Davidson**: Profiles are coming

<!-- Slot: 10:20 - Track A (Saphir), hybrid -->
<!-- Alternative tracks of interest:
       - Raymi Klingers (Track B, Opal), "1500 Archers, One State: Cross-Platform Determinism in Age of Empires"
       - Koen Samyn (Track D, online), "Zero Cost Scripting Languages For Game Engines With C++26 Reflection" -->
<!-- Summary, paraphrased from https://meetingcpp.com/mcpp/schedule/talkview.php?th=414814a1f2afc6aca39e237ff200830670c92856
     An introduction to C++ profiles: opt-in sets of enforceable safety rules living in the source code,
     meant to migrate existing codebases toward memory and type safety without splitting the language into
     dialects. -->

[🎥 Video](), [📄 slidedeck]()

<!-- TODO: content -->

#### My takeaway

<!-- TODO -->

### 🗣️ **Klaus Iglberger**: Design Patterns - The Most Common Misconceptions (3 of N)

<!-- Slot: 11:40 - Track A (Saphir), hybrid -->
<!-- Summary, paraphrased from https://meetingcpp.com/mcpp/schedule/talkview.php?th=ed5bd90da663f7314abce0d6d7ab271469753690
     Misconceptions about the Decorator and Adapter patterns, structurally similar and often confused -
     including inside the C++ standard library - with examples and how to tell them apart. -->

[🎥 Video](), [📄 slidedeck]()

<!-- TODO: content -->

#### My takeaway

<!-- TODO -->

### 🗣️ **Jens Weller**: Meeting C++ update: 15th Meeting C++

<!-- Slot: 14:00 - Track A (Saphir) -->

[🎥 Video](), [📄 slidedeck]()

<!-- TODO: state of the conference, economics, attendance -->

#### What's next?

<!-- TODO -->

#### 2027 conference

<!-- TODO: dates and venue announced on stage -->

### ⚡ Lightning talks

<!-- Not on the published schedule this year. Keep this section only if lightning talks are held. -->

#### ⚡ **TODO**: TODO

[🎥 Video](), [📄 slidedeck]()

<!-- TODO -->

### 🗣️ **Jens Weller**: Closing Panel - Meeting C++ 2026

<!-- Slot: 16:00 - Track A (Saphir). A panel this year, not a closing keynote. -->
<!-- TODO: panelists -->

[🎥 Video](), [📄 slidedeck]()

<!-- TODO: content -->

#### My takeaway

<!-- TODO -->

### 🤚 Allow me a digression here

<!-- TODO: optional - the long-form aside this year's talks triggered -->

---

## Conclusion

<!-- TODO: what the conference reinforced, what changed, where the community is heading -->

Thanks for reading, and see you next year at Meeting C++! ❤️

Guillaume.

---

If you enjoyed this trip-report:

- 👍 Consider leaving a *"like"* and a **comment** - at the bottom of this page, and on **LinkedIn**.
- 📩 Share this paper with your friends, colleagues, teachers, students.
- 📖 You might be interested in last year's: [Conference - Meeting Cpp 2025 - Trip report]({{ '/2026/03/13/meeting-cpp-2025-trip-report/' | relative_url }}).

## Related posts

- [Conference - Meeting Cpp 2025 - Trip report]({{ '/2026/03/13/meeting-cpp-2025-trip-report/' | relative_url }}).
- [Conference - Meeting Cpp 2024 - Trip report]({{ '/2025/03/01/meeting-cpp-2024-trip-report/' | relative_url }}).
- [Conference - C++ in Paris Conference 2021 - Trip report]({{ '/2022/05/05/cppp-2021-trip-report/' | relative_url }})
- [Conference - Meeting Cpp 2021 - Trip report]({{ '/2021/11/24/meeting-cpp-2021-trip-report/' | relative_url }})
