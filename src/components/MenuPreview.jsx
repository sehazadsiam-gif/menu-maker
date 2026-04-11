import React from 'react';

export default function MenuPreview({ data, theme, settings, previewRef }) {
  const {
    title, subtitle, footer, sections, columns,
    showImages, titleFont: tFontOverride, bodyFont: bFontOverride,
    titleSize, itemNameSize, itemDescSize, priceSize,
    width, height, padding, autoHeight,
    textColor, accentColor, mutedColor, bgColor
  } = settings;

  const titleFont = tFontOverride || theme.titleFont;
  const bodyFont = bFontOverride || theme.bodyFont;

  // distribute sections across columns
  const cols = Array.from({ length: columns }, () => []);
  sections.forEach((sec, i) => cols[i % columns].push(sec));

  return (
    <div
      ref={previewRef}
      className="menu-canvas"
      style={{
        width: `${width}px`,
        height: autoHeight ? 'auto' : `${height}px`,
        minHeight: autoHeight ? '100%' : '0',
        background: bgColor || theme.bg,
        color: textColor || theme.text,
        fontFamily: bodyFont,
        padding: `${padding}px`,
        border: theme.border,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header style={{ textAlign: 'center', marginBottom: 24 }}>
        <h1 style={{
          fontFamily: titleFont,
          fontSize: `${titleSize}px`,
          color: textColor || theme.text,
          margin: 0,
          lineHeight: 1.05,
          letterSpacing: '0.5px',
        }}>{title}</h1>
        {subtitle && (
          <div style={{
            fontFamily: bodyFont,
            fontSize: `${Math.max(12, titleSize * 0.3)}px`,
            color: mutedColor || theme.muted,
            marginTop: 6,
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}>{subtitle}</div>
        )}
        <div style={{
          width: '60%',
          margin: '14px auto 0',
          borderTop: `2px ${theme.divider} ${accentColor || theme.accent}`,
        }} />
      </header>

      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: 32,
        overflow: 'hidden',
      }}>
        {cols.map((colSections, ci) => (
          <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {colSections.map((sec, si) => (
              <section key={si}>
                <h2 style={{
                  fontFamily: titleFont,
                  fontSize: `${Math.max(16, titleSize * 0.42)}px`,
                  color: accentColor || theme.accent,
                  margin: '0 0 10px 0',
                  borderBottom: `1px ${theme.divider} ${accentColor || theme.accent}`,
                  paddingBottom: 4,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}>{sec.name}</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {sec.items.map((item, ii) => (
                    <li key={ii} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      {showImages && item.image && (
                        <img
                          src={item.image}
                          alt=""
                          crossOrigin="anonymous"
                          style={{
                            width: 48, height: 48, objectFit: 'cover',
                            borderRadius: 4, flexShrink: 0,
                            border: `1px solid ${mutedColor || theme.muted}`,
                          }}
                        />
                      )}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'baseline',
                          gap: 8,
                        }}>
                          <div style={{
                            flex: 1,
                            fontFamily: bodyFont,
                            fontSize: `${itemNameSize}px`,
                            fontWeight: 700,
                            color: textColor || theme.text,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            wordBreak: 'break-word',
                          }}>{item.name}</div>
                          {item.price && (
                            <div style={{
                              fontFamily: bodyFont,
                              fontSize: `${priceSize}px`,
                              fontWeight: 700,
                              color: accentColor || theme.accent,
                              whiteSpace: 'nowrap',
                            }}>{item.price}</div>
                          )}
                        </div>
                        {item.description && (
                          <div style={{
                            fontFamily: bodyFont,
                            fontSize: `${itemDescSize}px`,
                            color: mutedColor || theme.muted,
                            marginTop: 2,
                            lineHeight: 1.35,
                          }}>{item.description}</div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        ))}
      </div>

      {footer && (
        <footer style={{
          textAlign: 'center',
          marginTop: 18,
          paddingTop: 10,
          borderTop: `1px ${theme.divider} ${accentColor || theme.accent}`,
          fontFamily: bodyFont,
          fontSize: 12,
          color: mutedColor || theme.muted,
          letterSpacing: '1.5px',
        }}>{footer}</footer>
      )}
    </div>
  );
}
