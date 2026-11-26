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
| My attendance sponsor | Myself                                                       |
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

#### Introduction: some changes made to this presentation vs. what was first planned

- The abstract starts with "contracts are in"
- DISapproved due to constracts
- P4451R2 "early adoption of an always-enforced label" by Joshua Berne

We can just believe and hope ? Let's see what comes with C++26

Statement: ~~invalid~~ unhandler state that the system encourtered

- leads to vulnerability
- context/situation matters: example of how an astronaut fix something on the space station ->  same protocole cannot be applied on earth, as it's not the same environment

Data validity -> see slide

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

#### P3471 standard library hardening

Detects -> (see slide)

Let's terminate: each failure have impact, but different impact

- games
- text editors
- databases like in some bank software
- autopilots, medical service
- OS
- services in multi-service system

From ignore semantic to 

(missed some slides foir a minute here since  some delivery guy ring at my door)

Killing a program is NOT safety -> even when some security issues, we don't want to loose all the system

termination is a first step of fortification -> to be confirmed, not sure about that one

safety at compile-time -> example: `some_std_array[some_function()] = 42` with some_function has some precondition rreturning index/value from 0 to size(some_std_array) - 1.

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

(slide with `int abs(int x)`) Imagine a C++29 profile that enforces this for contracts, or at least a clang-tidy check

"Make interfaces easy to use correctly, and hard to use incorrectly" - Scott Meyers

- can now be improved to "impossible to use incorrectly"

We usually think this applies to higher-level class/type design

Would `std::array::operator[](std::size_t) -> std::optional<T&>` ? -> just move the problem to another sector -> `optional::operator*`/`get`.

UB and fast, vs. safe and slow

Example: CloudFlare outage -> error properly detected, but not handled -> "internal server error"

Terminating a program IS NOT the answer.

(slide: std::array/vector as member of non-trivial class -> should be considered code smell)

- Do we want something easy to implement, or something that is safe ?

In most situation, you don't need the full API of a vector
One might want std::queue, stack, flat_set -> subset APIs

#### API minimization

- shrink API of vocabulary types to exactly what you need - then uise wrappers in your classes
- Atomic API - do one thing, do it right
- add invariants, preconditions and postconditions, and prove them
- go to the next level of abstraction

What the compiler can do - or how can we use the compiler - to have some magic compile-time logic that ensure we only pass values that are safe -> compile-time checks (ex: `ctc::arrray<engine_t, 42>::operator[](ctc::index<0, 42>)`)

`CTC::array`: compile-time check array

GOAL: have compiler check stuffs at compile-time, so we dont have to check at runtime

pattern-matching helps !
see github.com/intel/safe-arithmetic

#### Vector indexing

Way more difficult to do that array, since the size is a runtime info

#### about class design

- list all features you nee

Narrow argument types, pass exprerssions instead of values, or use inversion of control

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

<!-- TODO -->

### 🗣️ **Henrik Vallgren**: Compile time is the future of Automotive Software

<!-- Slot: 16:00 - Track A (Saphir), hybrid -->
<!-- Alternative track of interest:
       - Lieven de Cock (Track B, Opal), "A gentle introduction to Reflection" -->
<!-- Summary, paraphrased from https://meetingcpp.com/mcpp/schedule/talkview.php?th=39974b3abf4e225876836a8d0b8a1d3d790986de
     An embedded system in which every object dependency is a constant expression and class members are
     exposed as a constexpr tuple.
     Pitch line from the page: "Can the compiler verify not only your types, but your entire system
     architecture?" -->

[🎥 Video](), [📄 slidedeck]()

<!-- TODO: content -->

#### My takeaway

<!-- TODO -->

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

<!-- TODO: content -->

#### My takeaway

<!-- TODO -->

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
