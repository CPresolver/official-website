"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type NeuralBrainProps = {
  /** Caminho da imagem, ex: "/brain.png" (dentro de /public) */
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  /** Região do cérebro onde os neurónios aparecem, em % do container (0-1) */
  region?: { cx: number; cy: number; rx: number; ry: number };
  /** Número de nós / cor / velocidade */
  nodeCount?: number;
  color?: string; // cor base "r,g,b"
  connectDistanceRatio?: number; // 0-1, relativo à largura
};

export default function NeuralBrain({
  src,
  alt = "Cérebro artificial",
  width = 586,
  height = 728,
  className,
  region = { cx: 0.56, cy: 0.42, rx: 0.44, ry: 0.32 },
  nodeCount = 34,
  color = "160,255,225",
  connectDistanceRatio = 0.16,
}: NeuralBrainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let nodes: { x: number; y: number }[] = [];
    let edges: { a: { x: number; y: number }; b: { x: number; y: number }; speed: number; off: number }[] = [];

    function build(W: number, H: number) {
      nodes = [];
      const cx = W * region.cx;
      const cy = H * region.cy;
      const rx = W * region.rx;
      const ry = H * region.ry;

      let guard = 0;
      while (nodes.length < nodeCount && guard < nodeCount * 50) {
        guard++;
        const x = Math.random() * W;
        const y = Math.random() * H;
        const dx = (x - cx) / rx;
        const dy = (y - cy) / ry;
        if (dx * dx + dy * dy < 1) {
          nodes.push({ x, y });
        }
      }

      edges = [];
      const maxDist = W * connectDistanceRatio;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < maxDist) {
            edges.push({
              a: nodes[i],
              b: nodes[j],
              speed: 0.4 + Math.random() * 0.6,
              off: Math.random(),
            });
          }
        }
      }
    }

    function resize() {
      const rect = container!.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      canvas!.style.width = rect.width + "px";
      canvas!.style.height = rect.height + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      build(rect.width, rect.height);
    }

    function frame(t: number) {
      const rect = container!.getBoundingClientRect();
      ctx!.clearRect(0, 0, rect.width, rect.height);
      ctx!.globalCompositeOperation = "lighter";

      for (const e of edges) {
        ctx!.strokeStyle = `rgba(${color},0.28)`;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.moveTo(e.a.x, e.a.y);
        ctx!.lineTo(e.b.x, e.b.y);
        ctx!.stroke();

        const p = ((t * 0.00012 * e.speed) + e.off) % 1;
        const px = e.a.x + (e.b.x - e.a.x) * p;
        const py = e.a.y + (e.b.y - e.a.y) * p;
        const grad = ctx!.createRadialGradient(px, py, 0, px, py, 7);
        grad.addColorStop(0, `rgba(${color},0.95)`);
        grad.addColorStop(1, `rgba(${color},0)`);
        ctx!.fillStyle = grad;
        ctx!.beginPath();
        ctx!.arc(px, py, 7, 0, Math.PI * 2);
        ctx!.fill();
      }

      for (const n of nodes) {
        ctx!.fillStyle = `rgba(${color},0.55)`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(frame);
    }

    resize();
    raf = requestAnimationFrame(frame);

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [region, nodeCount, color, connectDistanceRatio]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "relative", width: "100%", maxWidth: width }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ width: "100%", height: "auto", display: "block" }}
        priority
      />
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />
    </div>
  );
}