import useAuthStore from '../../store/useAuthStore';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
const Navbar = () => {
  const startLogout = useAuthStore((state) => state.logout);
  const isAuth = useAuthStore((state) => state.isAuth);
  const navigate = useNavigate();

  function logout() {
    startLogout();
    toast.success('Sesión cerrada');
    navigate('/');
  }

  return (
    <nav className="mt-auto w-full bg-bright-blue">
      <div className="flex flex-wrap justify-between items-center px-4 py-4 mx-auto max-w-screen-xl">
        <a href="/" className="mt-2 mr-5 ml-5">
          <img
            src="src/assets/DEV-IMAGOTIPO-WHITE-HORIZONTAL.png"
            className="w-40 h-18 md:block"
            alt="Devsafio Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-100 hover:text-bright-blue focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="whitespace-nowrap font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:gap-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {isAuth ? (
              <>
                <Link to="/" className="w-full bg-gray-100 text-bright-blue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex-grow">
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-white w-full hover:bg-gray-100 hover:text-bright-blue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex-grow"
                >
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <Link to="/login" className="text-white w-full hover:bg-gray-100 hover:text-bright-blue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex-grow">
                Iniciar Sesión
              </Link>
            )}
            {/* <a href="/admin">
              <button className="text-white bg-blue-700 hover:bg-gray-300 hover:text-bright-blue focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Administra la pagina
              </button>
            </a> */}
            {!isAuth && (
              <Link to="/register" className="text-white w-full sm:block focus:ring-4 md:border lg:border focus:ring-blue-300 font-medium hover:bg-gray-100 hover:text-bright-blue rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Regístrate
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
