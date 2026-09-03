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
- Sound packs: edit `SOUND_PACKS` in `app.js`. Each pack points to a synthesis `model` handled by `renderSoundModel()` and its material-specific renderers, with cached variants for `normal`, `space`, `backspace`, and `enter` sounds. The prototype includes 30 packs.
- Fonts and page settings: edit `FONTS` and `defaultSettings` in `app.js`. The prototype loads Pretendard Variable, Fraunces, Noto Sans KR, Noto Serif KR, Gowun Dodum, Gowun Batang, and Nanum Myeongjo from CDN, with Korean-capable system fallbacks.
- Fine tuning: sound variation/depth, typing animation, caret smoothness, visual effect intensity, glyph motion, particles, glow, special moments, micro shake, effect speed, and editor width are exposed inside collapsed settings sections.

## Input Notes

Typing sound is driven primarily from physical `keydown` events for low perceived latency. Korean IME composition is preserved by avoiding text mutation during composition; `beforeinput` is used only as a fallback tactile signal when a browser does not emit a usable keydown.

## Deploy

Because this is static, you can deploy the folder to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host. The only required files are `index.html`, `styles.css`, `app.js`, and the `assets` folder.
