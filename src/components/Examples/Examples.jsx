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
    <li className={css.content}>
      <div className={css.overlay}></div>
      <img className={css.image} src={webformat} alt="img01" />
      <div className={`${css.contentDetails} ${css.fadeInBottom}`}>
        <h3 className={css.contentTitle}>DESCRIPTION</h3>
        <p className={css.contentText}>This is a short description</p>
      </div>

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
