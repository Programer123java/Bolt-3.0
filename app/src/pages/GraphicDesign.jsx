import './ServicePage.css';

function GraphicDesign() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <img
          src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Графичен Дизайн"
        />
        <div className="service-hero-overlay">
          <h1>Графичен Дизайн</h1>
        </div>
      </div>

      <div className="container">
        <section className="service-description">
          <h2>Визуална Идентичност за Вашия Бранд</h2>
          <p>
            Създаваме впечатляващи визуални решения, които изразяват уникалността на вашия бранд
            и оставят трайно впечатление при вашите клиенти.
          </p>
        </section>

        <section className="service-features">
          <h2>Дизайн Услуги</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Logo Design</h3>
              <p>Уникални и запомнящи се лога</p>
            </div>
            <div className="feature-item">
              <h3>Brand Identity</h3>
              <p>Цялостна визуална идентичност</p>
            </div>
            <div className="feature-item">
              <h3>UI/UX Design</h3>
              <p>Дизайн на потребителски интерфейси</p>
            </div>
            <div className="feature-item">
              <h3>Marketing Materials</h3>
              <p>Брошури, визитки, банери</p>
            </div>
            <div className="feature-item">
              <h3>Social Media Graphics</h3>
              <p>Графики за социални мрежи</p>
            </div>
            <div className="feature-item">
              <h3>Illustration</h3>
              <p>Персонализирани илюстрации</p>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <h2>Направете Брандът Ви Незабравим</h2>
          <p>Поискайте портфолио и безплатна консултация</p>
          <button className="cta-button">Виж Портфолио</button>
        </section>
      </div>
    </div>
  );
}

export default GraphicDesign;
