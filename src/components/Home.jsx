import "./Home.css";
import { ArrowUpRight, Clock, Flame, Heart, Sparkles, Utensils } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Footer } from "./Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Home({
  featuredItems,
  popularItems,
  favorites,
  onToggleFavorite,
  onView,
}) {
  return (
    <section className="home-page">
      <Swiper
        className="home-carousel"
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4200, disableOnInteraction: false }}
      >
        {featuredItems.map((item) => {
          const isFavorite = favorites.includes(item.id);

          return (
            <SwiperSlide key={item.id}>
              <article className="hero-slide">
                <img src={item.banner} alt={item.title} className="hero-image" />

                <div className="hero-content">
                  <span className="hero-eyebrow">
                    <Sparkles size={16} />
                    Destaque da casa
                  </span>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>

                  <div className="hero-meta">
                    <span>
                      <Utensils size={16} />
                      {item.serves}
                    </span>
                    <span>
                      <Clock size={16} />
                      {item.prepTime}
                    </span>
                  </div>

                  <div className="hero-actions">
                    <button className="hero-primary-btn" type="button" onClick={() => onView(item)}>
                      Ver item
                      <ArrowUpRight size={18} />
                    </button>
                    <button
                      className={`hero-favorite-btn ${isFavorite ? "active" : ""}`}
                      type="button"
                      onClick={() => onToggleFavorite(item.id)}
                      aria-label="Favoritar destaque"
                    >
                      <Heart size={18} fill={isFavorite ? "currentColor" : "transparent"} />
                    </button>
                  </div>
                </div>

                <div className="hero-price">
                  <span>A partir de</span>
                  <strong>{item.price}</strong>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="home-section-heading">
        <div>
          <span className="section-kicker">
            <Flame size={16} />
            Mais pedidos
          </span>
          <h2>Pedidos que mais saem</h2>
        </div>
        <p>Os favoritos da galera para começar bem a noite no Pinnos.</p>
      </div>

      <div className="popular-grid">
        {popularItems.map((item, index) => (
          <article className="popular-card" key={item.id} data-aos="fade-up" data-aos-delay={index * 90}>
            <div className="popular-image-wrap">
              <img src={item.banner} alt={item.title} className="popular-image" />
              <span className="popular-rank">#{index + 1}</span>
            </div>

            <div className="popular-info">
              <span className="popular-category">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <div className="popular-footer">
                <strong>{item.price}</strong>
                <button type="button" onClick={() => onView(item)}>
                  Ver item
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Footer />
    </section>
  );
}
