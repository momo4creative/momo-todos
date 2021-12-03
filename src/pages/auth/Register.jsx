import { Children } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Register() {
  // formik
  const formik = useFormik({
    initialValues: { username: "", password: "", confirmPassword: "" },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required("Wajib diisi !")
        .min(4, "Minimal 4 karakter !"),
      password: Yup.string()
        .required("Wajib diisi !")
        .min(4, "Minimal 4 karakter !"),
      confirmPassword: Yup.string()
        .required("Wajib diisi !")
        .oneOf([Yup.ref("password")], "Sandi dan ulangi sandi harus sama !"),
    }),
    onSubmit: (values, actions) => {
      console.log("Register ->", values);
    },
  });
  //

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-4xl">Registrasi Akun Baru</h1>
        <div className="text-gray-400">
          Silakan isi dengan benar, untuk mendaftarkan akun baru.
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="p-4 bg-gray-900 space-y-4"
      >
        <InputField
          type="text"
          label="Nama Akun"
          name="username"
          {...formik.getFieldProps("username")}
        >
          {formik.touched["username"] && formik.errors["username"]
            ? formik.errors["username"]
            : null}
        </InputField>

        <InputField
          type="password"
          label="Sandi Akun"
          name="password"
          {...formik.getFieldProps("password")}
        >
          {formik.touched["password"] && formik.errors["password"]
            ? formik.errors["password"]
            : null}
        </InputField>

        <InputField
          type="password"
          label="Ulangi Sandi"
          name="confirmPassword"
          {...formik.getFieldProps("confirmPassword")}
        >
          {formik.touched["confirmPassword"] && formik.errors["confirmPassword"]
            ? formik.errors["confirmPassword"]
            : null}
        </InputField>

        <ButtonForm type="submit" label="Daftar" />
      </form>
    </div>
  );
}

const InputField = ({ children, label, ...props }) => {
  // console.log(props);
  return (
    <article className="relative border rounded-full">
      <input
        {...props}
        placeholder={label}
        autoComplete="off"
        className="w-full rounded-full bg-transparent py-2 px-4 text-lg"
      />
      <div className="absolute z-10 mx-4 px-2 text-xs tracking-wider text-red-100 bg-red-500">
        {children}
      </div>
    </article>
  );
};

const ButtonForm = ({ label, ...props }) => {
  return (
    <button {...props} className="w-full rounded-full p-2 bg-blue-700">
      {label}
    </button>
  );
};
