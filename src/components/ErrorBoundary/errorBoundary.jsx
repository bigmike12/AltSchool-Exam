import React, { Component } from "react";
import styles from "./errorBoundary.module.scss";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.error}>
          <img src="/No-data.png" alt="404 page not found" />
          OOPS! Something Went Wrong...
          <div className={styles.error__button}>
            <a href={`/`}> Go Back Home </a>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
