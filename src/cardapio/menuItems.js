import barcaHotRoll from "../assets/cardapio/barca-hot-roll.jpeg";
import burgerCheddarBacon from "../assets/cardapio/burger-cheddar-bacon.jpeg";
import combinadoSalmao from "../assets/cardapio/combinado-salmao.jpeg";
import comboCrocante from "../assets/cardapio/combo-crocante.jpeg";
import drinkPinnos from "../assets/cardapio/drink-pinnos.jpeg";
import festivalHotRoll from "../assets/cardapio/festival-hot-roll.jpeg";
import frangoBaconFritas from "../assets/cardapio/frango-bacon-fritas.jpeg";
import hotRollEspecial from "../assets/cardapio/hot-roll-especial.jpeg";

export const menuItems = [
    {
        id: 1,
        title: "Combo Crocante da Casa",
        category: "Porções para dividir",
        banner: comboCrocante,
        price: "R$ 74,90",
        serves: "Serve 2 pessoas",
        prepTime: "25 min",
        description:
            "Frango empanado crocante com batata frita, cheddar cremoso, bacon e molhos da casa. Ideal para dividir.",
    },
    {
        id: 2,
        title: "Hot Roll Especial",
        category: "Hot rolls",
        banner: hotRollEspecial,
        price: "R$ 39,90",
        serves: "8 unidades",
        prepTime: "18 min",
        description:
            "Hot roll empanado com salmão, cream cheese, tarê, gergelim e cebolinha fresca.",
    },
    {
        id: 3,
        title: "Frango Bacon & Fritas",
        category: "Porções para dividir",
        banner: frangoBaconFritas,
        price: "R$ 69,90",
        serves: "Serve 2 pessoas",
        prepTime: "25 min",
        description:
            "Porção generosa de frango crocante, fritas com cheddar, bacon e dois molhos para acompanhar.",
    },
    {
        id: 4,
        title: "Barca Hot Roll",
        category: "Combos japoneses",
        banner: barcaHotRoll,
        price: "R$ 89,90",
        serves: "24 unidades",
        prepTime: "30 min",
        description:
            "Seleção de hot rolls crocantes com cream cheese, salmão e finalizações especiais da casa.",
    },
    {
        id: 5,
        title: "Burger Cheddar Bacon",
        category: "Hambúrgueres artesanais",
        banner: burgerCheddarBacon,
        price: "R$ 42,90",
        serves: "1 pessoa",
        prepTime: "20 min",
        description:
            "Burger artesanal no pão brioche, cheddar cremoso, bacon crocante e batata frita.",
    },
    {
        id: 6,
        title: "Festival Hot Roll",
        category: "Hot rolls",
        banner: festivalHotRoll,
        price: "R$ 64,90",
        serves: "16 unidades",
        prepTime: "25 min",
        description:
            "Hot rolls variados com maionese especial, tarê, cebolinha e textura bem crocante.",
    },
    {
        id: 7,
        title: "Combinado Salmão",
        category: "Combos japoneses",
        banner: combinadoSalmao,
        price: "R$ 119,90",
        serves: "32 unidades",
        prepTime: "35 min",
        description:
            "Combinado com makis, uramakis, sashimi e rolls preparados com salmão fresco.",
    },
    {
        id: 8,
        title: "Drink Vermelho Pinnos",
        category: "Drinks e bebidas",
        banner: drinkPinnos,
        price: "R$ 24,90",
        serves: "1 copo",
        prepTime: "8 min",
        description:
            "Drink vermelho da casa, servido com bastante gelo e um toque cítrico refrescante.",
    },
];
