import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerText}>
        <p className={styles.title}>Will Irving</p>
        <p>Developer & Digital Artist</p>
      </div>
      <div className={styles.headerLogo}>
        <svg
          viewBox="0 0 126 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M69.5338 16.6883C67.9342 -17.2935 -33.8104 11.891 13.5642 29.6814C-4.62608 31.8799 0.37213 93.8964 15.3629 80.5004C24.7578 72.1049 -1.6207 48.3785 38.5504 73.8574C66.8419 91.8015 37.0567 44.873 77.9293 44.873C92.1217 44.873 43.7729 94.5378 94.7203 80.5004C146.399 66.2615 118.401 4.8945 104.009 4.49472C89.6167 4.09493 70.8034 43.6606 69.5338 16.6883Z"
            fill="white"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            cx="98.1183"
            cy="68.8605"
            r="4.3971"
            fill="white"
            stroke="black"
            strokeWidth="2"
          />
          <circle
            cx="45.3468"
            cy="24.0841"
            r="4.3971"
            fill="white"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
