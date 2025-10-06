import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>TechServices</h1>
        </Link>
        <nav className="nav">
          <Link to="/">Начало</Link>
          <Link to="/web-development">Уеб Разработка</Link>
          <Link to="/mobile-development">Мобилни Приложения</Link>
          <Link to="/digital-marketing">Дигитален Маркетинг</Link>
          <Link to="/seo">SEO</Link>
          <Link to="/graphic-design">Графичен Дизайн</Link>
          <Link to="/consulting">Консултации</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
