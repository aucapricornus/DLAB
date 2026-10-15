import * as Yup from "yup";

export const personalInformation = {
    initialValues: {
        name: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        city: '',
        country: '',
        gender: 'Seleccionar',
        workStatus: '',
        positions: []
    },
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(2, '* El nombre es muy corto')
            .max(50, '* El nombre es demasiado largo')
            .required('* El nombre es requerido'),
        lastName: Yup.string()
            .min(2, '* El apellido es muy corto')
            .max(50, '* El apellido es demasiado largo')
            .required('* El apellido es requerido'),
        email: Yup.string()
            .email('* Formato de correo inválido')
            .required('* El correo es requerido'),
        phoneNumber: Yup.string()
            .matches(/^(\+\d{1,4})(\d{10})$/, '* Formato Inválido')
            .required('* El número es requerido'),
        city: Yup.string()
            .required('* El campo es requerido'),
        country: Yup.string()
            .required('* El campo es requerido'),
        gender: Yup.string()
            .notOneOf(["Seleccionar"], "* Selecciona una opción válida")
            .required("* Selecciona una opción"),
        workStatus: Yup.string()
            .required('* El campo es requerido'),
        positions: Yup.array()
            .min(1, "* Selecciona una o más opciónes")
            .required("* El campo es requerido"),
    })
}

export const educationInformation = {
    initialValues: {
        educationalLevel: 'Seleccionar',
        career1: '',
        nameInstitution1: '',
        typeInstitution1: 'Seleccionar',
        career2: '',
        nameInstitution2: '',
        typeInstitution2: 'Seleccionar',
        educationalStatus: 'Seleccionar',
        englishLevel: 'Seleccionar'
    },
    validationSchema: Yup.object().shape({
        educationalLevel: Yup.string()
            .notOneOf(["Seleccionar"], "* Selecciona una opción válida")
            .required("* Selecciona una opción"),
        career1: Yup.string()
            .required('* El campo es requerido'),
        nameInstitution1: Yup.string()
            .required('* El campo es requerido'),
        typeInstitution1: Yup.string()
            .notOneOf(["Seleccionar"], "* Selecciona una opción válida")
            .required("* Selecciona una opción"),
        career2: Yup.string()
            .notRequired(),
        nameInstitution2: Yup.string()
            .notRequired(),
        typeInstitution2: Yup.string()
            // .notOneOf(["Seleccionar"], "* Selecciona una opción válida")
            .notRequired(),
        educationalStatus: Yup.string()
            .notOneOf(["Seleccionar"], "* Selecciona una opción válida")
            .required("* Selecciona una opción"),
        englishLevel: Yup.string()
            .notOneOf(["Seleccionar"], "* Selecciona una opción válida")
            .required("* Selecciona una opción")
    })
}

export const knowledgeValidations = {
    initialValues: {
        lenguagesLv1: [],
        frameworksLv1: [],
        toolsLv1: [],

        lenguagesLv2: [],
        frameworksLv2: [],
        toolsLv2: [],

        lenguagesLv3: [],
        frameworksLv3: [],
        toolsLv3: [],
        otherKnowledge: ''
    },
    validationSchema: Yup.object().shape({
        lenguagesLv1: Yup.array()
            .min(1, "* Selecciona una o más opciónes")
            .required("* El campo es requerido"),
        frameworksLv1: Yup.array()
            .min(1, "* Selecciona una o más opciónes")
            .required("* El campo es requerido"),
        toolsLv1: Yup.array()
            .min(1, "* Selecciona una o más opciónes")
            .required("* El campo es requerido"),

        lenguagesLv2: Yup.array()
            .min(1, "* Selecciona una o más opciónes")
            .required("* El campo es requerido"),
        frameworksLv2: Yup.array()
            .min(1, "* Selecciona una o más opciónes")
            .required("* El campo es requerido"),
        toolsLv2: Yup.array()
            .min(1, "* Selecciona una o más opciónes")
            .required("* El campo es requerido"),

        lenguagesLv3: Yup.array()
            .min(1, "* Selecciona una o más opciónes")
            .required("* El campo es requerido"),
        frameworksLv3: Yup.array()
            .min(1, "* Selecciona una o más opciónes")
            .required("* El campo es requerido"),
        toolsLv3: Yup.array()
            .min(1, "* Selecciona una o más opciónes")
            .required("* El campo es requerido"),
        otherKnowledge: Yup.string()
            .notRequired()
    })
}

export const experienceAndWork = {
    initialValues: {
        cv: '',
        linkedin: '',
        github: '',
        web: '',
        proyect: '',
        softskills: [],
        yearsOfExp: ''
    },
    validationSchema: Yup.object().shape({
        cv: Yup.string()
            .notRequired(),
        linkedin: Yup.string()
            .notRequired(),
        github: Yup.string()
            .notRequired(),
        web: Yup.string()
            .notRequired(),
        proyect: Yup.string()
            .notRequired(),
        softskills: Yup.array()
            .min(3, '* Debes elegir 3 opciones')
            .max(3, '* No más de 3 opciones')
            .required('* Elige 3 habilidades blandas'),
        yearsOfExp: Yup.string()
            .required('* El campo es requerido')
    })
}

export const jobType = {
    initialValues: {
        jobType: '',
        availability: [],
        actualSituation: '',
        hasVisa: []
    },
    validationSchema: Yup.object().shape({
        jobType: Yup.string()
            .notRequired(),
        availability: Yup.array()
            .min(1, '* Debes elegir al menos una opción')
            .required('* Elige 1 opción'),
        actualSituation: Yup.string()
            .required('* El campo es obligatorio'),
        hasVisa: Yup.array()
            .min(1, '* Debes elegir al menos una opción')
            .required('* Elige 1 opción'),
    })
}
