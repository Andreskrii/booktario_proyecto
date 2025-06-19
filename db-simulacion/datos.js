
// Inicialización de categorías en localStorage
categorias = {
  101: {
    codigo: "101",
    nombre: "Arquitectura",
    descripcion: "libros de arquitectura",
    imagen: "img/arquitectura.png",
  },
  102: {
    codigo: "102",
    nombre: "Biblias",
    descripcion: "Biblias",
    imagen: "img/biblia.png",
  },
  103: {
    codigo: "103",
    nombre: "Lit. Colombiana",
    descripcion: "Libros de autores colombianos",
    imagen: "img/colombia.png",
  },
  104: {
    codigo: "104",
    nombre: "Espiritualidad y Autoayuda",
    descripcion: "libros de espiritualidad y autoayuda",
    imagen: "img/espiritualidad_autoayuda.png",
  },
  105: {
    codigo: "105",
    nombre: "Filosofía",
    descripcion: "libros de filosofía",
    imagen: "img/filosofia.png",
  },
  106: {
    codigo: "106",
    nombre: "Informatica y programación",
    descripcion: "libros de informatica y programación",
    imagen: "img/informatica.png",
  },
  107: {
    codigo: "107",
    nombre: "Lit. Latinoamericana",
    descripcion: "libros de autores latinoamericanos",
    imagen: "img/latinoamericana.png",
  },
  108: {
    codigo: "108",
    nombre: "Mangas y Comics",
    descripcion: "libros de mangas, comics y novelas graficas",
    imagen: "img/manga.png",
  },
  109: {
    codigo: "109",
    nombre: "Superación Personal",
    descripcion: "libros de superación personal",
    imagen: "img/superacion_personal.png",
  },
  110: {
    codigo: "110",
    nombre: "Universitarios",
    descripcion: "libros tecnicos universitarios",
    imagen: "img/universitarios.png",
  }
};

localStorage.setItem("categorias", JSON.stringify(categorias));

banners = {
  101: {
    codigo: "101",
    titulo: "Cien años de soledad",
    subtitulo: "",
    descripcion:
      "Probablemente la novela más famosa de la literatura colombiana y una de las más importantes de la literatura universal. Narra la historia de la familia Buendía a lo largo de siete generaciones en el mítico pueblo de Macondo. Obra cumbre del realismo mágico.",
    imagen: "img/cien_anos_soledad.png",
  },
  102: {
    codigo: "102",
    titulo: "Rayuela",
    subtitulo: "",
    descripcion:
      "Una de las novelas más influyentes y experimentales de la literatura latinoamericana. Es célebre porque se puede leer de manera lineal o siguiendo un orden alternativo de capítulos. Narra la historia de Horacio Oliveira y su círculo de bohemios en París y Buenos Aires.",
    imagen: "img/rayuela.png",
  },
  103: {
    codigo: "103",
    titulo: "Meditaciones",
    subtitulo: "",
    descripcion:
      "Obra cumbre del estoicismo. Son pensamientos personales del emperador romano sobre cómo vivir con virtud, serenidad y aceptación frente a la adversidad. Un libro atemporal sobre ética práctica y equilibrio emocional.",
    imagen: "img/meditaciones.png",
  },
};

localStorage.setItem("banners", JSON.stringify(banners));
