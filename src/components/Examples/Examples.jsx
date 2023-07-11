import React from "react";
// import css from "./Example.module.css";
// import { Modal } from "./Modal";
import PropTypes from "prop-types";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const Examples = ({ webformat }) => {
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const handleOnClick = () => {
  //   setModalIsOpen((modalIsOpen) => !modalIsOpen);
  // };
  return (
    <>
      <li>
        <Zoom>
          <img
            // onClick={handleOnClick}
            alt="That Wanaka Tree, New Zealand by Laura Smetsers"
            src={webformat}
            width="500"
          />
        </Zoom>
        {/* <img onClick={handleOnClick} src={webformat} alt="килим" /> */}
      </li>
      {/* {modalIsOpen && (
        <Modal handleOnClick={handleOnClick} largeImage={largeImage} />
      )} */}
    </>
  );
};

Examples.propTypes = {
  webformat: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
};
export default Examples;
