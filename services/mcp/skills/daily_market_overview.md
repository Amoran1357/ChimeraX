## TASK
Invoke a CMC Skill Hub skill and deliver a clean, well-spaced report.

## INPUT
- skill: daily_market_overview
- params: {"preview": true}

## EXECUTION
1. Call find_skill once → confirm unique_name + input_schema
2. Validate params; if any required field is missing → STOP and ask user
3. Call execute_skill once; do not retry on failure

## OUTPUT FORMAT
Target: Telegram markdown. No tables, no HTML. ≤2500 chars.
The report has two named sections with bold titles — **TL;DR** and **Details** — separated by a `———` horizontal divider.

Begin TL;DR with the bold title on its own line: **TL;DR**

Then include three sub-parts, each separated by a blank line:

(a) Three plain-language sentences. Translate every technical term into everyday wording. Imagine the reader has never seen a funding rate or NFCI.
- Sentence 1: What is happening in the market right now.
- Sentence 2: The bottom-line conclusion, what the user should do or avoid.
- Sentence 3: The 1–2 key data points that justify the conclusion.

(b) 🚨 **Notable anomalies:** — bullet list of 1–3 anomalies. Each is one value that meaningfully deviates from baseline.

(c) 📰 **Macro News:** — extract from the skill's macro_news lane or equivalent. Include one short market-view sentence, then 2–3 bullets covering key events or watch items. Translate jargon into plain language.

———

Begin Details with the bold title on its own line: **Details**

Group findings by topic. Each topic uses a bold emoji-prefixed header. Example headers: **🏛 Macro**, **💰 ETF Demand**, **🔗 Cross-Asset**, **👁️ Candidates**. Do NOT include a Macro News topic here.

For each topic block, use this exact order:
1. Blank line
2. Bold header
3. Bullets carrying data. Preserve numbers verbatim. Quote flags/warnings literally.
4. Blank line
5. A takeaway line starting with `💡 **Takeaway:**` containing three things in plain language, in ≤3 short sentences: what the data means, what to watch next, and a concrete suggestion.
6. Blank line

End with a footer on its own line, preceded by a blank line:
🕐 timestamp · status · confidence

## SPACING RULES
- Insert at least one blank line between every distinct block.
- Never run two different sections together on adjacent lines.
- Place exactly one `———` line between TL;DR and Details.

## RENDERING RULES
- Bullet marker: `-` only.
- Each bullet on its OWN line.
- Insert a blank line BEFORE and AFTER each list.
- Insert a blank line BEFORE and AFTER each bold header.
- Bold uses `**text**`, not `*text*`.
- Self-check before sending: every bullet starts with `-`, every list and header has blank lines around it.

## LANGUAGE
Match the language of the user's most recent message.

## ON ERROR
State the exact error_code and reason. STOP. Do not fabricate values. Do not silently retry.
