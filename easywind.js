const style = document.createElement('style');
style.textContent = `

/* === DISPLAY & POSITION === */
.block { display: block; }
.flex { display: flex; }
.grid { display: grid; }
.inline-block { display: inline-block; }
.hidden { display: none; }
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }
.justify-between { justify-content: space-between; }
.justify-center { justify-content: center; }
.items-center { align-items: center; }
.flex-col { flex-direction: column; }
.flex-row { flex-direction: row; }

/* === SIZING === */
.w-full { width: 100%; }
.h-full { height: 100%; }
.min-h-screen { min-height: 100vh; }
.w-1\\/2 { width: 50%; }
.max-w-300 { max-width: 300px; }

/* === SPACING === */
.p-2 { padding: 0.5rem; }
.p-4 { padding: 1rem; }
.p-6 { padding: 1.5rem; }
.m-2 { margin: 0.5rem; }
.m-4 { margin: 1rem; }
.mt-2 { margin-top: 0.5rem; }
.mt-4 { margin-top: 1rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-4 { margin-bottom: 1rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.gap-4 { gap: 1rem; }

/* === TEXT === */
.text-left { text-align: left; }
.text-center { text-align: center; }
.fs-1 { font-size: 0.75rem; }
.fs-2 { font-size: 1rem; }
.fs-3 { font-size: 1.5rem; }
.fs-4 { font-size: 2rem; }
.fw-bold { font-weight: 700; }
.fw-semibold { font-weight: 600; }

/* === COLORS === */
.bg-white { background: #ffffff; }
.bg-light { background: #f9f9f9; }
.bg-dark { background: #1f1f1f; }
.bg-blue { background: #3b82f6; }
.bg-red { background: #ef4444; }
.bg-green { background: #10b981; }
.bg-yellow { background: #facc15; }
.bg-gradient {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
.c-white { color: #ffffff; }
.c-dark { color: #1f2937; }
.c-blue { color: #3b82f6; }
.c-yellow { color: #facc15; }

/* === BORDER & RADIUS === */
.border { border: 1px solid #ccc; }
.rounded { border-radius: 8px; }
.rounded-full { border-radius: 9999px; }

/* === SHADOW === */
.shadow { box-shadow: 0 4px 15px rgba(0,0,0,0.1); }

/* === HOVER EFFECTS === */
.hover-scale:hover { transform: scale(1.05); transition: all 0.3s ease; }
.hover-bg-blue:hover { background: #2563eb; }

/* === BUTTON === */
.btn {
  padding: 10px 20px;
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn:hover {
  background: #2563eb;
  transform: scale(1.05);
}

/* === CARD === */
.card {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
}

/* === MODAL === */
.modal {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.modal-content {
  background: #fff;
  padding: 24px;
  border-radius: 10px;
  max-width: 400px;
}

/* === NAVBAR === */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: #fff;
  color: #1f2937;
}
.navbar a {
  margin: 0 10px;
  color: #1f2937;
  text-decoration: none;
}
.navbar a:hover {
  color: #3b82f6;
}

/* === LOADER === */
.loader {
  border: 6px solid #e5e7eb;
  border-top: 6px solid #3b82f6;
  border-radius: 50%;
  width: 40px; height: 40px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* === GLASSMORPHISM === */
.bg-glass {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
}

/* === RESPONSIVE (basic) === */
@media(min-width:768px){
  .md-flex { display: flex; }
  .md-w-1\\/2 { width: 50%; }
  .md-grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
}

`;
document.head.appendChild(style);

