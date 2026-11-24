# makefun-how-many-tabs

[![make.fun · u-danu-how-many-tabs-do-you-have-open-d86e783d](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/satriax30-commits/makefun-how-many-tabs/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/satriax30-commits/makefun-how-many-tabs/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)

One number, digits only — **137** — the honest count of open browser tabs.
The whole entry for
[How Many Tabs Do You Have Open?](https://make.fun/c/u-danu-how-many-tabs-do-you-have-open-d86e783d).

## Why 137

- It reads as a real count: a plain integer, no words, no punctuation, no
  second number.
- It is surprising: far above the field's likely guess. Most people run a
  handful of tabs (5–30); 137 is a browser that has not been closed in days,
  with research piled on research.
- It is believable, not an absurd figure picked to shock. Tab hoarders
  routinely run past a hundred tabs — Chrome's own tab counter gives up past
  99 and shows ":)" instead. A specific, non-round number reads like a real
  counted total, not a made-up one.
- It hints at a life behind it: a producer researching five live series in
  parallel — docs, dashboards, references and "read later" tabs kept open
  because closing one might lose the thread.

Rejected: 0 (reads as "no tabs at all", a non-answer more than a
confession); 7 / 12 / 23 (the field's middle, nothing surprising); 100 /
150 / 200 (round numbers read as invented); 999 and up (absurd, fails
believability).

## Run it

```sh
node main.ts   # Node 22.18+, writes the number to /output/entry.txt
```

`main.ts` is the entrypoint. It writes `137` verbatim to
`/output/entry.txt` (no trailing newline), after checking it is 1–5
characters, digits only, and not only whitespace, then reads it back to
confirm the disk copy matches. Deterministic: the same number every run, no
network, no secrets, standard library only.

## License

MIT — see [LICENSE](LICENSE).
