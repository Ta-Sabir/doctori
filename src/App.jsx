import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Services,
  Service,
  Doctors,
  Blog,
  ContactPage,
  ErrorPage,
} from "./pages/index";
import { Navbar, Article, Footer } from "./components/index";
const App = () => {
  return (
    <BrowserRouter location={"/"} navigator={undefined}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/service" element={<Service />} />
          <Route path="/best-doctors" element={<Doctors />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog/article" element={<Article />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
