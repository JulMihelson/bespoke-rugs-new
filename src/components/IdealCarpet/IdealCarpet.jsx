import css from "./IdealCarpet.module.css";
import { Carousel } from "react-carousel-minimal";

export const IdealCarpet = () => {
  // const captionStyle = {
  //   justifyContent: "center",
  //   alignItems: "center",
  //   width: "80%",
  //   fontFamily: "Helvetica",
  //   fontSize: "40px",
  //   backgroundColor: "#FFFFFF",
  //   color: "green",
  //   margin: "0 auto",
  // };
  return (
    <section className={css.container}>
      <h2 className={css.idealTitle}>
        Яким може бути Ваш <span>ідеальний килим</span> ручної роботи?
      </h2>
      <Carousel />
    </section>
  );
};
