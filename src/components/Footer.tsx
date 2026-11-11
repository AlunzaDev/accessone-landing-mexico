import { BrandLogo } from '@alunzadev/accessone-ui';
import { brand } from '../config/brand';

export default function Footer() {
  return (
    <footer>
      <a className="brand" href="/" aria-label="Ir al inicio">
        <BrandLogo brand={brand} background="dark" />
      </a>

      <div className="footer-socials" aria-label="Redes sociales">
        <a
          href="https://www.linkedin.com/company/dunza-estacionamientos-accessone"
          target="_blank"
          rel="noreferrer"
          aria-label="AccessOne México en LinkedIn (abre en una pestaña nueva)"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5.36 7.93A1.93 1.93 0 1 0 5.36 4a1.93 1.93 0 0 0 0 3.86ZM3.7 20h3.33V9.33H3.7V20Zm5.45 0h3.33v-5.28c0-1.4.27-2.75 2-2.75 1.7 0 1.72 1.59 1.72 2.84V20h3.33v-5.85c0-2.88-.62-5.1-3.99-5.1-1.62 0-2.7.89-3.14 1.73h-.05V9.33h-3.2V20Z" />
          </svg>
        </a>
      </div>

      <p>{brand.name}</p>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
