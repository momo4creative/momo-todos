import {} from "react";
import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <aside className="bg-gray-900 w-3/12">
      <Link to="/admin/role" className="block bg-black px-4 py-2">
        Role
      </Link>
    </aside>
  );
}
