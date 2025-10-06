import './ServicePage.css';

function WebDevelopment() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <img
          src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Уеб Разработка"
        />
        <div className="service-hero-overlay">
          <h1>Уеб Разработка</h1>
        </div>
      </div>

      <div className="container">
        <section className="service-description">
          <h2>Професионални Уеб Решения</h2>
          <p>
            Създаваме модерни и функционални уебсайтове, които отговарят на нуждите на вашия бизнес.
            От корпоративни сайтове до сложни уеб приложения - ние предлагаме цялостни решения.
          </p>
        </section>

        <section className="service-features">
          <h2>Какво Включваме</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Responive Design</h3>
              <p>Уебсайтове, които изглеждат перфектно на всяко устройство</p>
            </div>
            <div className="feature-item">
              <h3>Бързо Зареждане</h3>
              <p>Оптимизирани за максимална производителност</p>
            </div>
            <div className="feature-item">
              <h3>Модерни Технологии</h3>
              <p>React, Vue, Node.js и най-новите framework-и</p>
            </div>
            <div className="feature-item">
              <h3>CMS Интеграция</h3>
              <p>Лесно управление на съдържанието</p>
            </div>
            <div className="feature-item">
              <h3>E-commerce</h3>
              <p>Онлайн магазини с пълен функционалитет</p>
            </div>
            <div className="feature-item">
              <h3>Поддръжка</h3>
              <p>Техническа поддръжка и актуализации</p>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <h2>Готови за Вашия Нов Уебсайт?</h2>
          <p>Свържете се с нас за безплатна консултация</p>
          <button className="cta-button">Свържете се</button>
        </section>
      </div>
    </div>
  );
}

export default WebDevelopment;
