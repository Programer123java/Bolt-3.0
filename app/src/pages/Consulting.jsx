import './ServicePage.css';

function Consulting() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="IT Консултации"
        />
        <div className="service-hero-overlay">
          <h1>IT Консултации</h1>
        </div>
      </div>

      <div className="container">
        <section className="service-description">
          <h2>Експертни Съвети за Вашия Бизнес</h2>
          <p>
            Предлагаме професионални консултации за дигитална трансформация, технологични решения
            и оптимизация на бизнес процесите.
          </p>
        </section>

        <section className="service-features">
          <h2>Консултантски Услуги</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>IT Стратегия</h3>
              <p>Планиране на технологично развитие</p>
            </div>
            <div className="feature-item">
              <h3>Дигитална Трансформация</h3>
              <p>Преход към дигитални процеси</p>
            </div>
            <div className="feature-item">
              <h3>System Architecture</h3>
              <p>Проектиране на системи и инфраструктура</p>
            </div>
            <div className="feature-item">
              <h3>Performance Audit</h3>
              <p>Анализ и оптимизация на системи</p>
            </div>
            <div className="feature-item">
              <h3>Security Consulting</h3>
              <p>Сигурност и защита на данни</p>
            </div>
            <div className="feature-item">
              <h3>Training & Support</h3>
              <p>Обучение на екипи и поддръжка</p>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <h2>Нуждаете се от Експертен Съвет?</h2>
          <p>Първата консултация е безплатна</p>
          <button className="cta-button">Запази Среща</button>
        </section>
      </div>
    </div>
  );
}

export default Consulting;
