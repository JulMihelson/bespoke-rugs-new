export const Header = () => {
  return (
    <div>
      <nav>
        <a aria-label="Logo" href="./index.html">
          <svg width="160" height="60">
            <use href="../images/svg/logo.svg"></use>
          </svg>
        </a>
        <p>
          Виготовлення килимів ручної робот за ескізом замовника з доставкою по
          Україні, Європі, США та іншими точками світу
        </p>
        <address>
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
      </nav>
      <ul>
        <li>
          <a
            aria-label="Instagram open link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/bespoke.rug.atelier/"
          >
            <svg width="24" height="24">
              <use href="../images/svg/insta-logo.svg"></use>
            </svg>
          </a>
        </li>
        <li>
          <a
            aria-label="Facebook open link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/bespoke.rug.atelier"
          >
            <svg width="24" height="24">
              <use href="../images/svg/facebook-logo.svg"></use>
            </svg>
          </a>
        </li>
      </ul>
      <button
        class="burger-button js-open-menu"
        type="button"
        aria-label="button for open mobile menu"
      >
        <svg width="32" height="22">
          <use href="../images/svg/burger.svg"></use>
        </svg>
      </button>
    </div>
  );
};
