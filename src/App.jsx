import {} from "react";
import { Routes, Route } from "react-router-dom";
import { Auth, Home, Login, Register, Todos } from "./pages";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="todos" element={<Todos />} />

          <Route path="auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
