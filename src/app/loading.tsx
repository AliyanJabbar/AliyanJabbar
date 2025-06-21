import React from "react";
import styles from "../components/moduleCSS/loading.module.css"

const Loader = () => {
  return (
    <div className="z-50 fixed top-0 left-0 dark:bg-dark bg-light w-full min-h-screen flex items-center justify-center">
      <div className={`${styles.loader} text-4xl font-extrabold`}>
        <span className="dark:text-light text-dark">&lt;</span>
        <span className="dark:text-light text-dark">LOADING</span>
        <span className="dark:text-light text-dark">/&gt;</span>
      </div>
    </div>
  );
};

export default Loader;
