
// Inicialización de categorías en localStorage
categorias = {
  101: {
    nombre: "Arquitectura",
    descripcion: "libros de arquitectura",
    imagen: "img/arquitectura.png",
  },
  102: { 
    nombre: "Biblias", 
    descripcion: "Biblias", 
    imagen: "img/biblia.png" },
  103: {
    nombre: "Lit. Colombiana",
    descripcion: "Libros de autores colombianos",
    imagen: "img/colombia.png",
  },
  104: {
    nombre: "Espiritualidad y Autoayuda",
    descripcion: "libros de espiritualidad y autoayuda",
    imagen: "img/espiritualidad_autoayuda.png",
  },
  105: {
    nombre: "Filosofía",
    descripcion: "libros de filosofía",
    imagen: "img/filosofia.png",
  },
  106: {
    nombre: "Informatica y programación",
    descripcion: "libros de informatica y programación",
    imagen: "img/informatica.png",
  },
  107: {
    nombre: "Lit. Latinoamericana",
    descripcion: "libros de autores latinoamericanos",
    imagen: "img/latinoamericana.png",
  },
  108: {
    nombre: "Mangas y Comics",
    descripcion: "libros de mangas, comics y novelas graficas",
    imagen: "img/manga.png",
  },
  109: {
    nombre: "Superación Personal",
    descripcion: "libros de superación personal",
    imagen: "img/superacion_personal.png",
  },
  110: {
    nombre: "Universitarios",
    descripcion: "libros tecnicos universitarios",
    imagen: "img/universitarios.png",
  },
};

localStorage.setItem("categorias", JSON.stringify(categorias));
