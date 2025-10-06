import './ServicePage.css';

function DigitalMarketing() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <img
          src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Дигитален Маркетинг"
        />
        <div className="service-hero-overlay">
          <h1>Дигитален Маркетинг</h1>
        </div>
      </div>

      <div className="container">
        <section className="service-description">
          <h2>Стратегии за Онлайн Успех</h2>
          <p>
            Разработваме и изпълняваме цялостни дигитални маркетинг стратегии, които увеличават
            видимостта на вашия бранд и генерират реални резултати.
          </p>
        </section>

        <section className="service-features">
          <h2>Нашите Услуги</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Social Media Marketing</h3>
              <p>Управление на социални мрежи и реклами</p>
            </div>
            <div className="feature-item">
              <h3>Content Marketing</h3>
              <p>Създаване на ангажиращо съдържание</p>
            </div>
            <div className="feature-item">
              <h3>Email Marketing</h3>
              <p>Автоматизирани кампании и newsletters</p>
            </div>
            <div className="feature-item">
              <h3>PPC Реклами</h3>
              <p>Google Ads и Facebook Ads кампании</p>
            </div>
            <div className="feature-item">
              <h3>Анализ и Отчети</h3>
              <p>Детайлни отчети за представянето</p>
            </div>
            <div className="feature-item">
              <h3>Брандинг</h3>
              <p>Изграждане на силна марка онлайн</p>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <h2>Увеличете Онлайн Присъствието</h2>
          <p>Започнете вашата дигитална трансформация днес</p>
          <button className="cta-button">Консултация</button>
        </section>
      </div>
    </div>
  );
}

export default DigitalMarketing;
