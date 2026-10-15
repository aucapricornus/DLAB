import { useContext, useEffect } from 'react';
import { FormContext } from '../ApplicationForm';
import { Formik, Form, ErrorMessage } from 'formik'
import { Checkbox, Input, TextArea } from '../../../components/Form';
import { experienceAndWork } from '../../../validation/applicationFormValidations';
import { inputsPersonalUrlsApplicationForm, softSkillsApplicationForm, yearsOfExpApplicationForm } from '../../../helpers/forms';
import { NextButton, PrevButton } from '../../../components/Modal';

export const ExperienceAndWork = () => {
    const { page, handleNextPage, handlePrevPage } = useContext(FormContext)
    let formikRef = null;

    useEffect(() => {
        const storedData = localStorage.getItem('experienceForm')
        if (storedData) {
            formikRef.setValues(JSON.parse(storedData))
        }
    }, [])

    const onSubmit = (values) => {
        localStorage.setItem('experienceForm', JSON.stringify(values))
        handleNextPage()
    }

    const CvLegend = () => {
        return (
            <legend className='text-xs'>
                Subir como documento público en Google Drive o similar
            </legend>
        )
    }
    return (
        <div>
            <h1 className='text-purple text-3xl font-semibold my-5'>
                EXPERIENCIA Y TRABAJO
            </h1>
            <Formik
                initialValues={experienceAndWork.initialValues}
                validationSchema={experienceAndWork.validationSchema}
                onSubmit={onSubmit}
            >
                {(props) => {
                    formikRef = props
                    return (
                        <Form>
                            <div className='px-20'>
                                <div className='grid grid-cols-2 gap-x-56 items-end'>
                                    {inputsPersonalUrlsApplicationForm.map(({ id, name, type, label }, index) => (
                                        <Input
                                            error={props.errors[name]}
                                            id={id}
                                            name={name}
                                            styleContainer={'mt-6'}
                                            styleInput={'input-form-application'}
                                            styleLabel={'label-form-application'}
                                            type={type}
                                            key={id}
                                        >
                                            {label} {index === 0 && (<CvLegend />)}
                                        </Input>
                                    ))}

                                    <TextArea styleContainer='col-span-2 mt-6' formikValue='proyect' styleTitle='font-semibold'>
                                        Explícanos en detalle algún proyecto que te enorgullece
                                        <legend className='text-sm font-normal'>
                                            Describe de que trató, tu rol en el proyecto y por qué lo elegiste (por ejemplo: arquitectura de desarrollo, equipo y tu rol en el proyecto, tecnologías utilizadas, dificultades y soluciones, funcionalidades, objetivos, etc. Recuerda NO esperamos link, sino explicación)
                                        </legend>
                                    </TextArea>
                                </div>

                                <div className='grid grid-cols-2 gap-x-56 items-start mt-6'>
                                    <div>
                                        <label className="label-form-application">
                                            Selecciona 3 habilidades blandas que te representen:
                                        </label>
                                        <div className="mt-6">
                                            <fieldset>
                                                <div className="space-y-2">
                                                    {softSkillsApplicationForm.map(({ id, desc }) => (
                                                        <Checkbox
                                                            key={id}
                                                            id={desc}
                                                            name='softskills'
                                                            styleLabel='checkbox-label-application'
                                                            checkboxStyle='checkbox-form-application'
                                                            type='checkbox'
                                                        >
                                                            {desc}
                                                        </Checkbox>
                                                    ))}
                                                    <ErrorMessage
                                                        name="softskills"
                                                        component="div"
                                                        className="text-red-600 mt-2 ml-2 text-xs screen600:text-[0.6rem]"
                                                    />
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="label-form-application">
                                            ¿Cuántos años de experiencia laboral posees en desarrollo de software y/o diseño?
                                        </label>
                                        <div className="mt-6">
                                            <fieldset>
                                                <div className="space-y-2">
                                                    {yearsOfExpApplicationForm.map(({ value }) => (
                                                        <Checkbox
                                                            key={value}
                                                            id={value}
                                                            name='yearsOfExp'
                                                            checkboxStyle='radio-form'
                                                            styleLabel='checkbox-label-application'
                                                            type='radio'
                                                        >
                                                            {value}
                                                        </Checkbox>
                                                    ))}
                                                    <ErrorMessage
                                                        name="yearsOfExp"
                                                        component="div"
                                                        className="text-red-600 mt-2 ml-2 text-xs screen600:text-[0.6rem]"
                                                    />
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <PrevButton hidden={page === 1} onClick={handlePrevPage} />
                                <NextButton errors={props.errors} />
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div >
    )
}
