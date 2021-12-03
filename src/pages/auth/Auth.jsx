import {} from "react";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <main className="w-full min-h-screen flex items-center">
      <section className="flex-1">...</section>
      <section className="w-2/6 border p-4">
        <Outlet />
      </section>
    </main>
  );
}
