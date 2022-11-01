import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map((num) => (
          <li key={num}>
            <div onClick={() => paginate(num)}>{num}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
