import { Field } from 'formik'

export const TextArea = ({ children, styleContainer, styleTitle, formikValue }) => {
    return (
        <div className={styleContainer}>
            <p className={styleTitle}>{children}</p>
            <Field
                as='textarea'
                className='w-full my-6 bg-ligth-blue text-black border-gray-300 rounded-lg resize-none outline-none focus:ring focus:ring-ligth-blue focus:border-none focus:ring-opacity-50'
                rows='8'
                name={formikValue}
            />
        </div>
    )
}
