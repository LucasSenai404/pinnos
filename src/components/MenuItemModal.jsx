import "./MenuItemModal.css";
import { Clock, Users, Utensils, X } from "lucide-react";

export function MenuItemModal({ item, onClose }) {
    if (!item) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(event) => event.stopPropagation()}>
                <button className="close-btn" onClick={onClose} aria-label="Fechar detalhes">
                    <X/>
                </button>

                <img src={item.banner} alt={item.title} className="modal-banner" />
                <div className="modal-body">
                    <span className="modal-category">{item.category}</span>
                    <h2>{item.title}</h2>
                    <p className="description">{item.description}</p>

                    <div className="item-stats">
                        <div className="stat">
                            <Utensils size={18}/>
                            <span>{item.price}</span>
                        </div>
                        <div className="stat">
                            <Users size={18} />
                            <span>{item.serves}</span>
                        </div>
                        <div className="stat">
                            <Clock size={18} />
                            <span>{item.prepTime}</span>
                        </div>
                    </div>
                    <button className="order-item-btn">Pedir este item</button>
                </div>
            </div>
        </div>
    );
}
