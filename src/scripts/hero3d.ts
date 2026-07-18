// Interactive Three.js hero: a Fibonacci-sphere point cloud that breathes,
// rotates, and reacts to mouse + scroll. Vanilla three (no React) to stay lean.
import * as THREE from 'three';

const VERT = /* glsl */ `
  uniform float uTime;
  uniform float uScroll;
  varying float vGlow;
  void main() {
    vec3 p = position;
    float n = sin(p.x * 3.0 + uTime) * 0.08
            + sin(p.y * 4.0 + uTime * 1.3) * 0.06
            + sin(p.z * 3.5 + uTime * 0.9) * 0.07;
    p += normalize(position) * n * (1.0 + uScroll * 0.6);
    vGlow = 0.5 + 0.5 * sin(uTime * 1.2 + p.y * 2.5);
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = (2.2 + 7.0 / max(-mv.z, 0.1));
    gl_Position = projectionMatrix * mv;
  }
`;

const FRAG = /* glsl */ `
  precision mediump float;
  uniform vec3 uColor;
  uniform vec3 uColor2;
  varying float vGlow;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.0, d) * (0.3 + 0.55 * vGlow);
    vec3 col = mix(uColor, uColor2, vGlow);
    gl_FragColor = vec4(col, a);
  }
`;

function fibonacciSphere(n: number, radius: number): Float32Array {
  const pts = new Float32Array(n * 3);
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    pts[i * 3] = Math.cos(theta) * r * radius;
    pts[i * 3 + 1] = y * radius;
    pts[i * 3 + 2] = Math.sin(theta) * r * radius;
  }
  return pts;
}

export function initHero3D(canvasId: string): void {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
  if (!canvas) return;

  let renderer: THREE.WebGLRenderer;
  try {
    // antialias off: MSAA does nothing for round point sprites, only costs GPU
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  } catch {
    return; // no WebGL → CSS/symbol-field carry the hero
  }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 4.2;

  const count = window.innerWidth < 700 ? 3500 : 6500;
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(fibonacciSphere(count, 1.5), 3));

  const uniforms = {
    uTime: { value: 0 },
    uScroll: { value: 0 },
    uColor: { value: new THREE.Color('#c8ff4d') },
    uColor2: { value: new THREE.Color('#6ea8ff') },
  };
  const material = new THREE.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const points = new THREE.Points(geo, material);
  scene.add(points);

  function size() {
    const w = canvas!.clientWidth || window.innerWidth;
    const h = canvas!.clientHeight || window.innerHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  size();
  window.addEventListener('resize', size);

  const mouse = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };
  window.addEventListener('mousemove', (e) => {
    target.x = (e.clientX / window.innerWidth - 0.5) * 2;
    target.y = (e.clientY / window.innerHeight - 0.5) * 2;
  });
  window.addEventListener('scroll', () => {
    uniforms.uScroll.value = Math.min(window.scrollY / window.innerHeight, 1.5);
  }, { passive: true });

  let visible = true;
  new IntersectionObserver(
    (entries) => { visible = entries[0].isIntersecting; },
    { threshold: 0 }
  ).observe(canvas);

  const clock = new THREE.Clock();
  let raf = 0;
  function loop() {
    raf = requestAnimationFrame(loop);
    if (!visible) return;
    const t = clock.getElapsedTime();
    uniforms.uTime.value = reduced ? 0 : t;
    mouse.x += (target.x - mouse.x) * 0.05;
    mouse.y += (target.y - mouse.y) * 0.05;
    points.rotation.y = (reduced ? 0 : t * 0.06) + mouse.x * 0.4;
    points.rotation.x = mouse.y * 0.3 + uniforms.uScroll.value * 0.5;
    camera.position.x = mouse.x * 0.3;
    camera.position.y = -mouse.y * 0.3;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  }
  document.addEventListener('visibilitychange', () => {
    cancelAnimationFrame(raf); // never stack a second loop
    if (!document.hidden) loop();
  });
  loop();
}
