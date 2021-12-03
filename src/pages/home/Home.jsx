import {} from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header, Navbar } from "../../component/main";

export default function Home() {
  const location = useLocation();

  if (
    location.pathname == "/auth/login" ||
    location.pathname == "/auth/register"
  ) {
    return <Outlet />;
  }

  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 flex">
        <Navbar />
        <div className="flex-1 flex flex-col justify-between">
          <Outlet />

          <Footer />
        </div>
      </div>
    </main>
  );
}
