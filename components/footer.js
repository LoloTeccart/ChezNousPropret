class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
        }
        footer {
          background-color: #111827;
          color: white;
          padding: 3rem 0;
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }
        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        h3, h4 {
          font-weight: 600;
        }
        h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        h4 {
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        p, ul {
          color: #9ca3af;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        li {
          margin-bottom: 0.5rem;
        }
        a {
          transition: color 0.2s;
        }
        a:hover {
          color: white;
        }
        .border-t {
          border-top: 1px solid #1f2937;
          padding-top: 2rem;
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .border-t {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
        .social-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 1rem;
        }
        @media (min-width: 768px) {
          .social-links {
            margin-top: 0;
          }
        }
        .social-link {
          color: #9ca3af;
          transition: color 0.2s;
        }
        .social-link:hover {
          color: white;
        }
      </style>
      <footer>
        <div class="container">
          <div class="grid">
            <div>
              <h3>Chez Nous Propreté</h3>
              <p>Service de nettoyage professionnel résidentiel et commercial à Montréal et ses environs.</p>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="#">Nettoyage résidentiel</a></li>
                <li><a href="#">Nettoyage commercial</a></li>
                <li><a href="#">Airbnb & locations</a></li>
                <li><a href="#">Après déménagement</a></li>
                <li><a href="#">Après travaux</a></li>
              </ul>
            </div>
            <div>
              <h4>Liens utiles</h4>
              <ul>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Tarifs</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4>Légal</h4>
              <ul>
                <li><a href="#">Conditions d'utilisation</a></li>
                <li><a href="#">Politique de confidentialité</a></li>
                <li><a href="#">Politique d'annulation</a></li>
                <li><a href="#">Garantie de satisfaction</a></li>
              </ul>
            </div>
          </div>
          <div class="border-t">
            <p>© 2023 Chez Nous Propreté. Tous droits réservés.</p>
            <div class="social-links">
              <a href="#" class="social-link">
                <i data-feather="facebook"></i>
              </a>
              <a href="#" class="social-link">
                <i data-feather="instagram"></i>
              </a>
              <a href="#" class="social-link">
                <i data-feather="twitter"></i>
              </a>
              <a href="#" class="social-link">
                <i data-feather="linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    `;

    // Initialize feather icons
    feather.replace();
  }
}

customElements.define('custom-footer', CustomFooter);