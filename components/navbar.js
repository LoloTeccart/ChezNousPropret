class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }
        nav {
          background-color: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 70px;
        }
        .logo {
          display: flex;
          align-items: center;
        }
        .logo-primary {
          color: #2596be;
          font-size: 1.5rem;
          font-weight: 700;
        }
        .logo-secondary {
          color: #1e3a8a;
          font-size: 1.5rem;
          font-weight: 700;
        }
        .nav-links {
          display: none;
        }
        @media (min-width: 768px) {
          .nav-links {
            display: flex;
            gap: 2rem;
          }
        }
        .nav-link {
          color: #374151;
          transition: color 0.2s;
        }
        .nav-link:hover {
          color: #2596be;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .phone-link {
          display: none;
          align-items: center;
          color: #374151;
        }
        @media (min-width: 768px) {
          .phone-link {
            display: flex;
          }
        }
        .quote-button {
          background-color: #2596be;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: background-color 0.2s;
          display: flex;
          align-items: center;
        }
        .quote-button:hover {
          background-color: #1e3a8a;
        }
        .mobile-menu-button {
          display: block;
          color: #374151;
        }
        @media (min-width: 768px) {
          .mobile-menu-button {
            display: none;
          }
        }
        .mobile-menu {
          display: none;
          background-color: white;
          border-top: 1px solid #e5e7eb;
        }
        .mobile-menu.open {
          display: block;
        }
        .mobile-menu-link {
          display: block;
          color: #374151;
          padding: 0.75rem 0;
          transition: color 0.2s;
        }
        .mobile-menu-link:hover {
          color: #2596be;
        }
      </style>
      <nav>
        <div class="container">
          <a href="/" class="logo">
            <span class="logo-primary">Chez Nous</span>
            <span class="logo-secondary">Propreté</span>
          </a>
          <div class="nav-links">
            <a href="#services" class="nav-link">Services</a>
            <a href="#pricing" class="nav-link">Tarifs</a>
            <a href="#about" class="nav-link">À propos</a>
            <a href="#faq" class="nav-link">FAQ</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>
          <div class="nav-actions">
            <a href="tel:+15141234567" class="phone-link">
              <i data-feather="phone" class="mr-2"></i> 514-123-4567
            </a>
            <a href="#devis" class="quote-button">
              <i data-feather="edit" class="mr-2"></i> Devis Gratuit
            </a>
            <button class="mobile-menu-button">
              <i data-feather="menu"></i>
            </button>
          </div>
        </div>
        <div class="mobile-menu">
          <div class="container flex flex-col py-3">
            <a href="#services" class="mobile-menu-link">Services</a>
            <a href="#pricing" class="mobile-menu-link">Tarifs</a>
            <a href="#about" class="mobile-menu-link">À propos</a>
            <a href="#faq" class="mobile-menu-link">FAQ</a>
            <a href="#contact" class="mobile-menu-link">Contact</a>
            <a href="tel:+15141234567" class="mobile-menu-link flex items-center">
              <i data-feather="phone" class="mr-2"></i> 514-123-4567
            </a>
          </div>
        </div>
      </nav>
    `;

    // Add mobile menu toggle functionality
    const mobileMenuButton = this.shadowRoot.querySelector('.mobile-menu-button');
    const mobileMenu = this.shadowRoot.querySelector('.mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      feather.replace();
    });

    // Initialize feather icons
    feather.replace();
  }
}

customElements.define('custom-navbar', CustomNavbar);