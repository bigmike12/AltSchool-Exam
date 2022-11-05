import React from "react";
import { Link } from "react-router-dom";
import styles from "./error.module.scss";

const Error = () => {
  return (
    <div className={styles.error}>
      <img src="/error.png" alt="404 page not found" />
      <div className={styles.error__button}>
        <Link to={`/`}> Go Back Home </Link>
      </div>
    </div>
  );
};

export default Error;
