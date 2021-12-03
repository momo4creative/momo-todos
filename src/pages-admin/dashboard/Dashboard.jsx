import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar, SideMenu } from "../../components/dashboard";
import { useApiContext } from "../../contexts/ApiContext";

export default function Dashboard() {
  // context
  const { ApiAuth } = useApiContext();

  useEffect(() => {
    ApiAuth.get();
  }, []);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 flex">
        <SideMenu />
        <div className="w-full flex flex-col justify-between">
          <div className="p-4">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
