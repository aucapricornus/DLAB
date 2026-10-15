import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { shemaLogin } from '../../../validation/authValidations';
import useLogin from '../../../hooks/useLogin';

const LoginEmail = ({ handleEvent }) => {
  const { login } = useLogin();

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: { email: '', password: '', rememberMe: false },
    validationSchema: shemaLogin,
    onSubmit: login,
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-loginRegister bg-cover relative">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-96 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                Iniciar Sesión
              </h1>
              <div className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tu correo
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="correo@ejemplo.com"
                    required
                    onChange={handleChange}
                    value={values.email}
                  />
                  <div className="text-red-500">{errors.email}</div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={handleChange}
                    value={values.password}
                  />
                  <div className="text-red-500">{errors.password}</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        onChange={handleChange}
                        name="rememberMe"
                        value={values.rememberMe}
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        // type="checkbox"
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Recuerdame
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="m-1 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <button
                  type="submit"
                  // disabled={isSubmitting}
                  className="w-full bg-bright-blue hover:bg-blue transition duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center text-white dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Iniciar
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  ¿No tienes una cuenta?
                  <a
                    href="/register"
                    className="mx-1 font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Registrate
                  </a>
                </p>
                <p
                  onClick={(e) => handleEvent(false)}
                  className="text-end text-sm font-medium text-gray-600 dark:text-gray-500 hover:underline cursor-pointer"
                >
                  <a href="/">Volver</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginEmail;
