import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Checkbox, SubmitButton } from "../../../../components/Form";
import { checkBoxContactForm } from "../../../../helpers/forms";



export const ContactForm = () => {
  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    areas: [],
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "* El nombre es muy corto")
      .max(50, "* El nombre es demasiado largo")
      .required("* El nombre es requerido"),
    lastName: Yup.string()
      .min(2, "* El apellido es muy corto")
      .max(50, "* El apellido es demasiado largo")
      .required("* El apellido es requerido"),
    email: Yup.string()
      .email("* Formato de correo inválido")
      .required("* El correo es requerido"),
    phoneNumber: Yup.string()
      .matches(/^(\+\d{1,4})(\d{10})$/, "* Formato Inválido")
      .required("* El número es requerido"),
    company: Yup.string().required("* El campo es requerido"),
    areas: Yup.array()
      .min(1, "* Selecciona una o más opciónes")
      .required("* El campo es requerido"),
  });

  const onSubmit = (values, props) => {
    alert(JSON.stringify(values))
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 1000)
  }

  return (
    <div className="w-1/2 screen600:w-full screen600:mt-10 px-5 screen600:px-0">
      <div className="bg-dark-blue text-white p-10 rounded-2xl mx-5 screen600:px-5 screen600:py-5 screen1100:px-8 screen900:px-6 ">
        <h1 className=" font-medium screen600:text-base screen1100:text-lg">
          Si eres empresa y buscas talento TI, déjanos tu información en este
          formulario. En breve te contactaremos:
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <div
                className={`mt-5 grid grid-cols-2 gap-x-6 screen600:mt-5 ${["name", "lastName", "email", "phoneNumber", "company"].some(
                  (key) => props.errors.hasOwnProperty(key)
                )
                  ? "gap-y-4"
                  : "gap-y-6"
                  }`}
              >
                <Input
                  id={"name"}
                  name={"name"}
                  type={"text"}
                  placeholder="Ingresa tu nombre"
                  error={props.errors.name}
                  styleLabel={'label-form-contact'}
                  styleInput={'input-form-contact'}
                >
                  Nombre *
                </Input>

                <Input
                  id={"lastName"}
                  name={"lastName"}
                  type={"text"}
                  placeholder="Ingresa tu apellido"
                  error={props.errors.lastName}
                  styleLabel={'label-form-contact'}
                  styleInput={'input-form-contact'}
                >
                  Apellido *
                </Input>

                <Input
                  id={"email"}
                  name={"email"}
                  type={"email"}
                  placeholder="empresa@email.com"
                  error={props.errors.email}
                  styleLabel={'label-form-contact'}
                  styleInput={'input-form-contact'}
                >
                  Email corporativo *
                </Input>

                <Input
                  id={"phoneNumber"}
                  name={"phoneNumber"}
                  type={"tel"}
                  placeholder="+001234567890"
                  error={props.errors.phoneNumber}
                  styleLabel={'label-form-contact'}
                  styleInput={'input-form-contact'}
                >
                  Número de teléfono *
                </Input>

                <Input
                  id={"company"}
                  name={"company"}
                  type={"text"}
                  placeholder="Empresa..."
                  error={props.errors.company}
                  styleLabel={'label-form-contact'}
                  styleInput={'input-form-contact'}
                  styleContainer={'col-span-full'}
                >
                  ¿A qué empresa perteneces? *
                </Input>
              </div>

              <div className="mt-5">
                <h1 className=" font-light ">
                  Cargo/área de preferencia que buscas contratar *
                </h1>
                <div className="mt-5">
                  <fieldset>
                    <div className="space-y-2">
                      {checkBoxContactForm.map(({ id, desc }) => (
                        <Checkbox
                          key={id}
                          id={id}
                          name='areas'
                          checkboxStyle='checkbox-form-contact'
                          styleLabel='checkbox-label-contact'
                          type='checkbox'
                        >
                          {desc}
                        </Checkbox>
                      ))}
                      <ErrorMessage
                        name="areas"
                        component="div"
                        className="text-red-600 mt-2 ml-2 text-xs screen600:text-[0.6rem]"
                      />
                    </div>
                  </fieldset>
                </div>
              </div>

              <div className="mt-5 screen600:mt-5">
                <h1 className=" font-light">¿Dudas? Déjalas acá!</h1>

                <div className="mt-5">
                  <textarea
                    className="mt-1 block w-full bg-ligth-blue text-black rounded-lg resize-none outline-none focus:ring focus:ring-ligth-blue focus:border-none focus:ring-opacity-50"
                    rows="3"
                  ></textarea>
                </div>
              </div>

              <div className="mt-5">
                <SubmitButton disable={props.isSubmitting}>Enviar</SubmitButton>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
