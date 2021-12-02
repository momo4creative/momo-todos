import {} from "react";

export default function Footer() {
  return (
    <footer>
      <div className="text-sm text-gray-400">
        &copy; Copyright {new Date().getFullYear()} Momo Todos App
      </div>
    </footer>
  );
}
