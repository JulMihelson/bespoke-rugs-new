import { Examples } from "./Examples";
import PropTypes from "prop-types";
import css from "./ExampleList.module.css";
export const ExampleList = ({ examples }) => {
  return (
    <>
      <ul className={css.exampleListGallery}>
        {examples.map((item) => (
          <Examples
            key={item.id}
            webformat={item.webformat}
            // largeImage={item.largeImage}
          />
        ))}
      </ul>
    </>
  );
};

ExampleList.propTypes = {
  examples: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformat: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
    })
  ),
};
