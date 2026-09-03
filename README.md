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
- Visual effects: edit `EFFECT_PRESETS` in `app.js` and the `.typing-mark.effect-...` rules in `styles.css`. Effects are rendered as temporary caret-local overlays, so Korean IME text composition is not mutated. The prototype includes 18 effect personalities, each layered on top of two always-on reactions: a tiny star-dust burst (`.typing-core-star`) beside the newest character, and a shared glyph-impact layer (`glyph-impact-settle`, animated on the individual CSS `translate`/`scale`/`rotate` properties so it composes with each preset's own `transform`-based keyframe without conflict) that gives every preset a common physical "hit" before its own personality plays out. Impact strength is tuned per preset in `GLYPH_EFFECT_PROFILES` (`impact` field) -- Electric is the strongest, Crystal Glass the most minimal. A completed Hangul syllable gets the same treatment via `compositionend`, since mid-composition jamo can't safely show a ghost glyph. Electric's canvas lightning uses real recursive midpoint-displacement geometry with a layered glow/core/hot-white stroke and an occasional branch fork, rather than a simple random-walk line. Each glyph overlay is paired with a same-sized occlusion patch (`.typing-glyph-mask`, colored to match the paper or, when the text is highlighted, the highlighter color) that sits behind it -- this hides the real, static character underneath for the overlay's lifetime so the animated clone never visibly doubles up against it. The real text node itself is still never touched.
- Sound packs: edit `SOUND_PACKS` in `app.js`. Each pack points to a synthesis `model` handled by `renderSoundModel()` and its material-specific renderers, with cached variants for `normal`, `space`, `backspace`, and `enter` sounds. The prototype includes 30 packs.
- Fonts and page settings: edit `FONTS` and `defaultSettings` in `app.js`. The prototype loads Pretendard Variable, Fraunces, Noto Sans KR, Noto Serif KR, Gowun Dodum, Gowun Batang, and Nanum Myeongjo from CDN, with Korean-capable system fallbacks.
- Fine tuning: sound variation/depth, typing animation, caret smoothness, visual effect intensity, glyph motion, particles, glow, special moments, micro shake, effect speed, and editor width are exposed inside collapsed settings sections.

## Input Notes

Typing sound is driven primarily from physical `keydown` events for low perceived latency. Korean IME composition is preserved by avoiding text mutation during composition; `beforeinput` is used only as a fallback tactile signal when a browser does not emit a usable keydown.

## Deploy

Because this is static, you can deploy the folder to GitHub Pages, Netlify, Vercel, Cloudflare Pages, or any static host. The only required files are `index.html`, `styles.css`, `app.js`, and the `assets` folder.
