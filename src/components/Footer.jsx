import "./Footer.css";
import { Clock3, Instagram, MapPin, Navigation, Phone } from "lucide-react";

const mapUrl = "https://www.google.com/maps?q=Pinnos%20Bar%20%26%20Boliche&output=embed";
const directionsUrl = "https://www.google.com/maps/search/?api=1&query=Pinnos%20Bar%20%26%20Boliche";

export function Footer() {
  return (
    <footer className="pinnos-footer">
      <div className="footer-info">
        <span className="footer-kicker">
          <MapPin size={16} />
          Venha visitar
        </span>

        <h2>Pinnos Bar & Boliche</h2>
        <p>
          Um ponto para reunir a mesa, pedir os favoritos da casa e aproveitar a
          noite com boliche, drinks e por&ccedil;&otilde;es para compartilhar.
        </p>

        <div className="footer-details" aria-label="Informacoes do restaurante">
          <div className="footer-detail">
            <Clock3 size={18} />
            <span>Ter&ccedil;a a domingo, das 18h &agrave;s 0h</span>
          </div>
          <div className="footer-detail">
            <Phone size={18} />
            <span>Contato pelo balc&atilde;o ou WhatsApp da casa</span>
          </div>
          <div className="footer-detail">
            <Instagram size={18} />
            <span>@pinnosbarboliche</span>
          </div>
        </div>
      </div>

      <div className="footer-map" aria-label="Mapa do restaurante">
        <iframe
          title="Mapa do Pinnos Bar & Boliche"
          src={mapUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <a className="footer-route-btn" href={directionsUrl} target="_blank" rel="noreferrer">
          <Navigation size={17} />
          Abrir rota
        </a>
      </div>
    </footer>
  );
}
