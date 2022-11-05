import moment from "moment";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import RepoCard from "../../components/RepoCard/repoCard";
import RepoContext from "../../RepoContext";
import styles from "./repo.module.scss";

const Repo = () => {
  const { id } = useParams();
  const num = Number(id);

  const { repos } = useContext(RepoContext);

  const user = repos[0]?.filter((repo, index) => index === num);

  return (
    <main className={styles.container}>
      {user.map((e, index) => {
        const newDate = moment(e.date).format("MMM Do YY");

        return (
          <RepoCard
            date={newDate}
            name={e.name}
            url={e.html_url}
            stack={e.language}
            key={index}
          />
        );
      })}
    </main>
  );
};

export default Repo;
