import "./Sidebar.css";
import { Heart, Info, UtensilsCrossed } from "lucide-react";

export function Sidebar({ activeTab, setActiveTab }) {
    return (
        <aside className="pinnos-sidebar">
            <h2 className="logo">Pinnos Bar</h2>

            <nav>
                <div
                    className={`nav-item ${activeTab === "menu" ? "active" : ""}`}
                    onClick={() => setActiveTab("menu")}
                >
                    <UtensilsCrossed size={20}/>Cardápio
                </div>
                <div
                    className={`nav-item ${activeTab === "favorites" ? "active" : ""}`}
                    onClick={() => setActiveTab("favorites")}
                >
                    <Heart size={20}/>Favoritos
                </div>
                <div
                    className={`nav-item ${activeTab === "about" ? "active" : ""}`}
                    onClick={() => setActiveTab("about")}
                >
                    <Info size={20}/>Sobre
                </div>
            </nav>
        </aside>
    );
}
