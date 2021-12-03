import React from "react";
import { Loader } from "../";

export default function ButtonForm({ label, formik, ...props }) {
  return (
    <button
      {...props}
      className="w-full p-2 rounded-lg bg-blue-700 font-semibold disabled:bg-gray-600 hover:filter hover:brightness-75"
      disabled={!formik.isValid || formik.isSubmitting}
    >
      {formik.isSubmitting ? <Loader /> : label}
    </button>
  );
}
