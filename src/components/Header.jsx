import "./Header.css";
import { Clock, Phone, Search, X } from "lucide-react";
import { useRef, useState } from "react";

export function Header({ search, setSearch }) {
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
    <header className="pinnos-header">
      <div className="user-info">
        <h3>
          Bem-vindo ao <span className="highlight">Pinnos Bar & Boliche</span>
        </h3>
        <p>Cardápio digital com pratos e drinks da casa</p>
      </div>

      <div className={`search-bar ${isSearchOpen ? "open" : ""}`}>
        {isSearchOpen ? (
          <>
            <Search size={18} color="#94a3b8" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Buscar item, categoria ou ingrediente..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <button className="search-close-btn" onClick={closeSearch} aria-label="Fechar pesquisa">
              <X size={18} />
            </button>
          </>
        ) : (
          <button className="search-toggle-btn" onClick={openSearch} aria-label="Abrir pesquisa">
            <Search size={20} />
          </button>
        )}
      </div>

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
