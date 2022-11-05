import React from "react";
import { FaSpinner } from "react-icons/fa";
import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <FaSpinner icon="spinner" className={styles.spinner} />{" "}
    </div>
  );
};

export default Loading;
