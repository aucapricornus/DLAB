import * as Yup from "yup";

export const shemaRegister = Yup.object({

    firstName: Yup.string()
      .required("Debes ingresar un nombre")
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .max(50, "El nombre no debe superar los 50 caracteres"),

    lastName: Yup.string()
      .required("Debes ingresar un apellido")
      .min(2, "El apellido debe tener al menos 2 caracteres")
      .max(50, "El apellido no debe superar los 50 caracteres"),
    email: Yup.string().required("Debes ingresar un email").email(),
    password: Yup.string()
      .required("Debes ingresar una contraseña")
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        "^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])(.{8,})$",
        "La contraseña debe ser alfanúmerica, tener una mayúscula, una minúscula y un símbolo."
      )
      .max(30, "La contraseña no debe superar los 50 caracteres"),

    confirmPassword: Yup.string()
      .required("Debes confirmar tu contraseña")
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        "^(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9])(.{8,})$",
        "La contraseña debe ser alfanúmerica, tener una mayúscula, una minúscula y un símbolo."
      )
      .max(30, "La contraseña no debe superar los 50 caracteres")
      .oneOf([Yup.ref("password"), null], "Las contraseñas no coiciden"),
  });

  export const shemaLogin = Yup.object().shape({
    email: Yup.string("Ingresa tu correo")
      .email("Ingresa un correo válido")
      .required("Correo requerido"),
    password: Yup.string("Ingresa tu contraseña")
      .min(8, "La contraseña debe tener un mínimo de 8 caracteres")
      .max(50, "Muy largo!")
      .required("Contraseña requerida"),
    rememberMe: Yup.boolean(),
  });
