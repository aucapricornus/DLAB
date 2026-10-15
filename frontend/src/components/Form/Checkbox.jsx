import { Field } from 'formik'

export const Checkbox = ({ children, id, name, styleLabel, checkboxStyle, type }) => {
    return (
        <div className="relative flex gap-x-4 items-center screen600:gap-x-3">
            <div className="flex items-center">
                <Field
                    id={id}
                    name={name}
                    value={id}
                    type={type}
                    className={checkboxStyle}
                />
            </div>
            <div className={styleLabel}>
                <label htmlFor={id}>
                    {children}
                </label>
            </div>
        </div>
    )
}
