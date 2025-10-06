import './ServicePage.css';

function SEO() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <img
          src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="SEO Оптимизация"
        />
        <div className="service-hero-overlay">
          <h1>SEO Оптимизация</h1>
        </div>
      </div>

      <div className="container">
        <section className="service-description">
          <h2>Подобрете Видимостта в Google</h2>
          <p>
            SEO оптимизацията е ключова за успеха на всеки уебсайт. Ние помагаме на бизнеси
            да се класират по-високо в търсачките и да привличат повече органичен трафик.
          </p>
        </section>

        <section className="service-features">
          <h2>SEO Услуги</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Keyword Research</h3>
              <p>Анализ на ключови думи и конкуренция</p>
            </div>
            <div className="feature-item">
              <h3>On-Page SEO</h3>
              <p>Оптимизация на съдържание и структура</p>
            </div>
            <div className="feature-item">
              <h3>Technical SEO</h3>
              <p>Подобряване на техническите аспекти</p>
            </div>
            <div className="feature-item">
              <h3>Link Building</h3>
              <p>Изграждане на качествени backlink-ове</p>
            </div>
            <div className="feature-item">
              <h3>Local SEO</h3>
              <p>Оптимизация за локални търсения</p>
            </div>
            <div className="feature-item">
              <h3>SEO Audit</h3>
              <p>Подробен анализ и препоръки</p>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <h2>Повишете Вашия Ranking</h2>
          <p>Безплатен SEO одит на вашия сайт</p>
          <button className="cta-button">Поискайте Одит</button>
        </section>
      </div>
    </div>
  );
}

export default SEO;
