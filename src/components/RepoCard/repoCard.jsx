import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import RepoContext from "../../RepoContext";
import { truncateMultilineText } from "../../utils/utils";
import styles from "./repoCard.module.scss";

const RepoCard = ({ date, name, url, stack }) => {
  const navigate = useNavigate();
  const { getRepos } = useContext(RepoContext);

  const handleClick = () => {
    // 👇️ replace set to true
    navigate("/", { getRepos });
  };
  return (
    <main className={styles.card}>
      <h2>{name}</h2>
      <p>
        Date of Creation: <span>{date}</span>
      </p>
      <p>
        GitHub URL:{" "}
        <a href={url} target="_blank" rel="noreferrer">
          <span>{truncateMultilineText(url, 32)}</span>
        </a>
      </p>
      <p>
        Language Used: <span>{stack}</span>
      </p>
      <div onClick={handleClick} className={styles.card__link}>
        <p>Go back</p>
      </div>
    </main>
  );
};

export default RepoCard;
