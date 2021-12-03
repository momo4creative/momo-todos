import {} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ButtonForm, InputField } from "../../components/auth";

export default function Login() {
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
        .oneOf([Yup.ref("password")], "Ulangi sandi harus sama dengan sandi !"),
    }),

    onSubmit: (values, actions) => {
      console.log(values);
    },
  });
  //
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <div className="text-4xl text-gray-300 font-bold tracking-wider">
          Login
        </div>
        <p className="text-gray-500">Lengkapi form untuk akses masuk</p>
      </header>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <InputField
          type="text"
          label="Nama Akun"
          name="username"
          {...formik.getFieldProps("username")}
          error={formik.errors["username"]}
        >
          {formik.touched["username"] && formik.errors["username"]
            ? formik.errors["username"]
            : null}
        </InputField>

        <InputField
          type="password"
          label="Kata Sandi"
          name="password"
          {...formik.getFieldProps("password")}
          error={formik.errors["password"]}
        >
          {formik.touched["password"] && formik.errors["password"]
            ? formik.errors["password"]
            : null}
        </InputField>

        <ButtonForm type="submit" label="Daftar" formik={formik} />
      </form>
    </div>
  );
}
