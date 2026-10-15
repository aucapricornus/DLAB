import { Field, ErrorMessage } from 'formik'

export const Selector = ({ children, styleLabel, styleContainer, options, id, name }) => {
    return (
        <div className={styleContainer}>
            <label htmlFor={id} className={styleLabel}>
                {children}
            </label>
            <div className="mt-6">
                <Field
                    as='select'
                    id={id}
                    name={name}
                    className="bg-gray-50 border border-purple text-base rounded-lg w-full text-ligth-gray focus:border-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    <option value='Seleccionar' disabled>Seleccionar</option>
                    {
                        options.map(({ value, label }) => (
                            <option value={label} key={value}>
                                {label}
                            </option>
                        ))
                    }
                </Field>
                <ErrorMessage
                    name={name}
                    component="div"
                    className="text-red-600 mt-2 ml-2 text-xs screen600:text-[0.6rem]"
                />
            </div>
        </div>
    )
}
