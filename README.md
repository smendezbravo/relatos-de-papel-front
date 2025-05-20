# 📚 Relatos de Papel – Frontend

Este proyecto es el desarrollo del **frontend de la aplicación web** "Relatos de Papel", realizado con **React**, como parte de la asignatura *Desarrollo Web Full Stack*.

## 🚀 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/) para configuración y arranque del proyecto
- [React Router v6](https://reactrouter.com/) para gestión de rutas
- [JavaScript ES6](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS) con metodología **BEM**

## 📂 Estructura del proyecto

```plaintext

📁 public/
  └── vite.svg
 
📁 src/
  ├── 📁 assets/            # Archivos estáticos (SVGs, imágenes)
  │   └── react.svg
  │
  ├── 📁 components/        # Componentes reutilizables (Header, Footer, BookCard, etc.)
  │   ├── ActionButton.jsx
  │   ├── BookCard.jsx
  │   ├── BookInformation.jsx
  │   ├── FilterBar.jsx
  │   ├── Footer.jsx
  │   ├── Header.jsx
  │   ├── Hero.jsx
  │   ├── Section.jsx
  │   └── SimpleCartContext.jsx  # Contexto global (carrito)
  │
  ├── 📁 data/              # Datos simulados o fijos
  │   └── libros.js
  │
  ├── 📁 hooks/             # Custom React hooks (useCart)
  │
  ├── 📁 pages/             # Vistas o pantallas principales: Landing, Home, Book, Cart, Checkout
  │   ├── BookDetails.jsx
  │   ├── Cart.jsx
  │   ├── Checkout.jsx
  │   ├── Home.jsx
  │   └── Landing.jsx
  │
  ├── 📁 styles/            # Archivos CSS
  │   ├── ActionButton.css
  │   ├── App.css
  │   ├── BookCard.css
  │   ├── BookDetails.css
  │   ├── BookInformation.css
  │   ├── cart.css
  │   ├── FilterBar.css
  │   ├── footer.css
  │   ├── header.css
  │   ├── Hero.css
  │   ├── index.css
  │   └── Landing.css
  │
  ├── App.jsx              # Configuración de rutas
  └── main.jsx             # Punto de entrada de React

```




## 🖥️ Funcionalidades principales

- ✅ Landing page con redirección automática
- ✅ Visualización de catálogo de libros
- ✅ Filtros por título
- ✅ Vista detallada de cada libro
- ✅ Carrito de compras (con opción de eliminar)
- ✅ Checkout con alerta de confirmación y reinicio del carrito

## 🧩 Hooks utilizados

- `useState` y `useEffect` en la mayoría de los componentes
- `useLocalStorage` (custom hook) para guardar el carrito

## 🔗 Despliegue

La aplicación será desplegada en Vercel:  
🔗 [https://relatos-de-papel.vercel.app](https://relatos-de-papel.vercel.app)

## 🎥 Videomemoria

Se incluye una videomemoria donde se explica el funcionamiento completo de la aplicación, sus vistas, componentes y tecnologías usadas.



