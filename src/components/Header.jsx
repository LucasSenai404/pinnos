import "./Header.css";
import { Clock, Phone } from "lucide-react";

export function Header() {
  return (
    <header className="pinnos-header">
      <div className="user-info">
        <h3>
          Bem-vindo ao <span className="highlight">Pinnos Bar & Boliche</span>
        </h3>
        <p>Cardápio digital com pratos, drinks e combos da casa</p>
      </div>

      {/* A barra de pesquisa antiga que ficava aqui foi removida */}

      <div className="header-actions">
        <div className="badge">
          <Clock size={14} />
          <span>ABERTO AGORA</span>
        </div>
        <button className="notification-btn" aria-label="Contato do restaurante">
          <Phone size={20} />
        </button>
      </div>
    </header>
  );
}