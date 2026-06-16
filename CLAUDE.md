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

## Scaffolding a New Problem

When asked to "add problem N" or "scaffold problem N":

1. **Fill the file** at the correct `solutions/NNN_slug.ts` path using the header template above. Source the problem statement, examples, and constraints from LeetCode (the URL is in the stub or can be inferred from the slug).
2. **Leave the solution as a stub** — a function signature with `// TODO` and a placeholder return. Never write the solution body; that is the user's work.
3. **Add test inputs** covering the given examples plus at least one edge case, and log each result with a labeled `console.log`.
4. **Mark complete** in the topic `README.md` — change `[ ]` to `[x]` for that problem.

Do all four steps in one pass unless the user says otherwise.

## Commit Message Format

All commits follow this pattern: `<type>: NNN title — short description`

Multiple types can be combined with `+` when a commit covers more than one concern: `fix + notes: NNN title — ...`

| Type | When to use |
|---|---|
| `solve` | User writes and completes a solution |
| `scaffold` | New problem stub + tests added, no solution body |
| `fix` | Bug fix in an existing solution |
| `refactor` | Restructure/cleanup without changing behavior |
| `test` | Test cases added or corrected |
| `notes` | Notes added to `notes.md` or inline comments |
| `chore` | Repo maintenance with no specific problem (no NNN) |

Examples:
```
solve: 003 valid anagram — frequency map + dual array approach
scaffold: 007 remove duplicates from sorted array
fix: 004 two-pointer bug — anchor left to right on new minimum
notes: 006 merge sorted array — backward iteration alternative + edge cases
test: 006 merge sorted array — add out-of-bounds edge case
```

## Python Environment

Python 3.12 is installed at `C:\Users\werco\AppData\Local\Programs\Python\Python312\python.exe`. Use `py -3.12` to invoke it from the shell. `pdfplumber` is already installed for reading the guide PDF.

<!-- code-review-graph MCP tools -->
## MCP Tools: code-review-graph

**IMPORTANT: This project has a knowledge graph. ALWAYS use the
code-review-graph MCP tools BEFORE using Grep/Glob/Read to explore
the codebase.** The graph is faster, cheaper (fewer tokens), and gives
you structural context (callers, dependents, test coverage) that file
scanning cannot.

### When to use graph tools FIRST

- **Exploring code**: `semantic_search_nodes` or `query_graph` instead of Grep
- **Understanding impact**: `get_impact_radius` instead of manually tracing imports
- **Code review**: `detect_changes` + `get_review_context` instead of reading entire files
- **Finding relationships**: `query_graph` with callers_of/callees_of/imports_of/tests_for
- **Architecture questions**: `get_architecture_overview` + `list_communities`

Fall back to Grep/Glob/Read **only** when the graph doesn't cover what you need.

### Key Tools

| Tool | Use when |
|------|----------|
| `detect_changes` | Reviewing code changes — gives risk-scored analysis |
| `get_review_context` | Need source snippets for review — token-efficient |
| `get_impact_radius` | Understanding blast radius of a change |
| `get_affected_flows` | Finding which execution paths are impacted |
| `query_graph` | Tracing callers, callees, imports, tests, dependencies |
| `semantic_search_nodes` | Finding functions/classes by name or keyword |
| `get_architecture_overview` | Understanding high-level codebase structure |
| `refactor_tool` | Planning renames, finding dead code |

### Workflow

1. The graph auto-updates on file changes (via hooks).
2. Use `detect_changes` for code review.
3. Use `get_affected_flows` to understand impact.
4. Use `query_graph` pattern="tests_for" to check coverage.
