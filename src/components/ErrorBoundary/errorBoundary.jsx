import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./errorBoundary.module.scss"


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
          <div className={styles.error__button}>
            <Link to={`/`}> Go Back Home </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
