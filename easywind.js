const style = document.createElement('style');
style.textContent = `
/* Basic Display */
.block { display: block; }
.flex { display: flex; }
.grid { display: grid; }
.inline-block { display: inline-block; }
.hidden { display: none; }

/* Positioning */
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }

/* Sizing */
.w-full { width: 100%; }
.h-full { height: 100%; }
.min-h-screen { min-height: 100vh; }
.w-1\\/2 { width: 50%; }
.h-10 { height: 2.5rem; }

/* Padding & Margin */
.p-2 { padding: 0.5rem; }
.p-4 { padding: 1rem; }
.p-6 { padding: 1.5rem; }
.m-2 { margin: 0.5rem; }
.m-4 { margin: 1rem; }
.mt-4 { margin-top: 1rem; }
.mb-4 { margin-bottom: 1rem; }
.mx-auto { margin-left: auto; margin-right: auto; }

/* Text */
.text-center { text-align: center; }
.text-left { text-align: left; }
.fs-1 { font-size: 0.75rem; }
.fs-2 { font-size: 1rem; }
.fs-3 { font-size: 1.5rem; }
.fw-bold { font-weight: 700; }
.fw-semibold { font-weight: 600; }

/* Colors */
.bg-blue { background: #3498db; }
.bg-red { background: #e74c3c; }
.bg-green { background: #2ecc71; }
.bg-yellow { background: #f1c40f; }
.bg-light { background: #f9f9f9; }
.bg-dark { background: #333; }
.c-white { color: #fff; }
.c-dark { color: #222; }
.c-blue { color: #3498db; }

/* Flex/Grid */
.flex-row { flex-direction: row; }
.flex-col { flex-direction: column; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.items-center { align-items: center; }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }

/* Borders & Radius */
.border { border: 1px solid #ddd; }
.rounded { border-radius: 8px; }
.rounded-full { border-radius: 9999px; }

/* Shadow */
.shadow { box-shadow: 0 5px 15px rgba(0,0,0,0.1); }

/* Hover */
.hover-scale:hover { transform: scale(1.05); transition: 0.3s; }
.hover-bg-blue:hover { background: #2980b9; }

/* Transitions */
.transition { transition: all 0.3s ease; }
.duration-300 { transition-duration: 300ms; }

/* Glassmorphism */
.bg-glass {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 12px;
}

/* Gradients */
.bg-gradient {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
.bg-gradient-pink {
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
}

/* Buttons */
.btn {
  padding: 10px 20px;
  background: #3498db;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}
.btn:hover {
  background: #2980b9;
  transform: scale(1.05);
}

/* Cards */
.card {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: 0.3s;
}
.card:hover {
  transform: translateY(-5px);
}

/* Modals */
.modal {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: #3498db;
  color: white;
}
.navbar a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}
.navbar a:hover {
  color: yellow;
}

/* Loader */
.loader {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 40px; height: 40px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive (sample) */
@media(min-width:640px) {
  .sm-w-full { width: 100%; }
}
@media(min-width:768px) {
  .md-grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
  .md-w-1\\/2 { width: 50%; }
}
@media(min-width:1024px) {
  .lg-p-6 { padding: 1.5rem; }
}
`;
document.head.appendChild(style);
