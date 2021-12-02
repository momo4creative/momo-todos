import {} from "react";

export default function Header() {
  return (
    <header className="px-20 flex justify-between items-center bg-blue-500 h-14">
      <div className="text-2xl font-black">Momo Todos App</div>
      <div>Guest</div>
    </header>
  );
}
