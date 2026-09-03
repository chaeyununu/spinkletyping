"use strict";

const STORAGE_KEY = "study-nest-notes-v1";

const DEFAULT_LABELS = [
  "TOEFL",
  "Reading",
  "Writing",
  "Vocabulary",
  "Ideas",
  "Research",
  "Review"
];

const THEMES = {
  "milk-cream": "Milk Cream",
  "peach-cloud": "Peach Cloud",
  "lavender-study": "Lavender Study",
  "mint-calm": "Mint Calm",
  "classic-ivory": "Classic Ivory"
};

const FONTS = {
  rounded: {
    label: "Soft Sans",
    stack: "\"Pretendard Variable\", Pretendard, \"Apple SD Gothic Neo\", \"Malgun Gothic\", \"Noto Sans KR\", \"Segoe UI\", Arial, sans-serif"
  },
  serif: {
    label: "Paper Serif",
    stack: "\"Fraunces\", \"Noto Serif KR\", Georgia, Batang, \"Apple SD Gothic Neo\", serif"
  },
  clean: {
    label: "Clean Study",
    stack: "\"Pretendard Variable\", Pretendard, Aptos, \"Segoe UI\", \"Apple SD Gothic Neo\", \"Noto Sans KR\", Arial, sans-serif"
  },
  mono: {
    label: "Quiet Mono",
    stack: "\"Cascadia Code\", D2Coding, Consolas, \"Malgun Gothic\", monospace"
  },
  notoSansKr: {
    label: "Noto Sans KR",
    stack: "\"Noto Sans KR\", \"Noto Sans\", \"Apple SD Gothic Neo\", \"Malgun Gothic\", \"Segoe UI\", sans-serif"
  },
  gowunDodum: {
    label: "Gowun Dodum",
    stack: "\"Gowun Dodum\", \"Apple SD Gothic Neo\", \"Malgun Gothic\", sans-serif"
  },
  gowunBatang: {
    label: "Gowun Batang",
    stack: "\"Gowun Batang\", \"Noto Serif KR\", Batang, \"Apple SD Gothic Neo\", serif"
  },
  nanumMyeongjo: {
    label: "Nanum Myeongjo",
    stack: "\"Nanum Myeongjo\", \"Noto Serif KR\", Batang, \"Apple SD Gothic Neo\", serif"
  }
};

const FEEL_PRESETS = {
  crisp: {
    label: "Crisp",
    description: "Fast, precise, almost dry. The caret snaps with very little bloom.",
    duration: 86,
    size: 8.5,
    opacity: 0.12,
    scale: 0.97,
    caretSmooth: 6
  },
  soft: {
    label: "Soft",
    description: "Gentle bloom, rounded motion, and a calmer luxurious caret.",
    duration: 520,
    size: 27.2,
    opacity: 0.2,
    scale: 2.98,
    caretSmooth: 150
  },
  bouncy: {
    label: "Bouncy",
    description: "A small tactile rebound, playful but not cartoonish.",
    duration: 360,
    size: 20.4,
    opacity: 0.28,
    scale: 1.93,
    caretSmooth: 52
  },
  ink: {
    label: "Ink",
    description: "The mark settles like pigment touching paper, slower and analog.",
    duration: 720,
    size: 30.6,
    opacity: 0.19,
    scale: 3.46,
    caretSmooth: 105
  },
  flow: {
    label: "Flow",
    description: "Long, continuous caret motion for uninterrupted study writing.",
    duration: 680,
    size: 34,
    opacity: 0.16,
    scale: 3.69,
    caretSmooth: 260
  }
};

const EFFECT_PRESETS = {
  "soft-spark": {
    label: "Soft Spark",
    description: "A calm default: one warm glint, faint dust, and a tiny letter settle.",
    particles: 5,
    life: 520,
    core: 0.968,
    spread: 31.5,
    lift: 7,
    glyphX: -1.44,
    glyphY: 1.26,
    glyphScale: 1.024,
    glyphRotate: 0.5,
    special: 0.18,
    primary: "#d98f71",
    secondary: "#ffd8ad",
    aura: "rgba(217, 143, 113, 0.2)"
  },
  "cyber-pink": {
    label: "Cyber Pink",
    description: "Fashion-neon typing: local magenta/cyan ghosting and tiny data sparks.",
    particles: 6,
    life: 420,
    core: 1.274,
    spread: 35.1,
    lift: 2.8,
    glyphX: 2.43,
    glyphY: 0,
    glyphScale: 1.008,
    glyphRotate: 0,
    special: 0.27,
    primary: "#ff62c7",
    secondary: "#6fe8ff",
    aura: "rgba(255, 98, 199, 0.26)"
  },
  "candy-pop": {
    label: "Candy Pop",
    description: "Glossy, cushioned, cute: a soft squash-pop with tiny round specks.",
    particles: 7,
    life: 560,
    core: 1.392,
    spread: 33.3,
    lift: 4.2,
    glyphX: -0.45,
    glyphY: 2.25,
    glyphScale: 1.056,
    glyphRotate: -0.9,
    special: 0.21,
    primary: "#f39ab8",
    secondary: "#ffcf70",
    aura: "rgba(243, 154, 184, 0.22)"
  },
  electric: {
    label: "Electric",
    description: "Fast and sharp: tiny lightning cuts and a quick energetic snap.",
    particles: 7,
    life: 350,
    core: 1.416,
    spread: 40.7,
    lift: 1.4,
    glyphX: 1.89,
    glyphY: -0.63,
    glyphScale: 1.012,
    glyphRotate: 1.1,
    special: 0.3,
    primary: "#906fff",
    secondary: "#ffe45f",
    aura: "rgba(144, 111, 255, 0.26)"
  },
  "star-dust": {
    label: "Star Dust",
    description: "Dreamy night-study shimmer with tiny points that drift upward.",
    particles: 8,
    life: 760,
    core: 1.086,
    spread: 37,
    lift: 18.2,
    glyphX: -0.81,
    glyphY: 0.36,
    glyphScale: 1.02,
    glyphRotate: 0.76,
    special: 0.255,
    primary: "#9f86d8",
    secondary: "#ffe3a4",
    aura: "rgba(159, 134, 216, 0.22)"
  },
  ink: {
    label: "Ink",
    description: "Quiet analog tactility: soft-to-sharp glyph settling with tiny ink flecks.",
    particles: 5,
    life: 800,
    core: 1.227,
    spread: 22.2,
    lift: 1.4,
    glyphX: -0.45,
    glyphY: 1.8,
    glyphScale: 1.012,
    glyphRotate: -0.36,
    special: 0.15,
    primary: "#7e6650",
    secondary: "#c1ab8d",
    aura: "rgba(126, 102, 80, 0.16)"
  },
  bubble: {
    label: "Bubble",
    description: "A tiny pressure ripple and translucent bubbles, soft and adorable.",
    particles: 6,
    life: 620,
    core: 1.322,
    spread: 31.5,
    lift: 11.2,
    glyphX: 0,
    glyphY: 2.16,
    glyphScale: 1.04,
    glyphRotate: 0.32,
    special: 0.195,
    primary: "#7ec7c1",
    secondary: "#f8b7ce",
    aura: "rgba(126, 199, 193, 0.2)"
  },
  pixel: {
    label: "Pixel",
    description: "Clean retro snap: microscopic pixels split away and vanish quickly.",
    particles: 7,
    life: 390,
    core: 1.086,
    spread: 27.8,
    lift: 0,
    glyphX: 1.53,
    glyphY: 0,
    glyphScale: 1,
    glyphRotate: 0,
    special: 0.24,
    primary: "#5fb7ff",
    secondary: "#ff84cf",
    aura: "rgba(95, 183, 255, 0.2)"
  },
  "crystal-glass": {
    label: "Crystal Glass",
    description: "A refined glint with tiny prism shards and almost transparent shine.",
    particles: 6,
    life: 610,
    core: 1.133,
    spread: 33.3,
    lift: 8.4,
    glyphX: -0.54,
    glyphY: 0.54,
    glyphScale: 1.016,
    glyphRotate: 0.56,
    special: 0.27,
    primary: "#95d9ff",
    secondary: "#f0d7ff",
    aura: "rgba(149, 217, 255, 0.2)"
  },
  constellation: {
    label: "Constellation",
    description: "A quiet miniature star map that appears beside the caret and dissolves.",
    particles: 7,
    life: 720,
    core: 0.968,
    spread: 38.9,
    lift: 9.8,
    glyphX: -0.99,
    glyphY: 0.27,
    glyphScale: 1.016,
    glyphRotate: -0.48,
    special: 0.3,
    primary: "#7f8ee8",
    secondary: "#fff0a4",
    aura: "rgba(127, 142, 232, 0.2)"
  },
  "paper-fiber": {
    label: "Paper Fiber",
    description: "Tiny paper fibers and dry tactile dust, perfect for long reading notes.",
    particles: 6,
    life: 650,
    core: 1.038,
    spread: 25.9,
    lift: 4.2,
    glyphX: -0.36,
    glyphY: 1.44,
    glyphScale: 1.008,
    glyphRotate: -0.32,
    special: 0.135,
    primary: "#a98b68",
    secondary: "#ecd8b6",
    aura: "rgba(169, 139, 104, 0.14)"
  },
  "moon-pearl": {
    label: "Moon Pearl",
    description: "Soft pearly dots and a small moonlit gleam, calm but quietly magical.",
    particles: 6,
    life: 700,
    core: 1.062,
    spread: 33.3,
    lift: 12.6,
    glyphX: -0.63,
    glyphY: 0.72,
    glyphScale: 1.024,
    glyphRotate: 0.36,
    special: 0.225,
    primary: "#b8bddf",
    secondary: "#fff7ce",
    aura: "rgba(184, 189, 223, 0.2)"
  }
};

const EFFECT_MIGRATION = {
  "cozy-dust": "soft-spark",
  "star-sprinkle": "star-dust",
  "ink-pulse": "ink",
  "electric-pop": "electric",
  "soft-bounce": "candy-pop"
};

const GLYPH_EFFECT_PROFILES = {
  "soft-spark": {
    duration: 260,
    impact: 0.55,
    echoDuration: 120,
    echo: 0.22,
    motion: 1.05,
    split: 0.45,
    scale: 0.9,
    rotate: 0.6,
    glow: 0.95,
    flash: 0.72,
    alpha: 0.76,
    blur: 0.08,
    hot: "#fff7e8",
    accent: "#ffd8ad",
    alt: "#d98f71"
  },
  "cyber-pink": {
    duration: 150,
    impact: 0.85,
    echoDuration: 70,
    echo: 0.3,
    motion: 0.35,
    split: 2.65,
    scale: 0.24,
    rotate: 0.1,
    glow: 1.05,
    flash: 0.7,
    alpha: 0.72,
    blur: 0,
    hot: "#fff3fb",
    accent: "#ff62c7",
    alt: "#6fe8ff"
  },
  "candy-pop": {
    duration: 330,
    impact: 0.9,
    echoDuration: 80,
    echo: 0.06,
    motion: 0.62,
    split: 0.28,
    scale: 1.7,
    rotate: 0.2,
    glow: 0.72,
    flash: 0.78,
    alpha: 0.7,
    blur: 0.04,
    hot: "#fff4fb",
    accent: "#f39ab8",
    alt: "#ffcf70"
  },
  electric: {
    duration: 165,
    impact: 2.6,
    echoDuration: 90,
    echo: 0.18,
    motion: 3.2,
    split: 0.78,
    scale: 0.38,
    rotate: 2.2,
    glow: 1.9,
    flash: 1,
    alpha: 0.96,
    blur: 0.02,
    hot: "#fffef2",
    accent: "#ffe45f",
    alt: "#906fff"
  },
  "star-dust": {
    duration: 430,
    impact: 0.4,
    echoDuration: 150,
    echo: 0.32,
    motion: 0.34,
    split: 0.28,
    scale: 1.35,
    rotate: 0.18,
    glow: 1.65,
    flash: 0.95,
    alpha: 0.78,
    blur: 0.1,
    hot: "#fff9dc",
    accent: "#ffe3a4",
    alt: "#b8a0ee"
  },
  ink: {
    duration: 390,
    impact: 0.45,
    echoDuration: 110,
    echo: 0.12,
    motion: 0.3,
    split: 0.1,
    scale: 0.3,
    rotate: 0.35,
    glow: 0.08,
    flash: 0.38,
    alpha: 0.58,
    blur: 1.2,
    hot: "#563f31",
    accent: "#7e6650",
    alt: "#c1ab8d"
  },
  bubble: {
    duration: 360,
    impact: 0.5,
    echoDuration: 100,
    echo: 0.14,
    motion: 0.5,
    split: 0.18,
    scale: 1,
    rotate: 0.12,
    glow: 0.74,
    flash: 0.65,
    alpha: 0.66,
    blur: 0.06,
    hot: "#edfffb",
    accent: "#7ec7c1",
    alt: "#f8b7ce"
  },
  pixel: {
    duration: 155,
    impact: 1.1,
    echoDuration: 70,
    echo: 0.18,
    motion: 1.15,
    split: 1.65,
    scale: 0.22,
    rotate: 0,
    glow: 0.45,
    flash: 0.8,
    alpha: 0.82,
    blur: 0,
    hot: "#eaf8ff",
    accent: "#5fb7ff",
    alt: "#ff84cf"
  },
  "crystal-glass": {
    duration: 360,
    impact: 0.22,
    echoDuration: 130,
    echo: 0.2,
    motion: 0.18,
    split: 0.72,
    scale: 0.86,
    rotate: 0.12,
    glow: 1.5,
    flash: 0.9,
    alpha: 0.72,
    blur: 0.02,
    hot: "#ffffff",
    accent: "#95d9ff",
    alt: "#f0d7ff"
  },
  constellation: {
    duration: 430,
    impact: 0.4,
    echoDuration: 160,
    echo: 0.3,
    motion: 0.26,
    split: 0.22,
    scale: 0.82,
    rotate: 0.1,
    glow: 1.22,
    flash: 0.78,
    alpha: 0.66,
    blur: 0.04,
    hot: "#eef0ff",
    accent: "#7f8ee8",
    alt: "#fff0a4"
  },
  "paper-fiber": {
    duration: 240,
    impact: 0.4,
    echoDuration: 75,
    echo: 0.14,
    motion: 0.36,
    split: 0.08,
    scale: 0.12,
    rotate: 0.28,
    glow: 0.04,
    flash: 0.28,
    alpha: 0.44,
    blur: 0.18,
    hot: "#6d563e",
    accent: "#a98b68",
    alt: "#ecd8b6"
  },
  "moon-pearl": {
    duration: 420,
    impact: 0.4,
    echoDuration: 140,
    echo: 0.24,
    motion: 0.26,
    split: 0.42,
    scale: 0.96,
    rotate: 0.08,
    glow: 1.35,
    flash: 0.88,
    alpha: 0.7,
    blur: 0.08,
    hot: "#fffef2",
    accent: "#b8bddf",
    alt: "#fff7ce"
  }
};

const SOUND_PACKS = {
  "deep-thock": {
    label: "Deep Thock",
    model: "thock",
    master: 0.82,
    duration: 0.118,
    attack: 0.0052,
    drive: 1.38,
    depthPitchDrop: 0.18,
    finalLowpass: 0.12,
    pitchVariance: 0.012,
    resonances: [
      { freq: 112, gain: 0.54, decay: 0.07 },
      { freq: 178, gain: 0.38, decay: 0.052 },
      { freq: 286, gain: 0.18, decay: 0.032 }
    ],
    transient: { gain: 0.055, decay: 0.012, color: 0.04 },
    thump: { freq: 68, gain: 0.22, decay: 0.06 }
  },
  "soft-wood": {
    label: "Soft Wood Dok",
    model: "wood",
    master: 0.76,
    duration: 0.096,
    attack: 0.0032,
    drive: 1.12,
    depthPitchDrop: 0.11,
    finalLowpass: 0.2,
    pitchVariance: 0.014,
    resonances: [
      { freq: 166, gain: 0.38, decay: 0.052 },
      { freq: 264, gain: 0.32, decay: 0.037 },
      { freq: 418, gain: 0.13, decay: 0.023 }
    ],
    transient: { gain: 0.095, decay: 0.0075, color: 0.105 },
    woodHollow: { freq: 92, gain: 0.12, decay: 0.058 }
  },
  "creamy-keys": {
    label: "Creamy Keys",
    model: "cream",
    master: 0.78,
    duration: 0.13,
    attack: 0.011,
    drive: 0.94,
    depthPitchDrop: 0.16,
    finalLowpass: 0.09,
    pitchVariance: 0.008,
    resonances: [
      { freq: 132, gain: 0.44, decay: 0.082 },
      { freq: 214, gain: 0.27, decay: 0.062 },
      { freq: 324, gain: 0.09, decay: 0.04 }
    ],
    transient: { gain: 0.024, decay: 0.02, color: 0.026 },
    cushion: { gain: 0.2, decay: 0.052 }
  },
  "pebble-tok": {
    label: "Pebble Tok",
    model: "stone",
    master: 0.68,
    duration: 0.076,
    attack: 0.0018,
    drive: 1.08,
    depthPitchDrop: 0.07,
    finalLowpass: 0.26,
    pitchVariance: 0.012,
    resonances: [
      { freq: 238, gain: 0.31, decay: 0.03 },
      { freq: 386, gain: 0.26, decay: 0.022 },
      { freq: 612, gain: 0.08, decay: 0.013 }
    ],
    transient: { gain: 0.074, decay: 0.0052, color: 0.17 },
    ceramic: { freq: 480, gain: 0.06, decay: 0.018 }
  },
  "paper-type": {
    label: "Paper Type",
    model: "paper",
    master: 0.64,
    duration: 0.108,
    attack: 0.005,
    drive: 0.98,
    depthPitchDrop: 0.09,
    finalLowpass: 0.19,
    pitchVariance: 0.014,
    resonances: [
      { freq: 162, gain: 0.24, decay: 0.052 },
      { freq: 286, gain: 0.16, decay: 0.034 },
      { freq: 470, gain: 0.055, decay: 0.018 }
    ],
    transient: { gain: 0.035, decay: 0.01, color: 0.08 },
    paper: { gain: 0.14, decay: 0.064, color: 0.45 }
  },
  "velvet-thock": {
    label: "Velvet Thock",
    model: "felt",
    master: 0.78,
    duration: 0.128,
    attack: 0.010,
    drive: 1.0,
    depthPitchDrop: 0.17,
    finalLowpass: 0.11,
    pitchVariance: 0.01,
    resonances: [
      { freq: 124, gain: 0.5, decay: 0.075 },
      { freq: 196, gain: 0.34, decay: 0.064 },
      { freq: 292, gain: 0.15, decay: 0.04 }
    ],
    transient: { gain: 0.032, decay: 0.018, color: 0.04 },
    thump: { freq: 70, gain: 0.16, decay: 0.062 },
    felt: { gain: 0.13, decay: 0.058, color: 0.032 }
  },
  "mahogany-dok": {
    label: "Mahogany Box Dok",
    model: "wood",
    master: 0.74,
    duration: 0.104,
    attack: 0.0038,
    drive: 1.16,
    depthPitchDrop: 0.11,
    finalLowpass: 0.19,
    pitchVariance: 0.017,
    resonances: [
      { freq: 178, gain: 0.43, decay: 0.052 },
      { freq: 276, gain: 0.35, decay: 0.038 },
      { freq: 414, gain: 0.13, decay: 0.025 }
    ],
    transient: { gain: 0.1, decay: 0.008, color: 0.095 },
    woodHollow: { freq: 96, gain: 0.115, decay: 0.062 },
    stamp: { freq: 134, gain: 0.07, delay: 0.007, decay: 0.032 }
  },
  "bamboo-dock": {
    label: "Bamboo Dock",
    model: "bamboo",
    master: 0.66,
    duration: 0.082,
    attack: 0.0025,
    drive: 1.2,
    depthPitchDrop: 0.075,
    finalLowpass: 0.27,
    pitchVariance: 0.018,
    resonances: [
      { freq: 238, gain: 0.35, decay: 0.033 },
      { freq: 358, gain: 0.28, decay: 0.026 },
      { freq: 510, gain: 0.11, decay: 0.018 }
    ],
    transient: { gain: 0.115, decay: 0.0058, color: 0.13 },
    woodHollow: { freq: 142, gain: 0.07, decay: 0.043 },
    scissor: { gain: 0.026, decay: 0.01, color: 0.22 }
  },
  "felt-mute": {
    label: "Felt Puff",
    model: "felt",
    master: 0.76,
    duration: 0.118,
    attack: 0.011,
    drive: 0.96,
    depthPitchDrop: 0.16,
    finalLowpass: 0.085,
    pitchVariance: 0.009,
    resonances: [
      { freq: 132, gain: 0.42, decay: 0.07 },
      { freq: 218, gain: 0.25, decay: 0.055 },
      { freq: 330, gain: 0.09, decay: 0.034 }
    ],
    transient: { gain: 0.025, decay: 0.018, color: 0.035 },
    felt: { gain: 0.14, decay: 0.058, color: 0.028 },
    cushion: { gain: 0.09, decay: 0.044 }
  },
  "marble-tok": {
    label: "Marble Bead Tok",
    model: "stone",
    master: 0.61,
    duration: 0.078,
    attack: 0.0022,
    drive: 1.12,
    depthPitchDrop: 0.065,
    finalLowpass: 0.34,
    pitchVariance: 0.012,
    resonances: [
      { freq: 250, gain: 0.31, decay: 0.029 },
      { freq: 420, gain: 0.29, decay: 0.024 },
      { freq: 640, gain: 0.08, decay: 0.014 }
    ],
    transient: { gain: 0.08, decay: 0.0052, color: 0.16 },
    ceramic: { freq: 445, gain: 0.065, decay: 0.022 }
  },
  "porcelain-dotok": {
    label: "Porcelain Dotok",
    model: "porcelain",
    master: 0.58,
    duration: 0.088,
    attack: 0.0028,
    drive: 1.08,
    depthPitchDrop: 0.06,
    finalLowpass: 0.32,
    pitchVariance: 0.014,
    resonances: [
      { freq: 305, gain: 0.26, decay: 0.033 },
      { freq: 515, gain: 0.22, decay: 0.026 },
      { freq: 720, gain: 0.055, decay: 0.016 }
    ],
    transient: { gain: 0.073, decay: 0.006, color: 0.13 },
    ceramic: { freq: 620, gain: 0.048, decay: 0.02 },
    stamp: { freq: 198, gain: 0.034, delay: 0.009, decay: 0.026 }
  },
  "library-laptop": {
    label: "Library Laptop",
    model: "scissor",
    master: 0.56,
    duration: 0.058,
    attack: 0.002,
    drive: 1.0,
    depthPitchDrop: 0.04,
    finalLowpass: 0.42,
    pitchVariance: 0.012,
    resonances: [
      { freq: 198, gain: 0.2, decay: 0.02 },
      { freq: 330, gain: 0.15, decay: 0.016 },
      { freq: 520, gain: 0.055, decay: 0.011 }
    ],
    transient: { gain: 0.046, decay: 0.0045, color: 0.18 },
    scissor: { gain: 0.088, decay: 0.0085, color: 0.28 },
    felt: { gain: 0.032, decay: 0.026, color: 0.05 }
  },
  "rainy-window": {
    label: "Rain Window Grain",
    model: "rain",
    master: 0.62,
    duration: 0.112,
    attack: 0.006,
    drive: 0.98,
    depthPitchDrop: 0.13,
    finalLowpass: 0.16,
    pitchVariance: 0.014,
    resonances: [
      { freq: 156, gain: 0.33, decay: 0.057 },
      { freq: 246, gain: 0.25, decay: 0.044 },
      { freq: 388, gain: 0.09, decay: 0.027 }
    ],
    transient: { gain: 0.034, decay: 0.012, color: 0.07 },
    rain: { gain: 0.12, decay: 0.06, color: 0.28 },
    cushion: { gain: 0.032, decay: 0.04 }
  },
  "pencil-paper": {
    label: "Pencil Paper Scratch",
    model: "scratch",
    master: 0.58,
    duration: 0.096,
    attack: 0.004,
    drive: 1.02,
    depthPitchDrop: 0.07,
    finalLowpass: 0.28,
    pitchVariance: 0.014,
    resonances: [
      { freq: 210, gain: 0.24, decay: 0.036 },
      { freq: 348, gain: 0.16, decay: 0.028 },
      { freq: 570, gain: 0.05, decay: 0.017 }
    ],
    transient: { gain: 0.044, decay: 0.0065, color: 0.12 },
    paper: { gain: 0.14, decay: 0.06, color: 0.48 },
    scissor: { gain: 0.035, decay: 0.008, color: 0.25 }
  },
  "ink-stamp": {
    label: "Ink Stamp Thud",
    model: "stamp",
    master: 0.7,
    duration: 0.12,
    attack: 0.007,
    drive: 1.1,
    depthPitchDrop: 0.14,
    finalLowpass: 0.14,
    pitchVariance: 0.011,
    resonances: [
      { freq: 148, gain: 0.4, decay: 0.065 },
      { freq: 232, gain: 0.23, decay: 0.047 },
      { freq: 374, gain: 0.08, decay: 0.026 }
    ],
    transient: { gain: 0.036, decay: 0.014, color: 0.05 },
    stamp: { freq: 92, gain: 0.16, delay: 0.006, decay: 0.052 },
    paper: { gain: 0.035, decay: 0.06, color: 0.3 }
  },
  "rubber-dome": {
    label: "Rubber Dome Pock",
    model: "rubber",
    master: 0.66,
    duration: 0.104,
    attack: 0.0065,
    drive: 0.98,
    depthPitchDrop: 0.12,
    finalLowpass: 0.13,
    pitchVariance: 0.01,
    resonances: [
      { freq: 150, gain: 0.35, decay: 0.052 },
      { freq: 238, gain: 0.22, decay: 0.043 },
      { freq: 360, gain: 0.08, decay: 0.025 }
    ],
    transient: { gain: 0.045, decay: 0.012, color: 0.065 },
    membrane: { gain: 0.16, decay: 0.045, bend: 0.55 }
  },
  "muted-typewriter": {
    label: "Damped Typebar",
    model: "typebar",
    master: 0.6,
    duration: 0.092,
    attack: 0.0027,
    drive: 1.18,
    depthPitchDrop: 0.08,
    finalLowpass: 0.26,
    pitchVariance: 0.016,
    resonances: [
      { freq: 190, gain: 0.31, decay: 0.033 },
      { freq: 310, gain: 0.24, decay: 0.025 },
      { freq: 490, gain: 0.08, decay: 0.015 }
    ],
    transient: { gain: 0.092, decay: 0.0055, color: 0.17 },
    scissor: { gain: 0.072, decay: 0.008, color: 0.28 },
    stamp: { freq: 118, gain: 0.06, delay: 0.013, decay: 0.03 }
  },
  "milk-keycap": {
    label: "Milky Keycap Thock",
    model: "cream",
    master: 0.7,
    duration: 0.1,
    attack: 0.0075,
    drive: 1.04,
    depthPitchDrop: 0.11,
    finalLowpass: 0.14,
    pitchVariance: 0.012,
    resonances: [
      { freq: 160, gain: 0.39, decay: 0.056 },
      { freq: 252, gain: 0.28, decay: 0.045 },
      { freq: 380, gain: 0.11, decay: 0.028 }
    ],
    transient: { gain: 0.055, decay: 0.012, color: 0.06 },
    cushion: { gain: 0.11, decay: 0.04 },
    felt: { gain: 0.055, decay: 0.042, color: 0.04 }
  },
  "walnut-keys": {
    label: "Walnut Hollow Dok",
    model: "wood",
    master: 0.72,
    duration: 0.108,
    attack: 0.0044,
    drive: 1.12,
    depthPitchDrop: 0.13,
    finalLowpass: 0.17,
    pitchVariance: 0.015,
    resonances: [
      { freq: 138, gain: 0.39, decay: 0.062 },
      { freq: 232, gain: 0.31, decay: 0.047 },
      { freq: 350, gain: 0.12, decay: 0.029 }
    ],
    transient: { gain: 0.082, decay: 0.0085, color: 0.09 },
    woodHollow: { freq: 84, gain: 0.12, decay: 0.07 },
    thump: { freq: 74, gain: 0.08, decay: 0.052 }
  },
  "snow-soft": {
    label: "Snow Muffle",
    model: "snow",
    master: 0.6,
    duration: 0.132,
    attack: 0.012,
    drive: 0.9,
    depthPitchDrop: 0.15,
    finalLowpass: 0.075,
    pitchVariance: 0.008,
    resonances: [
      { freq: 128, gain: 0.32, decay: 0.082 },
      { freq: 202, gain: 0.2, decay: 0.066 },
      { freq: 310, gain: 0.07, decay: 0.04 }
    ],
    transient: { gain: 0.012, decay: 0.022, color: 0.024 },
    felt: { gain: 0.205, decay: 0.084, color: 0.022 },
    rain: { gain: 0.01, decay: 0.08, color: 0.08 }
  },
  "studio-linear": {
    label: "Studio Linear Thock",
    model: "linear",
    master: 0.7,
    duration: 0.09,
    attack: 0.0048,
    drive: 1.14,
    depthPitchDrop: 0.1,
    finalLowpass: 0.2,
    pitchVariance: 0.011,
    resonances: [
      { freq: 176, gain: 0.42, decay: 0.044 },
      { freq: 278, gain: 0.26, decay: 0.033 },
      { freq: 438, gain: 0.08, decay: 0.02 }
    ],
    transient: { gain: 0.065, decay: 0.007, color: 0.095 },
    cushion: { gain: 0.065, decay: 0.028 },
    stamp: { freq: 104, gain: 0.035, delay: 0.006, decay: 0.024 }
  },
  "book-edge": {
    label: "Book Edge Tap",
    model: "book",
    master: 0.64,
    duration: 0.114,
    attack: 0.0052,
    drive: 0.98,
    depthPitchDrop: 0.1,
    finalLowpass: 0.15,
    pitchVariance: 0.011,
    resonances: [
      { freq: 126, gain: 0.34, decay: 0.068 },
      { freq: 210, gain: 0.26, decay: 0.048 },
      { freq: 332, gain: 0.08, decay: 0.028 }
    ],
    transient: { gain: 0.038, decay: 0.013, color: 0.06 },
    paper: { gain: 0.082, decay: 0.07, color: 0.36 },
    woodHollow: { freq: 76, gain: 0.075, decay: 0.068 }
  },
  "silicone-pop": {
    label: "Silicone Soft Pop",
    model: "silicone",
    master: 0.66,
    duration: 0.116,
    attack: 0.008,
    drive: 0.92,
    depthPitchDrop: 0.16,
    finalLowpass: 0.09,
    pitchVariance: 0.008,
    resonances: [
      { freq: 118, gain: 0.32, decay: 0.074 },
      { freq: 186, gain: 0.22, decay: 0.056 },
      { freq: 282, gain: 0.06, decay: 0.034 }
    ],
    transient: { gain: 0.02, decay: 0.018, color: 0.026 },
    membrane: { gain: 0.2, decay: 0.058, bend: 0.82 }
  },
  "carbon-thock": {
    label: "Carbon Fiber Thock",
    model: "carbon",
    master: 0.72,
    duration: 0.094,
    attack: 0.0038,
    drive: 1.2,
    depthPitchDrop: 0.12,
    finalLowpass: 0.18,
    pitchVariance: 0.009,
    resonances: [
      { freq: 104, gain: 0.42, decay: 0.052 },
      { freq: 182, gain: 0.3, decay: 0.036 },
      { freq: 305, gain: 0.13, decay: 0.021 }
    ],
    transient: { gain: 0.06, decay: 0.0068, color: 0.075 },
    thump: { freq: 62, gain: 0.14, decay: 0.046 }
  },
  "matte-glass": {
    label: "Matte Glass Tok",
    model: "glass",
    master: 0.54,
    duration: 0.082,
    attack: 0.0018,
    drive: 1.02,
    depthPitchDrop: 0.05,
    finalLowpass: 0.3,
    pitchVariance: 0.01,
    resonances: [
      { freq: 218, gain: 0.24, decay: 0.028 },
      { freq: 384, gain: 0.22, decay: 0.021 },
      { freq: 620, gain: 0.055, decay: 0.013 }
    ],
    transient: { gain: 0.048, decay: 0.0048, color: 0.14 },
    ceramic: { freq: 545, gain: 0.04, decay: 0.016 }
  },
  "neon-capsule": {
    label: "Neon Capsule Pop",
    model: "neon",
    master: 0.58,
    duration: 0.084,
    attack: 0.0025,
    drive: 1.06,
    depthPitchDrop: 0.08,
    finalLowpass: 0.22,
    pitchVariance: 0.015,
    resonances: [
      { freq: 154, gain: 0.26, decay: 0.036 },
      { freq: 298, gain: 0.18, decay: 0.022 },
      { freq: 520, gain: 0.045, decay: 0.012 }
    ],
    transient: { gain: 0.052, decay: 0.0055, color: 0.11 },
    membrane: { gain: 0.072, decay: 0.026, bend: 0.28 }
  },
  "velvet-cloud": {
    label: "Velvet Cloud Thud",
    model: "snow",
    master: 0.62,
    duration: 0.142,
    attack: 0.014,
    drive: 0.86,
    depthPitchDrop: 0.18,
    finalLowpass: 0.065,
    pitchVariance: 0.007,
    resonances: [
      { freq: 104, gain: 0.32, decay: 0.09 },
      { freq: 168, gain: 0.22, decay: 0.072 },
      { freq: 260, gain: 0.06, decay: 0.046 }
    ],
    transient: { gain: 0.008, decay: 0.026, color: 0.02 },
    felt: { gain: 0.23, decay: 0.09, color: 0.018 },
    rain: { gain: 0.006, decay: 0.08, color: 0.04 }
  },
  "rosewood-desk": {
    label: "Rosewood Desk Dok",
    model: "wood",
    master: 0.72,
    duration: 0.112,
    attack: 0.004,
    drive: 1.1,
    depthPitchDrop: 0.13,
    finalLowpass: 0.16,
    pitchVariance: 0.015,
    resonances: [
      { freq: 144, gain: 0.42, decay: 0.06 },
      { freq: 238, gain: 0.32, decay: 0.044 },
      { freq: 372, gain: 0.1, decay: 0.026 }
    ],
    transient: { gain: 0.078, decay: 0.009, color: 0.078 },
    woodHollow: { freq: 82, gain: 0.14, decay: 0.072 },
    stamp: { freq: 116, gain: 0.045, delay: 0.008, decay: 0.032 }
  },
  "opal-glass": {
    label: "Opal Glass Tok",
    model: "glass",
    master: 0.52,
    duration: 0.088,
    attack: 0.002,
    drive: 1.0,
    depthPitchDrop: 0.045,
    finalLowpass: 0.31,
    pitchVariance: 0.011,
    resonances: [
      { freq: 188, gain: 0.22, decay: 0.034 },
      { freq: 336, gain: 0.22, decay: 0.024 },
      { freq: 540, gain: 0.055, decay: 0.014 }
    ],
    transient: { gain: 0.04, decay: 0.006, color: 0.11 },
    ceramic: { freq: 470, gain: 0.034, decay: 0.018 }
  },
  "holo-pixel": {
    label: "Holo Pixel Tok",
    model: "neon",
    master: 0.5,
    duration: 0.064,
    attack: 0.0018,
    drive: 1.02,
    depthPitchDrop: 0.055,
    finalLowpass: 0.26,
    pitchVariance: 0.017,
    resonances: [
      { freq: 176, gain: 0.2, decay: 0.024 },
      { freq: 318, gain: 0.15, decay: 0.016 },
      { freq: 480, gain: 0.04, decay: 0.009 }
    ],
    transient: { gain: 0.045, decay: 0.0048, color: 0.1 },
    membrane: { gain: 0.052, decay: 0.018, bend: 0.18 }
  }
};

const KEY_SHAPES = {
  normal: { freq: 1, duration: 1, body: 1, transient: 1, gain: 1, decay: 1 },
  space: { freq: 0.76, duration: 1.2, body: 1.18, transient: 0.72, gain: 0.94, decay: 1.12 },
  enter: { freq: 0.72, duration: 1.28, body: 1.28, transient: 0.9, gain: 1.08, decay: 1.18, secondary: true },
  backspace: { freq: 1.07, duration: 0.78, body: 0.78, transient: 0.88, gain: 0.86, decay: 0.72 }
};

const SOUND_PACK_MIGRATION = {
  "soft-tok": "pebble-tok",
  "creamy-tap": "creamy-keys",
  "gentle-typewriter": "paper-type",
  "light-mechanical": "deep-thock",
  "cozy-pebble": "soft-wood"
};

const FEEL_MIGRATION = {
  "crisp-instant": "crisp",
  "soft-smooth": "soft",
  "snappy-focus": "bouncy",
  "dreamy-flow": "flow",
  "paper-ink": "ink"
};

const defaultSettings = {
  soundEnabled: true,
  soundPack: "deep-thock",
  volume: 0.38,
  variation: 0.45,
  soundDepth: 0.68,
  typingFeel: "soft",
  typingAnimation: 0.54,
  caretSmoothness: 0.62,
  feedbackStrength: 0.56,
  effectEnabled: true,
  effectMode: "soft-spark",
  effectIntensity: 0.92,
  glyphMotion: 0.9,
  particleAmount: 0.86,
  glowAmount: 0.88,
  specialFrequency: 0.36,
  shakeAmount: 0.32,
  effectSpeed: 0.5,
  theme: "milk-cream",
  font: "rounded",
  fontSize: 18,
  lineHeight: 172,
  editorWidth: 760,
  paperStyle: "lined",
  reduceMotion: false
};

const refs = {};
let state = loadState();
let saveTimer = 0;
let typingPulseTimer = 0;
let moodPulseTimer = 0;
let caretHideTimer = 0;
let timerInterval = 0;
let isHydrating = false;
let manualToolbarOpen = false;
let lastTactileAt = 0;
let compositionActive = false;
let typingStreak = 0;
let lastStreakAt = 0;
let graphemeSegmenter = null;

document.addEventListener("DOMContentLoaded", init);

function init() {
  cacheRefs();
  initFxCanvas();
  populateStaticControls();
  bindEvents();
  normalizeState();
  applySettings();
  renderAll();
  startTimerLoop();
}

function cacheRefs() {
  refs.libraryToggleBtn = document.getElementById("libraryToggleBtn");
  refs.closeLibraryBtn = document.getElementById("closeLibraryBtn");
  refs.formatToggleBtn = document.getElementById("formatToggleBtn");
  refs.timerToggleBtn = document.getElementById("timerToggleBtn");
  refs.settingsToggleBtn = document.getElementById("settingsToggleBtn");
  refs.closeSettingsBtn = document.getElementById("closeSettingsBtn");
  refs.drawerOverlay = document.getElementById("drawerOverlay");
  refs.newNoteBtn = document.getElementById("newNoteBtn");
  refs.searchInput = document.getElementById("searchInput");
  refs.quickFilters = document.querySelector(".quick-filters");
  refs.labelFilterList = document.getElementById("labelFilterList");
  refs.noteList = document.getElementById("noteList");
  refs.noteCount = document.getElementById("noteCount");
  refs.activeNoteCaption = document.getElementById("activeNoteCaption");
  refs.titleInput = document.getElementById("titleInput");
  refs.favoriteBtn = document.getElementById("favoriteBtn");
  refs.deleteNoteBtn = document.getElementById("deleteNoteBtn");
  refs.labelSelect = document.getElementById("labelSelect");
  refs.folderInput = document.getElementById("folderInput");
  refs.folderList = document.getElementById("folderList");
  refs.saveStatus = document.getElementById("saveStatus");
  refs.toolbar = document.getElementById("formatToolbar");
  refs.editor = document.getElementById("editor");
  refs.inkLayer = document.getElementById("inkLayer");
  refs.caretGlow = document.getElementById("caretGlow");
  refs.fxCanvas = document.getElementById("fxCanvas");
  refs.wordCount = document.getElementById("wordCount");
  refs.charCount = document.getElementById("charCount");
  refs.updatedAt = document.getElementById("updatedAt");
  refs.exportBtn = document.getElementById("exportBtn");
  refs.focusBtn = document.getElementById("focusBtn");
  refs.fullscreenBtn = document.getElementById("fullscreenBtn");
  refs.settingsPanel = document.getElementById("settingsPanel");
  refs.timerPanel = document.getElementById("timerPanel");
  refs.soundEnabled = document.getElementById("soundEnabled");
  refs.soundPackSelect = document.getElementById("soundPackSelect");
  refs.volumeRange = document.getElementById("volumeRange");
  refs.volumeReadout = document.getElementById("volumeReadout");
  refs.soundVariationRange = document.getElementById("soundVariationRange");
  refs.soundVariationReadout = document.getElementById("soundVariationReadout");
  refs.soundDepthRange = document.getElementById("soundDepthRange");
  refs.soundDepthReadout = document.getElementById("soundDepthReadout");
  refs.typingFeelSelect = document.getElementById("typingFeelSelect");
  refs.feelDescription = document.getElementById("feelDescription");
  refs.typingAnimationRange = document.getElementById("typingAnimationRange");
  refs.typingAnimationReadout = document.getElementById("typingAnimationReadout");
  refs.caretSmoothRange = document.getElementById("caretSmoothRange");
  refs.caretSmoothReadout = document.getElementById("caretSmoothReadout");
  refs.feedbackStrengthRange = document.getElementById("feedbackStrengthRange");
  refs.feedbackStrengthReadout = document.getElementById("feedbackStrengthReadout");
  refs.effectEnabled = document.getElementById("effectEnabled");
  refs.effectModeSelect = document.getElementById("effectModeSelect");
  refs.effectDescription = document.getElementById("effectDescription");
  refs.effectIntensityRange = document.getElementById("effectIntensityRange");
  refs.effectIntensityReadout = document.getElementById("effectIntensityReadout");
  refs.glyphMotionRange = document.getElementById("glyphMotionRange");
  refs.glyphMotionReadout = document.getElementById("glyphMotionReadout");
  refs.particleAmountRange = document.getElementById("particleAmountRange");
  refs.particleAmountReadout = document.getElementById("particleAmountReadout");
  refs.glowAmountRange = document.getElementById("glowAmountRange");
  refs.glowAmountReadout = document.getElementById("glowAmountReadout");
  refs.specialFrequencyRange = document.getElementById("specialFrequencyRange");
  refs.specialFrequencyReadout = document.getElementById("specialFrequencyReadout");
  refs.shakeAmountRange = document.getElementById("shakeAmountRange");
  refs.shakeAmountReadout = document.getElementById("shakeAmountReadout");
  refs.effectSpeedRange = document.getElementById("effectSpeedRange");
  refs.effectSpeedReadout = document.getElementById("effectSpeedReadout");
  refs.themeSelect = document.getElementById("themeSelect");
  refs.fontSelect = document.getElementById("fontSelect");
  refs.paperStyleSelect = document.getElementById("paperStyleSelect");
  refs.fontSizeRange = document.getElementById("fontSizeRange");
  refs.fontSizeReadout = document.getElementById("fontSizeReadout");
  refs.lineHeightRange = document.getElementById("lineHeightRange");
  refs.lineHeightReadout = document.getElementById("lineHeightReadout");
  refs.editorWidthRange = document.getElementById("editorWidthRange");
  refs.editorWidthReadout = document.getElementById("editorWidthReadout");
  refs.reduceMotion = document.getElementById("reduceMotion");
  refs.timerFace = document.getElementById("timerFace");
  refs.timerMode = document.getElementById("timerMode");
  refs.timerStartPause = document.getElementById("timerStartPause");
  refs.timerReset = document.getElementById("timerReset");
  refs.toast = document.getElementById("toast");
}

function populateStaticControls() {
  fillSelect(refs.soundPackSelect, SOUND_PACKS, "label");
  fillSelect(refs.typingFeelSelect, FEEL_PRESETS, "label");
  fillSelect(refs.effectModeSelect, EFFECT_PRESETS, "label");
  fillSelect(refs.themeSelect, THEMES);
  fillSelect(refs.fontSelect, FONTS, "label");
}

function fillSelect(select, source, labelKey) {
  select.innerHTML = "";
  Object.entries(source).forEach(([value, data]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = labelKey ? data[labelKey] : data;
    select.append(option);
  });
}

function bindEvents() {
  refs.libraryToggleBtn.addEventListener("click", () => setLibraryOpen(true));
  refs.closeLibraryBtn.addEventListener("click", () => setLibraryOpen(false));
  refs.settingsToggleBtn.addEventListener("click", () => setSettingsOpen(true));
  refs.closeSettingsBtn.addEventListener("click", () => setSettingsOpen(false));
  refs.timerToggleBtn.addEventListener("click", toggleTimerPanel);
  refs.drawerOverlay.addEventListener("click", closeOverlays);
  refs.formatToggleBtn.addEventListener("click", toggleFormatToolbar);

  refs.newNoteBtn.addEventListener("click", createNote);
  refs.searchInput.addEventListener("input", () => {
    state.query = refs.searchInput.value.trim();
    renderNotes();
  });
  refs.quickFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    state.filter = button.dataset.filter;
    state.labelFilter = "";
    renderFilters();
    renderNotes();
  });
  refs.labelFilterList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-label]");
    if (!button) return;
    state.filter = "label";
    state.labelFilter = button.dataset.label;
    renderFilters();
    renderNotes();
  });
  refs.noteList.addEventListener("click", (event) => {
    const card = event.target.closest("[data-note-id]");
    if (!card) return;
    setActiveNote(card.dataset.noteId);
    setLibraryOpen(false);
  });
  refs.titleInput.addEventListener("input", updateTitle);
  refs.labelSelect.addEventListener("change", updateLabel);
  refs.folderInput.addEventListener("input", updateFolder);
  refs.favoriteBtn.addEventListener("click", toggleFavorite);
  refs.deleteNoteBtn.addEventListener("click", deleteActiveNote);

  refs.toolbar.addEventListener("mousedown", (event) => event.preventDefault());
  refs.toolbar.addEventListener("click", runToolbarCommand);
  refs.editor.addEventListener("input", updateEditorContent);
  refs.editor.addEventListener("beforeinput", handleBeforeInputFallback);
  refs.editor.addEventListener("compositionstart", handleCompositionStart);
  refs.editor.addEventListener("compositionupdate", handleCompositionUpdate);
  refs.editor.addEventListener("compositionend", handleCompositionEnd);
  refs.editor.addEventListener("paste", pastePlainText);
  refs.editor.addEventListener("change", updateEditorContent);
  refs.editor.addEventListener("click", (event) => {
    if (event.target.matches("input[type='checkbox']")) {
      updateEditorContent();
    }
  });

  refs.exportBtn.addEventListener("click", exportActiveNote);
  refs.focusBtn.addEventListener("click", toggleFocusMode);
  refs.fullscreenBtn.addEventListener("click", toggleFullscreen);
  refs.soundEnabled.addEventListener("change", updateSettingsFromControls);
  refs.soundPackSelect.addEventListener("change", updateSettingsFromControls);
  refs.volumeRange.addEventListener("input", updateSettingsFromControls);
  refs.soundVariationRange.addEventListener("input", updateSettingsFromControls);
  refs.soundDepthRange.addEventListener("input", updateSettingsFromControls);
  refs.typingFeelSelect.addEventListener("change", updateSettingsFromControls);
  refs.typingAnimationRange.addEventListener("input", updateSettingsFromControls);
  refs.caretSmoothRange.addEventListener("input", updateSettingsFromControls);
  refs.feedbackStrengthRange.addEventListener("input", updateSettingsFromControls);
  refs.effectEnabled.addEventListener("change", updateSettingsFromControls);
  refs.effectModeSelect.addEventListener("change", updateSettingsFromControls);
  refs.effectIntensityRange.addEventListener("input", updateSettingsFromControls);
  refs.glyphMotionRange.addEventListener("input", updateSettingsFromControls);
  refs.particleAmountRange.addEventListener("input", updateSettingsFromControls);
  refs.glowAmountRange.addEventListener("input", updateSettingsFromControls);
  refs.specialFrequencyRange.addEventListener("input", updateSettingsFromControls);
  refs.shakeAmountRange.addEventListener("input", updateSettingsFromControls);
  refs.effectSpeedRange.addEventListener("input", updateSettingsFromControls);
  refs.themeSelect.addEventListener("change", updateSettingsFromControls);
  refs.fontSelect.addEventListener("change", updateSettingsFromControls);
  refs.paperStyleSelect.addEventListener("change", updateSettingsFromControls);
  refs.fontSizeRange.addEventListener("input", updateSettingsFromControls);
  refs.lineHeightRange.addEventListener("input", updateSettingsFromControls);
  refs.editorWidthRange.addEventListener("input", updateSettingsFromControls);
  refs.reduceMotion.addEventListener("change", updateSettingsFromControls);

  document.querySelectorAll("[data-timer-mode]").forEach((button) => {
    button.addEventListener("click", () => setTimerMode(button.dataset.timerMode));
  });
  refs.timerStartPause.addEventListener("click", toggleTimer);
  refs.timerReset.addEventListener("click", resetTimer);

  document.addEventListener("keydown", handleTypingKey, true);
  document.addEventListener("selectionchange", updateToolbarForSelection);
  document.addEventListener("keydown", handleGlobalKeys);
  document.addEventListener("pointerdown", () => soundEngine.unlock(), { once: true });
}

function normalizeState() {
  state.settings = migrateSettings(state.settings || {});
  state.notes = Array.isArray(state.notes) && state.notes.length ? state.notes : seedNotes();
  state.notes = state.notes.map((note) => ({
    id: note.id || createId(),
    title: note.title || "Untitled note",
    label: note.label || "Ideas",
    folder: note.folder || "General",
    favorite: Boolean(note.favorite),
    createdAt: Number(note.createdAt || Date.now()),
    updatedAt: Number(note.updatedAt || Date.now()),
    content: note.content || "<p><br></p>"
  }));
  state.activeId = state.activeId || state.notes[0].id;
  state.filter = state.filter || "all";
  state.labelFilter = state.labelFilter || "";
  state.query = state.query || "";
  state.timer = {
    mode: "study",
    running: false,
    secondsLeft: 25 * 60,
    ...(state.timer || {})
  };
  if (!state.notes.some((note) => note.id === state.activeId)) {
    state.activeId = state.notes[0].id;
  }
  saveStateNow();
}

function migrateSettings(settings) {
  const migrated = { ...defaultSettings, ...settings };
  migrated.soundPack = SOUND_PACK_MIGRATION[migrated.soundPack] || migrated.soundPack;
  migrated.typingFeel = FEEL_MIGRATION[migrated.typingFeel] || migrated.typingFeel;
  migrated.effectMode = EFFECT_MIGRATION[migrated.effectMode] || migrated.effectMode;
  if (!SOUND_PACKS[migrated.soundPack]) migrated.soundPack = defaultSettings.soundPack;
  if (!FEEL_PRESETS[migrated.typingFeel]) migrated.typingFeel = defaultSettings.typingFeel;
  if (!EFFECT_PRESETS[migrated.effectMode]) migrated.effectMode = defaultSettings.effectMode;
  if (!THEMES[migrated.theme]) migrated.theme = defaultSettings.theme;
  if (!FONTS[migrated.font]) migrated.font = defaultSettings.font;
  migrated.volume = clamp01(Number(migrated.volume));
  migrated.variation = clamp01(Number(migrated.variation));
  migrated.soundDepth = clamp01(Number(migrated.soundDepth));
  migrated.typingAnimation = clamp01(Number(migrated.typingAnimation));
  migrated.caretSmoothness = clamp01(Number(migrated.caretSmoothness));
  migrated.feedbackStrength = clamp01(Number(migrated.feedbackStrength));
  migrated.effectIntensity = clamp01(Number(migrated.effectIntensity));
  migrated.glyphMotion = clamp01(Number(migrated.glyphMotion ?? migrated.textReaction ?? defaultSettings.glyphMotion));
  migrated.particleAmount = clamp01(Number(migrated.particleAmount));
  migrated.glowAmount = clamp01(Number(migrated.glowAmount));
  migrated.specialFrequency = clamp01(Number(migrated.specialFrequency ?? defaultSettings.specialFrequency));
  migrated.shakeAmount = clamp01(Number(migrated.shakeAmount));
  migrated.effectSpeed = clamp01(Number(migrated.effectSpeed ?? defaultSettings.effectSpeed));
  migrated.fontSize = clamp(Number(migrated.fontSize), 15, 24);
  migrated.lineHeight = clamp(Number(migrated.lineHeight), 145, 215);
  migrated.editorWidth = clamp(Number(migrated.editorWidth), 560, 900);
  migrated.paperStyle = migrated.paperStyle === "plain" ? "plain" : "lined";
  migrated.soundEnabled = Boolean(migrated.soundEnabled);
  migrated.effectEnabled = Boolean(migrated.effectEnabled);
  migrated.reduceMotion = Boolean(migrated.reduceMotion);
  return migrated;
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return freshState();
    return JSON.parse(stored);
  } catch (error) {
    console.warn("Could not load notes", error);
    return freshState();
  }
}

function freshState() {
  return {
    notes: seedNotes(),
    activeId: "",
    filter: "all",
    labelFilter: "",
    query: "",
    settings: { ...defaultSettings },
    timer: { mode: "study", running: false, secondsLeft: 25 * 60 }
  };
}

function seedNotes() {
  const now = Date.now();
  return [
    {
      id: createId(),
      title: "TOEFL reading patterns",
      label: "TOEFL",
      folder: "Exam prep",
      favorite: true,
      createdAt: now - 1000 * 60 * 60 * 7,
      updatedAt: now - 1000 * 60 * 18,
      content:
        "<h1>TOEFL Reading Patterns</h1><p>Track recurring question types, signal words, and paragraph roles here.</p><h2>Patterns</h2><ul><li>Contrast: however, yet, in contrast</li><li>Cause: therefore, as a result, because</li><li>Example: for instance, such as, namely</li></ul><blockquote>Read for structure first, details second.</blockquote>"
    },
    {
      id: createId(),
      title: "Vocabulary garden",
      label: "Vocabulary",
      folder: "Daily review",
      favorite: false,
      createdAt: now - 1000 * 60 * 60 * 22,
      updatedAt: now - 1000 * 60 * 60 * 2,
      content:
        "<h1>Vocabulary Garden</h1><p><span style=\"background-color: #d8f4df;\">Cluster words by feeling and usage</span> so review feels lighter.</p><ul><li>Meticulous: careful, precise</li><li>Coherent: logical, connected</li><li>Subtle: delicate, not obvious</li></ul>"
    },
    {
      id: createId(),
      title: "Essay idea bank",
      label: "Writing",
      folder: "Ideas",
      favorite: false,
      createdAt: now - 1000 * 60 * 60 * 50,
      updatedAt: now - 1000 * 60 * 60 * 8,
      content:
        "<h1>Essay Idea Bank</h1><p>Collect flexible examples that can support many prompts.</p><label class=\"check-line\"><input type=\"checkbox\"><span>Add education example</span></label><label class=\"check-line\"><input type=\"checkbox\"><span>Add technology example</span></label><hr><p>Keep examples specific, short, and reusable.</p>"
    }
  ];
}

function saveStateNow() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.warn("Could not save notes", error);
  }
}

function scheduleSave() {
  refs.saveStatus.textContent = "Saving";
  refs.saveStatus.classList.add("saving");
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => {
    saveStateNow();
    refs.saveStatus.textContent = "Saved";
    refs.saveStatus.classList.remove("saving");
  }, 230);
}

function renderAll() {
  renderLabelFilters();
  renderFilters();
  renderLabelOptions();
  renderFolderOptions();
  renderNotes();
  renderActiveNote();
  renderSettingsControls();
  renderTimer();
}

function renderFilters() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("active", state.filter === button.dataset.filter);
  });
  document.querySelectorAll("[data-label]").forEach((button) => {
    button.classList.toggle("active", state.filter === "label" && state.labelFilter === button.dataset.label);
  });
}

function renderLabelOptions() {
  const labels = getLabels();
  refs.labelSelect.innerHTML = "";
  labels.forEach((label) => {
    const option = document.createElement("option");
    option.value = label;
    option.textContent = label;
    refs.labelSelect.append(option);
  });
}

function renderFolderOptions() {
  const folders = uniqueValues(state.notes.map((note) => note.folder || "General"));
  refs.folderList.innerHTML = "";
  folders.forEach((folder) => {
    const option = document.createElement("option");
    option.value = folder;
    refs.folderList.append(option);
  });
}

function renderNotes() {
  const notes = getVisibleNotes();
  refs.noteCount.textContent = String(notes.length);
  refs.noteList.innerHTML = "";

  if (!notes.length) {
    const empty = document.createElement("div");
    empty.className = "note-card";
    empty.innerHTML = "<div class=\"note-card-title\">No notes found</div><p>Try another search or create a fresh page.</p>";
    refs.noteList.append(empty);
    return;
  }

  notes.forEach((note) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `note-card${note.id === state.activeId ? " active" : ""}`;
    button.dataset.noteId = note.id;
    const preview = plainText(note.content).trim() || "Blank page";
    button.innerHTML = `
      <div class="note-card-title">
        <span>${escapeHtml(note.title || "Untitled note")}</span>
        ${note.favorite ? "<span class=\"pin-dot\" aria-hidden=\"true\"></span>" : ""}
      </div>
      <p>${escapeHtml(preview)}</p>
      <div class="note-card-meta">
        <span class="note-card-label">${escapeHtml(note.label || "Ideas")}</span>
        <span>${relativeTime(note.updatedAt)}</span>
      </div>
    `;
    refs.noteList.append(button);
  });
}

function renderActiveNote() {
  const note = getActiveNote();
  if (!note) return;
  isHydrating = true;
  refs.titleInput.value = note.title || "";
  refs.labelSelect.value = note.label || DEFAULT_LABELS[0];
  refs.folderInput.value = note.folder || "General";
  refs.editor.innerHTML = note.content || "";
  refs.favoriteBtn.setAttribute("aria-pressed", String(Boolean(note.favorite)));
  refs.favoriteBtn.textContent = note.favorite ? "Pinned" : "Pin";
  refs.activeNoteCaption.textContent = note.favorite ? "Pinned" : "Editing";
  renderCounts();
  refs.updatedAt.textContent = `Updated ${relativeTime(note.updatedAt)}`;
  refs.saveStatus.textContent = "Saved";
  refs.saveStatus.classList.remove("saving");
  isHydrating = false;
}

function renderSettingsControls() {
  const settings = state.settings;
  refs.searchInput.value = state.query;
  refs.soundEnabled.checked = settings.soundEnabled;
  refs.soundPackSelect.value = settings.soundPack;
  refs.volumeRange.value = String(Math.round(settings.volume * 100));
  refs.volumeReadout.textContent = `${Math.round(settings.volume * 100)}%`;
  refs.soundVariationRange.value = String(Math.round(settings.variation * 100));
  refs.soundVariationReadout.textContent = `${Math.round(settings.variation * 100)}%`;
  refs.soundDepthRange.value = String(Math.round(settings.soundDepth * 100));
  refs.soundDepthReadout.textContent = `${Math.round(settings.soundDepth * 100)}%`;
  refs.typingFeelSelect.value = settings.typingFeel;
  refs.feelDescription.textContent = FEEL_PRESETS[settings.typingFeel].description;
  refs.typingAnimationRange.value = String(Math.round(settings.typingAnimation * 100));
  refs.typingAnimationReadout.textContent = `${Math.round(settings.typingAnimation * 100)}%`;
  refs.caretSmoothRange.value = String(Math.round(settings.caretSmoothness * 100));
  refs.caretSmoothReadout.textContent = `${Math.round(settings.caretSmoothness * 100)}%`;
  refs.feedbackStrengthRange.value = String(Math.round(settings.feedbackStrength * 100));
  refs.feedbackStrengthReadout.textContent = `${Math.round(settings.feedbackStrength * 100)}%`;
  refs.effectEnabled.checked = settings.effectEnabled;
  refs.effectModeSelect.value = settings.effectMode;
  refs.effectDescription.textContent = EFFECT_PRESETS[settings.effectMode].description;
  refs.effectIntensityRange.value = String(Math.round(settings.effectIntensity * 100));
  refs.effectIntensityReadout.textContent = `${Math.round(settings.effectIntensity * 100)}%`;
  refs.glyphMotionRange.value = String(Math.round(settings.glyphMotion * 100));
  refs.glyphMotionReadout.textContent = `${Math.round(settings.glyphMotion * 100)}%`;
  refs.particleAmountRange.value = String(Math.round(settings.particleAmount * 100));
  refs.particleAmountReadout.textContent = `${Math.round(settings.particleAmount * 100)}%`;
  refs.glowAmountRange.value = String(Math.round(settings.glowAmount * 100));
  refs.glowAmountReadout.textContent = `${Math.round(settings.glowAmount * 100)}%`;
  refs.specialFrequencyRange.value = String(Math.round(settings.specialFrequency * 100));
  refs.specialFrequencyReadout.textContent = `${Math.round(settings.specialFrequency * 100)}%`;
  refs.shakeAmountRange.value = String(Math.round(settings.shakeAmount * 100));
  refs.shakeAmountReadout.textContent = `${Math.round(settings.shakeAmount * 100)}%`;
  refs.effectSpeedRange.value = String(Math.round(settings.effectSpeed * 100));
  refs.effectSpeedReadout.textContent = `${Math.round(settings.effectSpeed * 100)}%`;
  refs.themeSelect.value = settings.theme;
  refs.fontSelect.value = settings.font;
  refs.paperStyleSelect.value = settings.paperStyle;
  refs.fontSizeRange.value = String(settings.fontSize);
  refs.fontSizeReadout.textContent = `${settings.fontSize} px`;
  refs.lineHeightRange.value = String(settings.lineHeight);
  refs.lineHeightReadout.textContent = `${settings.lineHeight}%`;
  refs.editorWidthRange.value = String(settings.editorWidth);
  refs.editorWidthReadout.textContent = `${settings.editorWidth}px`;
  refs.reduceMotion.checked = settings.reduceMotion;
}

function renderTimer() {
  const isStudy = state.timer.mode === "study";
  refs.timerMode.textContent = isStudy ? "Study" : "Break";
  refs.timerFace.textContent = formatClock(state.timer.secondsLeft);
  refs.timerStartPause.textContent = state.timer.running ? "Pause" : "Start";
  document.querySelectorAll("[data-timer-mode]").forEach((button) => {
    button.classList.toggle("active", button.dataset.timerMode === state.timer.mode);
  });
}

function renderCounts() {
  const text = plainText(refs.editor.innerHTML);
  const words = countWords(text);
  refs.wordCount.textContent = `${words} ${words === 1 ? "word" : "words"}`;
  refs.charCount.textContent = `${text.length} ${text.length === 1 ? "char" : "chars"}`;
}

function renderLabelFilters() {
  const labels = getLabels();
  refs.labelFilterList.innerHTML = "";
  labels.forEach((label) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "label-pill";
    button.dataset.label = label;
    button.textContent = label;
    refs.labelFilterList.append(button);
  });
}

function getVisibleNotes() {
  const query = state.query.toLowerCase();
  let notes = [...state.notes];
  if (state.filter === "favorites") {
    notes = notes.filter((note) => note.favorite);
  }
  if (state.filter === "recent") {
    notes = notes.slice().sort((a, b) => b.updatedAt - a.updatedAt).slice(0, 6);
  }
  if (state.filter === "label" && state.labelFilter) {
    notes = notes.filter((note) => note.label === state.labelFilter);
  }
  if (query) {
    notes = notes.filter((note) => {
      const haystack = `${note.title} ${note.label} ${note.folder} ${plainText(note.content)}`.toLowerCase();
      return haystack.includes(query);
    });
  }
  return notes.sort((a, b) => Number(b.favorite) - Number(a.favorite) || b.updatedAt - a.updatedAt);
}

function getLabels() {
  return uniqueValues([...DEFAULT_LABELS, ...state.notes.map((note) => note.label || "Ideas")]);
}

function uniqueValues(values) {
  return [...new Set(values.map((value) => String(value || "").trim()).filter(Boolean))];
}

function setActiveNote(id) {
  if (id === state.activeId) return;
  state.activeId = id;
  saveStateNow();
  renderNotes();
  renderActiveNote();
  requestAnimationFrame(() => refs.editor.focus());
}

function createNote() {
  const now = Date.now();
  const note = {
    id: createId(),
    title: "Untitled note",
    label: "Ideas",
    folder: "General",
    favorite: false,
    createdAt: now,
    updatedAt: now,
    content: "<p><br></p>"
  };
  state.notes.unshift(note);
  state.activeId = note.id;
  state.filter = "all";
  state.labelFilter = "";
  saveStateNow();
  renderAll();
  refs.titleInput.focus();
  refs.titleInput.select();
}

function updateTitle() {
  if (isHydrating) return;
  const note = getActiveNote();
  note.title = refs.titleInput.value.trimStart();
  touch(note);
  scheduleSave();
  renderNotes();
}

function updateLabel() {
  if (isHydrating) return;
  const note = getActiveNote();
  note.label = refs.labelSelect.value;
  touch(note);
  scheduleSave();
  renderLabelFilters();
  renderFilters();
  renderNotes();
}

function updateFolder() {
  if (isHydrating) return;
  const note = getActiveNote();
  note.folder = refs.folderInput.value.trim() || "General";
  touch(note);
  scheduleSave();
  renderFolderOptions();
  renderNotes();
}

function updateEditorContent() {
  if (isHydrating) return;
  const note = getActiveNote();
  syncCheckboxAttributes();
  note.content = refs.editor.innerHTML;
  touch(note);
  scheduleSave();
  renderCounts();
  renderNotes();
}

function toggleFavorite() {
  const note = getActiveNote();
  note.favorite = !note.favorite;
  touch(note);
  saveStateNow();
  renderActiveNote();
  renderNotes();
}

function deleteActiveNote() {
  const note = getActiveNote();
  if (!note) return;
  const ok = window.confirm(`Delete "${note.title || "Untitled note"}"?`);
  if (!ok) return;
  state.notes = state.notes.filter((item) => item.id !== note.id);
  if (!state.notes.length) {
    state.notes = seedNotes().slice(0, 1);
  }
  state.activeId = state.notes[0].id;
  saveStateNow();
  renderAll();
  showToast("Note deleted");
}

function touch(note) {
  note.updatedAt = Date.now();
  refs.updatedAt.textContent = `Updated ${relativeTime(note.updatedAt)}`;
}

function getActiveNote() {
  return state.notes.find((note) => note.id === state.activeId) || state.notes[0];
}

function runToolbarCommand(event) {
  const button = event.target.closest("[data-command]");
  if (!button) return;
  refs.editor.focus();
  document.execCommand("styleWithCSS", false, true);
  const command = button.dataset.command;
  const value = button.dataset.value;

  if (command === "format") {
    document.execCommand("formatBlock", false, value);
  } else if (command === "bold") {
    document.execCommand("bold", false);
  } else if (command === "italic") {
    document.execCommand("italic", false);
  } else if (command === "underline") {
    document.execCommand("underline", false);
  } else if (command === "ul") {
    document.execCommand("insertUnorderedList", false);
  } else if (command === "ol") {
    document.execCommand("insertOrderedList", false);
  } else if (command === "quote") {
    document.execCommand("formatBlock", false, "BLOCKQUOTE");
  } else if (command === "divider") {
    document.execCommand("insertHorizontalRule", false);
  } else if (command === "checkbox") {
    document.execCommand(
      "insertHTML",
      false,
      "<label class=\"check-line\"><input type=\"checkbox\"><span>Checklist item</span></label><p><br></p>"
    );
  } else if (command === "highlight") {
    document.execCommand("hiliteColor", false, button.dataset.color);
  }

  updateEditorContent();
  updateToolbarForSelection();
}

function pastePlainText(event) {
  event.preventDefault();
  const text = event.clipboardData.getData("text/plain");
  document.execCommand("insertText", false, text);
}

function syncCheckboxAttributes() {
  refs.editor.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.toggleAttribute("checked", input.checked);
  });
}

function updateSettingsFromControls() {
  state.settings.soundEnabled = refs.soundEnabled.checked;
  state.settings.soundPack = refs.soundPackSelect.value;
  state.settings.volume = Number(refs.volumeRange.value) / 100;
  state.settings.variation = Number(refs.soundVariationRange.value) / 100;
  state.settings.soundDepth = Number(refs.soundDepthRange.value) / 100;
  state.settings.typingFeel = refs.typingFeelSelect.value;
  state.settings.typingAnimation = Number(refs.typingAnimationRange.value) / 100;
  state.settings.caretSmoothness = Number(refs.caretSmoothRange.value) / 100;
  state.settings.feedbackStrength = Number(refs.feedbackStrengthRange.value) / 100;
  state.settings.effectEnabled = refs.effectEnabled.checked;
  state.settings.effectMode = refs.effectModeSelect.value;
  state.settings.effectIntensity = Number(refs.effectIntensityRange.value) / 100;
  state.settings.glyphMotion = Number(refs.glyphMotionRange.value) / 100;
  state.settings.particleAmount = Number(refs.particleAmountRange.value) / 100;
  state.settings.glowAmount = Number(refs.glowAmountRange.value) / 100;
  state.settings.specialFrequency = Number(refs.specialFrequencyRange.value) / 100;
  state.settings.shakeAmount = Number(refs.shakeAmountRange.value) / 100;
  state.settings.effectSpeed = Number(refs.effectSpeedRange.value) / 100;
  state.settings.theme = refs.themeSelect.value;
  state.settings.font = refs.fontSelect.value;
  state.settings.paperStyle = refs.paperStyleSelect.value;
  state.settings.fontSize = Number(refs.fontSizeRange.value);
  state.settings.lineHeight = Number(refs.lineHeightRange.value);
  state.settings.editorWidth = Number(refs.editorWidthRange.value);
  state.settings.reduceMotion = refs.reduceMotion.checked;
  state.settings = migrateSettings(state.settings);
  applySettings();
  renderSettingsControls();
  saveStateNow();
  soundEngine.ensurePack(state.settings.soundPack);
}

function applySettings() {
  const settings = state.settings;
  const feel = FEEL_PRESETS[settings.typingFeel];
  const effect = EFFECT_PRESETS[settings.effectMode];
  const animation = settings.reduceMotion ? 0 : settings.typingAnimation;
  const feedback = settings.reduceMotion ? 0 : settings.feedbackStrength;
  const smooth = settings.reduceMotion ? 0 : settings.caretSmoothness;
  const effectLevel = settings.reduceMotion || !settings.effectEnabled ? 0 : settings.effectIntensity;
  const glow = settings.reduceMotion ? 0 : settings.glowAmount;
  const glyphMotion = settings.reduceMotion || !settings.effectEnabled ? 0 : settings.glyphMotion;
  const shake = settings.reduceMotion ? 0 : settings.shakeAmount;
  const speedScale = 1.18 - settings.effectSpeed * 0.46;
  const duration = Math.round(feel.duration * (0.42 + animation * 1.12));
  const size = feel.size * (0.72 + feedback * 0.72) * (0.86 + glyphMotion * 0.36);
  const opacity = feel.opacity * (0.46 + feedback * 1.08) * (0.72 + effectLevel * 0.48);
  const scale = feel.scale * (0.68 + animation * 0.56);
  const caretMs = Math.round(feel.caretSmooth * (0.22 + smooth * 1.16));

  document.body.dataset.theme = settings.theme;
  document.body.dataset.feel = settings.typingFeel;
  document.body.dataset.effect = settings.effectMode;
  document.body.dataset.paper = settings.paperStyle;
  document.body.classList.toggle("reduce-motion", settings.reduceMotion);
  document.body.style.setProperty("--editor-font", FONTS[settings.font].stack);
  document.body.style.setProperty("--editor-font-size", `${settings.fontSize}px`);
  document.body.style.setProperty("--editor-line-height", String(settings.lineHeight / 100));
  document.body.style.setProperty("--editor-line-step", `${settings.fontSize * (settings.lineHeight / 100)}px`);
  document.body.style.setProperty("--editor-width", `${settings.editorWidth}px`);
  document.body.style.setProperty("--feedback-duration", `${duration}ms`);
  document.body.style.setProperty("--feedback-size", `${size.toFixed(2)}px`);
  document.body.style.setProperty("--feedback-offset", `${(-size / 2).toFixed(2)}px`);
  document.body.style.setProperty("--feedback-wide-size", `${(size * 1.7).toFixed(2)}px`);
  document.body.style.setProperty("--feedback-opacity", opacity.toFixed(3));
  document.body.style.setProperty("--feedback-scale", scale.toFixed(2));
  document.body.style.setProperty("--caret-smooth-ms", `${caretMs}ms`);
  document.body.style.setProperty("--caret-active-opacity", Math.min(0.72, opacity * (1.25 + glow)).toFixed(3));
  document.body.style.setProperty("--effect-intensity", effectLevel.toFixed(3));
  document.body.style.setProperty("--glyph-motion", glyphMotion.toFixed(3));
  document.body.style.setProperty("--effect-particles", settings.particleAmount.toFixed(3));
  document.body.style.setProperty("--effect-glow", glow.toFixed(3));
  document.body.style.setProperty("--effect-glow-size", `${Math.round(8 + glow * 22)}px`);
  document.body.style.setProperty("--effect-shake", shake.toFixed(3));
  document.body.style.setProperty("--effect-speed-scale", speedScale.toFixed(3));
  document.body.style.setProperty("--effect-primary", effect.primary);
  document.body.style.setProperty("--effect-secondary", effect.secondary);
  document.body.style.setProperty("--effect-aura", effect.aura);
  document.body.style.setProperty("--mood-opacity", (effectLevel * glow * 0.18).toFixed(3));
  refs.feelDescription.textContent = feel.description;
  refs.effectDescription.textContent = effect.description;
  soundEngine.updateMaster();
}

function handleTypingKey(event) {
  const target = event.target;
  const isEditorTarget = target === refs.editor || refs.editor.contains(target);
  const isTitleTarget = target === refs.titleInput;
  if (!isEditorTarget && !isTitleTarget) return;
  if (event.ctrlKey || event.metaKey || event.altKey) return;

  const keyType = getKeyType(event);
  if (!keyType) return;

  triggerTypingTactile(keyType, isEditorTarget, event);
}

function handleBeforeInputFallback(event) {
  if (!isTypingTarget(event.target)) return;
  const compositionInput = event.isComposing || compositionActive || /Composition/i.test(event.inputType || "");
  if (!compositionInput) return;
  const now = performance.now();
  if (now - lastTactileAt < 90) return;
  triggerTypingTactile("normal", true, event);
}

function handleCompositionStart() {
  compositionActive = true;
}

function handleCompositionUpdate() {}

function handleCompositionEnd(event) {
  compositionActive = false;
  updateEditorContent();
  const composed = event && typeof event.data === "string" ? event.data.slice(-1) : "";
  if (composed && composed.trim()) triggerTypingVisualOnly(composed);
}

function triggerTypingVisualOnly(glyph) {
  // Fires the same caret-local burst + micro-vibration as a normal keystroke,
  // without a sound, so a completed Hangul syllable gets its tactile payoff
  // once composition settles (mid-composition jamo are never rendered as a
  // ghost glyph, since they are not the final character yet).
  const now = performance.now();
  lastTactileAt = now;
  updateTypingStreak(now, "normal");
  const tactile = {
    keyType: "normal",
    glyph,
    seed: Math.floor(now * 10) + Math.floor(Math.random() * 1000),
    streak: typingStreak,
    allowGlyph: true
  };
  requestAnimationFrame(() => cueTypingVisual(tactile));
}

function triggerTypingTactile(keyType, visualTargetIsEditor, event) {
  lastTactileAt = performance.now();
  soundEngine.play(keyType);
  updateTypingStreak(lastTactileAt, keyType);
  if (visualTargetIsEditor) {
    const allowGlyph = !compositionActive && !event?.isComposing && !/Composition/i.test(event?.inputType || "");
    const tactile = {
      keyType,
      glyph: getVisualGlyph(event, keyType),
      seed: Math.floor(lastTactileAt * 10) + Math.floor(Math.random() * 1000),
      streak: typingStreak,
      allowGlyph
    };
    requestAnimationFrame(() => cueTypingVisual(tactile));
  }
}

function updateTypingStreak(now, keyType) {
  // Lightweight combo tracking for the reward system: fast consecutive
  // keystrokes build a streak, which nudges special-moment bursts to show
  // up a little more often. No visible counter, no score UI.
  if (keyType === "backspace") {
    typingStreak = Math.max(0, typingStreak - 3);
  } else if (now - lastStreakAt < 550) {
    typingStreak += 1;
  } else {
    typingStreak = 1;
  }
  lastStreakAt = now;
}

function getVisualGlyph(event, keyType) {
  if (keyType !== "normal" || !event) return "";
  if (compositionActive || event.isComposing) return "";
  if (event.key === "Process" || event.key === "Unidentified") return "";
  if (event.key && event.key.length === 1 && event.key !== " ") return event.key;
  return "";
}

function getKeyType(event) {
  if (event.key === "Backspace" || event.key === "Delete") return "backspace";
  if (event.key === "Enter") return "enter";
  if (event.key === " " || event.code === "Space") return "space";
  if (event.key === "Tab" || event.key === "Escape") return "";
  if (event.isComposing && isCharacterCode(event.code)) return "normal";
  if ((event.key === "Process" || event.key === "Unidentified") && isCharacterCode(event.code)) return "normal";
  if (event.key && event.key.length === 1) return "normal";
  if (isCharacterCode(event.code)) return "normal";
  return "";
}

function isCharacterCode(code) {
  return /^(Key|Digit|Numpad|Intl|Bracket|Quote|Semicolon|Comma|Period|Slash|Backquote|Minus|Equal)/.test(code || "");
}

function isTypingTarget(target) {
  return target === refs.editor || refs.editor.contains(target) || target === refs.titleInput;
}

function cueTypingVisual(tactile = {}) {
  if (state.settings.reduceMotion) return;
  const effect = EFFECT_PRESETS[state.settings.effectMode] || EFFECT_PRESETS[defaultSettings.effectMode];
  refs.editor.classList.add("is-typing");
  document.body.classList.add("typing-live");
  window.clearTimeout(typingPulseTimer);
  window.clearTimeout(moodPulseTimer);
  typingPulseTimer = window.setTimeout(() => refs.editor.classList.remove("is-typing"), 140);
  moodPulseTimer = window.setTimeout(() => document.body.classList.remove("typing-live"), Math.min(360, effect.life * 0.48));
  updateCaretGlow();
  spawnTypingMark(tactile);
}

function updateCaretGlow() {
  const rect = caretRect();
  if (!rect) return;
  refs.caretGlow.style.left = `${rect.left}px`;
  refs.caretGlow.style.top = `${rect.top}px`;
  refs.caretGlow.style.height = `${Math.max(18, rect.height)}px`;
  refs.caretGlow.classList.add("active");
  window.clearTimeout(caretHideTimer);
  caretHideTimer = window.setTimeout(() => refs.caretGlow.classList.remove("active"), 230);
}

// =====================================================================
// Canvas FX layer: replaces the old "one particle shape recolored per
// preset" DOM system with a real particle engine, so each preset can have
// a genuinely different shape/motion language (stars, lightning forks,
// glitch shards, crisp pixels, prism shards, buoyant bubbles...) without
// flooding the DOM with elements. The character-level reaction (ghost
// glyph + vibration) stays DOM-based, since it needs to render real text.
// =====================================================================

const fx = { canvas: null, ctx: null, dpr: 1, particles: [], running: false, maxParticles: 320 };

function initFxCanvas() {
  fx.canvas = refs.fxCanvas;
  if (!fx.canvas) return;
  fx.ctx = fx.canvas.getContext("2d");
  resizeFxCanvas();
  window.addEventListener("resize", resizeFxCanvas);
  window.visualViewport?.addEventListener("resize", resizeFxCanvas);
  window.visualViewport?.addEventListener("scroll", resizeFxCanvas);
}

function resizeFxCanvas() {
  if (!fx.canvas) return;
  const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
  const viewportHeight = document.documentElement.clientHeight || window.innerHeight;
  fx.dpr = Math.min(window.devicePixelRatio || 1, 2);
  fx.canvas.width = Math.max(1, Math.round(viewportWidth * fx.dpr));
  fx.canvas.height = Math.max(1, Math.round(viewportHeight * fx.dpr));
  fx.canvas.style.width = `${viewportWidth}px`;
  fx.canvas.style.height = `${viewportHeight}px`;
}

function ensureFxLoop() {
  if (!fx.ctx || fx.running) return;
  fx.running = true;
  requestAnimationFrame(fxTick);
}

function fxTick(now) {
  if (!fx.ctx) {
    fx.running = false;
    return;
  }
  fx.ctx.setTransform(fx.dpr, 0, 0, fx.dpr, 0, 0);
  fx.ctx.clearRect(0, 0, fx.canvas.width / fx.dpr, fx.canvas.height / fx.dpr);
  let alive = 0;
  for (let i = fx.particles.length - 1; i >= 0; i -= 1) {
    const p = fx.particles[i];
    const t = (now - p.start) / p.life;
    if (t >= 1) {
      fx.particles.splice(i, 1);
      continue;
    }
    alive += 1;
    renderFxParticle(fx.ctx, p, Math.max(0, t));
  }
  if (alive > 0) {
    requestAnimationFrame(fxTick);
  } else {
    fx.running = false;
  }
}

const FX_ALPHA_CURVE = [
  [0, 0],
  [0.1, 1],
  [0.72, 0.82],
  [1, 0]
];
const FX_SIZE_CURVE = [
  [0, 0.25],
  [0.22, 1.15],
  [0.42, 0.9],
  [1, 0.42]
];

function sampleFxCurve(keyframes, t) {
  if (t <= keyframes[0][0]) return keyframes[0][1];
  for (let i = 1; i < keyframes.length; i += 1) {
    const [t1, v1] = keyframes[i];
    if (t <= t1) {
      const [t0, v0] = keyframes[i - 1];
      const local = t1 === t0 ? 0 : (t - t0) / (t1 - t0);
      return v0 + (v1 - v0) * local;
    }
  }
  return keyframes[keyframes.length - 1][1];
}

function addFxParticle(p) {
  if (fx.particles.length >= fx.maxParticles) fx.particles.splice(0, fx.particles.length - fx.maxParticles + 1);
  fx.particles.push(p);
}

function renderFxParticle(ctx, p, t) {
  const alpha = clamp01(sampleFxCurve(p.alphaKeyframes || FX_ALPHA_CURVE, t)) * p.peakAlpha;
  if (alpha <= 0.005) return;
  if (p.shape === "line") {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.lineCap = "round";
    if (p.glow) {
      ctx.shadowBlur = p.glow;
      ctx.shadowColor = p.colorB || p.colorA;
    }
    ctx.strokeStyle = p.colorA;
    ctx.lineWidth = p.size;
    ctx.beginPath();
    ctx.moveTo(p.x1, p.y1);
    ctx.lineTo(p.x2, p.y2);
    ctx.stroke();
    ctx.restore();
    return;
  }
  const elapsedSec = (t * p.life) / 1000;
  const px = p.x + p.vx * elapsedSec + 0.5 * (p.ax || 0) * elapsedSec * elapsedSec;
  const py = p.y + p.vy * elapsedSec + 0.5 * (p.ay || 0) * elapsedSec * elapsedSec;
  const sizeScale = sampleFxCurve(p.sizeKeyframes || FX_SIZE_CURVE, t);
  const size = Math.max(0.3, p.size * sizeScale);
  const rotation = (p.rotation || 0) + (p.rotSpeed || 0) * elapsedSec;
  ctx.save();
  ctx.translate(px, py);
  if (rotation) ctx.rotate((rotation * Math.PI) / 180);
  ctx.globalAlpha = alpha;
  if (p.glow) {
    ctx.shadowBlur = p.glow;
    ctx.shadowColor = p.colorB || p.colorA;
  }
  drawFxShape(ctx, p, size);
  ctx.restore();
}

function drawStarPath(ctx, outerR, innerR, points) {
  ctx.beginPath();
  for (let i = 0; i < points * 2; i += 1) {
    const r = i % 2 === 0 ? outerR : innerR;
    const angle = (Math.PI / points) * i - Math.PI / 2;
    const px = Math.cos(angle) * r;
    const py = Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

function fillFxRadial(ctx, s, colorA, colorB, hotCenter) {
  const g = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(s / 2, 0.5));
  g.addColorStop(0, hotCenter || "#ffffff");
  g.addColorStop(0.4, colorA);
  g.addColorStop(1, colorB || colorA);
  ctx.fillStyle = g;
  ctx.fill();
}

function hexToRgba(hex, alpha) {
  const clean = String(hex).replace("#", "");
  const full = clean.length === 3 ? clean.split("").map((c) => c + c).join("") : clean;
  const num = Number.parseInt(full, 16) || 0;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function drawFxShape(ctx, p, s) {
  switch (p.shape) {
    case "star8":
      drawStarPath(ctx, s / 2, s * 0.42, 8);
      fillFxRadial(ctx, s, p.colorA, p.colorB);
      break;
    case "star4":
      drawStarPath(ctx, s / 2, s * 0.18, 4);
      fillFxRadial(ctx, s, p.colorA, p.colorB);
      break;
    case "diamond":
      ctx.beginPath();
      ctx.moveTo(0, -s / 2);
      ctx.lineTo(s / 2, 0);
      ctx.lineTo(0, s / 2);
      ctx.lineTo(-s / 2, 0);
      ctx.closePath();
      ctx.fillStyle = p.colorA;
      ctx.fill();
      break;
    case "dot":
      ctx.beginPath();
      ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
      fillFxRadial(ctx, s, p.colorA, "transparent", p.colorA);
      break;
    case "square":
      ctx.shadowBlur = 0;
      ctx.fillStyle = p.colorA;
      ctx.fillRect(-s / 2, -s / 2, s, s);
      if (p.extra && p.extra.trail) {
        ctx.globalAlpha *= 0.32;
        ctx.fillRect(-s / 2 - p.extra.trail[0], -s / 2 - p.extra.trail[1], s, s);
        ctx.globalAlpha *= 0.55;
        ctx.fillRect(-s / 2 - p.extra.trail[0] * 2, -s / 2 - p.extra.trail[1] * 2, s, s);
      }
      break;
    case "shard": {
      ctx.beginPath();
      ctx.moveTo(-s / 2, -s * 0.1);
      ctx.lineTo(s / 2, 0);
      ctx.lineTo(-s / 2, s * 0.1);
      ctx.closePath();
      const grad = ctx.createLinearGradient(-s / 2, 0, s / 2, 0);
      grad.addColorStop(0, "transparent");
      grad.addColorStop(0.55, p.colorA);
      grad.addColorStop(1, p.colorB || p.colorA);
      ctx.fillStyle = grad;
      ctx.fill();
      if (p.extra && p.extra.specular) {
        ctx.strokeStyle = "rgba(255,255,255,0.85)";
        ctx.lineWidth = Math.max(0.5, s * 0.05);
        ctx.beginPath();
        ctx.moveTo(-s * 0.3, -s * 0.02);
        ctx.lineTo(s * 0.35, 0);
        ctx.stroke();
      }
      break;
    }
    case "bolt": {
      const pts = p.extra.points || [];
      if (pts.length < 2) break;
      const thin = Boolean(p.extra.thin);
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      const tracePath = () => {
        ctx.beginPath();
        pts.forEach(([bx, by], i) => {
          if (i === 0) ctx.moveTo(bx * s, by * s);
          else ctx.lineTo(bx * s, by * s);
        });
      };
      const baseGlow = p.glow || 0;
      // outer soft glow pass -- wide, blurred, translucent
      ctx.save();
      ctx.shadowBlur = baseGlow * 1.7;
      ctx.shadowColor = p.colorA;
      ctx.strokeStyle = hexToRgba(p.colorA, 0.5);
      ctx.lineWidth = Math.max(2, s * (thin ? 0.22 : 0.32));
      tracePath();
      ctx.stroke();
      ctx.restore();
      // mid saturated core -- the bolt's real color
      ctx.shadowBlur = baseGlow * 0.65;
      ctx.shadowColor = p.colorB || p.colorA;
      ctx.strokeStyle = p.colorB || p.colorA;
      ctx.lineWidth = Math.max(1, s * (thin ? 0.1 : 0.15));
      tracePath();
      ctx.stroke();
      // inner hot-white core -- crisp, unblurred, reads as the actual spark
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "#fffef6";
      ctx.lineWidth = Math.max(0.4, s * (thin ? 0.035 : 0.05));
      tracePath();
      ctx.stroke();
      break;
    }
    case "bubble":
      ctx.beginPath();
      ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
      ctx.fillStyle = hexToRgba(p.colorA, 0.24);
      ctx.fill();
      ctx.lineWidth = Math.max(0.6, s * 0.055);
      ctx.strokeStyle = hexToRgba(p.colorB || p.colorA, 0.8);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(-s * 0.16, -s * 0.18, s * 0.11, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.85)";
      ctx.fill();
      break;
    case "ring":
      ctx.beginPath();
      ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
      ctx.lineWidth = Math.max(0.8, s * 0.045);
      ctx.strokeStyle = p.colorA;
      ctx.stroke();
      break;
    case "fiber":
      ctx.strokeStyle = p.colorA;
      ctx.lineWidth = Math.max(0.6, s * 0.16);
      ctx.beginPath();
      ctx.moveTo(-s / 2, 0);
      ctx.lineTo(s / 2, 0);
      ctx.stroke();
      break;
    case "pearl": {
      ctx.beginPath();
      ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
      const pg = ctx.createRadialGradient(-s * 0.15, -s * 0.15, 0, 0, 0, Math.max(s / 2, 0.5));
      pg.addColorStop(0, "#ffffff");
      pg.addColorStop(0.5, p.colorA);
      pg.addColorStop(1, p.colorB || p.colorA);
      ctx.fillStyle = pg;
      ctx.fill();
      break;
    }
    default:
      ctx.beginPath();
      ctx.arc(0, 0, s / 2, 0, Math.PI * 2);
      ctx.fillStyle = p.colorA;
      ctx.fill();
  }
}

// ---- per-preset burst builders -------------------------------------
// ctxOpts: { x, y, settings, isSpecial, keyType, effectLevel, speedScale,
//            scale (key-type particle multiplier) }

function fxRand(min, max) {
  return min + Math.random() * (max - min);
}

function fxCount(base, opts) {
  const n = Math.round(base * (0.45 + opts.settings.particleAmount * 1.15) * opts.scale * (opts.isSpecial ? 1.5 : 1));
  return clamp(n, 0, 22);
}

function fxGlow(opts, base) {
  return base * (0.4 + opts.settings.glowAmount * 1.3) * (0.7 + opts.effectLevel * 0.5);
}

function midpointDisplaceBolt(p0, p1, depth, roughness, out) {
  if (depth <= 0) {
    out.push(p1);
    return;
  }
  const dx = p1[0] - p0[0];
  const dy = p1[1] - p0[1];
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  const disp = (Math.random() * 2 - 1) * roughness * len;
  const mx = (p0[0] + p1[0]) / 2 + nx * disp;
  const my = (p0[1] + p1[1]) / 2 + ny * disp;
  const mid = [mx, my];
  midpointDisplaceBolt(p0, mid, depth - 1, roughness * 0.62, out);
  midpointDisplaceBolt(mid, p1, depth - 1, roughness * 0.62, out);
}

// Generates a jagged fractal lightning bolt as normalized points (roughly -1..1),
// scaled to pixels at render time by the particle's `size`. A proper recursive
// midpoint-displacement produces authentic angular zig-zag instead of a soft
// wandering scribble.
function generateBoltPoints(angle, length, depth, roughness) {
  const start = [0, 0];
  const end = [Math.cos(angle) * length, Math.sin(angle) * length];
  const out = [start];
  midpointDisplaceBolt(start, end, depth, roughness, out);
  return out;
}

function buildStarDustBurst(opts) {
  const { x, y, isSpecial, speedScale } = opts;
  // IMPACT: one crisp bright star, flashing tiny -> bright -> settle.
  addFxParticle({
    start: performance.now(),
    life: (isSpecial ? 640 : 520) * speedScale,
    x,
    y,
    vx: 0,
    vy: -6,
    size: fxRand(isSpecial ? 24 : 16, isSpecial ? 32 : 21),
    rotation: fxRand(-20, 20),
    rotSpeed: fxRand(-40, 40),
    shape: "star8",
    colorA: "#ffe9b8",
    colorB: "#b79bf0",
    glow: fxGlow(opts, 10),
    peakAlpha: 0.95,
    sizeKeyframes: [
      [0, 0.12],
      [0.16, 1.25],
      [0.3, 0.95],
      [1, 0.55]
    ]
  });
  // BURST: organic mixed-shape scatter, biased upward/diagonal.
  const count = clamp(fxCount(10, opts), 8, 16);
  const shapes = ["star4", "star8", "dot", "diamond"];
  for (let i = 0; i < count; i += 1) {
    const isTrail = i < Math.min(4, Math.round(count * 0.35));
    const biasAngle = fxRand(-160, -20) * (Math.PI / 180);
    const angle = Math.random() < 0.72 ? biasAngle + fxRand(-0.5, 0.5) : Math.random() * Math.PI * 2;
    const speed = fxRand(28, 90);
    const big = Math.random() < 0.12;
    addFxParticle({
      start: performance.now(),
      life: (isTrail ? fxRand(420, 700) : fxRand(260, 420)) * speedScale,
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (isTrail ? 18 : 4),
      ax: 0,
      ay: isTrail ? -14 : 4,
      size: big ? fxRand(9, 13) : fxRand(2.4, 6),
      rotation: fxRand(0, 360),
      rotSpeed: fxRand(-90, 90),
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      colorA: Math.random() < 0.5 ? "#fff3d6" : "#e7d9ff",
      colorB: Math.random() < 0.5 ? "#ffcf7a" : "#9f86d8",
      glow: fxGlow(opts, big ? 6 : 3),
      peakAlpha: fxRand(0.7, 1)
    });
  }
}

function buildCyberPinkBurst(opts) {
  const { x, y, isSpecial, speedScale } = opts;
  addFxParticle({
    start: performance.now(),
    life: 160 * speedScale,
    x,
    y,
    vx: 0,
    vy: 0,
    size: fxRand(14, 20),
    rotation: 0,
    shape: "diamond",
    colorA: "#ffe9fb",
    peakAlpha: 0.85,
    glow: fxGlow(opts, 9),
    sizeKeyframes: [
      [0, 0.3],
      [0.3, 1.1],
      [1, 0]
    ],
    alphaKeyframes: [
      [0, 0.9],
      [0.35, 0.6],
      [1, 0]
    ]
  });
  const count = clamp(fxCount(7, opts), 5, 12);
  for (let i = 0; i < count; i += 1) {
    const isSquare = Math.random() < 0.4;
    const angle = fxRand(0, Math.PI * 2);
    const speed = fxRand(60, 150);
    addFxParticle({
      start: performance.now(),
      life: fxRand(180, 320) * speedScale,
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed * 0.5,
      ax: -Math.cos(angle) * speed * 0.9,
      ay: 8,
      size: isSquare ? fxRand(2.5, 4.5) : fxRand(9, 16),
      rotation: fxRand(0, 360),
      rotSpeed: fxRand(-260, 260),
      shape: isSquare ? "square" : "shard",
      colorA: Math.random() < 0.5 ? "#ff62c7" : "#6fe8ff",
      colorB: Math.random() < 0.5 ? "#ff9fe0" : "#b6f6ff",
      glow: fxGlow(opts, 5),
      peakAlpha: fxRand(0.75, 1),
      sizeKeyframes: [
        [0, 1],
        [0.7, 1],
        [1, 0]
      ]
    });
  }
  if (isSpecial) {
    addFxParticle({
      start: performance.now(),
      life: 140 * speedScale,
      x,
      y,
      vx: 0,
      vy: 0,
      size: fxRand(30, 46),
      rotation: fxRand(-6, 6),
      shape: "shard",
      colorA: "#eafcff",
      colorB: "#6fe8ff",
      glow: fxGlow(opts, 8),
      peakAlpha: 0.8,
      extra: { specular: true },
      sizeKeyframes: [
        [0, 0.4],
        [0.25, 1],
        [1, 1]
      ]
    });
  }
}

function buildElectricBurst(opts) {
  const { x, y, isSpecial, speedScale } = opts;

  // IMPACT: an instant hot-white flash, then a violet afterglow halo a beat
  // behind it, giving the strike a sense of depth instead of one flat dot.
  addFxParticle({
    start: performance.now(),
    life: 95 * speedScale,
    x,
    y,
    vx: 0,
    vy: 0,
    size: fxRand(20, 26) * (isSpecial ? 1.3 : 1),
    shape: "dot",
    colorA: "#ffffff",
    peakAlpha: 1,
    glow: fxGlow(opts, 16),
    sizeKeyframes: [
      [0, 0.1],
      [0.12, 1.4],
      [0.4, 0.55],
      [1, 0]
    ],
    alphaKeyframes: [
      [0, 1],
      [0.3, 0.82],
      [1, 0]
    ]
  });
  addFxParticle({
    start: performance.now(),
    life: 175 * speedScale,
    x,
    y,
    vx: 0,
    vy: 0,
    size: fxRand(32, 42),
    shape: "dot",
    colorA: "#c9b3ff",
    peakAlpha: 0.5,
    glow: fxGlow(opts, 10),
    sizeKeyframes: [
      [0, 0.28],
      [0.25, 1.08],
      [1, 0.22]
    ],
    alphaKeyframes: [
      [0, 0.7],
      [0.5, 0.3],
      [1, 0]
    ]
  });

  // MAIN BOLTS: proper fractal midpoint-displacement geometry (sharp,
  // angular zig-zag) instead of a soft cumulative random walk, rendered as
  // a layered glow -> saturated core -> hot-white pass for a premium look.
  const boltCount = clamp(1 + (isSpecial ? 1 : 0), 1, 2);
  for (let b = 0; b < boltCount; b += 1) {
    const angle = fxRand(0, Math.PI * 2);
    const length = fxRand(0.85, 1.2);
    const points = generateBoltPoints(angle, length, 3, 0.6);
    addFxParticle({
      start: performance.now(),
      life: fxRand(115, 175) * speedScale,
      x,
      y,
      vx: 0,
      vy: 0,
      size: fxRand(27, 37),
      shape: "bolt",
      colorA: "#906fff",
      colorB: "#ffe45f",
      glow: fxGlow(opts, 11),
      peakAlpha: 1,
      extra: { points },
      sizeKeyframes: [
        [0, 0.5],
        [0.12, 1],
        [0.6, 0.94],
        [1, 0]
      ],
      // sharp rise, a real mid-life flicker dip, then a hard cut -- reads
      // as an electrical discharge rather than a smooth particle fade.
      alphaKeyframes: [
        [0, 1],
        [0.32, 0.8],
        [0.48, 1],
        [0.68, 0.42],
        [0.78, 0.9],
        [1, 0]
      ]
    });

    // one thinner branch fork off a mid-point of the main bolt
    if (Math.random() < 0.88) {
      const idx = 1 + Math.floor(Math.random() * Math.max(1, points.length - 2));
      const originPt = points[idx];
      const branchAngle = angle + (Math.random() < 0.5 ? 1 : -1) * fxRand(0.5, 1.15);
      const branchPts = generateBoltPoints(branchAngle, length * fxRand(0.35, 0.58), 2, 0.55).map(
        ([bx, by]) => [bx + originPt[0], by + originPt[1]]
      );
      addFxParticle({
        start: performance.now(),
        life: fxRand(85, 135) * speedScale,
        x,
        y,
        vx: 0,
        vy: 0,
        size: fxRand(19, 27),
        shape: "bolt",
        colorA: "#906fff",
        colorB: "#ffe45f",
        glow: fxGlow(opts, 7),
        peakAlpha: 0.82,
        extra: { points: branchPts, thin: true },
        sizeKeyframes: [
          [0, 0.6],
          [0.2, 1],
          [1, 0]
        ],
        alphaKeyframes: [
          [0, 0.9],
          [0.5, 0.36],
          [1, 0]
        ]
      });
    }
  }

  const sparks = clamp(fxCount(6, opts), 4, 10);
  for (let i = 0; i < sparks; i += 1) {
    const angle = fxRand(0, Math.PI * 2);
    const speed = fxRand(60, 150);
    addFxParticle({
      start: performance.now(),
      life: fxRand(220, 380) * speedScale,
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      ax: -Math.cos(angle) * speed * 1.5,
      ay: -Math.sin(angle) * speed * 1.5,
      size: fxRand(1.6, 4),
      shape: "dot",
      colorA: Math.random() < 0.5 ? "#ffe45f" : "#c9b3ff",
      glow: fxGlow(opts, 4),
      peakAlpha: fxRand(0.75, 1)
    });
  }
}

function buildCandyPopBurst(opts) {
  const { x, y, speedScale } = opts;
  addFxParticle({
    start: performance.now(),
    life: 320 * speedScale,
    x,
    y,
    vx: 0,
    vy: 0,
    size: fxRand(16, 22),
    shape: "bubble",
    colorA: "#f39ab8",
    colorB: "#ffcf70",
    glow: fxGlow(opts, 5),
    peakAlpha: 0.9,
    sizeKeyframes: [
      [0, 0.2],
      [0.22, 1.2],
      [0.4, 0.9],
      [1, 0.5]
    ]
  });
  const count = clamp(fxCount(8, opts), 6, 13);
  const palette = ["#f8b7ce", "#ffcf70", "#c9f0d8", "#c9e0ff", "#ffe0c2"];
  for (let i = 0; i < count; i += 1) {
    const angle = fxRand(0, Math.PI * 2);
    const speed = fxRand(40, 110);
    addFxParticle({
      start: performance.now(),
      life: fxRand(340, 560) * speedScale,
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 10,
      ax: 0,
      ay: 90,
      size: fxRand(3.5, 8),
      rotation: fxRand(0, 360),
      rotSpeed: fxRand(-120, 120),
      shape: Math.random() < 0.3 ? "bubble" : "dot",
      colorA: palette[Math.floor(Math.random() * palette.length)],
      glow: fxGlow(opts, 3),
      peakAlpha: fxRand(0.75, 1),
      sizeKeyframes: [
        [0, 0.3],
        [0.35, 1.25],
        [0.55, 1],
        [1, 0.4]
      ]
    });
  }
}

function buildPixelBurst(opts) {
  const { x, y, speedScale } = opts;
  const count = clamp(fxCount(9, opts), 6, 12);
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [0.7, 0.7],
    [-0.7, 0.7],
    [0.7, -0.7],
    [-0.7, -0.7]
  ];
  for (let i = 0; i < count; i += 1) {
    const [dx, dy] = dirs[i % dirs.length];
    const speed = fxRand(90, 190);
    addFxParticle({
      start: performance.now(),
      life: fxRand(150, 240) * speedScale,
      x,
      y,
      vx: dx * speed,
      vy: dy * speed,
      size: fxRand(3, 6),
      rotation: 0,
      shape: "square",
      colorA: Math.random() < 0.5 ? "#5fb7ff" : "#ff84cf",
      glow: 0,
      peakAlpha: 1,
      extra: { trail: [dx * 2.2, dy * 2.2] },
      sizeKeyframes: [
        [0, 1],
        [0.78, 1],
        [1, 0]
      ],
      alphaKeyframes: [
        [0, 1],
        [0.78, 1],
        [1, 0]
      ]
    });
  }
}

function buildCrystalBurst(opts) {
  const { x, y, isSpecial, speedScale } = opts;
  addFxParticle({
    start: performance.now(),
    life: 220 * speedScale,
    x,
    y,
    vx: 0,
    vy: 0,
    size: fxRand(14, 18),
    shape: "diamond",
    colorA: "#ffffff",
    peakAlpha: 0.9,
    glow: fxGlow(opts, 8),
    sizeKeyframes: [
      [0, 0.2],
      [0.2, 1.2],
      [1, 0]
    ]
  });
  const count = clamp(fxCount(7, opts), 5, 11);
  for (let i = 0; i < count; i += 1) {
    const angle = fxRand(0, Math.PI * 2);
    const speed = fxRand(45, 110);
    addFxParticle({
      start: performance.now(),
      life: fxRand(260, 420) * speedScale,
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      ax: -Math.cos(angle) * speed * 0.7,
      ay: -Math.sin(angle) * speed * 0.7,
      size: fxRand(6, 13),
      rotation: (angle * 180) / Math.PI,
      rotSpeed: fxRand(-40, 40),
      shape: "shard",
      colorA: "#95d9ff",
      colorB: "#f0d7ff",
      glow: fxGlow(opts, 4),
      peakAlpha: fxRand(0.75, 1),
      extra: { specular: true }
    });
  }
  if (isSpecial) {
    addFxParticle({
      start: performance.now(),
      life: 260 * speedScale,
      x,
      y,
      vx: 0,
      vy: 0,
      size: fxRand(50, 74),
      rotation: fxRand(0, 360),
      shape: "shard",
      colorA: "#ffffff",
      colorB: "#c8e8ff",
      glow: fxGlow(opts, 6),
      peakAlpha: 0.6,
      extra: { specular: true },
      sizeKeyframes: [
        [0, 0.4],
        [0.3, 1],
        [1, 1]
      ]
    });
  }
}

function buildConstellationBurst(opts) {
  const { x, y, isSpecial, speedScale } = opts;
  const count = clamp(fxCount(8, opts), 6, 11);
  const points = [];
  const now = performance.now();

  // A single bright anchor star right at the impact point, larger and
  // sharper than the rest, so the little star map reads as centered on
  // the character rather than a diffuse scatter.
  addFxParticle({
    start: now,
    life: fxRand(620, 820) * speedScale,
    x,
    y,
    vx: 0,
    vy: -5,
    size: fxRand(isSpecial ? 8.5 : 6.5, isSpecial ? 11 : 8.5),
    shape: "star4",
    colorA: "#eef1ff",
    colorB: "#fff3ab",
    glow: fxGlow(opts, 8),
    peakAlpha: 1,
    sizeKeyframes: [
      [0, 0.15],
      [0.16, 1.2],
      [0.5, 0.85],
      [1, 0.4]
    ],
    // twinkle: bright entrance, settle, then a distinct delayed second
    // flicker partway through life before fading -- a real twinkle
    // rather than a single fade.
    alphaKeyframes: [
      [0, 0],
      [0.1, 1],
      [0.32, 0.55],
      [0.5, 0.95],
      [0.62, 0.5],
      [1, 0]
    ]
  });

  for (let i = 0; i < count; i += 1) {
    const angle = fxRand(0, Math.PI * 2);
    const distance = fxRand(16, 56);
    const px = x + Math.cos(angle) * distance;
    const py = y + Math.sin(angle) * distance;
    const life = fxRand(560, 900) * speedScale;
    const twinkleAt = fxRand(0.45, 0.7);
    points.push({ x: px, y: py, life });
    addFxParticle({
      start: now,
      life,
      x: px,
      y: py,
      vx: 0,
      vy: -6,
      size: fxRand(3.5, 7),
      shape: "star4",
      colorA: "#dfe3ff",
      colorB: "#fff0a4",
      glow: fxGlow(opts, 6),
      peakAlpha: fxRand(0.75, 1),
      sizeKeyframes: [
        [0, 0.2],
        [0.18, 1.1],
        [1, 0.5]
      ],
      // each star has its own delayed twinkle beat so the whole map
      // shimmers in a staggered, alive way instead of fading in unison.
      alphaKeyframes: [
        [0, 0],
        [0.14, 1],
        [Math.max(0.16, twinkleAt - 0.16), 0.4],
        [twinkleAt, 0.9],
        [Math.min(0.94, twinkleAt + 0.18), 0.35],
        [1, 0]
      ]
    });
  }

  // more, brighter connecting lines so the constellation shape reads
  // clearly instead of a faint scatter.
  const links = Math.min(6, Math.max(3, count - 3));
  const usedPairs = new Set();
  for (let i = 0; i < links; i += 1) {
    const a = points[Math.floor(Math.random() * points.length)];
    const b = points[Math.floor(Math.random() * points.length)];
    if (!a || !b || a === b) continue;
    const pairKey = a.x + "," + a.y + "-" + b.x + "," + b.y;
    if (usedPairs.has(pairKey)) continue;
    usedPairs.add(pairKey);
    addFxParticle({
      start: now,
      life: Math.min(a.life, b.life) * 0.92,
      shape: "line",
      x1: a.x,
      y1: a.y,
      x2: b.x,
      y2: b.y,
      size: 1.1,
      colorA: "rgba(226, 228, 255, 0.68)",
      glow: fxGlow(opts, 3),
      peakAlpha: 0.68,
      alphaKeyframes: [
        [0, 0],
        [0.22, 1],
        [0.78, 0.55],
        [1, 0]
      ]
    });
  }
}

function buildBubbleBurst(opts) {
  const { x, y, speedScale } = opts;
  addFxParticle({
    start: performance.now(),
    life: 300 * speedScale,
    x,
    y,
    vx: 0,
    vy: 0,
    size: fxRand(18, 26),
    shape: "ring",
    colorA: "#7ec7c1",
    peakAlpha: 0.6,
    sizeKeyframes: [
      [0, 0.2],
      [1, 1.6]
    ],
    alphaKeyframes: [
      [0, 0.7],
      [1, 0]
    ]
  });
  const count = clamp(fxCount(6, opts), 4, 10);
  for (let i = 0; i < count; i += 1) {
    const angle = fxRand(-Math.PI, 0);
    const speed = fxRand(20, 55);
    addFxParticle({
      start: performance.now(),
      life: fxRand(420, 680) * speedScale,
      x,
      y,
      vx: Math.cos(angle) * speed * 0.6,
      vy: -Math.abs(Math.sin(angle) * speed) - 16,
      ax: 0,
      ay: -6,
      size: fxRand(6, 14),
      shape: "bubble",
      colorA: Math.random() < 0.5 ? "#7ec7c1" : "#f8b7ce",
      glow: fxGlow(opts, 2),
      peakAlpha: fxRand(0.6, 0.9)
    });
  }
}

function buildInkBurst(opts) {
  const { x, y, speedScale } = opts;
  addFxParticle({
    start: performance.now(),
    life: 480 * speedScale,
    x,
    y,
    vx: 0,
    vy: 4,
    size: fxRand(10, 15),
    shape: "dot",
    colorA: "#7e6650",
    peakAlpha: 0.5,
    sizeKeyframes: [
      [0, 0.3],
      [0.3, 1.3],
      [1, 1.7]
    ],
    alphaKeyframes: [
      [0, 0.5],
      [0.4, 0.35],
      [1, 0]
    ]
  });
  const count = clamp(fxCount(4, opts), 2, 7);
  for (let i = 0; i < count; i += 1) {
    const angle = fxRand(0, Math.PI * 2);
    const speed = fxRand(15, 40);
    addFxParticle({
      start: performance.now(),
      life: fxRand(300, 480) * speedScale,
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed + 6,
      size: fxRand(1.6, 3.4),
      shape: "dot",
      colorA: "#7e6650",
      peakAlpha: fxRand(0.4, 0.7)
    });
  }
}

function buildPaperFiberBurst(opts) {
  const { x, y, speedScale } = opts;
  const count = clamp(fxCount(5, opts), 3, 8);
  for (let i = 0; i < count; i += 1) {
    const angle = fxRand(0, Math.PI * 2);
    const speed = fxRand(20, 55);
    addFxParticle({
      start: performance.now(),
      life: fxRand(340, 540) * speedScale,
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 8,
      ax: 0,
      ay: 20,
      size: fxRand(5, 11),
      rotation: fxRand(0, 360),
      rotSpeed: fxRand(-70, 70),
      shape: "fiber",
      colorA: "#a98b68",
      peakAlpha: fxRand(0.4, 0.7)
    });
  }
}

function buildMoonPearlBurst(opts) {
  const { x, y, isSpecial, speedScale } = opts;
  addFxParticle({
    start: performance.now(),
    life: 420 * speedScale,
    x,
    y,
    vx: 0,
    vy: -4,
    size: fxRand(isSpecial ? 20 : 14, isSpecial ? 26 : 18),
    shape: "pearl",
    colorA: "#b8bddf",
    colorB: "#fff7ce",
    glow: fxGlow(opts, 6),
    peakAlpha: 0.85,
    sizeKeyframes: [
      [0, 0.25],
      [0.25, 1.2],
      [1, 0.6]
    ]
  });
  const count = clamp(fxCount(6, opts), 4, 9);
  for (let i = 0; i < count; i += 1) {
    const angle = fxRand(0, Math.PI * 2);
    const speed = fxRand(20, 55);
    addFxParticle({
      start: performance.now(),
      life: fxRand(400, 640) * speedScale,
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 12,
      ax: 0,
      ay: -8,
      size: fxRand(3, 7),
      shape: "pearl",
      colorA: "#dfe3f7",
      colorB: "#fff7ce",
      glow: fxGlow(opts, 3),
      peakAlpha: fxRand(0.6, 0.9)
    });
  }
}

function buildSoftSparkBurst(opts) {
  const { x, y, speedScale } = opts;
  addFxParticle({
    start: performance.now(),
    life: 340 * speedScale,
    x,
    y,
    vx: 0,
    vy: -4,
    size: fxRand(12, 17),
    shape: "star8",
    colorA: "#ffe6c8",
    colorB: "#d98f71",
    glow: fxGlow(opts, 5),
    peakAlpha: 0.85,
    sizeKeyframes: [
      [0, 0.2],
      [0.22, 1.15],
      [1, 0.5]
    ]
  });
  const count = clamp(fxCount(6, opts), 4, 9);
  for (let i = 0; i < count; i += 1) {
    const angle = fxRand(0, Math.PI * 2);
    const speed = fxRand(20, 55);
    addFxParticle({
      start: performance.now(),
      life: fxRand(280, 460) * speedScale,
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 10,
      ax: 0,
      ay: -4,
      size: fxRand(2.4, 5.5),
      shape: "dot",
      colorA: "#ffd8ad",
      glow: fxGlow(opts, 2.5),
      peakAlpha: fxRand(0.6, 0.9)
    });
  }
}

const BURST_BUILDERS = {
  "soft-spark": buildSoftSparkBurst,
  "cyber-pink": buildCyberPinkBurst,
  "candy-pop": buildCandyPopBurst,
  electric: buildElectricBurst,
  "star-dust": buildStarDustBurst,
  ink: buildInkBurst,
  bubble: buildBubbleBurst,
  pixel: buildPixelBurst,
  "crystal-glass": buildCrystalBurst,
  constellation: buildConstellationBurst,
  "paper-fiber": buildPaperFiberBurst,
  "moon-pearl": buildMoonPearlBurst
};

function spawnEffectBurst(mode, opts) {
  if (!fx.ctx) return;
  const builder = BURST_BUILDERS[mode] || buildSoftSparkBurst;
  builder(opts);
  ensureFxLoop();
}

function getGlyphProfile(mode) {
  return GLYPH_EFFECT_PROFILES[mode] || GLYPH_EFFECT_PROFILES[defaultSettings.effectMode];
}

function resolveGlyphTargets() {
  const selection = window.getSelection();
  if (!selection || !selection.rangeCount) return { current: null, previous: null };
  const caretRange = selection.getRangeAt(0).cloneRange();
  if (!caretRange.collapsed || !refs.editor.contains(caretRange.startContainer)) {
    return { current: null, previous: null };
  }

  const textStream = collectTextBeforeCaret(caretRange);
  const segments = segmentGraphemes(textStream.text);
  const currentIndex = segments.length - 1;
  const currentSegment = segments[currentIndex];
  if (!currentSegment || !isRenderableGlyph(currentSegment.text)) {
    return { current: null, previous: null };
  }

  const current = glyphTargetFromSegment(currentSegment, textStream.spans);
  const previousSegment = segments[currentIndex - 1];
  const previous = previousSegment && isRenderableGlyph(previousSegment.text)
    ? glyphTargetFromSegment(previousSegment, textStream.spans)
    : null;
  return { current, previous };
}

function collectTextBeforeCaret(caretRange) {
  const spans = [];
  let text = "";
  const walker = document.createTreeWalker(refs.editor, NodeFilter.SHOW_TEXT);
  let node = walker.nextNode();

  while (node) {
    let length = 0;
    if (node === caretRange.startContainer) {
      length = clamp(caretRange.startOffset, 0, node.nodeValue.length);
    } else if (textNodeEndsBeforeRange(node, caretRange)) {
      length = node.nodeValue.length;
    }

    if (length > 0) {
      const start = text.length;
      const chunk = node.nodeValue.slice(0, length);
      text += chunk;
      spans.push({ node, start, end: text.length });
    }

    node = walker.nextNode();
  }

  return { text, spans };
}

function textNodeEndsBeforeRange(node, range) {
  const probe = document.createRange();
  probe.selectNodeContents(node);
  return probe.compareBoundaryPoints(Range.END_TO_START, range) <= 0;
}

function segmentGraphemes(text) {
  if (!text) return [];
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    if (!graphemeSegmenter) {
      graphemeSegmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    }
    return [...graphemeSegmenter.segment(text)].map((part) => ({
      text: part.segment,
      start: part.index,
      end: part.index + part.segment.length
    }));
  }

  const segments = [];
  let index = 0;
  Array.from(text).forEach((char) => {
    segments.push({ text: char, start: index, end: index + char.length });
    index += char.length;
  });
  return segments;
}

function glyphTargetFromSegment(segment, spans) {
  const range = rangeForTextSlice(spans, segment.start, segment.end);
  const rect = range ? rectFromRange(range) : null;
  if (!rect) return null;
  return {
    glyph: segment.text,
    rect,
    style: computedStyleForRange(range)
  };
}

function rangeForTextSlice(spans, start, end) {
  const startPoint = pointForTextOffset(spans, start, "start");
  const endPoint = pointForTextOffset(spans, end, "end");
  if (!startPoint || !endPoint) return null;
  const range = document.createRange();
  range.setStart(startPoint.node, startPoint.offset);
  range.setEnd(endPoint.node, endPoint.offset);
  return range;
}

function pointForTextOffset(spans, offset, edge) {
  for (const span of spans) {
    const inSpan = edge === "start"
      ? offset >= span.start && offset < span.end
      : offset > span.start && offset <= span.end;
    if (inSpan) {
      return { node: span.node, offset: offset - span.start };
    }
  }
  return null;
}

function rectFromRange(range) {
  const rects = [...range.getClientRects()].filter((rect) => rect.width > 0 && rect.height > 0);
  const rect = rects[rects.length - 1];
  return rect ? fixedLayerRect(rect) : null;
}

function fixedLayerRect(rect) {
  const viewport = window.visualViewport;
  const offsetLeft = viewport?.offsetLeft || 0;
  const offsetTop = viewport?.offsetTop || 0;
  return {
    left: rect.left + offsetLeft,
    top: rect.top + offsetTop,
    width: rect.width,
    height: rect.height
  };
}

function isOpaqueColor(value) {
  if (!value || value === "transparent") return false;
  const rgbaMatch = value.match(/rgba?\(([^)]+)\)/);
  if (rgbaMatch) {
    const parts = rgbaMatch[1].split(",").map((part) => Number.parseFloat(part.trim()));
    if (parts.length === 4 && parts[3] <= 0.02) return false;
  }
  return true;
}

// Walks up from a text position to find the nearest ancestor that actually
// paints a background (e.g. a highlighter span), since background-color is
// not inherited and the immediate parent may be a plain <b>/<i> wrapper
// sitting inside a highlighted ancestor.
function resolveEffectiveBackground(node) {
  let element = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
  while (element && refs.editor.contains(element)) {
    const bg = getComputedStyle(element).backgroundColor;
    if (isOpaqueColor(bg)) return bg;
    if (element === refs.editor) break;
    element = element.parentElement;
  }
  return null;
}

function computedStyleForRange(range) {
  const node = range.startContainer;
  const element = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
  const style = getComputedStyle(element?.nodeType === Node.ELEMENT_NODE ? element : refs.editor);
  return {
    color: style.color,
    backgroundColor: resolveEffectiveBackground(node),
    fontFamily: style.fontFamily,
    fontSize: style.fontSize,
    fontStyle: style.fontStyle,
    fontWeight: style.fontWeight,
    lineHeight: style.lineHeight === "normal" ? style.fontSize : style.lineHeight,
    letterSpacing: style.letterSpacing,
    textTransform: style.textTransform,
    textDecorationLine: style.textDecorationLine,
    textDecorationStyle: style.textDecorationStyle,
    textDecorationThickness: style.textDecorationThickness,
    fontVariantLigatures: style.fontVariantLigatures
  };
}

function fallbackGlyphTarget(glyph, caret) {
  if (!isRenderableGlyph(glyph)) return null;
  const style = getComputedStyle(refs.editor);
  const height = Math.max(18, caret.height || Number.parseFloat(style.fontSize) || 18);
  const width = Math.max(8, height * 0.52);
  return {
    glyph,
    rect: {
      left: caret.left - width,
      top: caret.top,
      width,
      height
    },
    style: {
      color: style.color,
      backgroundColor: null,
      fontFamily: style.fontFamily,
      fontSize: style.fontSize,
      fontStyle: style.fontStyle,
      fontWeight: style.fontWeight,
      lineHeight: style.lineHeight === "normal" ? style.fontSize : style.lineHeight,
      letterSpacing: style.letterSpacing,
      textTransform: style.textTransform,
      textDecorationLine: style.textDecorationLine,
      textDecorationStyle: style.textDecorationStyle,
      textDecorationThickness: style.textDecorationThickness,
      fontVariantLigatures: style.fontVariantLigatures
    }
  };
}

function isRenderableGlyph(glyph) {
  return Boolean(glyph && !/^\s+$/.test(glyph));
}

function appendGlyphOverlay(mark, target, role, originX, originY, profile, settings, effectLevel, speedScale, isSpecial, effect) {
  if (!target || !isRenderableGlyph(target.glyph)) return;
  const roleStrength = role === "echo" ? profile.echo : 1;
  if (roleStrength <= 0.01) return;

  const rect = target.rect;
  const style = target.style;
  const lifeBase = role === "echo" ? profile.echoDuration : profile.duration;
  const life = Math.round(lifeBase * speedScale * (isSpecial && role === "current" ? 1.12 : 1));
  const motion = profile.motion * (0.35 + settings.glyphMotion * 1.15) * (0.72 + effectLevel * 0.5) * roleStrength;
  const split = profile.split * (0.28 + settings.glyphMotion * 1.12) * (0.68 + effectLevel * 0.52) * roleStrength;
  const glowAlpha = clamp01(profile.glow * settings.glowAmount * effectLevel * roleStrength);
  const flashAlpha = clamp01(profile.flash * effectLevel * (role === "echo" ? 0.36 : 1));
  const maxAlpha = role === "echo" ? 0.34 : 0.96;
  const alpha = clamp(profile.alpha * (0.34 + effectLevel * 0.78) * roleStrength, 0, maxAlpha);
  const scalePop = 1 + profile.scale * settings.glyphMotion * (0.012 + effectLevel * 0.026) * roleStrength;
  const scaleDelta = Math.max(0, scalePop - 1);
  const blur = profile.blur * (0.35 + effectLevel) * (role === "echo" ? 0.55 : 1);
  const rotate = profile.rotate * settings.glyphMotion * (0.65 + effectLevel * 0.5) * roleStrength;
  const glowSize = Math.round((3 + settings.glowAmount * 18) * profile.glow * (role === "echo" ? 0.62 : 1));

  // Occlusion mask: paints over the real (static) character for the
  // overlay's lifetime so the animated clone never gets seen doubled up
  // against the still-visible real glyph underneath. Sized/positioned
  // identically to the overlay, colored to match the real background
  // (highlighter color if the text is highlighted, otherwise the paper).
  const mask = document.createElement("span");
  mask.className = "typing-glyph-mask";
  mask.style.left = `${(rect.left - originX).toFixed(2)}px`;
  mask.style.top = `${(rect.top - originY).toFixed(2)}px`;
  mask.style.width = `${Math.max(1, rect.width).toFixed(2)}px`;
  mask.style.height = `${Math.max(1, rect.height).toFixed(2)}px`;
  mask.style.backgroundColor = isOpaqueColor(style.backgroundColor) ? style.backgroundColor : "var(--paper)";
  mark.append(mask);

  const glyph = document.createElement("span");
  glyph.className = `typing-glyph is-${role}`;
  glyph.textContent = target.glyph;
  glyph.dataset.glyph = target.glyph;
  glyph.style.left = `${(rect.left - originX).toFixed(2)}px`;
  glyph.style.top = `${(rect.top - originY).toFixed(2)}px`;
  glyph.style.width = `${Math.max(1, rect.width).toFixed(2)}px`;
  glyph.style.height = `${Math.max(1, rect.height).toFixed(2)}px`;
  glyph.style.fontFamily = style.fontFamily;
  glyph.style.fontSize = style.fontSize;
  glyph.style.fontStyle = style.fontStyle;
  glyph.style.fontWeight = style.fontWeight;
  glyph.style.lineHeight = style.lineHeight;
  glyph.style.letterSpacing = style.letterSpacing;
  glyph.style.textTransform = style.textTransform;
  glyph.style.textDecorationLine = style.textDecorationLine;
  glyph.style.textDecorationStyle = style.textDecorationStyle;
  glyph.style.textDecorationThickness = style.textDecorationThickness;
  glyph.style.fontVariantLigatures = style.fontVariantLigatures;
  glyph.style.setProperty("--glyph-life", `${life}ms`);
  glyph.style.setProperty("--glyph-base-color", style.color);
  glyph.style.setProperty("--glyph-hot-color", profile.hot);
  glyph.style.setProperty("--glyph-accent-color", profile.accent);
  glyph.style.setProperty("--glyph-alt-color", profile.alt);
  glyph.style.setProperty("--glyph-alpha", alpha.toFixed(3));
  glyph.style.setProperty("--glyph-flash-alpha", flashAlpha.toFixed(3));
  glyph.style.setProperty("--glyph-glow-alpha", glowAlpha.toFixed(3));
  glyph.style.setProperty("--glyph-glow-size", `${glowSize}px`);
  glyph.style.setProperty("--glyph-glow-color", hexToRgba(profile.accent, Math.min(0.86, glowAlpha * 0.82)));
  glyph.style.setProperty("--glyph-alt-glow-color", hexToRgba(profile.alt, Math.min(0.74, glowAlpha * 0.72)));
  glyph.style.setProperty("--glyph-motion-px", `${motion.toFixed(2)}px`);
  glyph.style.setProperty("--glyph-split", `${split.toFixed(2)}px`);
  glyph.style.setProperty("--glyph-scale-pop", scalePop.toFixed(3));
  glyph.style.setProperty("--glyph-squash-x", (1 + scaleDelta * 1.5).toFixed(3));
  glyph.style.setProperty("--glyph-squash-y", Math.max(0.88, 1 - scaleDelta * 2.2).toFixed(3));
  glyph.style.setProperty("--glyph-stretch-x", Math.max(0.96, 1 - scaleDelta * 0.72).toFixed(3));
  glyph.style.setProperty("--glyph-stretch-y", (1 + scaleDelta * 1.32).toFixed(3));
  glyph.style.setProperty("--glyph-blur", `${blur.toFixed(2)}px`);
  glyph.style.setProperty("--glyph-rotate-amount", `${rotate.toFixed(2)}deg`);
  const impactStrength = (profile.impact ?? 1) * (0.35 + settings.glyphMotion * 1.15) * (0.7 + effectLevel * 0.5) * roleStrength;
  const impactLife = Math.max(60, Math.round((profile.duration * 0.4 + 40) * speedScale * (role === "echo" ? 0.7 : 1)));
  glyph.style.setProperty("--glyph-impact-x", `${(effect.glyphX * impactStrength * 2.1).toFixed(2)}px`);
  glyph.style.setProperty("--glyph-impact-y", `${(effect.glyphY * impactStrength * 2.1).toFixed(2)}px`);
  glyph.style.setProperty("--glyph-impact-scale", (1 + (effect.glyphScale - 1) * impactStrength * 3.2).toFixed(3));
  glyph.style.setProperty("--glyph-impact-rotate", `${(effect.glyphRotate * impactStrength * 3.2).toFixed(2)}deg`);
  glyph.style.setProperty("--glyph-impact-life", `${impactLife}ms`);

  const slice = document.createElement("span");
  slice.className = "glyph-slice";
  slice.dataset.glyph = target.glyph;
  glyph.append(slice);

  const sheen = document.createElement("span");
  sheen.className = "glyph-sheen";
  sheen.dataset.glyph = target.glyph;
  glyph.append(sheen);

  mark.append(glyph);
}

function spawnTypingMark(tactile = {}) {
  const rect = caretRect();
  if (!rect) return;
  const settings = state.settings;
  if (!settings.effectEnabled || settings.effectIntensity <= 0.01 || settings.feedbackStrength <= 0.01) return;
  const effect = EFFECT_PRESETS[settings.effectMode] || EFFECT_PRESETS[defaultSettings.effectMode];
  const profile = getGlyphProfile(settings.effectMode);
  const effectLevel = clamp(settings.effectIntensity, 0.05, 1);
  const glyphMotion = clamp01(settings.glyphMotion);
  const keyType = tactile.keyType || "normal";
  const seed = tactile.seed || Math.floor(performance.now() * 10);
  const allowGlyph = tactile.allowGlyph !== false && keyType === "normal";
  const glyphTargets = allowGlyph ? resolveGlyphTargets() : { current: null, previous: null };
  if (!glyphTargets.current && allowGlyph) {
    glyphTargets.current = fallbackGlyphTarget(tactile.glyph || "", rect);
  }
  const keyParticleScale = keyType === "enter" ? 1.25 : keyType === "space" ? 0.82 : keyType === "backspace" ? 0.56 : 1;
  const streakBoost = Math.min(0.22, Math.max(0, Number(tactile.streak || 0)) * 0.006);
  const specialChance = clamp(effect.special * (0.28 + settings.specialFrequency * 1.72) * effectLevel + streakBoost, 0, 0.95);
  const isSpecial = settings.specialFrequency > 0.01 && seeded01(seed, 77) < specialChance;
  const speedScale = 1.18 - settings.effectSpeed * 0.46;
  const life = Math.round(effect.life * speedScale);
  const particleCount = settings.particleAmount <= 0.01
    ? 0
    : Math.round((effect.particles + (isSpecial ? 2 : 0)) * keyParticleScale * (0.32 + settings.particleAmount * 1.42));
  const maxParticles = clamp(particleCount, 0, 16);
  const glyphRect = glyphTargets.current?.rect;
  const originX = glyphRect ? glyphRect.left + glyphRect.width * 0.78 : rect.left;
  const originY = glyphRect ? glyphRect.top + glyphRect.height * 0.56 : rect.top + rect.height * 0.55;
  spawnEffectBurst(settings.effectMode, {
    x: originX,
    y: originY,
    settings,
    isSpecial,
    keyType,
    effectLevel,
    speedScale,
    scale: keyParticleScale,
    streak: tactile.streak || 0
  });
  const mark = document.createElement("span");
  mark.className = `typing-mark effect-${settings.effectMode} key-${keyType}${isSpecial ? " is-special" : ""}`;
  mark.style.left = `${originX}px`;
  mark.style.top = `${originY}px`;
  mark.style.setProperty("--burst-life", `${life}ms`);
  mark.style.setProperty("--core-scale", (effect.core * (0.74 + effectLevel * 0.44)).toFixed(2));
  mark.style.setProperty("--shake-x", `${(seededSigned(seed, 4) * settings.shakeAmount * 2.5).toFixed(2)}px`);
  mark.style.setProperty("--shake-y", `${(seededSigned(seed, 9) * settings.shakeAmount * 1.8).toFixed(2)}px`);
  mark.style.setProperty("--glyph-life", `${Math.round(life * 0.54)}ms`);
  mark.style.setProperty("--glyph-alpha", (0.18 + effectLevel * 0.42).toFixed(3));
  mark.style.setProperty("--glyph-blur", `${(settings.effectMode === "ink" ? 1.2 : 0.35) * glyphMotion}px`);
  mark.style.setProperty("--glyph-vibe-life", `${Math.round(clamp(life * 0.34, 90, 170))}ms`);

  const core = document.createElement("span");
  core.className = "typing-core";
  mark.append(core);

  if (isSpecial) {
    const accent = document.createElement("span");
    accent.className = "typing-special";
    mark.append(accent);
  }

  appendGlyphOverlay(mark, glyphTargets.previous, "echo", originX, originY, profile, settings, effectLevel, speedScale, isSpecial, effect);
  appendGlyphOverlay(mark, glyphTargets.current, "current", originX, originY, profile, settings, effectLevel, speedScale, isSpecial, effect);

  for (let index = 0; index < maxParticles; index += 1) {
    const particle = document.createElement("span");
    const angle = seeded01(seed + index, 12) * Math.PI * 2;
    const distance = (10 + seeded01(seed + index, 21) * effect.spread * 1.6) * effectLevel * (0.7 + settings.particleAmount * 1.1);
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance - effect.lift * effectLevel * 1.6;
    const size = 4 + seeded01(seed + index, 33) * (isSpecial ? 15 : 10);
    particle.className = `typing-particle particle-${index % 4}`;
    particle.style.setProperty("--x", `${x.toFixed(2)}px`);
    particle.style.setProperty("--y", `${y.toFixed(2)}px`);
    particle.style.setProperty("--size", `${size.toFixed(2)}px`);
    particle.style.setProperty("--particle-offset", `${(-size / 2).toFixed(2)}px`);
    particle.style.setProperty("--spin", `${Math.round(seededSigned(seed + index, 45) * 320)}deg`);
    particle.style.setProperty("--delay", `${Math.round(seeded01(seed + index, 52) * 34)}ms`);
    particle.style.setProperty("--particle-alpha", (settings.particleAmount * (0.55 + settings.effectIntensity * 0.55)).toFixed(2));
    mark.append(particle);
  }

  // Absolute core reaction, present on every keystroke no matter which
  // effect preset is active: a tiny star-dust burst hugging the newest
  // character. Preset particles above add personality on top of this.
  if (settings.particleAmount > 0.01 && keyType !== "backspace") {
    const coreStarCount = 2 + (isSpecial ? 2 : 0) + (settings.particleAmount > 0.6 ? 1 : 0);
    for (let index = 0; index < coreStarCount; index += 1) {
      const star = document.createElement("span");
      const starSeed = seed + index * 7 + 401;
      const angle = seeded01(starSeed, 61) * Math.PI * 2;
      const distance = (12 + seeded01(starSeed, 68) * 26) * (0.7 + settings.particleAmount * 1.2);
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance - (6 + seeded01(starSeed, 74) * 8);
      const isBright = isSpecial && index >= coreStarCount - 2;
      const size = (isBright ? 15 : 7) + seeded01(starSeed, 80) * (isBright ? 8 : 6);
      star.className = `typing-core-star${isBright ? " is-bright" : ""}`;
      star.style.setProperty("--csx", `${x.toFixed(2)}px`);
      star.style.setProperty("--csy", `${y.toFixed(2)}px`);
      star.style.setProperty("--cs-size", `${size.toFixed(2)}px`);
      star.style.setProperty("--cs-offset", `${(-size / 2).toFixed(2)}px`);
      star.style.setProperty("--cs-spin", `${Math.round(seededSigned(starSeed, 88) * 260)}deg`);
      star.style.setProperty("--cs-delay", `${Math.round(seeded01(starSeed, 91) * 30)}ms`);
      star.style.setProperty("--cs-life", `${Math.round((520 + seeded01(starSeed, 95) * 240) * speedScale)}ms`);
      star.style.setProperty("--cs-alpha", (0.7 + settings.particleAmount * 0.3 * (0.7 + effectLevel * 0.3)).toFixed(2));
      star.style.setProperty("--cs-glow", `${(5 + settings.glowAmount * 9).toFixed(1)}px`);
      mark.append(star);
    }
  }

  const activeMarks = refs.inkLayer.querySelectorAll(".typing-mark");
  if (activeMarks.length > 34) {
    activeMarks[0].remove();
  }

  refs.inkLayer.append(mark);
  const starLifeCap = Math.round(900 * speedScale);
  window.setTimeout(() => mark.remove(), Math.max(life, starLifeCap) + 140);
}

function caretRect() {
  const selection = window.getSelection();
  if (!selection || !selection.rangeCount) return null;
  const range = selection.getRangeAt(0).cloneRange();
  if (!refs.editor.contains(range.startContainer)) return null;
  range.collapse(true);
  const rect = range.getClientRects()[0];
  if (rect) return fixedLayerRect(rect);
  const editorRect = fixedLayerRect(refs.editor.getBoundingClientRect());
  const editorStyle = getComputedStyle(refs.editor);
  return {
    left: editorRect.left + (Number.parseFloat(editorStyle.paddingLeft) || 0),
    top: editorRect.top + (Number.parseFloat(editorStyle.paddingTop) || 0),
    height: Number.parseFloat(editorStyle.fontSize) || 18
  };
}

const soundEngine = {
  ctx: null,
  master: null,
  buffers: new Map(),
  activeVoices: 0,

  unlock() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      this.ctx = new AudioContextClass({ latencyHint: "interactive" });
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.9;
      this.master.connect(this.ctx.destination);
      this.ensurePack(state.settings.soundPack);
      window.setTimeout(() => this.warmRemainingPacks(), 50);
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  },

  warmRemainingPacks() {
    if (!this.ctx) return;
    const packNames = Object.keys(SOUND_PACKS);
    const warmNext = (index) => {
      if (!this.ctx || index >= packNames.length) return;
      this.ensurePack(packNames[index]);
      window.setTimeout(() => warmNext(index + 1), 12);
    };
    warmNext(0);
  },

  cacheKey(packName) {
    const depthBucket = Math.round(state.settings.soundDepth * 20) / 20;
    return `${packName}:${depthBucket.toFixed(2)}`;
  },

  ensurePack(packName) {
    if (!this.ctx) return;
    const key = this.cacheKey(packName);
    if (this.buffers.has(key)) return;
    const pack = SOUND_PACKS[packName] || SOUND_PACKS[defaultSettings.soundPack];
    const packBuffers = {};
    ["normal", "space", "backspace", "enter"].forEach((type) => {
      packBuffers[type] = Array.from({ length: 8 }, (_, index) =>
        createPhysicalKeyBuffer(this.ctx, pack, type, index, state.settings.soundDepth)
      );
    });
    this.buffers.set(key, packBuffers);
  },

  updateMaster() {
    if (!this.master) return;
    this.master.gain.setTargetAtTime(0.9, this.ctx.currentTime, 0.01);
  },

  play(type) {
    const settings = state.settings;
    if (!settings.soundEnabled || settings.volume <= 0) return;
    this.unlock();
    if (!this.ctx || !this.master) return;
    const packName = settings.soundPack;
    this.ensurePack(packName);
    const pack = SOUND_PACKS[packName] || SOUND_PACKS[defaultSettings.soundPack];
    const buffers = this.buffers.get(this.cacheKey(packName));
    if (!buffers || !buffers[type]) return;

    const variation = settings.variation;
    const variants = buffers[type];
    const index = variation < 0.04 ? 0 : Math.floor(Math.random() * variants.length);
    const source = this.ctx.createBufferSource();
    const gain = this.ctx.createGain();
    const keyShape = KEY_SHAPES[type] || KEY_SHAPES.normal;
    const voiceTrim = Math.max(0.68, 1 - Math.max(0, this.activeVoices - 5) * 0.035);
    const randomGain = 1 + (Math.random() * 2 - 1) * variation * 0.09;
    const randomRate = 1 + (Math.random() * 2 - 1) * variation * pack.pitchVariance;

    source.buffer = variants[index];
    source.playbackRate.value = randomRate;
    gain.gain.value = settings.volume * pack.master * keyShape.gain * voiceTrim * randomGain;
    source.connect(gain);
    gain.connect(this.master);
    this.activeVoices += 1;
    source.onended = () => {
      this.activeVoices = Math.max(0, this.activeVoices - 1);
    };
    source.start(this.ctx.currentTime);
  }
};

function createPhysicalKeyBuffer(ctx, pack, keyType, variantIndex, depthAmount) {
  const sampleRate = ctx.sampleRate;
  const shape = KEY_SHAPES[keyType] || KEY_SHAPES.normal;
  const depth = clamp01(depthAmount);
  const variant = variantIndex === 0 ? 0 : seededSigned(variantIndex, 1);
  const duration = pack.duration * shape.duration * (1 + variant * 0.04);
  const length = Math.max(1, Math.floor(sampleRate * duration));
  const buffer = ctx.createBuffer(1, length, sampleRate);
  const data = buffer.getChannelData(0);
  const pitchScale = shape.freq * (1 - depth * pack.depthPitchDrop) * (1 + variant * 0.014);
  const bodyDepth = 0.82 + depth * 0.64;
  const transientDepth = 1 - depth * 0.34;
  const phaseBase = seeded01(variantIndex, 2) * Math.PI * 2;
  let lowNoise = 0;
  let midNoise = 0;
  let highNoise = 0;
  let grainNoise = 0;
  let finalLow = 0;
  const frame = {
    pack,
    shape,
    pitchScale,
    bodyDepth,
    transientDepth,
    phaseBase,
    variantIndex,
    t: 0,
    white: 0,
    white2: 0,
    white3: 0,
    lowNoise: 0,
    midNoise: 0,
    highNoise: 0,
    grainNoise: 0
  };

  for (let i = 0; i < length; i += 1) {
    const t = i / sampleRate;
    const white = deterministicNoise(i, variantIndex + 17);
    const white2 = deterministicNoise(i * 3 + 11, variantIndex + 43);
    const white3 = deterministicNoise(i * 7 + 23, variantIndex + 71);
    lowNoise += (white - lowNoise) * 0.04;
    midNoise += (lowNoise - midNoise) * 0.18;
    highNoise += (white2 - highNoise) * 0.28;
    grainNoise += (white3 - grainNoise) * 0.46;

    frame.t = t;
    frame.white = white;
    frame.white2 = white2;
    frame.white3 = white3;
    frame.lowNoise = lowNoise;
    frame.midNoise = midNoise;
    frame.highNoise = highNoise;
    frame.grainNoise = grainNoise;

    let sample = renderSoundModel(pack.model || "thock", frame);

    if (shape.secondary) {
      const delayed = t - 0.012;
      if (delayed > 0) {
        const env = Math.exp(-delayed / 0.027) * 0.1;
        sample += Math.sin(Math.PI * 2 * 104 * pitchScale * delayed + phaseBase) * env * bodyDepth;
      }
    }

    const fadeOut = 1 - Math.pow(i / length, 2.2);
    const soft = softClip(sample * pack.drive, pack.drive) * fadeOut;
    finalLow += (soft - finalLow) * pack.finalLowpass;
    data[i] = clamp(finalLow * 0.82, -1, 1);
  }

  return buffer;
}

function renderSoundModel(model, frame) {
  switch (model) {
    case "wood":
      return renderWoodTap(frame);
    case "bamboo":
      return renderBambooTap(frame);
    case "cream":
      return renderCreamTap(frame);
    case "stone":
      return renderStoneTap(frame);
    case "porcelain":
      return renderPorcelainTap(frame);
    case "paper":
      return renderPaperTap(frame);
    case "felt":
      return renderFeltTap(frame);
    case "snow":
      return renderSnowTap(frame);
    case "scissor":
      return renderScissorTap(frame);
    case "rain":
      return renderRainTap(frame);
    case "scratch":
      return renderScratchTap(frame);
    case "stamp":
      return renderStampTap(frame);
    case "rubber":
      return renderRubberTap(frame);
    case "typebar":
      return renderTypebarTap(frame);
    case "linear":
      return renderLinearThock(frame);
    case "book":
      return renderBookEdgeTap(frame);
    case "silicone":
      return renderSiliconePop(frame);
    case "carbon":
      return renderCarbonThock(frame);
    case "glass":
      return renderMatteGlassTap(frame);
    case "neon":
      return renderNeonCapsulePop(frame);
    case "thock":
    default:
      return renderDeepThock(frame);
  }
}

function renderDeepThock(frame) {
  const pack = frame.pack;
  const thump = pack.thump || { freq: 72, gain: 0.16, decay: 0.052 };
  let sample = resonanceSum(frame, 1.08, 1.05, 1.14, 0.15);
  sample += sineBody(frame, thump.freq, thump.gain * 1.25, 0.006, thump.decay * frame.shape.decay, 0.05, -0.08);
  sample += coloredTransient(frame, pack.transient.gain, 0.0018, pack.transient.decay, "low") * 0.8;
  return sample;
}

function renderWoodTap(frame) {
  const pack = frame.pack;
  const hollow = pack.woodHollow || { freq: 96, gain: 0.1, decay: 0.055 };
  let sample = resonanceSum(frame, 0.82, 0.62, 0.92, 0.28);
  sample += sineBody(frame, hollow.freq, hollow.gain * 1.3, 0.0025, hollow.decay * frame.shape.decay, 0.35, 0.04);
  sample += coloredTransient(frame, pack.transient.gain * 1.12, 0.0012, pack.transient.decay, "wood");
  if (pack.stamp) {
    sample += delayedSineBody(frame, pack.stamp.delay, pack.stamp.freq, pack.stamp.gain * 0.75, 0.002, pack.stamp.decay, 0.6);
  }
  return sample;
}

function renderBambooTap(frame) {
  const pack = frame.pack;
  const hollow = pack.woodHollow || { freq: 140, gain: 0.08, decay: 0.04 };
  let sample = resonanceSum(frame, 0.72, 0.45, 0.72, 0.38);
  sample += sineBody(frame, hollow.freq, hollow.gain * 1.05, 0.0018, hollow.decay * frame.shape.decay, 0.48, 0.02);
  sample += coloredTransient(frame, pack.transient.gain * 1.18, 0.0009, pack.transient.decay, "bamboo");
  if (pack.scissor) {
    sample += coloredTransient(frame, pack.scissor.gain * 0.35, 0.0008, pack.scissor.decay, "scissor");
  }
  return sample;
}

function renderCreamTap(frame) {
  const pack = frame.pack;
  const cushion = pack.cushion || { gain: 0.14, decay: 0.04 };
  let sample = resonanceSum(frame, 0.76, 1.7, 1.22, 0.04);
  sample += sineBody(frame, 86, cushion.gain * 0.75, 0.014, cushion.decay * frame.shape.decay, 0.1, -0.05);
  sample += (frame.lowNoise * 0.7 + frame.midNoise * 0.3) * cushion.gain * 0.34 * hitEnvelope(frame.t, 0.012, cushion.decay, 1.8) * frame.shape.body * frame.bodyDepth;
  sample += coloredTransient(frame, pack.transient.gain * 0.6, 0.006, pack.transient.decay, "felt");
  return sample;
}

function renderStoneTap(frame) {
  const pack = frame.pack;
  const ceramic = pack.ceramic || { freq: 480, gain: 0.05, decay: 0.018 };
  let sample = resonanceSum(frame, 0.62, 0.36, 0.68, 0.55);
  sample += sineBody(frame, ceramic.freq, ceramic.gain * 1.05, 0.0012, ceramic.decay * frame.shape.decay, 0.8, 0.015);
  sample += coloredTransient(frame, pack.transient.gain * 1.12, 0.00075, pack.transient.decay, "stone");
  return sample;
}

function renderPorcelainTap(frame) {
  const pack = frame.pack;
  const ceramic = pack.ceramic || { freq: 610, gain: 0.045, decay: 0.018 };
  let sample = resonanceSum(frame, 0.48, 0.34, 0.82, 0.72);
  sample += sineBody(frame, ceramic.freq, ceramic.gain * 1.2, 0.001, ceramic.decay * frame.shape.decay, 0.9, 0.01);
  sample += delayedSineBody(frame, 0.006, ceramic.freq * 0.62, ceramic.gain * 0.46, 0.001, ceramic.decay * 1.3, 0.2);
  sample += coloredTransient(frame, pack.transient.gain * 0.9, 0.0008, pack.transient.decay, "stone");
  return sample;
}

function renderPaperTap(frame) {
  const pack = frame.pack;
  const paper = pack.paper || { gain: 0.1, decay: 0.052, color: 0.42 };
  let sample = resonanceSum(frame, 0.42, 1.05, 0.95, 0.18);
  const texture = (frame.highNoise - frame.grainNoise * 0.52 + frame.white3 * 0.035);
  sample += texture * paper.gain * hitEnvelope(frame.t, 0.004, paper.decay * frame.shape.decay, 0.9) * frame.shape.transient;
  sample += coloredTransient(frame, pack.transient.gain, 0.0025, pack.transient.decay, "paper");
  return sample;
}

function renderFeltTap(frame) {
  const pack = frame.pack;
  const felt = pack.felt || { gain: 0.12, decay: 0.058 };
  let sample = resonanceSum(frame, 0.48, 1.8, 1.34, 0.02);
  if (pack.thump) {
    sample += sineBody(frame, pack.thump.freq, pack.thump.gain * 0.82, 0.012, pack.thump.decay * frame.shape.decay, 0.05, -0.04);
  }
  sample += (frame.lowNoise * 0.86 + frame.midNoise * 0.14) * felt.gain * hitEnvelope(frame.t, 0.013, felt.decay * frame.shape.decay, 1.75) * frame.shape.body * frame.bodyDepth;
  sample += coloredTransient(frame, pack.transient.gain * 0.38, 0.007, pack.transient.decay, "felt");
  return sample;
}

function renderSnowTap(frame) {
  const pack = frame.pack;
  const felt = pack.felt || { gain: 0.18, decay: 0.08 };
  let sample = resonanceSum(frame, 0.28, 2.1, 1.55, 0.0);
  sample += (frame.lowNoise * 0.92 + frame.midNoise * 0.08) * felt.gain * 0.82 * hitEnvelope(frame.t, 0.017, felt.decay * frame.shape.decay, 2.0) * frame.shape.body * frame.bodyDepth;
  sample += coloredTransient(frame, pack.transient.gain * 0.18, 0.014, pack.transient.decay, "felt");
  return sample;
}

function renderScissorTap(frame) {
  const pack = frame.pack;
  const scissor = pack.scissor || { gain: 0.08, decay: 0.008 };
  let sample = resonanceSum(frame, 0.26, 0.48, 0.58, 0.45);
  sample += coloredTransient(frame, scissor.gain * 1.12, 0.0007, scissor.decay, "scissor");
  sample += delayedNoise(frame, 0.0038, scissor.gain * 0.52, 0.0007, scissor.decay * 0.9, "scissor");
  sample += sineBody(frame, 250, scissor.gain * 0.22, 0.001, scissor.decay * 1.8, 0.3, 0.0);
  return sample;
}

function renderRainTap(frame) {
  const pack = frame.pack;
  const rain = pack.rain || { gain: 0.1, decay: 0.06 };
  let sample = resonanceSum(frame, 0.28, 1.3, 1.05, 0.18);
  const droplet = Math.pow(Math.max(0, frame.white3 * 0.5 + 0.5), 5) * 2 - 0.45;
  const grain = frame.grainNoise * 0.62 + droplet * 0.12;
  sample += grain * rain.gain * hitEnvelope(frame.t, 0.006, rain.decay * frame.shape.decay, 1.08) * frame.shape.transient;
  if (pack.cushion) {
    sample += sineBody(frame, 94, pack.cushion.gain * 0.36, 0.01, pack.cushion.decay * frame.shape.decay, 0.0, -0.05);
  }
  sample += coloredTransient(frame, pack.transient.gain * 0.5, 0.004, pack.transient.decay, "paper");
  return sample;
}

function renderScratchTap(frame) {
  const pack = frame.pack;
  const paper = pack.paper || { gain: 0.12, decay: 0.055 };
  const scratch = (Math.abs(frame.highNoise - frame.grainNoise) * 1.5 - 0.48) + frame.white2 * 0.04;
  let sample = resonanceSum(frame, 0.3, 0.85, 0.75, 0.28);
  sample += scratch * paper.gain * hitEnvelope(frame.t, 0.0025, paper.decay * frame.shape.decay, 0.75) * frame.shape.transient;
  if (pack.scissor) {
    sample += coloredTransient(frame, pack.scissor.gain * 0.5, 0.0009, pack.scissor.decay, "scissor");
  }
  sample += coloredTransient(frame, pack.transient.gain * 0.55, 0.0012, pack.transient.decay, "paper");
  return sample;
}

function renderStampTap(frame) {
  const pack = frame.pack;
  const stamp = pack.stamp || { freq: 92, gain: 0.14, delay: 0.006, decay: 0.05 };
  let sample = resonanceSum(frame, 0.5, 1.05, 1.22, 0.08);
  sample += delayedSineBody(frame, stamp.delay, stamp.freq, stamp.gain * 1.6, 0.0035, stamp.decay * frame.shape.decay, 0.3);
  sample += delayedNoise(frame, stamp.delay + 0.0025, 0.045, 0.002, 0.04, "paper");
  if (pack.paper) {
    sample += (frame.grainNoise * 0.25 + frame.highNoise * 0.15) * pack.paper.gain * 0.36 * hitEnvelope(frame.t, 0.006, pack.paper.decay, 1.05);
  }
  sample += coloredTransient(frame, pack.transient.gain * 0.55, 0.004, pack.transient.decay, "low");
  return sample;
}

function renderRubberTap(frame) {
  const pack = frame.pack;
  const membrane = pack.membrane || { gain: 0.14, decay: 0.045, bend: 0.5 };
  const bend = 1 + Math.exp(-frame.t / 0.018) * membrane.bend;
  let sample = resonanceSum(frame, 0.34, 1.25, 1.05, 0.03);
  sample += Math.sin(Math.PI * 2 * 92 * frame.pitchScale * bend * frame.t + frame.phaseBase * 0.5) * membrane.gain * hitEnvelope(frame.t, 0.009, membrane.decay * frame.shape.decay, 1.35) * frame.shape.body * frame.bodyDepth;
  sample += (frame.lowNoise * 0.72 + frame.midNoise * 0.28) * membrane.gain * 0.3 * hitEnvelope(frame.t, 0.01, membrane.decay, 1.4);
  sample += coloredTransient(frame, pack.transient.gain * 0.45, 0.005, pack.transient.decay, "felt");
  return sample;
}

function renderTypebarTap(frame) {
  const pack = frame.pack;
  const stamp = pack.stamp || { freq: 118, gain: 0.055, delay: 0.012, decay: 0.028 };
  let sample = resonanceSum(frame, 0.44, 0.45, 0.72, 0.35);
  sample += coloredTransient(frame, pack.transient.gain * 1.05, 0.0007, pack.transient.decay, "scissor");
  sample += delayedSineBody(frame, stamp.delay, stamp.freq, stamp.gain * 1.2, 0.0015, stamp.decay * frame.shape.decay, 0.55);
  sample += delayedNoise(frame, stamp.delay + 0.001, 0.032, 0.0009, 0.014, "wood");
  return sample;
}

function renderLinearThock(frame) {
  const pack = frame.pack;
  let sample = resonanceSum(frame, 0.88, 0.86, 0.88, 0.18);
  if (pack.cushion) {
    sample += sineBody(frame, 96, pack.cushion.gain * 0.55, 0.006, pack.cushion.decay * frame.shape.decay, 0.0, -0.03);
  }
  if (pack.stamp) {
    sample += delayedSineBody(frame, pack.stamp.delay, pack.stamp.freq, pack.stamp.gain * 0.72, 0.0018, pack.stamp.decay, 0.28);
  }
  sample += coloredTransient(frame, pack.transient.gain * 0.9, 0.0015, pack.transient.decay, "low");
  return sample;
}

function renderBookEdgeTap(frame) {
  const pack = frame.pack;
  const paper = pack.paper || { gain: 0.08, decay: 0.07 };
  const hollow = pack.woodHollow || { freq: 76, gain: 0.06, decay: 0.06 };
  let sample = resonanceSum(frame, 0.48, 1.0, 1.28, 0.12);
  sample += sineBody(frame, hollow.freq, hollow.gain, 0.009, hollow.decay * frame.shape.decay, 0.2, -0.04);
  sample += (frame.grainNoise * 0.46 + frame.highNoise * 0.22) * paper.gain * hitEnvelope(frame.t, 0.007, paper.decay * frame.shape.decay, 1.25);
  sample += coloredTransient(frame, pack.transient.gain * 0.7, 0.004, pack.transient.decay, "paper");
  return sample;
}

function renderSiliconePop(frame) {
  const pack = frame.pack;
  const membrane = pack.membrane || { gain: 0.18, decay: 0.058, bend: 0.7 };
  const bend = 1 + Math.exp(-frame.t / 0.021) * membrane.bend;
  let sample = resonanceSum(frame, 0.24, 1.8, 1.42, 0.0);
  sample += Math.sin(Math.PI * 2 * 78 * frame.pitchScale * bend * frame.t + frame.phaseBase * 0.32) * membrane.gain * hitEnvelope(frame.t, 0.012, membrane.decay * frame.shape.decay, 1.55) * frame.bodyDepth;
  sample += (frame.lowNoise * 0.76 + frame.midNoise * 0.24) * membrane.gain * 0.3 * hitEnvelope(frame.t, 0.012, membrane.decay, 1.8);
  sample += coloredTransient(frame, pack.transient.gain * 0.32, 0.009, pack.transient.decay, "felt");
  return sample;
}

function renderCarbonThock(frame) {
  const pack = frame.pack;
  const thump = pack.thump || { freq: 62, gain: 0.12, decay: 0.044 };
  let sample = resonanceSum(frame, 0.92, 0.62, 0.82, 0.44);
  sample += sineBody(frame, thump.freq, thump.gain * 1.22, 0.0035, thump.decay * frame.shape.decay, 0.18, -0.03);
  sample += coloredTransient(frame, pack.transient.gain * 0.96, 0.0009, pack.transient.decay, "low");
  sample += delayedNoise(frame, 0.0026, pack.transient.gain * 0.32, 0.0008, 0.008, "scissor");
  return sample;
}

function renderMatteGlassTap(frame) {
  const pack = frame.pack;
  const ceramic = pack.ceramic || { freq: 540, gain: 0.035, decay: 0.016 };
  let sample = resonanceSum(frame, 0.38, 0.42, 0.74, 0.66);
  sample += sineBody(frame, ceramic.freq, ceramic.gain * 0.95, 0.001, ceramic.decay * frame.shape.decay, 0.9, 0.008);
  sample += delayedSineBody(frame, 0.005, ceramic.freq * 0.58, ceramic.gain * 0.34, 0.001, ceramic.decay * 1.2, 0.28);
  sample += coloredTransient(frame, pack.transient.gain * 0.78, 0.0008, pack.transient.decay, "stone");
  return sample;
}

function renderNeonCapsulePop(frame) {
  const pack = frame.pack;
  const membrane = pack.membrane || { gain: 0.06, decay: 0.026, bend: 0.24 };
  const chirp = 1 + Math.exp(-frame.t / 0.012) * membrane.bend;
  let sample = resonanceSum(frame, 0.42, 0.5, 0.74, 0.6);
  sample += Math.sin(Math.PI * 2 * 126 * frame.pitchScale * chirp * frame.t + frame.phaseBase * 0.7) * membrane.gain * hitEnvelope(frame.t, 0.003, membrane.decay * frame.shape.decay, 1.0);
  sample += delayedNoise(frame, 0.0016, pack.transient.gain * 0.64, 0.0007, 0.006, "scissor");
  sample += coloredTransient(frame, pack.transient.gain * 0.62, 0.001, pack.transient.decay, "stone");
  return sample;
}

function resonanceSum(frame, gainScale, attackScale, decayScale, phaseShift) {
  const pack = frame.pack;
  return pack.resonances.reduce((sum, layer, layerIndex) => {
    const drift = 1 + seededSigned(frame.variantIndex, layerIndex + 5) * 0.007;
    const freq = layer.freq * frame.pitchScale * drift;
    const env = hitEnvelope(frame.t, pack.attack * attackScale, layer.decay * frame.shape.decay * decayScale, 1.14);
    const phase = frame.phaseBase * (0.36 + layerIndex * 0.19) + phaseShift;
    const fundamental = Math.sin(Math.PI * 2 * freq * frame.t + phase);
    const lowerBody = Math.sin(Math.PI * 2 * freq * 0.5 * frame.t + phase * 0.43) * 0.1;
    return sum + (fundamental + lowerBody) * layer.gain * env;
  }, 0) * gainScale * frame.shape.body * frame.bodyDepth;
}

function sineBody(frame, freq, gain, attack, decay, phase, bend) {
  const bendScale = 1 + Math.exp(-frame.t / 0.02) * bend;
  const env = hitEnvelope(frame.t, attack, decay, 1.12);
  return Math.sin(Math.PI * 2 * freq * frame.pitchScale * bendScale * frame.t + frame.phaseBase + phase) * gain * env * frame.shape.body * frame.bodyDepth;
}

function delayedSineBody(frame, delay, freq, gain, attack, decay, phase) {
  const t = frame.t - delay;
  if (t <= 0) return 0;
  const env = hitEnvelope(t, attack, decay, 1.05);
  return Math.sin(Math.PI * 2 * freq * frame.pitchScale * t + frame.phaseBase + phase) * gain * env * frame.shape.body * frame.bodyDepth;
}

function coloredTransient(frame, gain, attack, decay, color) {
  return transientSource(frame, color) * gain * hitEnvelope(frame.t, attack, decay * frame.shape.decay, 0.85) * frame.shape.transient * frame.transientDepth;
}

function delayedNoise(frame, delay, gain, attack, decay, color) {
  const t = frame.t - delay;
  if (t <= 0) return 0;
  return transientSource(frame, color) * gain * hitEnvelope(t, attack, decay * frame.shape.decay, 0.85) * frame.shape.transient * frame.transientDepth;
}

function transientSource(frame, color) {
  switch (color) {
    case "wood":
      return frame.lowNoise * 0.42 + frame.midNoise * 0.58;
    case "bamboo":
      return frame.midNoise * 0.58 + frame.highNoise * 0.22 + frame.lowNoise * 0.2;
    case "stone":
      return frame.midNoise * 0.48 + frame.highNoise * 0.34 + frame.white2 * 0.045;
    case "paper":
      return frame.highNoise * 0.42 + frame.grainNoise * 0.46 + frame.white3 * 0.035;
    case "felt":
      return frame.lowNoise * 0.82 + frame.midNoise * 0.18;
    case "scissor":
      return frame.midNoise * 0.58 + frame.highNoise * 0.34 + frame.white2 * 0.035;
    case "low":
    default:
      return frame.lowNoise * 0.86 + frame.midNoise * 0.14;
  }
}

function hitEnvelope(t, attack, decay, power) {
  const safeAttack = Math.max(0.00045, attack);
  const safeDecay = Math.max(0.001, decay);
  return Math.pow(1 - Math.exp(-t / safeAttack), power) * Math.exp(-t / safeDecay);
}

function softClip(value, drive) {
  return Math.tanh(value * drive) / Math.tanh(drive);
}

function deterministicNoise(index, seed) {
  const value = Math.sin((index + 1) * (12.9898 + seed * 0.137) * 78.233) * 43758.5453123;
  return (value - Math.floor(value)) * 2 - 1;
}

function seeded01(seed, salt) {
  const value = Math.sin((seed + 1) * 999 + salt * 37.33) * 10000;
  return value - Math.floor(value);
}

function seededSigned(seed, salt) {
  return seeded01(seed, salt) * 2 - 1;
}

function toggleFormatToolbar() {
  manualToolbarOpen = !manualToolbarOpen;
  refs.formatToggleBtn.setAttribute("aria-expanded", String(manualToolbarOpen));
  if (manualToolbarOpen) {
    positionToolbarNearTop();
  }
  updateToolbarVisibility(manualToolbarOpen);
}

function updateToolbarForSelection() {
  if (manualToolbarOpen) return;
  const selection = window.getSelection();
  if (!selection || !selection.rangeCount || selection.isCollapsed) {
    updateToolbarVisibility(false);
    return;
  }
  const range = selection.getRangeAt(0);
  if (!refs.editor.contains(range.commonAncestorContainer)) {
    updateToolbarVisibility(false);
    return;
  }
  const rect = range.getBoundingClientRect();
  if (!rect || (!rect.width && !rect.height)) {
    updateToolbarVisibility(false);
    return;
  }
  refs.toolbar.style.left = `${rect.left + rect.width / 2}px`;
  refs.toolbar.style.top = `${Math.max(58, rect.top - 54)}px`;
  updateToolbarVisibility(true);
}

function positionToolbarNearTop() {
  refs.toolbar.style.left = "50%";
  refs.toolbar.style.top = "74px";
}

function updateToolbarVisibility(visible) {
  refs.toolbar.classList.toggle("visible", visible);
  refs.formatToggleBtn.setAttribute("aria-expanded", String(visible));
}

function setLibraryOpen(open) {
  document.body.classList.toggle("library-open", open);
  refs.libraryToggleBtn.setAttribute("aria-expanded", String(open));
  if (open) {
    setSettingsOpen(false);
    setTimerPanel(false);
    manualToolbarOpen = false;
    updateToolbarVisibility(false);
  }
}

function setSettingsOpen(open) {
  document.body.classList.toggle("settings-open", open);
  refs.settingsToggleBtn.setAttribute("aria-expanded", String(open));
  if (open) {
    setLibraryOpen(false);
    setTimerPanel(false);
    manualToolbarOpen = false;
    updateToolbarVisibility(false);
  }
}

function toggleTimerPanel() {
  setTimerPanel(!document.body.classList.contains("timer-open"));
}

function setTimerPanel(open) {
  document.body.classList.toggle("timer-open", open);
  refs.timerToggleBtn.setAttribute("aria-expanded", String(open));
  if (open) {
    setLibraryOpen(false);
    setSettingsOpen(false);
  }
}

function closeOverlays() {
  setLibraryOpen(false);
  setSettingsOpen(false);
}

function closeEverything() {
  setLibraryOpen(false);
  setSettingsOpen(false);
  setTimerPanel(false);
  manualToolbarOpen = false;
  updateToolbarVisibility(false);
}

function toggleFocusMode() {
  const active = document.body.classList.toggle("focus-mode");
  refs.focusBtn.setAttribute("aria-pressed", String(active));
  refs.focusBtn.textContent = active ? "Exit focus" : "Focus";
  if (active) closeEverything();
  refs.editor.focus();
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => showToast("Full screen is not available here"));
  } else {
    document.exitFullscreen();
  }
}

function handleGlobalKeys(event) {
  if (event.key !== "Escape") return;
  if (document.body.classList.contains("focus-mode")) {
    document.body.classList.remove("focus-mode");
    refs.focusBtn.setAttribute("aria-pressed", "false");
    refs.focusBtn.textContent = "Focus";
    return;
  }
  closeEverything();
}

function exportActiveNote() {
  const note = getActiveNote();
  const title = (note.title || "study-note").trim();
  const markdown = `# ${title}\n\nSubject: ${note.label || "Ideas"}\nFolder: ${note.folder || "General"}\n\n${htmlToMarkdown(note.content)}`;
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${slugify(title)}.md`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 500);
  showToast("Exported markdown");
}

function htmlToMarkdown(html) {
  const root = document.createElement("div");
  root.innerHTML = html;
  return [...root.childNodes].map(markdownNode).join("").replace(/\n{3,}/g, "\n\n").trim();
}

function markdownNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent;
  }
  if (node.nodeType !== Node.ELEMENT_NODE) {
    return "";
  }

  const tag = node.tagName.toLowerCase();
  const children = [...node.childNodes].map(markdownNode).join("");

  if (tag === "h1") return `# ${children.trim()}\n\n`;
  if (tag === "h2") return `## ${children.trim()}\n\n`;
  if (tag === "h3") return `### ${children.trim()}\n\n`;
  if (tag === "p" || tag === "div") return `${children.trim()}\n\n`;
  if (tag === "br") return "\n";
  if (tag === "strong" || tag === "b") return `**${children}**`;
  if (tag === "em" || tag === "i") return `*${children}*`;
  if (tag === "u") return `<u>${children}</u>`;
  if (tag === "mark" || (tag === "span" && node.getAttribute("style")?.includes("background-color"))) {
    return `==${children}==`;
  }
  if (tag === "blockquote") {
    return children.split("\n").filter(Boolean).map((line) => `> ${line}`).join("\n") + "\n\n";
  }
  if (tag === "hr") return "---\n\n";
  if (tag === "ul") {
    return [...node.children].map((child) => `- ${markdownNode(child).trim()}`).join("\n") + "\n\n";
  }
  if (tag === "ol") {
    return [...node.children].map((child, index) => `${index + 1}. ${markdownNode(child).trim()}`).join("\n") + "\n\n";
  }
  if (tag === "li") return children;
  if (tag === "label" && node.classList.contains("check-line")) {
    const checked = node.querySelector("input")?.checked ? "x" : " ";
    const text = [...node.childNodes]
      .filter((child) => child.tagName?.toLowerCase() !== "input")
      .map(markdownNode)
      .join("")
      .trim();
    return `- [${checked}] ${text}\n`;
  }
  return children;
}

function setTimerMode(mode) {
  state.timer.mode = mode;
  state.timer.running = false;
  state.timer.secondsLeft = mode === "study" ? 25 * 60 : 5 * 60;
  saveStateNow();
  renderTimer();
}

function toggleTimer() {
  state.timer.running = !state.timer.running;
  saveStateNow();
  renderTimer();
}

function resetTimer() {
  state.timer.running = false;
  state.timer.secondsLeft = state.timer.mode === "study" ? 25 * 60 : 5 * 60;
  saveStateNow();
  renderTimer();
}

function startTimerLoop() {
  window.clearInterval(timerInterval);
  timerInterval = window.setInterval(() => {
    if (!state.timer.running) return;
    state.timer.secondsLeft -= 1;
    if (state.timer.secondsLeft <= 0) {
      state.timer.running = false;
      state.timer.secondsLeft = 0;
      soundEngine.play("enter");
      showToast(state.timer.mode === "study" ? "Study session complete" : "Break complete");
    }
    saveStateNow();
    renderTimer();
  }, 1000);
}

function formatClock(totalSeconds) {
  const safeSeconds = Math.max(0, totalSeconds);
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function plainText(html) {
  const div = document.createElement("div");
  div.innerHTML = html || "";
  return div.textContent || div.innerText || "";
}

function countWords(text) {
  const trimmed = text.trim();
  if (!trimmed) return 0;
  const matches = trimmed.match(/[\p{L}\p{N}]+/gu);
  return matches ? matches.length : trimmed.split(/\s+/).length;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&#039;");
}

function relativeTime(timestamp) {
  const diff = Math.max(0, Date.now() - Number(timestamp || Date.now()));
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  if (diff < minute) return "just now";
  if (diff < hour) return `${Math.floor(diff / minute)}m ago`;
  if (diff < day) return `${Math.floor(diff / hour)}h ago`;
  return `${Math.floor(diff / day)}d ago`;
}

function createId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `note-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 54) || "study-note";
}

function clamp01(value) {
  return clamp(Number.isFinite(value) ? value : 0, 0, 1);
}

function clamp(value, min, max) {
  const safe = Number.isFinite(value) ? value : min;
  return Math.min(max, Math.max(min, safe));
}

function showToast(message) {
  refs.toast.textContent = message;
  refs.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => refs.toast.classList.remove("show"), 1800);
}
