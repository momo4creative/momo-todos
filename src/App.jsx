import {} from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, DashboardIndex, RoleAdmin } from "./pages-admin";
import { Auth, AuthIndex, Home, Login, Register } from "./pages";

export default function App() {
  //

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="admin" element={<Dashboard />}>
          <Route index element={<DashboardIndex />} />
          <Route path="role" element={<RoleAdmin />} />
        </Route>

        <Route path="auth" element={<Auth />}>
          <Route index element={<AuthIndex />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}
