import React from "react";
import styles from "./pagination.module.scss";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.container}>
      {pageNumbers.map((num) => (
        <div
          key={num}
          className={styles.container__page}
          onClick={() => paginate(num)}
        >
          <p>{num}</p>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
