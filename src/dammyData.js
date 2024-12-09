// products
import EM_1 from "./assets/images/productos/em1-fam-agro-small.jpg";
import EM_COMPOST from "./assets/images/productos/emcompost-famt-animal-small.jpg";
import EM_CERAMICA_SOIL from "./assets/images/productos/emceramicasoil25kgt-agro-smaill.jpg";
import EM_CERAMICA_Fitoprotectante from "./assets/images/productos/emceramicafito25kg-small.jpg";
import ACTIVADOR_MICROBIOLÓGICO from "./assets/images/productos/activador-agro-small.jpg";
import EM_CAMARON from "./assets/images/productos/emcamaron-fam-acu.jpg";
import EM_AGUA from "./assets/images/productos/emagua-fam-acu.jpg";
import PRO_EM_1 from "./assets/images/productos/proem1-salud-small.jpg";


const productsData = [
  {
    id: 1,
    link: "/em1",
    imgSrc: "images/productos/em1_collection.jpg",
    altText: "EM•1®",
    title: "EM•1®",
    category: "Agriculture"
  },
  {
    id: 2,
    link: "/ActiCal",
    imgSrc: "images/productos/ActiCal_collection.png",
    altText: "ActiCal®",
    title: "ActiCal",
    category: "Agriculture"
  },
  {
    id: 3,
    link: "/emactisol",
    imgSrc: "images/productos/Actisol_20lt.png",
    altText: "EM•Actisol®",
    title: "EM•Actisol®",
    category: "Production animale"
  },
  {
    id: 4,
    link: "/emactiferm",
    imgSrc: "images/productos/Actiferm_collection.png",
    altText: "EM•Actiferm®",
    title: "EM•Actiferm®",
    category: "Agriculture"
  },
  {
    id: 7,
    link: "/emagua",
    imgSrc: EM_AGUA,
    altText: "EM•AGUA®",
    title: "EM•AGUA®",
    category: "Medio Ambiente"
  },
  // {
  //   id: 8,
  //   link: "/proem1",
  //   imgSrc: PRO_EM_1,
  //   altText: "PRO•EM-1®",
  //   title: "PRO•EM-1®",
  //   category: "Salud y Bienestar"
  // }
];

const products = [
  {
    category: "agriculture",
    name: "em1",
    link: "/em1",
    imgSrc: "images/productos/em1_collection.jpg",
    imgAlt: "EM•1®",
    img_1: "images/productos/em1_1lt.png",
    img_2: "images/productos/em1-5lt.png",
    title: "EM•1®",
    description: "EM•1® est un inoculant biologique pour les plantes, formulé à base de micro-organismes à action symbiotique, qui favorise la croissance des plantes et prévient l’apparition de ravageurs et de maladies.",
    benefits: ["Favorise le développement foliaire ainsi qu'une floraison et une fructification optimales des cultures.","Augmente la capacité photosynthétique de la plante.", "Optimise la croissance des plantes et prévient l’apparition de ravageurs et de maladies.", "Améliore les conditions physiques, chimiques et biologiques du sol.", "Réduit les problèmes de salinité dans les sols."]
  },
  {
    category: "agriculture",
    name: "emactiferm",
    link: "/emactiferm",
    imgSrc: "images/productos/Actiferm_collection.png",
    imgAlt: "EM•Actiferm®",
    img_1: "images/productos/Actiferm_1lt.png",
    img_2: "images/productos/Actiferm_20lt.png",
    title: "EM•Actiferm®",
    description: "EM•ActiFerm® est un mélange innovant de micro-organismes actifs utilisant la technologie EM® II pour favoriser la fermentation des matières organiques et enrichir les sols. En agriculture, il dégrade naturellement les résidus en humus tout en libérant des antioxydants, vitamines, minéraux et oligo-éléments essentiels pour les cultures. Composé de bactéries lactiques (Lactobacillus casei et plantarum) qui suppriment les germes pathogènes, de bactéries photosynthétiques (Rhodopseudomonas palustris) qui stimulent les micro-organismes, et de levures (Saccharomyces cerevisiae) productrices de substances bioactives, EM•ActiFerm® est sûr, écologique et fabriqué sous licence officielle d'EMRO Japon.",
    benefits: ["Amélioration de l’écosystème : favorise une fermentation naturelle et inhibe le développement des agents pathogènes.", "Enrichissement des sols agricoles : transforme les résidus organiques en humus, stimulant la croissance des cultures.", "Apport nutritionnel : libère des antioxydants, vitamines, minéraux et oligo-éléments pour les plantes.", "Polyvalence d’utilisation : convient à l’agriculture, la production animale et les applications environnementales.", "Sécurité totale : utilisation sans risques pour les humains, les animaux et l’environnement."]
  },
  {
    category: "agriculture",
    name: "ActiCal",
    link: "/ActiCal",
    imgSrc: "images/productos/ActiCal_collection.png",
    imgAlt: "ActiCal®",
    img_1: "images/productos/Actical_1lt.png",
    img_2: "images/productos/Actical_5lt.png",
    title: "ActiCal®",
    description: "ActiCal est un acide organique de calcium conçu pour prévenir et corriger les carences en calcium dans tous les types de cultures, sans ajouter d’azote, de sulfate ou de chlore. Grâce à cette composition, il est particulièrement adapté aux phases finales de développement des fruits, favorisant une meilleure fermeté et consistance. ActiCal renforce également la résistance des plantes face aux parasites et maladies. Ce produit contient 8 % d’oxyde de calcium (CaO) et possède un pH de 5,5, avec une densité de 1,10 kg/l. Il peut être appliqué par pulvérisation foliaire ou via l’eau d’irrigation, offrant une flexibilité d’utilisation selon les besoins spécifiques des cultures.",
    benefits: ["Correction efficace des carences en calcium : améliore la santé et le développement des cultures.", "Amélioration de la qualité des fruits : favorise des fruits plus fermes et résistants grâce à l’absence d’azote.", "Renforcement des plantes : augmente leur résistance aux parasites et maladies.", "Polyvalence d’application : utilisable en pulvérisation foliaire ou en fertirrigation.", "Adapté aux besoins spécifiques des cultures : idéal pour les phases finales de développement des cultures."]
  },
  {
    category: "agriculture",
    name: "emactisol",
    link: "/emactisol",
    imgSrc: "images/productos/Actisol_20lt.png",
    imgAlt: "EM•Actisol®",
    img_1: "images/productos/Actisol_20lt.png",
    img_2: "images/productos/Actisol_20lt.png",
    title: "EM•Actisol®",
    description: "EM.Actisol est un fertilisant organique enrichi en micro-organismes bénéfiques EM®, conçu pour améliorer la fertilité des sols et favoriser la croissance des cultures. Grâce à sa composition unique, il fournit une énergie rapide et facilement assimilable par les plantes, tout en stimulant l’activité microbienne bénéfique dans le sol. Ses propriétés chélatantes permettent aux nutriments de devenir facilement assimilables par les racines, garantissant une disponibilité rapide des minéraux et leur stabilité dans le sol pour une absorption prolongée. Enrichi en matière organique (25 %) et micro-organismes EM®, EM.Actisol contribue à une composition optimale de la flore du sol, améliorant ainsi la santé et la productivité des cultures.",
    benefits: ["Optimisation des sols : améliore la composition de la flore microbienne et stimule la vie du sol.","Disponibilité des nutriments : garantit une absorption rapide et efficace des minéraux essentiels par les plantes.","Effet biostimulant : favorise la croissance des cultures et leur développement harmonieux.","Polyvalence d’utilisation : utilisable par fertirrigation, aspersion, irrigation traditionnelle ou application foliaire.","Respect des cycles naturels : soutient la décomposition naturelle et la formation d’humus.","Compatibilité étendue : compatible avec des produits phytosanitaires et nutritionnels non alcalins."]
  },
  // {
  //   category: "environnement",
  //   date: "12/26/2017",
  //   name: "emagua",
  //   link: "/emagua",
  //   imgSrc: "images/productos/emagua-fam-acu.jpg",
  //   imgAlt: "EM•AGUA®",
  //   title: "EM•AGUA®",
  //   description: "es un inoculante biológico elaborado a base de microorganismos con acción..."
  // },
  // {
  //   category: "santé",
  //   date: "12/27/2017",
  //   name: "proem1",
  //   link: "/proem1",
  //   imgSrc: "images/productos/proem1-salud-small.jpg",
  //   imgAlt: "PRO•EM-1®",
  //   title: "PRO•EM-1®",
  //   description: "Es una bebida elaborada a base de microorganismos probióticos y beneficiosos para el ..."
  // }
];


export { productsData, products }