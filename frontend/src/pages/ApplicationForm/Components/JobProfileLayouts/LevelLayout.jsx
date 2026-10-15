import { Field } from 'formik'
import { SelectorMulti } from '../../../../components/Form'

export const LevelLayout = ({ children, lenguages, frameworks, tools, nameLenguages, nameFrameworks, nameTools }) => {
    return (
        <div className='my-5'>
            {children}
            <Field
                name={nameLenguages}
                component={SelectorMulti}
                options={lenguages}
                placeholder='Selecciona los lenguajes'
            />

            <Field
                name={nameFrameworks}
                component={SelectorMulti}
                options={frameworks}
                placeholder='Selecciona los frameworks'
                
            />

            <Field
                name={nameTools}
                component={SelectorMulti}
                options={tools}
                placeholder='Selecciona las herramientas'
            />
        </div>
    )
}
