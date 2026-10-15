import instance from '../service/instance';
import {toast} from "sonner"

const useRegister = async (firstName, lastName, email, password) => {
    try {
      const response = await instance.post("/user", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      if (response.request?.status === 200 ){
        toast.success("Usuario registrado con éxito");
      }
      return { status: response.request.status };
    } catch (error) {
      if (error.response?.data?.httpCode === 409){
        toast.error("El email ya esta en uso")     
      }
      if (error.response?.data?.httpCode === 500) {
        toast.error("Error en el servidor")     
      }
    }

  return {firstName, lastName, email, password}
}

export default useRegister