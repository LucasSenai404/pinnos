import "./MenuCard.css";
import { Heart, Utensils } from "lucide-react";

export function MenuCard({
    title,
    category,
    banner,
    price,
    index,
    isFavorite,
    onToggleFavorite,
    onView,
}) {
    return (
        <div className="menu-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <img src={banner} alt={title} className="card-img" />

            <div className="card-info">
                <button
                    className={`favorite-btn ${isFavorite ? "active" : ""}`}
                    onClick={onToggleFavorite}
                    aria-label="Favoritar item"
                >
                    <Heart
                        size={15}
                        fill={isFavorite ? "currentColor" : "transparent"}
                        stroke="currentColor"
                    />
                </button>
                <h4>{title}</h4>
                <p>{category}</p>
                <strong className="card-price">{price}</strong>

                <button className="view-item-btn" onClick={onView}>
                    <Utensils size={14} /> Ver item
                </button>
            </div>
        </div>
    );
}
