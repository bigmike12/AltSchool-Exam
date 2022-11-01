import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error/error";
import Repo from "./pages/Repo/repo";
import Repos from "./pages/Repos/repos";
import { RepoProvider } from "./RepoContext";

function App() {
  return (
    <div className="App">
      <RepoProvider>
        <Routes>
          <Route path="/">
            <Route index element={<Repos />} />
            <Route path="/repo/:id" element={<Repo />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </RepoProvider>
    </div>
  );
}

export default App;
