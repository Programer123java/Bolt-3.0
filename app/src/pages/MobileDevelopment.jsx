import './ServicePage.css';

function MobileDevelopment() {
  return (
    <div className="service-page">
      <div className="service-hero">
        <img
          src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Мобилни Приложения"
        />
        <div className="service-hero-overlay">
          <h1>Мобилни Приложения</h1>
        </div>
      </div>

      <div className="container">
        <section className="service-description">
          <h2>iOS и Android Разработка</h2>
          <p>
            Създаваме високо качествени мобилни приложения за iOS и Android платформи.
            Нашите приложения са бързи, интуитивни и предлагат отлично потребителско изживяване.
          </p>
        </section>

        <section className="service-features">
          <h2>Нашите Възможности</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Native Development</h3>
              <p>Swift и Kotlin за максимална производителност</p>
            </div>
            <div className="feature-item">
              <h3>Cross-Platform</h3>
              <p>React Native и Flutter за бърза разработка</p>
            </div>
            <div className="feature-item">
              <h3>UI/UX Design</h3>
              <p>Красиви и интуитивни интерфейси</p>
            </div>
            <div className="feature-item">
              <h3>Push Notifications</h3>
              <p>Ангажиране на потребителите в реално време</p>
            </div>
            <div className="feature-item">
              <h3>Offline Функционалност</h3>
              <p>Работа без интернет връзка</p>
            </div>
            <div className="feature-item">
              <h3>App Store Публикуване</h3>
              <p>Пълна помощ при качване в магазините</p>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <h2>Създайте Вашето Мобилно Приложение</h2>
          <p>Консултация и оферта в рамките на 24 часа</p>
          <button className="cta-button">Заявка</button>
        </section>
      </div>
    </div>
  );
}

export default MobileDevelopment;
