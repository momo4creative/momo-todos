import {} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ButtonForm, InputField } from "../../components/auth";

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
        .oneOf([Yup.ref("password")], "Ulangi sandi harus sama dengan sandi !"),
    }),

    onSubmit: (values, actions) => {
      console.log(values);
    },
  });
  //
  return (
    <div className="space-y-8">
      <header>
        <div className="text-4xl">Registrasi</div>
        <p className="text-gray-400">
          Lengkapi form untuk registrasi pengguna baru
        </p>
      </header>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <InputField
          type="text"
          label="Nama Penguna"
          name="username"
          {...formik.getFieldProps("username")}
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
