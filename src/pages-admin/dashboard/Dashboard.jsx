import {} from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar, SideMenu } from "../../components/dashboard";

export default function Dashboard() {
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
