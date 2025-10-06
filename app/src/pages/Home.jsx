import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const services = [
    {
      title: 'Уеб Разработка',
      description: 'Професионални уебсайтове и уеб приложения',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/web-development'
    },
    {
      title: 'Мобилни Приложения',
      description: 'iOS и Android приложения за вашия бизнес',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/mobile-development'
    },
    {
      title: 'Дигитален Маркетинг',
      description: 'Стратегии за онлайн присъствие и растеж',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/digital-marketing'
    },
    {
      title: 'SEO Оптимизация',
      description: 'Подобряване на видимостта в търсачките',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/seo'
    },
    {
      title: 'Графичен Дизайн',
      description: 'Креативни решения за вашата марка',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/graphic-design'
    },
    {
      title: 'Консултации',
      description: 'Експертни съвети за дигитална трансформация',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      link: '/consulting'
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>Добре дошли в TechServices</h1>
          <p>Вашият партньор за дигитални решения</p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Нашите Услуги</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <Link to={service.link} key={index} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
