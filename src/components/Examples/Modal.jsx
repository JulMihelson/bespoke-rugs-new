// import { useEffect } from "react";
// import PropTypes from "prop-types";
// import css from "./Modal.module.css";
// export const Modal = ({ handleOnClick, largeImage }) => {
//   const currentClick = (event) => {
//     if (event.target === event.currentTarget) {
//       handleOnClick();
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("keypress", (event) => {
//       if (event.code === "Backquote") {
//         handleOnClick();
//       }
//     });
//   });

//   return (
//     <div onClick={currentClick} className={css.overlay}>
//       <div className="Modal">
//         <img src={largeImage} alt="/" />
//       </div>
//     </div>
//   );
// };

// Modal.propTypes = {
//   handleOnClick: PropTypes.func.isRequired,
//   largeImage: PropTypes.string.isRequired,
// };
