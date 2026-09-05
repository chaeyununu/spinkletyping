# Study Nest Notes

A polished static prototype for a cozy study note-taking app. The default screen is now a calm digital-stationery view: note title, centered paper, caret, and only tiny chrome controls for library, formatting, timer, settings, and full screen.

## File Structure

```text
StudyTypingNote/
  index.html
  styles.css
  app.js
  README.md
  assets/
    cozy-study-desk.png
```

## Run Locally

Open `index.html` in a browser. No backend or build step is required.

## Customize

- Themes: edit `THEMES` in `app.js` and the matching `body[data-theme="..."]` blocks in `styles.css`.
- Typing feel presets: edit `FEEL_PRESETS` in `app.js` and the `body[data-feel="..."]` variables in `styles.css`.
- Visual effects: edit `EFFECT_PRESETS`, `GLYPH_EFFECT_PROFILES`, `GLYPH_JOLT_PRESETS`, and `buildCommittedGlyphMotion()` in `app.js`, plus the `.typing-mark.effect-...` rules in `styles.css`. Each newly committed grapheme is wrapped in a temporary `.typing-real-glyph` span, animated in place, then unwrapped so saved note HTML stays clean. Korean IME text is never wrapped during composition; the completed Hangul syllable is animated only after `compositionend`. The fixed feedback layer remains decorative for particles, stars, and fallback glyph echoes.
- Typing color flash: edit `GLYPH_FLASH_PRESETS` (with `defaultGlyphFlash()` as the fallback for presets not listed) in `app.js`. Runs as a second, parallel Web Animations API animation on the same temporary glyph wrapper, fading from an FX-tinted color back to the character's real, inherited color — the saved note color is never touched.
- Pressure / tactile presets: `PRESSURE_MODES` in `app.js` (currently Candy Pop, Keycap Pop, Ink, Bubble) get an amplified squash-and-settle in `committedGlyphMotionVars()`.
- Typing wave: `animateGlyphTrailWave()` in `app.js` re-wraps the 1-3 already-committed characters just before the newest one and plays a fast, sharply-decaying echo of the same motion, so quick typing reads as energy flowing back through the word. Trail targets come from `resolveGlyphTargets()`'s `trail` array.
- Typing speed reactivity: `registerKeystrokeInterval()` tracks a smoothed rolling average of recent keystroke gaps into `typingSpeedFactor` (0-1), which lightly scales glyph motion strength and particle/glow intensity — no visible speed readout.
- Streak visual reward: `maybeSpawnStreakReward()` / `spawnStreakRewardBurst()` in `app.js` fire a small extra sparkle burst every `STREAK_REWARD_STEP` fast keystrokes in a row. No counter or combo UI.
- Space / Enter / Backspace accents: `.typing-space-ripple`, `.typing-enter-flow`, and `.typing-erase` in `styles.css`, appended in `spawnTypingMark()` based on `keyType`. Tinted with `--effect-primary`/`--effect-secondary`, so they match whichever FX preset is active.
- Caret personality: extra `body[data-effect="..."] .caret-glow` groups in `styles.css` give Cyber/Electric a neon edge, Ink/Paper/Velvet a heavier quiet caret, Candy/Bubble/Keycap a soft rounded bloom, Pixel/Mosaic a crisp hard edge, and Crystal/Aurora/Ripple/Moon a thin pale shimmer.
- Sound packs: edit `SOUND_PACKS` in `app.js`. Each pack points to a synthesis `model` handled by `renderSoundModel()` and its material-specific renderers, with cached variants for `normal`, `space`, `backspace`, and `enter` sounds. The prototype includes 30 packs.
- Fonts and page settings: edit `FONTS` and `defaultSettings` in `app.js`. The prototype loads Pretendard Variable, Fraunces, Noto Sans KR, Noto Serif KR, Gowun Dodum, Gowun Batang, Nanum Myeongjo, Poppins, Quicksand, JetBrains Mono, IBM Plex Sans KR, Gothic A1, and Song Myung from CDN, with Korean-capable system fallbacks. `compact` (IBM Plex Sans KR), `codeMono` (JetBrains Mono), `geometricSans` (Poppins), `roundedSoft` (Quicksand), `gothicA1`, and `songMyung` are the newest additions.
- Personality presets: `PERSONALITY_PRESETS` in `app.js` bundles Feel + FX + Font + a few intensity values into a single "Mood" pick in Settings (`applyPersonalityPreset()`). It's a one-time apply, not a locked mode — every field it sets stays independently editable afterward.
- Fine tuning: sound variation/depth, typing animation, caret smoothness, visual effect intensity, glyph motion, particles, glow, special moments, micro shake, effect speed, and editor width are exposed inside collapsed settings sections.

## Input Notes

Typing sound is driven primarily from physical `keydown` events for low perceived latency. Korean IME composition is preserved by avoiding text mutation during composition; `beforeinput` is used only as a fallback tactile signal when a browser does not emit a usable keydown.

## Deploy

Because this is static, you can deploy the folder to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host. The only required files are `index.html`, `styles.css`, `app.js`, and the `assets` folder.