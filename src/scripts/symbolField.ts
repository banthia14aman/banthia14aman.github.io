// forn.dk-style background: a monospace glyph grid that randomly mutates.
// Cheap: full draw once, then only redraw the handful of cells that change per tick.

const GLYPHS = '01<>{}[]/\\=+*·—|:;アイウエオ◇△○□▷◁+×÷∴∵→←↑↓';
const CELL = 26;

export function initSymbolField(canvasId: string): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let cols = 0, rows = 0, dpr = 1;
  let grid: number[] = [];

  const pick = () => Math.floor(Math.random() * GLYPHS.length);

  function draw(col: number, row: number) {
    const g = grid[row * cols + col];
    if (g === undefined) return;
    const x = col * CELL, y = row * CELL;
    ctx!.clearRect(x, y, CELL, CELL);
    // occasional accent glyph, otherwise faint paper
    const accent = (col * 31 + row * 17) % 47 === 0;
    ctx!.fillStyle = accent ? 'rgba(200,255,77,0.55)' : 'rgba(236,233,225,0.16)';
    ctx!.fillText(GLYPHS[g], x + CELL / 2, y + CELL / 2);
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas!.width = Math.floor(window.innerWidth * dpr);
    canvas!.height = Math.floor(window.innerHeight * dpr);
    canvas!.style.width = window.innerWidth + 'px';
    canvas!.style.height = window.innerHeight + 'px';
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(window.innerWidth / CELL);
    rows = Math.ceil(window.innerHeight / CELL);
    grid = new Array(cols * rows);
    for (let i = 0; i < grid.length; i++) grid[i] = pick();
    ctx!.font = '14px "IBM Plex Mono", monospace';
    ctx!.textAlign = 'center';
    ctx!.textBaseline = 'middle';
    ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) draw(c, r);
  }

  let raf = 0;
  let last = 0;
  function tick(t: number) {
    raf = requestAnimationFrame(tick);
    if (t - last < 70) return; // ~14fps mutation cadence
    last = t;
    const mutations = Math.max(4, Math.floor(cols * rows * 0.006));
    for (let i = 0; i < mutations; i++) {
      const c = Math.floor(Math.random() * cols);
      const r = Math.floor(Math.random() * rows);
      grid[r * cols + c] = pick();
      draw(c, r);
    }
  }

  let rt = 0;
  window.addEventListener('resize', () => {
    clearTimeout(rt);
    rt = window.setTimeout(resize, 150);
  });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else raf = requestAnimationFrame(tick);
  });

  resize();
  raf = requestAnimationFrame(tick);
}
