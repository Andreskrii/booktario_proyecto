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
  },
};

localStorage.setItem("categorias", JSON.stringify(categorias));

// Inicialización de banners en el localStorage
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

// Inicialización de productos en el localStorage
const productos = {
  1011: {
    codigo: "1011",
    titulo: "Pedro Paramo",
    autor: "Juan Rulfo",
    editorial: "Planeta",
    isbn: "000-000-0000-00-0",
    categoria: "107",
    imagen: "img/pedro_paramo.png",
    precio: 15000,
  },
  1012: {
    codigo: "1012",
    titulo: "El mito de sísifo",
    autor: "Albert Camus",
    editorial: "Norma",
    isbn: "000-000-0000-00-0",
    categoria: "105",
    imagen: "img/mito_sisifo.png",
    precio: 52000,
  },
  1013: {
    codigo: "1013",
    titulo: "Delirio",
    autor: "Laura Restrepo",
    editorial: "Alfaguara",
    isbn: "000-000-0000-00-0",
    categoria: "103",
    imagen: "img/delirio.png",
    precio: 49000,
  },
  1014: {
    codigo: "1014",
    titulo: "El amor en los tiempos del cólera",
    autor: "Gabriel García Márquez",
    editorial: "Random House",
    isbn: "000-000-0000-00-0",
    categoria: "103",
    imagen: "img/amor_tiempos_colera.png",
    precio: 60000,
  },
  1015: {
    codigo: "1015",
    titulo: "El túnel",
    autor: "Ernesto Sabato",
    editorial: "Sudamericana",
    isbn: "000-000-0000-00-0",
    categoria: "107",
    imagen: "img/tunel.png",
    precio: 45000,
  },
  1016: {
    codigo: "1016",
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    editorial: "Random House",
    isbn: "000-000-0000-00-0",
    categoria: "103",
    imagen: "img/cien_anos_soledad.png",
    precio: 70000,
  },
  1017: {
    codigo: "1017",
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    editorial: "Siglo XXI",
    isbn: "000-000-0000-00-0",
    categoria: "107",
    imagen: "img/rayuela.png",
    precio: 80000,
  },
  1018: {
    codigo: "1018",
    titulo: "Meditaciones",
    autor: "Marco Aurelio",
    editorial: "Gredos",
    isbn: "000-000-0000-00-0",
    categoria: "105",
    imagen: "img/meditaciones.png",
    precio: 30000,
  },
  1019: {
    codigo: "1019",
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    editorial: "Salamandra",
    isbn: "000-000-0000-00-0",
    categoria: "104",
    imagen: "img/principito.png",
    precio: 25000,
  },
  1020: {
    codigo: "1020",
    titulo: "El arte de la guerra",
    autor: "Sun Tzu",
    editorial: "Alianza",
    isbn: "000-000-0000-00-0",
    categoria: "105",
    imagen: "img/arte_guerra.png",
    precio: 40000,
  },
  1021: {
    codigo: "1021",
    titulo: "El alquimista",
    autor: "Paulo Coelho",
    editorial: "Planeta",
    isbn: "000-000-0000-00-0",
    categoria: "104",
    imagen: "img/alquimista.png",
    precio: 35000,
  },
  1022: {
    codigo: "1022",
    titulo: "1984",
    autor: "George Orwell",
    editorial: "Debolsillo",
    isbn: "000-000-0000-00-0",
    categoria: "105",
    imagen: "img/1984.png",
    precio: 45000,
  },
};

localStorage.setItem("productos", JSON.stringify(productos));

