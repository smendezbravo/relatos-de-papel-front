import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SimpleCartProvider } from './context/SimpleCartContext';

function App() {
  return (
    <SimpleCartProvider>
      <BrowserRouter>
        <Header />
        {/* en un futuro hay que quitar el estilo inline */}
        <main style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/libro/:id" element={<BookDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </SimpleCartProvider>
  );
}

export default App;
