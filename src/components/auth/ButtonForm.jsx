import React from "react";

export default function ButtonForm({ label, ...props }) {
  return (
    <button {...props} className="w-full p-2 bg-blue-700">
      {label}
    </button>
  );
}
