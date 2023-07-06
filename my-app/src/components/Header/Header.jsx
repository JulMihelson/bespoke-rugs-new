export const Header = () => {
  return (
    <header>
      <div class="container header-container">
        <nav class="header-container">
          <StyledLink to="/"></StyledLink>>
          <button
            class="burger-button js-open-menu"
            type="button"
            aria-label="button for open mobile menu"
          >
            <svg class="burger" width="32" height="22">
              <use href="./images/svg/icons.svg#burger-menu"></use>
            </svg>
          </button>
          <ul class="uppermenu">
            <li class="uppermenu-item">
              <a class="link active-link" href="index.html">
                Studio
              </a>
            </li>
            <li class="uppermenu-item">
              <a class="link" href="portfolio.html">
                Portfolio
              </a>
            </li>
            <li class="uppermenu-item">
              <a class="link" href="">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
        <address class="address-block">
          <ul class="uppermenu">
            <li class="contacts-container">
              <a class="link-contacts" href="mailto:info@devstudio.com">
                info@devstudio.com
              </a>
            </li>
            <li>
              <a class="link-contacts" href="tel:+110001111111">
                +11 (000) 111-11-11
              </a>
            </li>
          </ul>
        </address>
      </div>
    </header>
  );
};
