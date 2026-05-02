export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919036050108"
      target="_blank"
      rel="noreferrer"
      style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 999,
        width: 58, height: 58, borderRadius: '50%',
        background: '#25D366', color: 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.7rem', textDecoration: 'none',
        boxShadow: '0 6px 20px rgba(37,211,102,0.4)',
        animation: 'waPulse 2.5s ease-in-out infinite',
      }}
    >💬</a>
  )
}
