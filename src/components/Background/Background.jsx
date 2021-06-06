import React from "react";
import { motion } from "framer-motion";
import styles from "./Background.module.scss";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

const circleIcon = {
  hidden: {
    opacity: 1,
    pathLength: 0,
    fill: "rgba(0, 0, 0, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(0, 0, 0, 1)",
  },
};

const Background = () => {
  return (
    <div className={styles.mainContainer}>
      <motion.svg
        className={styles.a}
        viewBox="0 0 421 465"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M7.20244 436.881C1.44713 400.349 -3.25437 134.747 7.20245 10.5906C436.812 -58.7519 419.311 265.837 419.311 408.815C419.311 461.415 14.7974 485.091 7.20244 436.881Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 10, ease: "easeInOut" },
            fill: { duration: 7, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.circle
          cx="105.979"
          cy="363.347"
          r="76.8876"
          fill="black"
          stroke="black"
          strokeWidth="2"
          variants={circleIcon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 10, ease: "easeInOut" },
            fill: { duration: 5, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
      <motion.svg
        className={styles.b}
        viewBox="0 0 1276 665"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M326.847 312.513C-142.173 458.353 -3.7226 207.995 124.13 64.586C233.024 -15.1397 827.078 205.33 865.968 408.768C904.859 612.206 1249.53 453.978 919.443 312.513C655.376 199.342 917.336 171.049 1081.32 171.049C952.176 101.37 771.367 -28.9459 1081.32 7.22236C1468.77 52.4327 1190.22 404.879 976.806 622.18C763.394 839.481 913.123 130.214 326.847 312.513Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 10, ease: "easeInOut" },
            fill: { duration: 5, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.circle
          cx="1204.66"
          cy="166.286"
          r="25.2511"
          fill="black"
          stroke="black"
          strokeWidth="2"
          variants={circleIcon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 10, ease: "easeInOut" },
            fill: { duration: 5, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 882 599"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.c}
      >
        <motion.path
          d="M279.813 54.723C14.7247 -140.282 -138.818 249.182 184.36 371.06C60.2699 386.122 -79.5394 592.84 57.543 597.012C417.54 607.969 117.544 420.356 433.905 492.935C750.265 565.514 309.815 320.388 555.267 187.555C800.719 54.7214 380.724 583.316 740.72 564.144C1100.72 544.972 665.721 19.1168 567.54 16.3779C469.359 13.6391 611.173 298.479 279.813 54.723Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 10, ease: "easeInOut" },
            fill: { duration: 6, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
      <motion.svg
        viewBox="0 0 699 464"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.d}
      >
        <motion.path
          d="M387.129 89.3899C378.117 -102.068 -195.127 62.3616 71.7888 162.595C-30.6982 174.982 -2.53751 524.392 81.9224 448.917C134.855 401.615 -13.7654 267.938 212.564 411.489C371.963 512.589 204.149 248.187 434.431 248.187C514.393 248.187 241.989 528.006 529.034 448.917C820.198 368.693 662.456 22.9422 581.367 20.6897C500.279 18.4373 394.282 241.356 387.129 89.3899Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 10, ease: "easeInOut" },
            fill: { duration: 6, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.circle
          cx="548.179"
          cy="383.335"
          r="29.4081"
          fill="black"
          stroke="black"
          strokeWidth="2"
          variants={circleIcon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 10, ease: "easeInOut" },
            fill: { duration: 5, ease: [1, 0, 0.8, 1] },
          }}
        />
        <motion.circle
          cx="250.856"
          cy="131.06"
          r="29.4081"
          fill="black"
          stroke="black"
          strokeWidth="2"
          variants={circleIcon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 10, ease: "easeInOut" },
            fill: { duration: 5, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
      <motion.svg
        className={styles.e}
        viewBox="0 0 523 758"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M20.8986 436.021C-10.6098 87.7298 209.128 57.6004 322.935 86.0721C364.801 105.845 437.22 169.344 391.968 265.158C335.403 384.926 190.717 234.277 127.972 312.237C65.2263 390.197 339.164 260.312 332.4 391.285C325.636 522.259 150.964 355.504 92.8551 441.487C34.7463 527.47 148.616 496.34 224.282 503.558C299.948 510.775 316.609 575.681 309.334 625.394C302.059 675.107 60.2841 871.386 20.8986 436.021Z"
          fill="white"
          stroke="black"
          strokeWidth="2"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 10, ease: "easeInOut" },
            fill: { duration: 6, ease: [1, 0, 0.8, 1] },
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Background;
