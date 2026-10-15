import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import instance from '@/service/instance';
import useAuthStore from '@/store/useAuthStore';

const useLogin = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const login = async ({ email, password, rememberMe }) => {
    try {
      const response = await instance.post('/auth/login', {
        email: email,
        password: password,
      });
      const { user, token } = response.data;
      localStorage.setItem('token', response.data.token);
      toast.success('Inicio de sesión correcto');

      setAuth({ user, token }, rememberMe);
      navigate('/');

      // return { status: response.request.status, user, token };
    } catch (error) {
      if (error.response?.data?.httpCode === 401) {
        toast.error(error.response?.data.message);
      }
      if (error.response?.data?.httpCode === 500) {
        toast.error('Error en el servidor');
      }
    }
  };

  return { login };
};

export default useLogin;
