import css from "./Header.module.css";
import IconComponent from "../../images/svg/IconComponent";
import FacebookIcon from "../../images/svg/FacebookLogo";
import InstaLogo from "../../images/svg/InstaLogo";
import BurgerMenuIcon from "../../images/svg/BurgerMenuIcon";

export const Header = () => {
  return (
    <section className={css.header}>
      <div className={css.container}>
        <nav className={css.headerBlock}>
          <a aria-label="Logo" href="./index.html">
            {<IconComponent />}
          </a>
          <p className={css.headerTitle}>
            Виготовлення килимів ручної робот за ескізом замовника з доставкою
            по Україні, Європі, США та іншими точками світу
          </p>
          <address className={css.address}>
            <ul>
              <li>
                <a
                  class="link-contacts"
                  href="mailto:bespoke.rug.atelier@gmail.com"
                >
                  bespoke.rug.atelier@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+380958860557">+38 (095) 886-05-57</a>
              </li>
            </ul>
          </address>
          <button
            className={css.burgerMenu}
            type="button"
            aria-label="button for open mobile menu"
          >
            <BurgerMenuIcon />
          </button>
        </nav>
        <ul className={css.socialList}>
          <li>
            <a
              aria-label="Instagram open link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/bespoke.rug.atelier/"
            >
              <InstaLogo />
            </a>
          </li>
          <li>
            <a
              aria-label="Facebook open link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/bespoke.rug.atelier"
            >
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
