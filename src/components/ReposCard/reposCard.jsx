import moment from "moment";
import { Link } from "react-router-dom";
import { truncateMultilineText } from "../../utils/utils";
import styles from "./reposCard.module.scss";

const ReposCard = ({ name, date, index }) => {
  const newDate = moment(date).format("MMM Do YY");
  return (
    <div className={styles.card}>
      <div>
        <p>{newDate}</p>
      </div>
      <div className={styles.card__info}>
        <h3 className="name">{truncateMultilineText(name, 34)}</h3>
        <Link to={`/repo/${index}`} className={styles.card__link}>
          More Info{" "}
        </Link>
      </div>
    </div>
  );
};

export default ReposCard;
