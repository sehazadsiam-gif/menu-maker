import React, { useState, useRef, useMemo } from 'react';
import { toPng, toJpeg } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { THEMES, FONT_FAMILIES, CANVAS_PRESETS } from './themes.js';
import MenuPreview from './components/MenuPreview.jsx';

const initialSections = [
  {
    name: 'Breakfast',
    items: [
      { name: 'Homemade Granola', description: 'Oats, honey, almonds, fresh berries', price: '$6.50', image: '' },
      { name: 'Fresh Fruit Cocktail', description: 'Seasonal fruits with mint', price: '$5.00', image: '' },
      { name: 'Eggs, Toast & Fruit', description: 'Two eggs any style, artisan toast', price: '$8.25', image: '' },
    ],
  },
  {
    name: 'Lunch',
    items: [
      { name: 'Soup & Grilled Cheese', description: 'Tomato bisque, aged cheddar', price: '$9.50', image: '' },
      { name: 'Chicken Quesadilla', description: 'Grilled chicken, peppers, salsa', price: '$11.00', image: '' },
      { name: 'Stuffed Potato', description: 'Bacon, sour cream, chives', price: '$8.75', image: '' },
    ],
  },
  {
    name: 'Dinner',
    items: [
      { name: 'Chicken Steak', description: 'Herb-marinated, garlic butter', price: '$15.00', image: '' },
      { name: 'Beef Steak', description: '8oz sirloin, peppercorn sauce', price: '$18.50', image: '' },
      { name: 'Baked Chicken', description: 'Lemon thyme, roasted vegetables', price: '$14.00', image: '' },
    ],
  },
  {
    name: 'Drinks',
    items: [
      { name: 'Green Tea', description: 'Organic loose leaf', price: '$2.50', image: '' },
      { name: 'Hot Chocolate', description: 'Belgian cocoa, whipped cream', price: '$3.75', image: '' },
      { name: 'Lemon Water', description: 'Fresh squeezed', price: '$1.50', image: '' },
    ],
  },
];

export default function App() {
  const [themeId, setThemeId] = useState('classic-cream');
  const [title, setTitle] = useState('Food Menu');
  const [subtitle, setSubtitle] = useState('Est. 1990');
  const [footer, setFooter] = useState('www.yourwebsite.com');
  const [sections, setSections] = useState(initialSections);
  const [columns, setColumns] = useState(3);
  const [showImages, setShowImages] = useState(false);
  const [titleFont, setTitleFont] = useState('');
  const [bodyFont, setBodyFont] = useState('');
  const [titleSize, setTitleSize] = useState(56);
  const [itemNameSize, setItemNameSize] = useState(14);
  const [itemDescSize, setItemDescSize] = useState(11);
  const [priceSize, setPriceSize] = useState(14);
  const [canvasPreset, setCanvasPreset] = useState(0);
  const [width, setWidth] = useState(CANVAS_PRESETS[0].width);
  const [height, setHeight] = useState(CANVAS_PRESETS[0].height);
  const [padding, setPadding] = useState(48);
  const [zoom, setZoom] = useState(0.6);
  const [activeTab, setActiveTab] = useState('content');

  // New customization states
  const [autoHeight, setAutoHeight] = useState(false);
  const [textColor, setTextColor] = useState('');
  const [accentColor, setAccentColor] = useState('');
  const [mutedColor, setMutedColor] = useState('');
  const [bgColor, setBgColor] = useState('');

  const previewRef = useRef(null);

  const theme = useMemo(() => THEMES.find(t => t.id === themeId), [themeId]);

  const settings = {
    title, subtitle, footer, sections, columns, showImages,
    titleFont, bodyFont, titleSize, itemNameSize, itemDescSize, priceSize,
    width, height, padding, autoHeight, textColor, accentColor, mutedColor, bgColor,
  };

  const handlePresetChange = (i) => {
    setCanvasPreset(i);
    setWidth(CANVAS_PRESETS[i].width);
    setHeight(CANVAS_PRESETS[i].height);
  };

  // Section operations
  const addSection = () => setSections([...sections, { name: 'New Section', items: [{ name: 'New Item', description: '', price: '$0.00', image: '' }] }]);
  const deleteSection = (i) => setSections(sections.filter((_, idx) => idx !== i));
  const moveSection = (i, direction) => {
    const newSections = [...sections];
    const targetIndex = i + direction;
    if (targetIndex < 0 || targetIndex >= newSections.length) return;
    [newSections[i], newSections[targetIndex]] = [newSections[targetIndex], newSections[i]];
    setSections(newSections);
  };
  const updateSection = (i, key, val) => {
    const copy = [...sections];
    copy[i] = { ...copy[i], [key]: val };
    setSections(copy);
  };
  const addItem = (si) => {
    const copy = [...sections];
    copy[si] = { ...copy[si], items: [...copy[si].items, { name: 'New Item', description: '', price: '$0.00', image: '' }] };
    setSections(copy);
  };
  const deleteItem = (si, ii) => {
    const copy = [...sections];
    copy[si] = { ...copy[si], items: copy[si].items.filter((_, idx) => idx !== ii) };
    setSections(copy);
  };
  const updateItem = (si, ii, key, val) => {
    const copy = [...sections];
    const items = [...copy[si].items];
    items[ii] = { ...items[ii], [key]: val };
    copy[si] = { ...copy[si], items };
    setSections(copy);
  };

  const handleImageUpload = (si, ii, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => updateItem(si, ii, 'image', e.target.result);
    reader.readAsDataURL(file);
  };

  const download = async (format) => {
    if (!previewRef.current) return;
    try {
      const actualHeight = autoHeight ? previewRef.current.offsetHeight : height;
      const actualWidth = width;

      if (format === 'pdf') {
        const dataUrl = await toPng(previewRef.current, {
          quality: 0.98,
          pixelRatio: 2,
          cacheBust: true,
          backgroundColor: bgColor || theme.bg,
        });
        const pdf = new jsPDF({
          orientation: actualWidth > actualHeight ? 'landscape' : 'portrait',
          unit: 'px',
          format: [actualWidth, actualHeight],
        });
        pdf.addImage(dataUrl, 'PNG', 0, 0, actualWidth, actualHeight);
        pdf.save(`${title.replace(/\s+/g, '-').toLowerCase()}.pdf`);
        return;
      }

      const fn = format === 'jpg' ? toJpeg : toPng;
      const dataUrl = await fn(previewRef.current, {
        quality: 0.98,
        pixelRatio: 2,
        cacheBust: true,
        backgroundColor: bgColor || theme.bg,
      });
      const link = document.createElement('a');
      link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.${format === 'jpg' ? 'jpg' : 'png'}`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      alert('Download failed: ' + err.message);
    }
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <h1>Menu Maker</h1>
          <p>Design. Preview. Download.</p>
        </div>

        <div className="tabs">
          {['content', 'design', 'layout'].map(t => (
            <button
              key={t}
              className={activeTab === t ? 'tab active' : 'tab'}
              onClick={() => setActiveTab(t)}
            >{t}</button>
          ))}
        </div>

        <div className="tab-panel">
          {activeTab === 'content' && (
            <>
              <div className="field">
                <label>Menu Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)} />
              </div>
              <div className="field">
                <label>Subtitle</label>
                <input value={subtitle} onChange={e => setSubtitle(e.target.value)} />
              </div>
              <div className="field">
                <label>Footer</label>
                <input value={footer} onChange={e => setFooter(e.target.value)} />
              </div>

              <div className="field">
                <label className="checkbox">
                  <input type="checkbox" checked={showImages} onChange={e => setShowImages(e.target.checked)} />
                  Show food images
                </label>
              </div>

              <div className="sections-editor">
                {sections.map((sec, si) => (
                  <div key={si} className="section-block">
                    <div className="section-header">
                      <input
                        className="section-name"
                        value={sec.name}
                        onChange={e => updateSection(si, 'name', e.target.value)}
                      />
                      <div className="section-actions">
                        <button className="move-btn" onClick={() => moveSection(si, -1)} disabled={si === 0}>↑</button>
                        <button className="move-btn" onClick={() => moveSection(si, 1)} disabled={si === sections.length - 1}>↓</button>
                        <button className="del" onClick={() => deleteSection(si)}>×</button>
                      </div>
                    </div>
                    {sec.items.map((item, ii) => (
                      <div key={ii} className="item-block">
                        <div className="item-row">
                          <input
                            placeholder="Item name"
                            value={item.name}
                            onChange={e => updateItem(si, ii, 'name', e.target.value)}
                          />
                          <input
                            className="price-input"
                            placeholder="$0.00"
                            value={item.price}
                            onChange={e => updateItem(si, ii, 'price', e.target.value)}
                          />
                          <button className="del small" onClick={() => deleteItem(si, ii)}>×</button>
                        </div>
                        <input
                          placeholder="Description"
                          value={item.description}
                          onChange={e => updateItem(si, ii, 'description', e.target.value)}
                        />
                        {showImages && (
                          <div className="img-row">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={e => handleImageUpload(si, ii, e.target.files[0])}
                            />
                            {item.image && <img src={item.image} alt="" className="img-thumb" />}
                          </div>
                        )}
                      </div>
                    ))}
                    <button className="add-btn" onClick={() => addItem(si)}>+ Add item</button>
                  </div>
                ))}
                <button className="add-section-btn" onClick={addSection}>+ Add section</button>
              </div>
            </>
          )}

          {activeTab === 'design' && (
            <>
              <div className="field">
                <label>Theme ({THEMES.length} available)</label>
                <div className="theme-grid">
                  {THEMES.map(t => (
                    <button
                      key={t.id}
                      className={`theme-swatch ${themeId === t.id ? 'active' : ''}`}
                      onClick={() => setThemeId(t.id)}
                      style={{
                        background: t.bg,
                        color: t.text,
                        borderColor: themeId === t.id ? t.accent : 'transparent',
                      }}
                    >
                      <span style={{ fontFamily: t.titleFont }}>Aa</span>
                      <small>{t.name}</small>
                    </button>
                  ))}
                </div>
              </div>

              <div className="field">
                <label>Title Font (override)</label>
                <select value={titleFont} onChange={e => setTitleFont(e.target.value)}>
                  <option value="">Theme default</option>
                  {FONT_FAMILIES.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
                </select>
              </div>

              <div className="field">
                <label>Body Font (override)</label>
                <select value={bodyFont} onChange={e => setBodyFont(e.target.value)}>
                  <option value="">Theme default</option>
                  {FONT_FAMILIES.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
                </select>
              </div>

              <div className="field">
                <label>Title Size: {titleSize}px</label>
                <input type="range" min="24" max="120" value={titleSize} onChange={e => setTitleSize(+e.target.value)} />
              </div>
              <div className="field">
                <label>Item Name Size: {itemNameSize}px</label>
                <input type="range" min="10" max="28" value={itemNameSize} onChange={e => setItemNameSize(+e.target.value)} />
              </div>
              <div className="field">
                <label>Description Size: {itemDescSize}px</label>
                <input type="range" min="8" max="20" value={itemDescSize} onChange={e => setItemDescSize(+e.target.value)} />
              </div>
              <div className="field">
                <label>Price Size: {priceSize}px</label>
                <input type="range" min="10" max="28" value={priceSize} onChange={e => setPriceSize(+e.target.value)} />
              </div>

              <div className="field">
                <label>Color Customization</label>
                <div className="color-grid">
                  <div className="color-item">
                    <label>Main Text</label>
                    <input type="color" value={textColor || theme.text} onChange={e => setTextColor(e.target.value)} />
                    {textColor && <button className="clear-color" onClick={() => setTextColor('')}>×</button>}
                  </div>
                  <div className="color-item">
                    <label>Accent</label>
                    <input type="color" value={accentColor || theme.accent} onChange={e => setAccentColor(e.target.value)} />
                    {accentColor && <button className="clear-color" onClick={() => setAccentColor('')}>×</button>}
                  </div>
                  <div className="color-item">
                    <label>Muted</label>
                    <input type="color" value={mutedColor || theme.muted} onChange={e => setMutedColor(e.target.value)} />
                    {mutedColor && <button className="clear-color" onClick={() => setMutedColor('')}>×</button>}
                  </div>
                  <div className="color-item">
                    <label>Background</label>
                    <input type="color" value={bgColor || theme.bg} onChange={e => setBgColor(e.target.value)} />
                    {bgColor && <button className="clear-color" onClick={() => setBgColor('')}>×</button>}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'layout' && (
            <>
              <div className="field">
                <label>Canvas Preset</label>
                <select value={canvasPreset} onChange={e => handlePresetChange(+e.target.value)}>
                  {CANVAS_PRESETS.map((p, i) => <option key={i} value={i}>{p.label}</option>)}
                </select>
              </div>

              <div className="field-row">
                <div className="field">
                  <label>Width (px)</label>
                  <input type="number" value={width} onChange={e => setWidth(+e.target.value)} />
                </div>
                <div className="field">
                  <label>Height (px)</label>
                  <input
                    type="number"
                    value={height}
                    onChange={e => setHeight(+e.target.value)}
                    disabled={autoHeight}
                  />
                </div>
              </div>

              <div className="field">
                <label className="checkbox">
                  <input type="checkbox" checked={autoHeight} onChange={e => setAutoHeight(e.target.checked)} />
                  Auto Height (Flexible)
                </label>
              </div>

              <div className="field">
                <label>Columns: {columns}</label>
                <input type="range" min="1" max="5" value={columns} onChange={e => setColumns(+e.target.value)} />
              </div>

              <div className="field">
                <label>Padding: {padding}px</label>
                <input type="range" min="0" max="120" value={padding} onChange={e => setPadding(+e.target.value)} />
              </div>

              <div className="field">
                <label>Preview Zoom: {Math.round(zoom * 100)}%</label>
                <input type="range" min="0.2" max="1.2" step="0.05" value={zoom} onChange={e => setZoom(+e.target.value)} />
              </div>
            </>
          )}
        </div>

        <div className="download-bar">
          <button className="dl-btn primary" onClick={() => download('pdf')}>↓ PDF</button>
          <button className="dl-btn" onClick={() => download('png')}>PNG</button>
          <button className="dl-btn" onClick={() => download('jpg')}>JPG</button>
        </div>
      </aside>

      <main className="canvas-area">
        <div className="canvas-scroll">
          <div
            className="canvas-wrap"
            style={{
              transform: `scale(${zoom})`,
              transformOrigin: 'top center',
              width: `${width}px`,
              height: autoHeight ? 'auto' : `${height}px`,
              minHeight: autoHeight ? '600px' : '0',
            }}
          >
            <MenuPreview
              data={sections}
              theme={theme}
              settings={settings}
              previewRef={previewRef}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
