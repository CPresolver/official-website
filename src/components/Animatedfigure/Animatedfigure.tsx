"use client";

import styles from "./style.module.css";

/**
 * AnimatedFigure
 * Wireframe quarter-arc + sphere illustration with a traveling
 * light line that runs along every stroke, in loop.
 *
 * Usage:
 *   import AnimatedFigure from "@/components/AnimatedFigure";
 *   <AnimatedFigure />
 */
export default function AnimatedFigure() {
  return (
    <svg
      viewBox="0 0 900 780"
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ===== L-shape + quarter arc ===== */}
      <path className={styles.base} d="M 345 10 L 345 550" />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 345 10 L 345 550"
        style={{ animationDelay: "0s" }}
      />

      <path className={styles.base} d="M 345 550 L 880 550" />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 345 550 L 880 550"
        style={{ animationDelay: "0.9s" }}
      />

      <path className={styles.base} d="M 345 10 A 540 540 0 0 1 880 550" />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 345 10 A 540 540 0 0 1 880 550"
        style={{ animationDelay: "1.8s" }}
      />

      {/* ===== Wireframe sphere ===== */}
      <circle className={styles.base} cx="210" cy="550" r="210" />
      <circle
        className={styles.traveler}
        pathLength={1000}
        cx="210"
        cy="550"
        r="210"
        style={{ animationDelay: "2.7s" }}
      />

      <ellipse className={styles.base} cx="210" cy="550" rx="210" ry="62" />
      <ellipse
        className={styles.traveler}
        pathLength={1000}
        cx="210"
        cy="550"
        rx="210"
        ry="62"
        style={{ animationDelay: "3.3s" }}
      />

      <ellipse className={styles.base} cx="210" cy="550" rx="62" ry="210" />
      <ellipse
        className={styles.traveler}
        pathLength={1000}
        cx="210"
        cy="550"
        rx="62"
        ry="210"
        style={{ animationDelay: "3.9s" }}
      />

      <ellipse
        className={styles.base}
        cx="210"
        cy="550"
        rx="210"
        ry="90"
        transform="rotate(-32 210 550)"
      />
      <ellipse
        className={styles.traveler}
        pathLength={1000}
        cx="210"
        cy="550"
        rx="210"
        ry="90"
        transform="rotate(-32 210 550)"
        style={{ animationDelay: "4.5s" }}
      />
    </svg>
  );
}