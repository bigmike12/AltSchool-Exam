import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ReposCard from "../../components/ReposCard/reposCard";
import Pagination from "../../components/Pagination/pagination";
import RepoContext from "../../RepoContext";
import styles from "./repos.module.scss";
import Loading from "../../components/Loading/loading";

export const githubURL = process.env.REACT_APP_GITHUB_URL;
export const token = process.env.REACT_APP_TOKEN;

const Repos = () => {
  const { getRepos } = useContext(RepoContext);

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    const getRepos = async () => {
      setLoading(true);
      const res = await axios.get(`api.github.com/users/bigmike12/repos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res;
      setLoading(false);
      setRepos(data);
    };

    getRepos();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = repos.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = repos.length;

  useEffect(() => {
    const handleCurrentPost = () => {
      getRepos(currentPost);
    };

    handleCurrentPost();
  }, [repos]);

  //handle the change of pages
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main>
      <div className={styles.title}>
        <h2>Repos</h2>
        <p>List of my Repositories on GitHub</p>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <div>
            {currentPost?.map((e, index) => {
              return (
                <ReposCard
                  name={e.name}
                  date={e.pushed_at}
                  index={index}
                  key={index}
                />
              );
            })}
          </div>

          <div>
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={totalPosts}
              paginate={paginate}
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Repos;
