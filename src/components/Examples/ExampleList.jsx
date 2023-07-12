import { Examples } from "./Examples";
import PropTypes from "prop-types";
import css from "./ExampleList.module.css";
export const ExampleList = ({ examples }) => {
  return (
    <section className={css.container}>
      <h2>Килими ручної роботи для ексклюзивних інтер'єрів</h2>
      <p>
        Наші килими ручної роботи - справжні витвори мистецтва, створені у
        єдиному екземплярі. Іх по достоїнству оцінять люди, які прагнуть оточити
        себе цінними, унікальними речами і грамотно інвестувати свої кошти.
        Килими від нашого ательє стануть ідеальною прикрасою для:{" "}
      </p>
      <ul className={css.exampleListGallery}>
        {examples.map((item) => (
          <Examples
            key={item.id}
            webformat={item.webformat}
            // largeImage={item.largeImage}
          />
        ))}
      </ul>
    </section>
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
