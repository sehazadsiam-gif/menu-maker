// 28 curated menu themes. Each theme defines colors, fonts, and decorative styling.
export const THEMES = [
  {
    id: 'classic-cream',
    name: 'Classic Cream',
    bg: '#faf6ee', text: '#2a1f14', accent: '#8b2e2e', muted: '#6b5a45',
    titleFont: "'Playfair Display', serif", bodyFont: "'Lora', serif",
    border: '2px solid #2a1f14', divider: 'double'
  },
  {
    id: 'midnight-gold',
    name: 'Midnight Gold',
    bg: '#0e0e14', text: '#f5e6b8', accent: '#d4af37', muted: '#a08a5c',
    titleFont: "'Cormorant Garamond', serif", bodyFont: "'Cormorant Garamond', serif",
    border: '1px solid #d4af37', divider: 'solid'
  },
  {
    id: 'rustic-kraft',
    name: 'Rustic Kraft',
    bg: '#d9c29a', text: '#3a2818', accent: '#7a3b1f', muted: '#5a4530',
    titleFont: "'Special Elite', monospace", bodyFont: "'Special Elite', monospace",
    border: '3px double #3a2818', divider: 'dashed'
  },
  {
    id: 'fresh-mint',
    name: 'Fresh Mint',
    bg: '#eef7f2', text: '#163a2c', accent: '#2f9e6b', muted: '#4d7a65',
    titleFont: "'Poppins', sans-serif", bodyFont: "'Poppins', sans-serif",
    border: '1px solid #2f9e6b', divider: 'solid'
  },
  {
    id: 'neon-diner',
    name: 'Neon Diner',
    bg: '#1a0033', text: '#f8f4ff', accent: '#ff2fb0', muted: '#9d7ed9',
    titleFont: "'Bebas Neue', sans-serif", bodyFont: "'Montserrat', sans-serif",
    border: '2px solid #ff2fb0', divider: 'solid'
  },
  {
    id: 'provence',
    name: 'Provence',
    bg: '#f0ebdb', text: '#403252', accent: '#6b4a8f', muted: '#8a7a6c',
    titleFont: "'Great Vibes', cursive", bodyFont: "'Lora', serif",
    border: '1px dashed #6b4a8f', divider: 'dotted'
  },
  {
    id: 'brutal-mono',
    name: 'Brutal Mono',
    bg: '#ffffff', text: '#000000', accent: '#000000', muted: '#555555',
    titleFont: "'Fira Code', monospace", bodyFont: "'Fira Code', monospace",
    border: '4px solid #000000', divider: 'solid'
  },
  {
    id: 'sunset-terracotta',
    name: 'Sunset Terracotta',
    bg: '#fbece0', text: '#4a2414', accent: '#c7552e', muted: '#8a5540',
    titleFont: "'Abril Fatface', serif", bodyFont: "'Raleway', sans-serif",
    border: '2px solid #c7552e', divider: 'solid'
  },
  {
    id: 'deep-ocean',
    name: 'Deep Ocean',
    bg: '#0b2233', text: '#e5f2f8', accent: '#4fc3d9', muted: '#7fa3b8',
    titleFont: "'Josefin Sans', sans-serif", bodyFont: "'Josefin Sans', sans-serif",
    border: '1px solid #4fc3d9', divider: 'solid'
  },
  {
    id: 'vintage-bistro',
    name: 'Vintage Bistro',
    bg: '#f2e8d0', text: '#2b1a0f', accent: '#8a1a1a', muted: '#6a4e32',
    titleFont: "'Playfair Display', serif", bodyFont: "'Libre Baskerville', serif",
    border: '3px double #8a1a1a', divider: 'double'
  },
  {
    id: 'chalkboard',
    name: 'Chalkboard',
    bg: '#1e2b22', text: '#f4f1e8', accent: '#f7d560', muted: '#b8b09a',
    titleFont: "'Caveat', cursive", bodyFont: "'Kalam', cursive",
    border: '2px dashed #f4f1e8', divider: 'dashed'
  },
  {
    id: 'sakura',
    name: 'Sakura',
    bg: '#fff1f3', text: '#3a1a24', accent: '#d14a75', muted: '#8c5a68',
    titleFont: "'Dancing Script', cursive", bodyFont: "'Lora', serif",
    border: '1px solid #d14a75', divider: 'dotted'
  },
  {
    id: 'forest-lodge',
    name: 'Forest Lodge',
    bg: '#e8e5d8', text: '#1f2e1f', accent: '#3d6b3a', muted: '#5a6a52',
    titleFont: "'Merriweather', serif", bodyFont: "'Merriweather', serif",
    border: '2px solid #3d6b3a', divider: 'solid'
  },
  {
    id: 'pop-art',
    name: 'Pop Art',
    bg: '#fff200', text: '#000000', accent: '#e4002b', muted: '#444444',
    titleFont: "'Bebas Neue', sans-serif", bodyFont: "'Montserrat', sans-serif",
    border: '4px solid #000000', divider: 'solid'
  },
  {
    id: 'marble-lux',
    name: 'Marble Lux',
    bg: '#f4f2ef', text: '#1a1a1a', accent: '#b8945f', muted: '#6a6a6a',
    titleFont: "'DM Serif Display', serif", bodyFont: "'Raleway', sans-serif",
    border: '1px solid #b8945f', divider: 'solid'
  },
  {
    id: 'tropical',
    name: 'Tropical',
    bg: '#fff8e8', text: '#0c3b2e', accent: '#f07f1a', muted: '#4a6b5e',
    titleFont: "'Pacifico', cursive", bodyFont: "'Poppins', sans-serif",
    border: '2px solid #f07f1a', divider: 'dashed'
  },
  {
    id: 'charcoal-modern',
    name: 'Charcoal Modern',
    bg: '#1f1f1f', text: '#f0f0f0', accent: '#ff6b35', muted: '#999999',
    titleFont: "'Oswald', sans-serif", bodyFont: "'Raleway', sans-serif",
    border: '1px solid #ff6b35', divider: 'solid'
  },
  {
    id: 'royal-burgundy',
    name: 'Royal Burgundy',
    bg: '#f7ecec', text: '#3d0a0a', accent: '#6d0f1a', muted: '#7a4a4a',
    titleFont: "'Cormorant Garamond', serif", bodyFont: "'Libre Baskerville', serif",
    border: '3px double #6d0f1a', divider: 'double'
  },
  {
    id: 'handwritten-cafe',
    name: 'Handwritten Café',
    bg: '#fefbf3', text: '#2b1f10', accent: '#a85c2c', muted: '#6b5840',
    titleFont: "'Shadows Into Light', cursive", bodyFont: "'Caveat', cursive",
    border: '1px dashed #a85c2c', divider: 'dashed'
  },
  {
    id: 'art-deco',
    name: 'Art Deco',
    bg: '#0c1821', text: '#e8c26a', accent: '#d4af37', muted: '#8a7a4a',
    titleFont: "'Abril Fatface', serif", bodyFont: "'Josefin Sans', sans-serif",
    border: '2px solid #d4af37', divider: 'double'
  },
  {
    id: 'farmhouse',
    name: 'Farmhouse',
    bg: '#f5ead8', text: '#332518', accent: '#5a6e3a', muted: '#7a6a52',
    titleFont: "'Permanent Marker', cursive", bodyFont: "'Lora', serif",
    border: '2px solid #332518', divider: 'solid'
  },
  {
    id: 'minimal-white',
    name: 'Minimal White',
    bg: '#ffffff', text: '#1a1a1a', accent: '#1a1a1a', muted: '#888888',
    titleFont: "'Josefin Sans', sans-serif", bodyFont: "'Raleway', sans-serif",
    border: 'none', divider: 'solid'
  },
  {
    id: 'carnival',
    name: 'Carnival',
    bg: '#fdf5e6', text: '#2a1458', accent: '#e63946', muted: '#5a4a7a',
    titleFont: "'Lobster', cursive", bodyFont: "'Poppins', sans-serif",
    border: '3px solid #e63946', divider: 'dashed'
  },
  {
    id: 'steakhouse',
    name: 'Steakhouse',
    bg: '#181210', text: '#e8d8c0', accent: '#a8340a', muted: '#8a7560',
    titleFont: "'Oswald', sans-serif", bodyFont: "'Merriweather', serif",
    border: '1px solid #a8340a', divider: 'solid'
  },
  {
    id: 'pastel-bakery',
    name: 'Pastel Bakery',
    bg: '#fff4f7', text: '#4a2a3a', accent: '#e8a0b8', muted: '#a8788a',
    titleFont: "'Satisfy', cursive", bodyFont: "'Poppins', sans-serif",
    border: '1px solid #e8a0b8', divider: 'dotted'
  },
  {
    id: 'newspaper',
    name: 'Newspaper',
    bg: '#f0ece3', text: '#111111', accent: '#111111', muted: '#555555',
    titleFont: "'Playfair Display', serif", bodyFont: "'Libre Baskerville', serif",
    border: '1px solid #111111', divider: 'solid'
  },
  {
    id: 'zen-garden',
    name: 'Zen Garden',
    bg: '#ede8de', text: '#2a2a22', accent: '#6a7a4a', muted: '#7a7260',
    titleFont: "'Cormorant Garamond', serif", bodyFont: "'Josefin Sans', sans-serif",
    border: '1px solid #6a7a4a', divider: 'solid'
  },
  {
    id: 'graffiti',
    name: 'Graffiti',
    bg: '#111111', text: '#f0f0f0', accent: '#39ff14', muted: '#888888',
    titleFont: "'Permanent Marker', cursive", bodyFont: "'Rock Salt', cursive",
    border: '2px solid #39ff14', divider: 'dashed'
  },
];

export const FONT_FAMILIES = [
  { label: 'Playfair Display', value: "'Playfair Display', serif" },
  { label: 'Lora', value: "'Lora', serif" },
  { label: 'Cormorant Garamond', value: "'Cormorant Garamond', serif" },
  { label: 'Merriweather', value: "'Merriweather', serif" },
  { label: 'Libre Baskerville', value: "'Libre Baskerville', serif" },
  { label: 'DM Serif Display', value: "'DM Serif Display', serif" },
  { label: 'Abril Fatface', value: "'Abril Fatface', serif" },
  { label: 'Bebas Neue', value: "'Bebas Neue', sans-serif" },
  { label: 'Oswald', value: "'Oswald', sans-serif" },
  { label: 'Montserrat', value: "'Montserrat', sans-serif" },
  { label: 'Poppins', value: "'Poppins', sans-serif" },
  { label: 'Raleway', value: "'Raleway', sans-serif" },
  { label: 'Josefin Sans', value: "'Josefin Sans', sans-serif" },
  { label: 'Dancing Script', value: "'Dancing Script', cursive" },
  { label: 'Pacifico', value: "'Pacifico', cursive" },
  { label: 'Lobster', value: "'Lobster', cursive" },
  { label: 'Great Vibes', value: "'Great Vibes', cursive" },
  { label: 'Satisfy', value: "'Satisfy', cursive" },
  { label: 'Caveat', value: "'Caveat', cursive" },
  { label: 'Kalam', value: "'Kalam', cursive" },
  { label: 'Permanent Marker', value: "'Permanent Marker', cursive" },
  { label: 'Shadows Into Light', value: "'Shadows Into Light', cursive" },
  { label: 'Rock Salt', value: "'Rock Salt', cursive" },
  { label: 'Special Elite', value: "'Special Elite', monospace" },
  { label: 'Fira Code', value: "'Fira Code', monospace" },
];

export const CANVAS_PRESETS = [
  { label: 'A4 Portrait', width: 794, height: 1123 },
  { label: 'A4 Landscape', width: 1123, height: 794 },
  { label: 'Letter Portrait', width: 816, height: 1056 },
  { label: 'Letter Landscape', width: 1056, height: 816 },
  { label: 'Square', width: 900, height: 900 },
  { label: 'Instagram Story', width: 720, height: 1280 },
  { label: 'Tabloid', width: 1000, height: 1400 },
  { label: 'Wide Banner', width: 1400, height: 700 },
  { label: 'Custom', width: 900, height: 1200 },
];
