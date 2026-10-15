import { Field, ErrorMessage } from 'formik'

export const Input = ({ children, name, id, type, styleContainer, styleLabel, styleInput, placeholder, error, value }) => {
    return (
        <div className={styleContainer}>
            <label htmlFor={id} className={styleLabel}>
                {children}
            </label>
            <div className="mt-6">
                <Field
                    type={type}
                    name={name}
                    id={id}
                    className={`${error ? 'input-form-error' : styleInput} `}
                    placeholder={placeholder}
                />
                <ErrorMessage name={name} component="div" className="text-red-600 text-xs pt-2 px-2 screen600:text-[0.6rem]" />
            </div>
        </div>
    )
}
