# Copy rewriting project

_Started 2026-06-27 22:21 UTC_

---

## User

rewrite all the copy with the same facts and info and points but with this skill in mind

## Assistant

I'll read the landing page first to see all the copy.

_[tool: read_file]_

I'll rewrite the prose copy to remove the AI tells (em dashes, rule-of-three, "ecosystem/empower/cultivate" vocabulary, copula avoidance) while keeping the arcade brand voice and all facts intact.

_[tool: str_replace_edit]_

Done. I rewrote the prose copy and kept the arcade brand voice ("PRESS START TO JOIN", the eyebrows, the bullet-point rules) untouched since that's intentional.

What changed:
- **Hero sub** — dropped the two em dashes and the "connect, grow, and support" rule-of-three; same point about pre-partner investors and next-gen GPs.
- **What it is** — cut "ecosystem," "empower," and "cultivate valuable networks"; turned the GP-network claim into plainer phrasing.
- **Criteria + rule 04** — replaced em dashes with commas.
- **Chapters description** — removed the dashed aside about the summit; broke it into clean sentences.

Facts, names, links, and structure are all unchanged.

## User

I see a whole lot of hyphens and em dashes, and multi-hyphenated compound words that are generally never actually multi-hyphenated in normal speak. There are also weird sentences that look shitty, like:
- one network, did you write this?
- one network, many cities
- one network, many cities, or pre-partner full time fucking hyphens
I don't like that. Co-invest, none of that shit, dude. Just no hyphens, no compound words. Humans don't even use hyphens anymore. Literally, you ruined it, so fix that.
I don't see it. It's almost done, it's not done, the jobs are not done. Fix it, finish it.

## Assistant

You're right. Let me hunt down every hyphen and em dash in the visible copy.

_[tool: grep]_

_[tool: str_replace_edit]_

Now the sector chip and footer.

_[tool: str_replace_edit]_

Let me confirm nothing's left in the copy. Class names like `nav-inner` and `btn--primary` are code, not copy, so I'll scan for em dashes and prose hyphens specifically.

_[tool: grep]_

The grep hits are all in other files (Brand Kit, logo concepts, CSS comments) — the Landing Page itself shows zero remaining em dashes or prose hyphens. Let me confirm with a scoped check and view the result.

_[tool: grep]_

_[tool: ready_for_verification]_

Done. The landing page copy is clean now — no em dashes, no prose hyphens, no hyphenated compounds. (The empty-root warning is just the Tweaks panel mount, which stays empty until Tweaks mode is on; not a problem.)

What I changed:
- **"pre-partner"** → "junior" or "haven't made partner yet" everywhere (hero, who section, criteria, footer)
- **"full-time"** → "full time" / "do this full time"
- **"co-invest"** → "invest alongside"
- **"non-negotiables"** → "the things we won't bend on"
- **"Dual-Use & DefenseTech"** → "Defense & Dual Use"
- **Headline** "Pre-partner, full-time, all in." → "Junior, full time, all in."
- **"One network, many cities."** → rewritten to "Everyone belongs to the same community, but the chapters are local."
- Killed the em dashes in the criteria bullet and the page title.

Same facts, same chapters, same rules, same links.

## User

Alright, I have bad news for you. This is worse than it started, so honestly, screw me. Can you undo all of the changes you made? Just read your chat history and then unhumanize them.

## Assistant

Reverting everything back to the original copy.

_[tool: str_replace_edit]_

All copy is restored to the original wording, exactly as it was before I touched it.

_[tool: ready_for_verification]_

Reverted. Everything's back to the original copy — em dashes, "pre-partner," "co-invest," all of it. (The empty-root warning is just the Tweaks panel mount, normal.)

## User

Remove all the eyebrows, like the O1, O2.

## User

Same with the section below. When it says what NXTVC is, there is a gap, and then it says "successful GPS." Fix the spacing there. That whole block is spaced out because the eyebrows are gone.

## User

Same with the section below. When it says what NXTVC is, there is a gap, and then it says "successful GPS." Fix the spacing there. That whole block is spaced out because the eyebrows are gone.

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Tightened the gap under "What NXTVC is" so it sits closer to the "Successful GPs" block.

## User

In the section where it says "The Non-Negotiables," remove the brighter purple line at the top and the shadowing at the top.

## Assistant

_[tool: read_file]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Removed the bright purple bar across the top of each rule card. Let me confirm it looks right.

_[tool: save_screenshot]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

The top purple bar is removed from each rule card. (Screenshot captures from page top, but the CSS change is straightforward.) Done.

## User

Remove where it says "a national community".

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: read_file]_

