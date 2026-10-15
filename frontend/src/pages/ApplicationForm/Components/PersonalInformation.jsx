import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../ApplicationForm';
import { Form, Formik, ErrorMessage, useFormik } from 'formik'
import { Input, Selector, Checkbox } from '../../../components/Form'
import { personalInformation } from '../../../validation/applicationFormValidations';
import { checkBoxApplicationForm, genresApplicationForm, inputsPersonalApplicationForm, workStatusApplicationForm } from '../../../helpers/forms';
import { NextButton, PrevButton } from '../../../components/Modal';

export const PersonalInformation = () => {
    const { page, handleNextPage, handlePrevPage } = useContext(FormContext)
    let formikRef = null;

    useEffect(() => {
        const storedData = localStorage.getItem('personalInformationForm')
        if (storedData) {
            formikRef.setValues(JSON.parse(storedData))
        }
    }, [])

    const onSubmit = (values, props) => {
        localStorage.setItem('personalInformationForm', JSON.stringify(values))
        handleNextPage()
    }

    return (
        <div>
            <h1 className='text-purple text-3xl font-semibold my-5'>
                INFORMACIÓN PERSONAL
            </h1>
            <Formik
                initialValues={personalInformation.initialValues}
                validationSchema={personalInformation.validationSchema}
                onSubmit={onSubmit}
            >
                {(props) => {
                    formikRef = props
                    return (
                        <Form>
                            <div className='grid grid-cols-2 gap-x-56 px-20'>
                                {
                                    inputsPersonalApplicationForm.map(({ id, name, label, type }) => (
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
                                            {label} <span className='text-red-500 font-medium'>*</span>
                                        </Input>
                                    ))
                                }
                                <Selector
                                    options={genresApplicationForm}
                                    id='gender'
                                    name='gender'
                                    styleContainer={'mt-6 row-span-'}
                                    styleLabel={'label-form-application'}
                                >
                                    ¿Con qué género te identificas? <span className='text-red-500 font-medium'>*</span>
                                </Selector>

                                <div className="mt-6 row-span-2">
                                    <label className="label-form-application">
                                        ¿Cuál es tu estado laboral actual? <span className='text-red-500 font-medium'>*</span>
                                    </label>
                                    <div className="mt-6">
                                        <fieldset>
                                            <div className="space-y-2">
                                                {workStatusApplicationForm.map(({ value }) => (
                                                    <Checkbox
                                                        key={value}
                                                        id={value}
                                                        name='workStatus'
                                                        checkboxStyle='radio-form'
                                                        styleLabel='checkbox-label-application'
                                                        type='radio'
                                                    >
                                                        {value}
                                                    </Checkbox>
                                                ))}
                                                <ErrorMessage
                                                    name="workStatus"
                                                    component="div"
                                                    className="text-red-600 mt-2 ml-2 text-xs screen600:text-[0.6rem]"
                                                />
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>

                                <div className="mt-6 ">
                                    <label className="label-form-application">
                                        ¿Cuál o cuáles cargos te gustaría optar? <span className='text-red-500 font-medium'>*</span>
                                    </label>
                                    <p className='mt-4 font-light'>
                                        <span className='font-semibold text-ligth-gray'>Ten en cuenta:</span> De acuerdo al cargo que postules, te pediremos que seas capaz de demostrarlo de manera práctica durante el proceso de selección.
                                    </p>
                                    <div className="mt-6">
                                        <fieldset>
                                            <div className="space-y-2">
                                                {checkBoxApplicationForm.map(({ id, desc }) => (
                                                    <Checkbox
                                                        key={id}
                                                        id={desc}
                                                        name='positions'
                                                        styleLabel='checkbox-label-application'
                                                        checkboxStyle='checkbox-form-application'
                                                        type='checkbox'
                                                    >
                                                        {desc}
                                                    </Checkbox>
                                                ))}
                                                <ErrorMessage
                                                    name="positions"
                                                    component="div"
                                                    className="text-red-600 mt-2 ml-2 text-xs screen600:text-[0.6rem]"
                                                />
                                            </div>
                                        </fieldset>
                                    </div>
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
