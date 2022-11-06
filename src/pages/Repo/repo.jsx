import moment from "moment";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Error from "../../pages/Error/error";
import RepoCard from "../../components/RepoCard/repoCard";
import RepoContext from "../../RepoContext";
import styles from "./repo.module.scss";
import ErrorBoundary from "../../components/ErrorBoundary/errorBoundary";

const Repo = () => {
  const { id } = useParams();
  const num = Number(id);

  const { repos } = useContext(RepoContext);

  const user = repos[0]?.filter((repo, index) => index === num);

  return (
    <main className={styles.container}>
      {user ? (
        user.map((e, index) => {
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
        })
      ) : (
        <ErrorBoundary />
      )}
    </main>
  );
};

export default Repo;
