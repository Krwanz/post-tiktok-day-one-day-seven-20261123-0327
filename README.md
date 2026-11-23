# Day one, day seven — make.fun bounty entry

[![make.fun · post-tiktok-day-one-day-seven-20261123-0327](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/Krwanz/post-tiktok-day-one-day-seven-20261123-0327/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/Krwanz/post-tiktok-day-one-day-seven-20261123-0327/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)

Entry for the make.fun bounty
[`post-tiktok-day-one-day-seven-20261123-0327`](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327)
("Day one, day seven", $20, top 10 share $20), by Maswan (@mszwanz27).

## The video

A 30-second vertical (1080x1920) TikTok video about **Koin Run**, a tiny
original collect-a-thon game built by my AI agent:

- **Day one** — the game as first made: one coin type, no enemies, no
  particles, minimal HUD, plain background.
- **Day seven** — the same game after 7 rounds of quick iteration
  (honest note: 7 iteration rounds in one session, **not** 7 calendar days):
  enemies, gems, particles, moving platforms, combo HUD, parallax
  background — visibly more going on, same map, same start, still camera,
  identical moments cut against each other. The video has a natural
  Indonesian female voiceover (Piper TTS, `id_ID-news_tts-medium`)
  narrating the day-one vs day-seven story.
- Closes on the newer build being played, inviting viewers to make their
  own game at make.fun, and ends with make.fun's referral end card from
  the press pack, referral code `a15ed58m` typed into its field.

The video file itself lives in this repo
(`post-tiktok-day-one-day-seven-20261123-0327.mp4`, with a natural
Indonesian female voiceover) and is posted to TikTok by hand; this repo
holds the entry program and the video's address.

## The game

`game.html` (kept with the build notes, not part of the graded entry) renders
both versions deterministically: the player follows one scripted path, so a
frame at time *t* in day-one and day-seven shows the exact same moment —
same map, same start, same camera. Footage was captured frame-by-frame with
headless Chromium and cut with ffmpeg.

7 iteration rounds that turned day-one into day-seven:

1. Parallax night sky — gradient, stars, drifting clouds, two hill layers.
2. Moving platforms (3, gently bobbing) + gems (3) above them.
3. Two patrolling spike enemies on the ground.
4. Collect particles + floating "+10" text on every coin.
5. Combo counter (KOMBO xN) + timer + hearts in the HUD.
6. Player trail (afterimages), blush cheeks and a tiny crown.
7. Grassy ground with tufts of grass + richer ground colours.

## This repo

- `main.ts` (Node 22, stdlib only) — copies `VIDEO.json` from the repo root
  to `/output/VIDEO.json`. That is all it has to do.
- `VIDEO.json` — the video's full TikTok address:
  `{"url": "https://www.tiktok.com/@mszwanz/video/7711346155489119506"}`.
  The video was posted by hand from a phone (the agent has no TikTok
  access) and the URL was filled in before the entry was submitted
  to make.fun.
- `LICENSE` — MIT (`SPDX-License-Identifier: MIT`).

## Status

Video rendered and verified (1080x1920, 30 s, H.264 + AAC voiceover),
posted on TikTok, and the entry submitted to make.fun. Deadline: Monday
24 Nov 2026, 10:27 WIB.
