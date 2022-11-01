import { createContext, useState } from "react";

const RepoContext = createContext();

export function RepoProvider({ children }) {
  const [repos, setRepos] = useState([]);

  const getRepos = (data) => {
    setRepos([data]);
  };

  return (
    <RepoContext.Provider value={{ repos, getRepos }}>
      {children}
    </RepoContext.Provider>
  );
}

export default RepoContext;
