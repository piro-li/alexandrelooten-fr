import dayjs from 'dayjs';
import './style.scss';

dayjs.locale('fr');

export default function Header() {
  return (
    <div className="header">
      <img className="alex" src="/images/profile.png" alt="Alexandre Looten" />
      <div className="header__side">
        <div>
          <span className="header__side__title">Alexandre Looten</span>
          <p className="header__side__subtitle">Communication & Tourisme</p>
        </div>
        <div className="header__side__socials">
          <a href="mailto:contact@alexandrelooten.fr" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-envelope" />
          </a>
          <a href="https://linkedin.com/in/alexandre-looten-communication" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in" />
          </a>
{/*           <a href="/files/CV-Alexandre_LOOTEN-Communication.pdf" rel="noopener noreferrer" download="CV-Alexandre_LOOTEN-Communication.pdf">
            <i className="fa-solid fa-file-pdf" />
          </a> */}
        </div>
      </div>
    </div>
  );
}
