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
This is the **15th** edition of the conference, held in Berlin (Andel Hotel) and online.  
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

#### My takeaway

<!-- TODO -->

### 🗣️ **Andreas Reischuck**: Simple use cases for Coroutines

<!-- Slot: 13:15 - Track E (Amethyst), hybrid -->
<!-- Alternative track of interest:
       - Dušan Jovanović (Track C, Jade), "The Algebra Behind Great C++ APIs" -->
<!-- Summary, paraphrased from https://meetingcpp.com/mcpp/schedule/talkview.php?th=54a2a302afa1c55f804e44122ae996a9349572d2
     Practical C++20 coroutines in two scenarios: simplifying REST API data acquisition, and restructuring
     asynchronous procedure calls on Windows. -->

[🎥 Video](), [📄 slidedeck]()

<!-- TODO: content -->

#### My takeaway

<!-- TODO -->

### 🗣️ **Ivan Čukić**: Contracts and hardened libraries - a bright future for C++ safety?

<!-- Slot: 14:30 - Track A (Saphir), hybrid -->
<!-- Summary, paraphrased from https://meetingcpp.com/mcpp/schedule/talkview.php?th=9b787e508d55dc9cd5c06baf0026c220eae0a106
     C++ contracts - preconditions, postconditions, invariants - and hardened standard library
     implementations are checked at runtime today. The talk asks whether contract violations can be
     detected at compile time instead. -->

[🎥 Video](), [📄 slidedeck]()

<!-- TODO: content -->

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
