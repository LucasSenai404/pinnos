import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Header } from "./components/Header";
import { MenuCard } from "./components/MenuCard";
import { MenuItemModal } from "./components/MenuItemModal";
import { Sidebar } from "./components/Sidebar";
import { menuItems } from "./cardapio/menuItems";

function App() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("menu");
  const [favorites, setFavorites] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = menuItems
    .filter((item) => activeTab === "menu" || favorites.includes(item.id))
    .filter((item) => {
      const term = search.toLowerCase();
      return (
        item.title.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term)
      );
    });

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favoriteId) => favoriteId !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false, easing: "ease-in-out" });
  }, []);

  return (
    <div className="pinnos-app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="pinnos-main">
        <Header search={search} setSearch={setSearch} />

        <div className="pinnos-content">
          <h2 className="section-title">
            {activeTab === "menu" && "Cardápio"}
            {activeTab === "favorites" && "Pratos favoritos"}
            {activeTab === "about" && "Sobre a casa"}
          </h2>

          {activeTab === "about" ? (
            <section className="about-panel">
              <h3>Pinnos Bar & Boliche</h3>
              <p>
                Cardápio digital com porções crocantes, hambúrguer artesanal,
                drinks e combinados de sushi preparados para compartilhar.
              </p>
              <div className="about-list">
                <span>Aberto hoje: 18h às 0h</span>
                <span>Pedido mínimo: consulte no balcão</span>
                <span>Atendimento: mesa, retirada e delivery</span>
              </div>
            </section>
          ) : (
            <div className="pinnos-grid">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <MenuCard
                    key={item.id}
                    title={item.title}
                    category={item.category}
                    banner={item.banner}
                    price={item.price}
                    index={index}
                    isFavorite={favorites.includes(item.id)}
                    onToggleFavorite={() => toggleFavorite(item.id)}
                    onView={() => setSelectedItem(item)}
                  />
                ))
              ) : (
                <p className="empty-message">
                  {activeTab === "favorites"
                    ? "Você ainda não favoritou nenhum prato."
                    : "Nenhum item encontrado."}
                </p>
              )}
            </div>
          )}
        </div>
      </main>

      <MenuItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}

export default App;
