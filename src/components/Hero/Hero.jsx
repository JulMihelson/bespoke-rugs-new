import Arrow from "../../images/svg/ArrowIcon";
import css from "./Hero.module.css";
import { useMediaQuery } from "react-responsive";

export const Hero = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // const isDesktop = useMediaQuery({ query: "(min-width:1280px)" });

  return (
    <section className={`${css.container} ${css.overlay}`}>
      {isMobile ? (
        <h1 className={css.heroTitle}>
          Створюйте справжні витвори килимового мистецтва
          <span> разом з нами!</span>
        </h1>
      ) : (
        <>
          <h1 className={css.heroTitle}>
            Інвестуйте в мистецтво, ставши власником{" "}
            <span>ексклюзивного килима</span>
          </h1>
          <ul className={css.heroList}>
            <li>Ідеально поєднуються зі стилем вашого інтер'єру</li>
            <li>Цілком унікальні, як відбитки пальців</li>
            <li>Повністю відповідають Вашим вимогам</li>
            <li>Прослужать Вам багато років і перейдуть у спадщину</li>
          </ul>
          <button className={css.heroBtn} type="button">
            Дивитись приклади
            {<Arrow />}
          </button>
        </>
      )}
    </section>
  );
};
export default Hero;
