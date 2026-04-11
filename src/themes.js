// 58 curated menu themes. Each theme defines colors, fonts, and decorative styling.
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
  {
    id: 'nordic-shore',
    name: 'Nordic Shore',
    bg: '#f0f4f7', text: '#2c3e50', accent: '#3498db', muted: '#7f8c8d',
    titleFont: "'Outfit', sans-serif", bodyFont: "'Inter', sans-serif",
    border: '1px solid #3498db', divider: 'solid'
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    bg: '#fff9e6', text: '#4d3300', accent: '#ffcc00', muted: '#996600',
    titleFont: "'Cinzel', serif", bodyFont: "'Prata', serif",
    border: '2px solid #ffcc00', divider: 'double'
  },
  {
    id: 'industrial-iron',
    name: 'Industrial Iron',
    bg: '#2d2d2d', text: '#e0e0e0', accent: '#ff9800', muted: '#888888',
    titleFont: "'Syncopate', sans-serif", bodyFont: "'Arimo', sans-serif",
    border: '3px solid #ff9800', divider: 'solid'
  },
  {
    id: 'tuscan-olive',
    name: 'Tuscan Olive',
    bg: '#fdfcf0', text: '#2d3e2d', accent: '#556b2f', muted: '#808000',
    titleFont: "'EB Garamond', serif", bodyFont: "'Unna', serif",
    border: '1px solid #556b2f', divider: 'dotted'
  },
  {
    id: 'cyber-neon',
    name: 'Cyber Neon',
    bg: '#0a0a0a', text: '#00ffcc', accent: '#ff00ff', muted: '#00ccff',
    titleFont: "'Syncopate', sans-serif", bodyFont: "'Urbanist', sans-serif",
    border: '1px solid #ff00ff', divider: 'solid'
  },
  {
    id: 'velvet-night',
    name: 'Velvet Night',
    bg: '#1a0a1a', text: '#f3e5f5', accent: '#9c27b0', muted: '#7b1fa2',
    titleFont: "'Gloock', serif", bodyFont: "'Tenor Sans', sans-serif",
    border: '1px solid #9c27b0', divider: 'double'
  },
  {
    id: 'boho-sage',
    name: 'Boho Sage',
    bg: '#f7f8f2', text: '#4a5d4a', accent: '#8fbc8f', muted: '#6b8e23',
    titleFont: "'Outfit', sans-serif", bodyFont: "'Urbanist', sans-serif",
    border: '1px dashed #8fbc8f', divider: 'dashed'
  },
  {
    id: 'royal-taj',
    name: 'Royal Taj',
    bg: '#3e0a0a', text: '#ffeb3b', accent: '#ffd700', muted: '#c62828',
    titleFont: "'Cinzel', serif", bodyFont: "'Cormorant Infant', serif",
    border: '2px solid #ffd700', divider: 'double'
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    bg: '#e0f7fa', text: '#006064', accent: '#00acc1', muted: '#4db6ac',
    titleFont: "'Urbanist', sans-serif", bodyFont: "'Inter', sans-serif",
    border: '1px solid #00acc1', divider: 'solid'
  },
  {
    id: 'autumn-spice',
    name: 'Autumn Spice',
    bg: '#fff3e0', text: '#4e342e', accent: '#e65100', muted: '#bf360c',
    titleFont: "'Prata', serif", bodyFont: "'Lato', sans-serif",
    border: '2px solid #e65100', divider: 'solid'
  },
  {
    id: 'midnight-slate',
    name: 'Midnight Slate',
    bg: '#263238', text: '#eceff1', accent: '#607d8b', muted: '#b0bec5',
    titleFont: "'Outfit', sans-serif", bodyFont: "'Inter', sans-serif",
    border: '1px solid #607d8b', divider: 'solid'
  },
  {
    id: 'fresh-lavender',
    name: 'Fresh Lavender',
    bg: '#f3e5f5', text: '#4a148c', accent: '#9c27b0', muted: '#e1bee7',
    titleFont: "'Gloock', serif", bodyFont: "'Outfit', sans-serif",
    border: '1px solid #9c27b0', divider: 'dotted'
  },
  {
    id: 'retro-80s',
    name: 'Retro 80s',
    bg: '#2b0040', text: '#00ff41', accent: '#ff2d55', muted: '#00d9ff',
    titleFont: "'Bangers', cursive", bodyFont: "'Syncopate', sans-serif",
    border: '2px solid #ff2d55', divider: 'solid'
  },
  {
    id: 'coffee-house',
    name: 'Coffee House',
    bg: '#3e2723', text: '#efebe9', accent: '#d7cccb', muted: '#a1887f',
    titleFont: "'EB Garamond', serif", bodyFont: "'Outfit', sans-serif",
    border: '1px dashed #d7cccb', divider: 'dashed'
  },
  {
    id: 'desert-rose',
    name: 'Desert Rose',
    bg: '#fce4ec', text: '#880e4f', accent: '#f06292', muted: '#f8bbd0',
    titleFont: "'Satisfy', cursive", bodyFont: "'Lato', sans-serif",
    border: '1px solid #f06292', divider: 'dotted'
  },
  {
    id: 'modern-monochrome',
    name: 'Modern Monochrome',
    bg: '#f5f5f5', text: '#212121', accent: '#212121', muted: '#757575',
    titleFont: "'Urbanist', sans-serif", bodyFont: "'Inter', sans-serif",
    border: '2px solid #212121', divider: 'solid'
  },
  {
    id: 'deep-forest',
    name: 'Deep Forest',
    bg: '#0d1a0d', text: '#e8f5e9', accent: '#4caf50', muted: '#81c784',
    titleFont: "'Outfit', sans-serif", bodyFont: "'Urbanist', sans-serif",
    border: '1px solid #4caf50', divider: 'solid'
  },
  {
    id: 'sushi-zen',
    name: 'Sushi Zen',
    bg: '#ffffff', text: '#000000', accent: '#d32f2f', muted: '#616161',
    titleFont: "'Tenor Sans', sans-serif", bodyFont: "'Inter', sans-serif",
    border: '2px solid #000000', divider: 'solid'
  },
  {
    id: 'space-odyssey',
    name: 'Space Odyssey',
    bg: '#000000', text: '#ffffff', accent: '#e0e0e0', muted: '#bdbdbd',
    titleFont: "'Syncopate', sans-serif", bodyFont: "'Outfit', sans-serif",
    border: '1px solid #ffffff', divider: 'solid'
  },
  {
    id: 'italian-bistro',
    name: 'Italian Bistro',
    bg: '#fffdeb', text: '#3e2723', accent: '#c62828', muted: '#2e7d32',
    titleFont: "'EB Garamond', serif", bodyFont: "'Unna', serif",
    border: '2px solid #c62828', divider: 'double'
  },
  {
    id: 'rustic-copper',
    name: 'Rustic Copper',
    bg: '#3c2a21', text: '#e5e5cb', accent: '#d4a373', muted: '#faedcd',
    titleFont: "'Outfit', sans-serif", bodyFont: "'Lato', sans-serif",
    border: '1px solid #d4a373', divider: 'dashed'
  },
  {
    id: 'elegant-orchid',
    name: 'Elegant Orchid',
    bg: '#f5f3f7', text: '#311b92', accent: '#673ab7', muted: '#9575cd',
    titleFont: "'Gloock', serif", bodyFont: "'Outfit', sans-serif",
    border: '1px solid #673ab7', divider: 'dotted'
  },
  {
    id: 'summer-citrus',
    name: 'Summer Citrus',
    bg: '#fff9c4', text: '#f57f17', accent: '#fbc02d', muted: '#fff176',
    titleFont: "'Bangers', cursive", bodyFont: "'Inter', sans-serif",
    border: '2px solid #fbc02d', divider: 'solid'
  },
  {
    id: 'arctic-ice',
    name: 'Arctic Ice',
    bg: '#e1f5fe', text: '#01579b', accent: '#03a9f4', muted: '#b3e5fc',
    titleFont: "'Urbanist', sans-serif", bodyFont: "'Arimo', sans-serif",
    border: '1px solid #03a9f4', divider: 'solid'
  },
  {
    id: 'peachy-pastel',
    name: 'Peachy Pastel',
    bg: '#fff5f5', text: '#4a2a2a', accent: '#ff8a80', muted: '#ffccbc',
    titleFont: "'Outfit', sans-serif", bodyFont: "'Lato', sans-serif",
    border: '1px solid #ff8a80', divider: 'dotted'
  },
  {
    id: 'graphite-tech',
    name: 'Graphite Tech',
    bg: '#212121', text: '#ffffff', accent: '#00e5ff', muted: '#404040',
    titleFont: "'Syncopate', sans-serif", bodyFont: "'Inter', sans-serif",
    border: '1px solid #00e5ff', divider: 'solid'
  },
  {
    id: 'royal-emerald',
    name: 'Royal Emerald',
    bg: '#002a1a', text: '#e0f2f1', accent: '#00c853', muted: '#004d40',
    titleFont: "'Cinzel', serif", bodyFont: "'Cormorant Infant', serif",
    border: '2px solid #00c853', divider: 'double'
  },
  {
    id: 'vibrant-sunset',
    name: 'Vibrant Sunset',
    bg: '#ff6f00', text: '#ffffff', accent: '#ffeb3b', muted: '#e65100',
    titleFont: "'Titan One', cursive", bodyFont: "'Inter', sans-serif",
    border: '2px solid #ffffff', divider: 'solid'
  },
  {
    id: 'minimalist-sand',
    name: 'Minimalist Sand',
    bg: '#f5f5dc', text: '#3e2723', accent: '#a1887f', muted: '#d7cccb',
    titleFont: "'Outfit', sans-serif", bodyFont: "'Lato', sans-serif",
    border: '1px solid #a1887f', divider: 'solid'
  },
  {
    id: 'galaxy-quest',
    name: 'Galaxy Quest',
    bg: '#1b1b2f', text: '#e43f5a', accent: '#162447', muted: '#1f4068',
    titleFont: "'Syncopate', sans-serif", bodyFont: "'Urbanist', sans-serif",
    border: '1px solid #e43f5a', divider: 'solid'
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
  { label: 'Outfit', value: "'Outfit', sans-serif" },
  { label: 'Inter', value: "'Inter', sans-serif" },
  { label: 'Urbanist', value: "'Urbanist', sans-serif" },
  { label: 'Lato', value: "'Lato', sans-serif" },
  { label: 'Arimo', value: "'Arimo', sans-serif" },
  { label: 'Cinzel', value: "'Cinzel', serif" },
  { label: 'Prata', value: "'Prata', serif" },
  { label: 'Unna', value: "'Unna', serif" },
  { label: 'Gloock', value: "'Gloock', serif" },
  { label: 'EB Garamond', value: "'EB Garamond', serif" },
  { label: 'Cormorant Infant', value: "'Cormorant Infant', serif" },
  { label: 'Tenor Sans', value: "'Tenor Sans', sans-serif" },
  { label: 'Syncopate', value: "'Syncopate', sans-serif" },
  { label: 'Titan One', value: "'Titan One', cursive" },
  { label: 'Bangers', value: "'Bangers', cursive" },
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
