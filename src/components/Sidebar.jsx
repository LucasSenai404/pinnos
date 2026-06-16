import "./Sidebar.css";
import { Heart, Home, Info, UtensilsCrossed } from "lucide-react";

const navItems = [
  { id: "home", label: "Início", icon: <Home size={20} /> },
  { id: "menu", label: "Cardápio", icon: <UtensilsCrossed size={20} /> },
  { id: "favorites", label: "Favoritos", icon: <Heart size={20} /> },
  { id: "about", label: "Sobre", icon: <Info size={20} /> },
];

export function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="pinnos-sidebar">
      <div className="brand-block">
        <h2 className="logo">Pinnos</h2>
        <span>Bar & Boliche</span>
      </div>

      <nav aria-label="Navegação principal">
        {navItems.map(({ id, label, icon }) => (
          <button
            key={id}
            type="button"
            className={`nav-item ${activeTab === id ? "active" : ""}`}
            onClick={() => setActiveTab(id)}
            aria-current={activeTab === id ? "page" : undefined}
          >
            {icon}
            {label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
