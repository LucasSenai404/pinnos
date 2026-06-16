import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { MenuCard } from "./components/MenuCard";
import { MenuItemModal } from "./components/MenuItemModal";
import { Sidebar } from "./components/Sidebar";
import { menuItems } from "./cardapio/menuItems";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const featuredIds = [4, 1, 7, 8];
const popularIds = [1, 4, 3, 2];

function App() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("home");
  const [favorites, setFavorites] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const searchTerm = search.trim().toLowerCase();

  const featuredItems = useMemo(
    () => featuredIds.map((id) => menuItems.find((item) => item.id === id)).filter(Boolean),
    []
  );

  const popularItems = useMemo(
    () => popularIds.map((id) => menuItems.find((item) => item.id === id)).filter(Boolean),
    []
  );

  const matchesSearch = (item) =>
    !searchTerm ||
    item.title.toLowerCase().includes(searchTerm) ||
    item.category.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm);

  const menuResults = menuItems.filter(matchesSearch);
  const favoriteResults = menuItems
    .filter((item) => favorites.includes(item.id))
    .filter(matchesSearch);

  const toggleFavorite = (id) => {
    const itemTitle = menuItems.find((item) => item.id === id)?.title;

    if (!favorites.includes(id)) {
      toast.success(`${itemTitle} adicionado aos favoritos!`, { theme: "dark" });
    } else {
      toast.info(`${itemTitle} removido dos favoritos!`, { theme: "dark" });
    }

    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favoriteId) => favoriteId !== id) : [...prev, id]
    );
  };

  const renderMenuGrid = (items, emptyMessage) => (
    <div className="pinnos-grid">
      {items.length > 0 ? (
        items.map((item, index) => (
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
        <p className="empty-message">{emptyMessage}</p>
      )}
    </div>
  );

  useEffect(() => {
    AOS.init({ duration: 850, once: true, easing: "ease-out-cubic" });
  }, []);

  const showSearchResults = activeTab === "home" && searchTerm;

  return (
    <div className="pinnos-app">
      {/* ALTERAÇÃO AQUI: Passando as props de busca para a Sidebar */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        search={search} 
        setSearch={setSearch} 
      />

      <main className="pinnos-main">
        {/* ALTERAÇÃO AQUI: O Header não precisa mais receber as props de busca */}
        <Header />

        <div className={`pinnos-content ${activeTab === "home" && !showSearchResults ? "home-content" : ""}`}>
          {activeTab === "home" && !showSearchResults ? (
            <Home
              featuredItems={featuredItems}
              popularItems={popularItems}
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
              onView={setSelectedItem}
            />
          ) : (
            <>
              <h2 className="section-title">
                {showSearchResults && "Resultados da busca"}
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
              ) : activeTab === "favorites" ? (
                renderMenuGrid(
                  favoriteResults,
                  searchTerm
                    ? "Nenhum favorito encontrado nessa busca."
                    : "Você ainda não favoritou nenhum prato."
                )
              ) : (
                renderMenuGrid(menuResults, "Nenhum item encontrado.")
              )}
            </>
          )}
        </div>
      </main>

      <MenuItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;