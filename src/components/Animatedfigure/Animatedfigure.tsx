"use client";

import styles from "./style.module.css";

/**
 * AnimatedFigure
 * Pixel-traced reproduction of the wireframe quarter-arc + sphere
 * illustration, with a traveling light line that sweeps across
 * every stroke of the original drawing, in loop.
 *
 * The path data below was extracted directly from the reference
 * image (skeletonized + vectorized), so the shapes match exactly -
 * including the broken/hidden segments of the sphere's wireframe.
 *
 * Usage:
 *   import AnimatedFigure from "@/components/AnimatedFigure";
 *   <AnimatedFigure />
 */
export default function AnimatedFigure() {
  return (
    <svg
      viewBox="0 0 893 757"
      className={styles.svg}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className={styles.base} d="M 90.0 418.0 L 84.0 424.0" />
      <path className={styles.base} d="M 2.0 535.0 L 9.0 502.0 L 25.0 474.0 L 48.0 448.0 L 81.0 424.0" />
      <path className={styles.base} d="M 201.0 336.0 L 174.0 341.0 L 140.0 359.0 L 114.0 382.0 L 90.0 414.0 L 90.0 417.0" />
      <path className={styles.base} d="M 83.0 426.0 L 67.0 467.0 L 59.0 511.0" />
      <path className={styles.base} d="M 91.0 418.0 L 137.0 400.0 L 177.0 392.0" />
      <path className={styles.base} d="M 203.0 336.0 L 216.0 336.0" />
      <path className={styles.base} d="M 2.0 553.0 L 2.0 537.0" />
      <path className={styles.base} d="M 178.0 391.0 L 189.0 355.0 L 202.0 337.0" />
      <path className={styles.base} d="M 57.0 513.0 L 28.0 521.0 L 3.0 536.0" />
      <path className={styles.base} d="M 178.0 393.0 L 175.0 410.0" />
      <path className={styles.base} d="M 174.0 412.0 L 173.0 421.0" />
      <path className={styles.base} d="M 241.0 391.0 L 232.0 361.0 L 217.0 337.0" />
      <path className={styles.base} d="M 57.0 576.0 L 26.0 567.0 L 3.0 554.0" />
      <path className={styles.base} d="M 179.0 392.0 L 209.0 390.0 L 240.0 392.0" />
      <path className={styles.base} d="M 58.0 575.0 L 56.0 548.0 L 58.0 514.0" />
      <path className={styles.base} d="M 344.0 423.0 L 345.0 1.0 L 388.0 1.0 L 448.0 7.0 L 505.0 18.0 L 543.0 29.0 L 587.0 46.0 L 636.0 71.0 L 685.0 104.0 L 719.0 134.0" />
      <path className={styles.base} d="M 161.0 499.0 L 107.0 503.0 L 60.0 512.0" />
      <path className={styles.base} d="M 162.0 498.0 L 168.0 437.0" />
      <path className={styles.base} d="M 2.0 555.0 L 9.0 588.0 L 26.0 618.0 L 57.0 650.0 L 83.0 666.0" />
      <path className={styles.base} d="M 332.0 416.0 L 332.0 413.0 L 311.0 384.0 L 282.0 358.0 L 249.0 341.0 L 218.0 336.0" />
      <path className={styles.base} d="M 331.0 417.0 L 286.0 400.0 L 255.0 393.0 L 243.0 393.0" />
      <path className={styles.base} d="M 162.0 499.0 L 162.0 552.0" />
      <path className={styles.base} d="M 242.0 394.0 L 250.0 438.0 L 255.0 497.0" />
      <path className={styles.base} d="M 59.0 579.0 L 67.0 623.0 L 84.0 665.0" />
      <path className={styles.base} d="M 60.0 578.0 L 110.0 586.0 L 163.0 591.0" />
      <path className={styles.base} d="M 254.0 498.0 L 165.0 498.0" />
      <path className={styles.base} d="M 164.0 586.0 L 164.0 555.0" />
      <path className={styles.base} d="M 84.0 666.0 L 90.0 672.0" />
      <path className={styles.base} d="M 333.0 418.0 L 339.0 424.0" />
      <path className={styles.base} d="M 342.0 430.0 L 339.0 425.0" />
      <path className={styles.base} d="M 165.0 591.0 L 191.0 592.0" />
      <path className={styles.base} d="M 172.0 590.0 L 193.0 590.0" />
      <path className={styles.base} d="M 345.0 443.0 L 343.0 431.0" />
      <path className={styles.base} d="M 256.0 499.0 L 255.0 588.0" />
      <path className={styles.base} d="M 256.0 499.0 L 297.0 501.0 L 343.0 508.0" />
      <path className={styles.base} d="M 164.0 592.0 L 167.0 641.0 L 177.0 696.0" />
      <path className={styles.base} d="M 344.0 445.0 L 344.0 507.0" />
      <path className={styles.base} d="M 91.0 673.0 L 135.0 689.0 L 176.0 697.0" />
      <path className={styles.base} d="M 252.0 590.0 L 228.0 590.0" />
      <path className={styles.base} d="M 254.0 592.0 L 223.0 592.0" />
      <path className={styles.base} d="M 364.0 511.0 L 357.0 473.0 L 346.0 444.0" />
      <path className={styles.base} d="M 269.0 589.0 L 258.0 589.0" />
      <path className={styles.base} d="M 256.0 592.0 L 270.0 591.0" />
      <path className={styles.base} d="M 363.0 512.0 L 345.0 509.0" />
      <path className={styles.base} d="M 274.0 590.0 L 283.0 590.0" />
      <path className={styles.base} d="M 90.0 674.0 L 110.0 704.0 L 137.0 729.0 L 167.0 746.0 L 187.0 752.0 L 202.0 753.0" />
      <path className={styles.base} d="M 420.0 538.0 L 420.0 526.0 L 413.0 501.0 L 396.0 471.0 L 372.0 445.0 L 345.0 427.0" />
      <path className={styles.base} d="M 365.0 548.0 L 344.0 547.0 L 344.0 510.0" />
      <path className={styles.base} d="M 255.0 593.0 L 251.0 645.0 L 241.0 697.0" />
      <path className={styles.base} d="M 366.0 547.0 L 365.0 515.0" />
      <path className={styles.base} d="M 179.0 698.0 L 240.0 698.0" />
      <path className={styles.base} d="M 332.0 584.0 L 321.0 585.0" />
      <path className={styles.base} d="M 202.0 752.0 L 188.0 732.0 L 178.0 699.0" />
      <path className={styles.base} d="M 419.0 538.0 L 409.0 529.0 L 393.0 521.0 L 366.0 514.0" />
      <path className={styles.base} d="M 363.0 585.0 L 362.0 578.0 L 346.0 581.0" />
      <path className={styles.base} d="M 367.0 548.0 L 419.0 548.0" />
      <path className={styles.base} d="M 366.0 549.0 L 366.0 575.0 L 404.0 563.0 L 419.0 551.0" />
      <path className={styles.base} d="M 362.0 587.0 L 360.0 601.0" />
      <path className={styles.base} d="M 217.0 753.0 L 229.0 736.0 L 241.0 699.0" />
      <path className={styles.base} d="M 217.0 753.0 L 203.0 753.0" />
      <path className={styles.base} d="M 420.0 547.0 L 420.0 539.0" />
      <path className={styles.base} d="M 246.0 698.0 L 298.0 687.0" />
      <path className={styles.base} d="M 343.0 658.0 L 342.0 655.0 L 349.0 640.0 L 357.0 612.0" />
      <path className={styles.base} d="M 296.0 685.0 L 310.0 681.0 L 335.0 669.0" />
      <path className={styles.base} d="M 339.0 667.0 L 370.0 647.0 L 397.0 618.0 L 414.0 586.0 L 420.0 564.0 L 420.0 551.0" />
      <path className={styles.base} d="M 217.0 753.0 L 231.0 753.0 L 256.0 746.0 L 285.0 730.0 L 315.0 702.0 L 338.0 668.0" />
      <path className={styles.base} d="M 836.0 307.0 L 810.0 252.0 L 792.0 222.0 L 765.0 184.0 L 734.0 149.0" />
      <path className={styles.base} d="M 421.0 548.0 L 891.0 548.0 L 890.0 510.0" />
      <path className={styles.base} d="M 888.0 492.0 L 889.0 508.0" />

      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 90.0 418.0 L 84.0 424.0"
        style={{ animationDelay: "0.0s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 2.0 535.0 L 9.0 502.0 L 25.0 474.0 L 48.0 448.0 L 81.0 424.0"
        style={{ animationDelay: "0.039s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 201.0 336.0 L 174.0 341.0 L 140.0 359.0 L 114.0 382.0 L 90.0 414.0 L 90.0 417.0"
        style={{ animationDelay: "0.078s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 83.0 426.0 L 67.0 467.0 L 59.0 511.0"
        style={{ animationDelay: "0.117s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 91.0 418.0 L 137.0 400.0 L 177.0 392.0"
        style={{ animationDelay: "0.157s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 203.0 336.0 L 216.0 336.0"
        style={{ animationDelay: "0.196s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 2.0 553.0 L 2.0 537.0"
        style={{ animationDelay: "0.235s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 178.0 391.0 L 189.0 355.0 L 202.0 337.0"
        style={{ animationDelay: "0.274s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 57.0 513.0 L 28.0 521.0 L 3.0 536.0"
        style={{ animationDelay: "0.313s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 178.0 393.0 L 175.0 410.0"
        style={{ animationDelay: "0.352s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 174.0 412.0 L 173.0 421.0"
        style={{ animationDelay: "0.391s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 241.0 391.0 L 232.0 361.0 L 217.0 337.0"
        style={{ animationDelay: "0.43s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 57.0 576.0 L 26.0 567.0 L 3.0 554.0"
        style={{ animationDelay: "0.47s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 179.0 392.0 L 209.0 390.0 L 240.0 392.0"
        style={{ animationDelay: "0.509s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 58.0 575.0 L 56.0 548.0 L 58.0 514.0"
        style={{ animationDelay: "0.548s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 344.0 423.0 L 345.0 1.0 L 388.0 1.0 L 448.0 7.0 L 505.0 18.0 L 543.0 29.0 L 587.0 46.0 L 636.0 71.0 L 685.0 104.0 L 719.0 134.0"
        style={{ animationDelay: "0.587s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 161.0 499.0 L 107.0 503.0 L 60.0 512.0"
        style={{ animationDelay: "0.626s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 162.0 498.0 L 168.0 437.0"
        style={{ animationDelay: "0.665s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 2.0 555.0 L 9.0 588.0 L 26.0 618.0 L 57.0 650.0 L 83.0 666.0"
        style={{ animationDelay: "0.704s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 332.0 416.0 L 332.0 413.0 L 311.0 384.0 L 282.0 358.0 L 249.0 341.0 L 218.0 336.0"
        style={{ animationDelay: "0.743s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 331.0 417.0 L 286.0 400.0 L 255.0 393.0 L 243.0 393.0"
        style={{ animationDelay: "0.783s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 162.0 499.0 L 162.0 552.0"
        style={{ animationDelay: "0.822s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 242.0 394.0 L 250.0 438.0 L 255.0 497.0"
        style={{ animationDelay: "0.861s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 59.0 579.0 L 67.0 623.0 L 84.0 665.0"
        style={{ animationDelay: "0.9s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 60.0 578.0 L 110.0 586.0 L 163.0 591.0"
        style={{ animationDelay: "0.939s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 254.0 498.0 L 165.0 498.0"
        style={{ animationDelay: "0.978s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 164.0 586.0 L 164.0 555.0"
        style={{ animationDelay: "1.017s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 84.0 666.0 L 90.0 672.0"
        style={{ animationDelay: "1.057s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 333.0 418.0 L 339.0 424.0"
        style={{ animationDelay: "1.096s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 342.0 430.0 L 339.0 425.0"
        style={{ animationDelay: "1.135s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 165.0 591.0 L 191.0 592.0"
        style={{ animationDelay: "1.174s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 172.0 590.0 L 193.0 590.0"
        style={{ animationDelay: "1.213s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 345.0 443.0 L 343.0 431.0"
        style={{ animationDelay: "1.252s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 256.0 499.0 L 255.0 588.0"
        style={{ animationDelay: "1.291s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 256.0 499.0 L 297.0 501.0 L 343.0 508.0"
        style={{ animationDelay: "1.33s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 164.0 592.0 L 167.0 641.0 L 177.0 696.0"
        style={{ animationDelay: "1.37s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 344.0 445.0 L 344.0 507.0"
        style={{ animationDelay: "1.409s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 91.0 673.0 L 135.0 689.0 L 176.0 697.0"
        style={{ animationDelay: "1.448s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 252.0 590.0 L 228.0 590.0"
        style={{ animationDelay: "1.487s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 254.0 592.0 L 223.0 592.0"
        style={{ animationDelay: "1.526s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 364.0 511.0 L 357.0 473.0 L 346.0 444.0"
        style={{ animationDelay: "1.565s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 269.0 589.0 L 258.0 589.0"
        style={{ animationDelay: "1.604s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 256.0 592.0 L 270.0 591.0"
        style={{ animationDelay: "1.643s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 363.0 512.0 L 345.0 509.0"
        style={{ animationDelay: "1.683s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 274.0 590.0 L 283.0 590.0"
        style={{ animationDelay: "1.722s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 90.0 674.0 L 110.0 704.0 L 137.0 729.0 L 167.0 746.0 L 187.0 752.0 L 202.0 753.0"
        style={{ animationDelay: "1.761s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 420.0 538.0 L 420.0 526.0 L 413.0 501.0 L 396.0 471.0 L 372.0 445.0 L 345.0 427.0"
        style={{ animationDelay: "1.8s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 365.0 548.0 L 344.0 547.0 L 344.0 510.0"
        style={{ animationDelay: "1.839s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 255.0 593.0 L 251.0 645.0 L 241.0 697.0"
        style={{ animationDelay: "1.878s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 366.0 547.0 L 365.0 515.0"
        style={{ animationDelay: "1.917s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 179.0 698.0 L 240.0 698.0"
        style={{ animationDelay: "1.957s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 332.0 584.0 L 321.0 585.0"
        style={{ animationDelay: "1.996s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 202.0 752.0 L 188.0 732.0 L 178.0 699.0"
        style={{ animationDelay: "2.035s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 419.0 538.0 L 409.0 529.0 L 393.0 521.0 L 366.0 514.0"
        style={{ animationDelay: "2.074s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 363.0 585.0 L 362.0 578.0 L 346.0 581.0"
        style={{ animationDelay: "2.113s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 367.0 548.0 L 419.0 548.0"
        style={{ animationDelay: "2.152s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 366.0 549.0 L 366.0 575.0 L 404.0 563.0 L 419.0 551.0"
        style={{ animationDelay: "2.191s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 362.0 587.0 L 360.0 601.0"
        style={{ animationDelay: "2.23s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 217.0 753.0 L 229.0 736.0 L 241.0 699.0"
        style={{ animationDelay: "2.27s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 217.0 753.0 L 203.0 753.0"
        style={{ animationDelay: "2.309s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 420.0 547.0 L 420.0 539.0"
        style={{ animationDelay: "2.348s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 246.0 698.0 L 298.0 687.0"
        style={{ animationDelay: "2.387s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 343.0 658.0 L 342.0 655.0 L 349.0 640.0 L 357.0 612.0"
        style={{ animationDelay: "2.426s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 296.0 685.0 L 310.0 681.0 L 335.0 669.0"
        style={{ animationDelay: "2.465s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 339.0 667.0 L 370.0 647.0 L 397.0 618.0 L 414.0 586.0 L 420.0 564.0 L 420.0 551.0"
        style={{ animationDelay: "2.504s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 217.0 753.0 L 231.0 753.0 L 256.0 746.0 L 285.0 730.0 L 315.0 702.0 L 338.0 668.0"
        style={{ animationDelay: "2.543s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 836.0 307.0 L 810.0 252.0 L 792.0 222.0 L 765.0 184.0 L 734.0 149.0"
        style={{ animationDelay: "2.583s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 421.0 548.0 L 891.0 548.0 L 890.0 510.0"
        style={{ animationDelay: "2.622s" }}
      />
      <path
        className={styles.traveler}
        pathLength={1000}
        d="M 888.0 492.0 L 889.0 508.0"
        style={{ animationDelay: "2.661s" }}
      />
    </svg>
  );
}