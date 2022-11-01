import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import RepoContext from "../../RepoContext";

const Repo = () => {
  const { id } = useParams();
  const num = Number(id);

  const { repos } = useContext(RepoContext);
  console.log("repos", repos);

  const user = repos[0]?.filter((repo, index) => index === num);
  console.log("repo", user);

  return <div>repo</div>;
};

export default Repo;
