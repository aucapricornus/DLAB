import React from "react";
import { useFormik } from "formik";
import { shemaRegister } from "../../validation/authValidations";
import useRegister from "../../hooks/useRegister";
import useLogin from "../../hooks/useLogin"

export const Register = () => {
  const { login } = useLogin();
  
  const signupForm = async ({ firstName, lastName, email, password }) => {
    const onSignUp = await useRegister(firstName, lastName, email, password);
    if (onSignUp.status === 200) {
      login({ email, password, rememberMe: false })
    }
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: shemaRegister,
    onSubmit: signupForm,
  });

  return (
    <div className="bg-loginRegister bg-cover relative">
      <div className="container mx-auto py-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"
        >
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center pb-6">
            Regístrate
          </h1>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="name"
            >
              Nombre
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
              type="text"
              id="name"
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
              placeholder="Nombre"
              helpertext={errors.firstName}
            />
            {errors.firstName ? (
              <div className="text-red-500 ">{errors.firstName}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="name"
            >
              Apellido
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
              placeholder="Apellido"
            />
            {errors.lastName ? (
              <div className="text-red-500 ">{errors.lastName}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="email"
            >
              Correo electrónico
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="correo@ejemplo.com"
            />
            {errors.email ? (
              <div className="text-red-500 ">{errors.email}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="********"
            />
            {errors.password ? (
              <div className="text-red-500 ">{errors.password}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-900"
              htmlFor="confirm-password"
            >
              Confirmar contraseña
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-indigo-500"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
              value={values.confirmPassword}
              placeholder="********"
            />
            {errors.confirmPassword ? (
              <div className="text-red-500 ">{errors.confirmPassword}</div>
            ) : null}
          </div>

          <button
            className="w-full bg-bright-blue text-white text-sm font-bold py-2 px-4 rounded-lg hover:bg-blue transition duration-300 my-2"
            type="submit"
            // disabled={isSubmitting}
          >
            Regístrate
          </button>
        </form>
      </div>
    </div>
  );
};
