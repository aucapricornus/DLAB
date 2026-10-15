import { useContext, useEffect } from 'react';
import { FormContext } from '../ApplicationForm';
import { Formik, Form } from 'formik'
import { Input, Selector } from '../../../components/Form'
import { educationInformation } from '../../../validation/applicationFormValidations';
import { educationApplicationForm, englishApplicationForm, inputsEducationalApplicationForm, institutionApplicationForm, situationApplicationForm } from '../../../helpers/forms';
import { NextButton, PrevButton } from '../../../components/Modal';

export const EducationProfile = () => {
    const { page, handleNextPage, handlePrevPage } = useContext(FormContext)
    let formikRef = null;

    useEffect(() => {
        const storedData = localStorage.getItem('educationForm')
        if (storedData) {
            formikRef.setValues(JSON.parse(storedData))
        }
    }, [])

    const onSubmit = (values) => {
        localStorage.setItem('educationForm', JSON.stringify(values))
        handleNextPage()
    }

    return (
        <div>
            <h1 className='text-purple text-3xl font-semibold my-5'>
                INFORMACIÓN EDUCACIONAL
            </h1>
            <Formik
                initialValues={educationInformation.initialValues}
                validationSchema={educationInformation.validationSchema}
                onSubmit={onSubmit}
            >
                {(props) => {
                    formikRef = props;
                    return (
                        <Form>
                            <div className='px-20 my-16'>
                                <Selector
                                    options={educationApplicationForm}
                                    id='educationalLevel'
                                    name='educationalLevel'
                                    styleContainer={'mt-6'}
                                    styleLabel={'label-form-application'}
                                >
                                    ¿Cuál es tu máximo nivel educacional? <span className='text-red-500 font-medium'>*</span>
                                </Selector>

                                <p className='font-bold text-purple mt-6'>
                                    A continuación, indícanos 2 (dos) carreras profesionales, cursos, bootcamp o certificaciones cursadas relacionadas al desarrollo de software, diseño o TI (puedes indicarnos las más importantes o actuales):
                                </p>
                                {inputsEducationalApplicationForm.slice(0, 2).map(({ id, name, label, type }, index) => {
                                    const font = index % 2 === 0 ? 'font-semibold' : ''
                                    return (
                                        <Input
                                            error={props.errors[name]}
                                            id={id}
                                            name={name}
                                            styleContainer={'mt-6'}
                                            styleInput={'input-form-application'}
                                            styleLabel={`label-form-application ${font}`}
                                            type={type}
                                            key={id}
                                        >
                                            {label} <span className='text-red-500 font-medium'>*</span>
                                        </Input>
                                    )
                                })}

                                <Selector
                                    options={institutionApplicationForm}
                                    id='typeInstitution1'
                                    name='typeInstitution1'
                                    styleContainer={'mt-6'}
                                    styleLabel={'label-form-application'}
                                >
                                    Tipo institución 1 <span className='text-red-500 font-medium'>*</span>
                                </Selector>

                                {inputsEducationalApplicationForm.slice(2).map(({ id, name, label, type }, index) => {
                                    const font = index % 2 === 0 ? 'font-semibold' : ''
                                    return (
                                        <Input
                                            error={props.errors[name]}
                                            id={id}
                                            name={name}
                                            styleContainer={'mt-6'}
                                            styleInput={'input-form-application'}
                                            styleLabel={`label-form-application ${font}`}
                                            type={type}
                                            key={id}
                                        >
                                            {label}
                                        </Input>
                                    )
                                })}

                                <Selector
                                    options={institutionApplicationForm}
                                    id='typeInstitution2'
                                    name='typeInstitution2'
                                    styleContainer={'mt-6'}
                                    styleLabel={'label-form-application'}
                                >
                                    Tipo institución 2
                                </Selector>

                                <div className='grid grid-cols-2 items-end gap-x-5'>
                                    <Selector
                                        options={situationApplicationForm}
                                        id='educationalStatus'
                                        name='educationalStatus'
                                        styleContainer={'mt-6'}
                                        styleLabel={'label-form-application'}
                                    >
                                        ¿Cuál es tu situación educacional actual (Bootcamp, diplomados, universidad, cursos u otros)?
                                    </Selector>

                                    <Selector
                                        options={englishApplicationForm}
                                        id='englishLevel'
                                        name='englishLevel'
                                        styleContainer={'mt-6'}
                                        styleLabel={'label-form-application'}
                                    >
                                        Nivel inglés
                                    </Selector>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <PrevButton hidden={page === 1} onClick={handlePrevPage} />
                                <NextButton errors={props.errors} />
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}
