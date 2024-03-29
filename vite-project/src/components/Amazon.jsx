import list from "../data.js";
import "../styles/amazon.css";
import Cards from "./Cards.jsx";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
