import React from "react";
import css from "./Example.module.css";
// import { Modal } from "./Modal";
import PropTypes from "prop-types";
// import Zoom from "react-medium-image-zoom";
// import "react-medium-image-zoom/dist/styles.css";

export const Examples = ({ webformat }) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const handleOnClick = () => {
  //   setModalIsOpen((modalIsOpen) => !modalIsOpen);
  // };
  return (
    <li className={css.grid}>
      <figure className={css.effectLily}>
        <img
          src="https://tympanus.net/Development/HoverEffectIdeas/img/1.jpg"
          alt="img01"
        />
        <figcaption>
          <h2>
            Nice <span>Lily</span>
          </h2>
          <p>Lily likes to play with crayons and pencils</p>
        </figcaption>
      </figure>
      {/* <Zoom>
          <img
            // onClick={handleOnClick}
            alt="That Wanaka Tree, New Zealand by Laura Smetsers"
            src={webformat}
            width="350"
          />
        </Zoom> */}
    </li>
  );
};

Examples.propTypes = {
  webformat: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};
export default Examples;
