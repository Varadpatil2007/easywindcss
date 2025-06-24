const style = document.createElement('style');
style.textContent = `
/*====================
  EasyWind CSS Library v1.0
  Author: Varad Patil
  Unique, simple & Tailwind++
=====================*/

/* COLORS */
.c-red { color: red; }
.c-blue { color: blue; }
.c-green { color: green; }
.c-yellow { color: yellow; }
.c-gray { color: gray; }
.c-white { color: #fff; }
.c-black { color: #000; }

/* BACKGROUND */
.bg-red { background: red; }
.bg-blue { background: blue; }
.bg-gradient { background: linear-gradient(to right, #4facfe, #00f2fe); }
.bg-glass { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); }
.bg-dark { background: #222; }
.bg-light { background: #f9f9f9; }

/* SPACING */
.p-0 { padding: 0; }
.p-1 { padding: 4px; }
.p-2 { padding: 8px; }
.p-3 { padding: 12px; }
.p-4 { padding: 16px; }
.p-5 { padding: 20px; }
.px-2 { padding-left:8px; padding-right:8px; }
.py-2 { padding-top:8px; padding-bottom:8px; }
.m-0 { margin: 0; }
.m-1 { margin: 4px; }
.m-2 { margin: 8px; }
.m-3 { margin: 12px; }
.m-auto { margin: auto; }

/* FLEX & GRID */
.flex { display: flex; }
.flex-row { flex-direction: row; }
.flex-col { flex-direction: column; }
.grid { display: grid; }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }
.gap-2 { gap: 8px; }
.gap-4 { gap: 16px; }
.gap-6 { gap: 24px; }

/* ALIGNMENT */
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

/* TEXT */
.fw-bold { font-weight: bold; }
.fw-light { font-weight: 300; }
.fw-normal { font-weight: 400; }
.fs-1 { font-size: 12px; }
.fs-2 { font-size: 16px; }
.fs-3 { font-size: 20px; }
.fs-4 { font-size: 24px; }
.uppercase { text-transform: uppercase; }
.lowercase { text-transform: lowercase; }
.capitalize { text-transform: capitalize; }

/* BORDERS */
.b-1 { border: 1px solid #000; }
.b-2 { border: 2px solid #000; }
.b-none { border: none; }
.br-1 { border-radius: 4px; }
.br-2 { border-radius: 8px; }
.br-full { border-radius: 9999px; }
.shadow { box-shadow: 0 4px 8px rgba(0,0,0,0.1); }
.shadow-xl { box-shadow: 0 8px 16px rgba(0,0,0,0.2); }

/* WIDTH / HEIGHT */
.w-full { width: 100%; }
.w-screen { width: 100vw; }
.h-full { height: 100%; }
.h-screen { height: 100vh; }
.max-w-1 { max-width: 640px; }
.max-w-2 { max-width: 768px; }

/* OPACITY */
op-50 { opacity: 0.5; }
op-75 { opacity: 0.75; }
op-100 { opacity: 1; }

/* CURSOR */
.cursor-pointer { cursor: pointer; }
.cursor-wait { cursor: wait; }
.cursor-not-allowed { cursor: not-allowed; }

/* HOVER */
.hover-bg-red:hover { background: red; }
.hover-scale:hover { transform: scale(1.05); transition: 0.3s; }
.hover-shadow:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.3); }

/* RESPONSIVE */
@media (min-width: 640px) {
  .sm-p-2 { padding: 8px; }
}
@media (min-width: 768px) {
  .md-p-4 { padding: 16px; }
}
@media (min-width: 1024px) {
  .lg-p-8 { padding: 32px; }
}

/* DARK MODE */
.dark .bg-dark { background: #222; color: #eee; }
.dark .text-light { color: #eee; }

/* BUTTON STYLE */
.btn { padding: 8px 16px; border-radius: 4px; background: #4facfe; color: white; cursor: pointer; border: none; transition: all 0.3s ease; }
.btn:hover { background: #00f2fe; }
.btn-outline { background: transparent; border: 2px solid #4facfe; color: #4facfe; }
.btn-outline:hover { background: #4facfe; color: white; }

/* CARD */
.card { border: 1px solid #ddd; padding: 16px; border-radius: 8px; background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }

/* UTILITIES */
.hidden { display: none; }
.block { display: block; }
.inline { display: inline; }
overflow-hidden { overflow: hidden; }
overflow-auto { overflow: auto; }

/* ANIMATION */
.spin { animation: spin 1s linear infinite; }
.bounce { animation: bounce 1s infinite; }
pulse { animation: pulse 2s infinite; }

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
`;
document.head.appendChild(style);

