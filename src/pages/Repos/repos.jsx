import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ReposCard from "../../components/ReposCard/reposCard";
import Pagination from "../../components/Pagination/pagination";
import RepoContext from "../../RepoContext";

export const githubURL = process.env.REACT_APP_GITHUB_URL;
export const token = process.env.REACT_APP_TOKEN;

const Repos = () => {
  const { getRepos } = useContext(RepoContext);

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const getRepos = async () => {
      setLoading(true);
      const res = await axios.get(`${githubURL}/users/bigmike12/repos`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { data } = res;
      setLoading(false);
      setRepos(data);
    };

    getRepos();
  }, [repos]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = repos.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = repos.length;

  useEffect(() => {
    const handleCurrentPost = () => {
      getRepos(currentPost);
    };

    handleCurrentPost()
  }, [repos]);

  //handle the change of pages
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    <h2>loading....</h2>;
  }

  return (
    <div>
      <div>
        <h2>Repos</h2>
        <p>List of my Repositories on GitHub</p>
      </div>

      <div>
        {currentPost?.map((e, index) => {
          return <ReposCard name={e.name} index={index} />;
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
  );
};

export default Repos;
