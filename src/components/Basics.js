import { Routes, Route, Navigate,  } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { About } from "../pages/About";
import { Error404 } from "../pages/Error";
import { User } from "../pages/User";
import { Products } from "../pages/Products";
import { Acerca } from "../pages/Acerca";
import { Contacto } from "../pages/Contacto";

function Basics() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navigate to="/acerca" />} />
        <Route path="/contact" element={<Navigate to="/contacto" />} />
        <Route path="/user/:username" element={<User />} />
        <Route path="/products" element={<Products />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </>
  );
}

export { Basics };
