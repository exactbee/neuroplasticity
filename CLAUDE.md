# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a DSA (Data Structures & Algorithms) practice repository structured around a 300-problem, 90-day neuroplasticity-focused learning plan. The source plan is in `docs/dsa_300_neuroplasticity_guide.pdf`.

## Structure

10 topic folders, each with a `README.md` (problem checklist) and a `solutions/` subfolder where solution files go:

| Folder | Problems | Phase |
|---|---|---|
| `01_arrays_and_hashing/` | 1–35 | Foundation (Weeks 1–3) |
| `02_strings/` | 36–60 | Foundation (Weeks 1–3) |
| `03_two_pointers_sliding_window/` | 61–80 | Pattern Building (Weeks 4–6) |
| `04_stacks_and_queues/` | 81–105 | Pattern Building (Weeks 4–6) |
| `05_linked_lists/` | 106–125 | Pattern Building (Weeks 4–6) |
| `06_binary_trees_and_bst/` | 126–165 | Deep Reasoning (Weeks 7–9) |
| `07_graphs/` | 166–200 | Deep Reasoning (Weeks 7–9) |
| `08_dynamic_programming/` | 201–255 | Integration (Weeks 10–11) |
| `09_heaps_greedy_backtracking/` | 256–285 | Integration (Weeks 10–11) |
| `10_tries_intervals_bits_math/` | 286–300 | Mastery (Weeks 12–13) |

## Conventions

- Place solution files inside the topic's `solutions/` folder, named by problem number and title, e.g. `001_two_sum.ts`.
- Mark problems complete in the topic `README.md` by changing `[ ]` to `[x]`.
- No build system or test runner is set up — solutions are standalone files.
- Always use `/*** ***/` multiline comments for the problem statement header, with no `*` on each line. Follow this template exactly:

```ts
/***
 Problem N: Title
 https://leetcode.com/problems/slug/
 Difficulty: Easy | Medium | Hard

 PROBLEM STATEMENT:
 ...

 EXAMPLES:
   Input:  ...
   Output: ...
   Reason: ...

 CONSTRAINTS:
   ...
***/
```

## Python Environment

Python 3.12 is installed at `C:\Users\werco\AppData\Local\Programs\Python\Python312\python.exe`. Use `py -3.12` to invoke it from the shell. `pdfplumber` is already installed for reading the guide PDF.
