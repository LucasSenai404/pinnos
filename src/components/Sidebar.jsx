import "./Sidebar.css";
import { Heart, Home, Info, UtensilsCrossed, Search, X } from "lucide-react";
import { useRef, useState } from "react";

const navItems = [
  { id: "home", label: "Início", icon: <Home size={20} /> },
  { id: "menu", label: "Cardápio", icon: <UtensilsCrossed size={20} /> },
  { id: "favorites", label: "Favoritos", icon: <Heart size={20} /> },
  { id: "about", label: "Sobre", icon: <Info size={20} /> },
];

export function Sidebar({ activeTab, setActiveTab, search, setSearch }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);

  const openSearch = () => {
    setIsSearchOpen(true);
    window.requestAnimationFrame(() => inputRef.current?.focus());
  };

  const closeSearch = () => {
    setSearch("");
    setIsSearchOpen(false);
  };

  return (
    <aside className="pinnos-sidebar">
      <div className="brand-block">
        <h2 className="logo">Pinnos</h2>
        <span>Bar & Boliche</span>
      </div>

      {/* Barra de Pesquisa inserida na Sidebar */}
      <div className={`sidebar-search-bar ${isSearchOpen ? "open" : ""}`}>
        {isSearchOpen ? (
          <div className="search-input-container">
            <Search size={18} color="#9ca3af" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Buscar item..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <button className="search-close-btn" onClick={closeSearch} aria-label="Fechar pesquisa">
              <X size={18} />
            </button>
          </div>
        ) : (
          <button className="search-toggle-btn" onClick={openSearch} aria-label="Abrir pesquisa">
            <Search size={20} />
            <span className="search-placeholder-text">Buscar...</span>
          </button>
        )}
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