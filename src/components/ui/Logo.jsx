/**
 * Logo de Scotiabank — Banca Digital.
 * Usa la imagen real del logo institucional.
 *
 * @param {Object} props
 * @param {number} [props.size=44]
 * @param {boolean} [props.wordmark=true]
 * @param {'dark'|'light'} [props.variant='dark']
 */
export default function Logo({ size = 44, wordmark = true, variant = 'dark' }) {
  const textColor = variant === 'light' ? '#ffffff' : '#e2132b'
  const subColor = variant === 'light' ? 'rgba(255,255,255,.8)' : '#6b6b7b'
  const nameSize = Math.round(size * 0.5)
  const subSize = Math.max(9, Math.round(size * 0.23))
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <img
        src="/logo-scotiabank.jpg"
        alt="Scotiabank"
        style={{ height: size, width: 'auto', objectFit: 'contain', borderRadius: 8 }}
      />
      {wordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.04 }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: nameSize,
              color: textColor,
              letterSpacing: '-0.5px',
            }}
          >
            Scotiabank
          </span>
          <span
            style={{
              fontSize: subSize,
              fontWeight: 700,
              color: subColor,
              letterSpacing: '1.2px',
            }}
          >
            BANCA DIGITAL
          </span>
        </span>
      )}
    </span>
  )
}