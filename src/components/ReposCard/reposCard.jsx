import { Link } from "react-router-dom";

const ReposCard = ({ name, index }) => {
  return (
    <div className="cards">
      <h3 className="name">{name}</h3>
      <Link to={`/repo/${index}`} className="link">
        More Info{" "}
      </Link>
    </div>
  );
};

export default ReposCard;
