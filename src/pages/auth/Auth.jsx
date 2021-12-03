import {} from "react";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <main className="flex justify-between min-h-screen">
      <div className="w-4/6">...</div>
      <div className="w-2/6 p-8 flex justify-center items-center">
        <Outlet />
      </div>
    </main>
  );
}
