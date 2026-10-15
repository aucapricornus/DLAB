import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../ApplicationForm';
import { Formik, Form, ErrorMessage } from 'formik';
import { Checkbox, TextArea } from './../../../components/Form';
import { jobType } from '../../../validation/applicationFormValidations';
import { availabilityWorkApplicationForm, jobTypeApplicationForm, visaWorkApplicationForm } from '../../../helpers/forms';
import { PrevButton, SubmitButton } from '../../../components/Modal';

export const JobType = () => {
    const { page, setPage, handlePrevPage, setOpenModal } = useContext(FormContext)
    const [form, setForm] = useState({
        personal: {},
        educational: {},
        job: {},
        experience: {},
        jobType: {}
    })

    useEffect(() => {
        const personalData = localStorage.getItem('personalInformationForm')
        const educationData = localStorage.getItem('educationForm')
        const knowledgeData = localStorage.getItem('knowledge')
        const experienceData = localStorage.getItem('experienceForm')
        let onlyValuesFromKnowledge;

        if (knowledgeData) {
            const data = JSON.parse(knowledgeData)
            onlyValuesFromKnowledge = Object.keys(data).reduce((acc, key) => {
                if (Array.isArray(data[key])) {
                    const frameworks = data[key].map(item => item.value);
                    return { ...acc, [key]: frameworks };
                }
                return acc;
            }, {});
        }

        if (personalData && educationData && knowledgeData && experienceData) {
            setForm({
                ...form,
                personal: JSON.parse(personalData),
                educational: JSON.parse(educationData),
                job: onlyValuesFromKnowledge,
                experience: JSON.parse(experienceData)
            })
        }
    }, [])

    const onSubmit = (values, props) => {
        setForm({
            ...form,
            jobType: values
        })

        setTimeout(() => {
            props.setSubmitting(false)
            setOpenModal(false)
            setPage(1)
            console.log({
                ...form,
                jobType: values
            })
            localStorage.clear()
            alert(JSON.stringify(form, null, 2))
        }, 3000);
    }

    return (
        <div>
            <h1 className='text-purple text-3xl font-semibold my-5'>
                ¿QUÉ TIPO DE TRABAJO ESTÁS BUSCANDO?
            </h1>
            <Formik
                initialValues={jobType.initialValues}
                validationSchema={jobType.validationSchema}
                onSubmit={onSubmit}
            >
                {(props) => (
                    <Form>
                        <div className='px-20 my-16 grid grid-cols-3 gap-x-6 space-y-6'>
                            <TextArea styleContainer='col-span-3' formikValue='jobType'>
                                Déjanos una breve descripción con respecto tu trabajo ideal
                            </TextArea>

                            <div>
                                <label className="label-form-application">
                                    Indícanos tu disponibilidad laboral:
                                </label>
                                <div className="mt-6">
                                    <fieldset>
                                        <div className="space-y-2">
                                            {availabilityWorkApplicationForm.map(({ id, desc }) => (
                                                <Checkbox
                                                    key={id}
                                                    id={desc}
                                                    name='availability'
                                                    styleLabel='checkbox-label-application'
                                                    checkboxStyle='checkbox-form-application'
                                                    type='checkbox'
                                                >
                                                    {desc}
                                                </Checkbox>
                                            ))}
                                            <ErrorMessage
                                                name="availability"
                                                component="div"
                                                className="text-red-600 mt-2 ml-2 text-xs screen600:text-[0.6rem]"
                                            />
                                        </div>
                                    </fieldset>
                                </div>
                            </div>

                            <div>
                                <label className="label-form-application">
                                    ¿Qué describe mejor tu situación actual?
                                </label>
                                <div className="mt-6">
                                    <fieldset>
                                        <div className="space-y-2">
                                            {jobTypeApplicationForm.map(({ value }) => (
                                                <Checkbox
                                                    key={value}
                                                    id={value}
                                                    name='actualSituation'
                                                    checkboxStyle='radio-form'
                                                    styleLabel='checkbox-label-application'
                                                    type='radio'
                                                >
                                                    {value}
                                                </Checkbox>
                                            ))}
                                            <ErrorMessage
                                                name="actualSituation"
                                                component="div"
                                                className="text-red-600 mt-2 ml-2 text-xs screen600:text-[0.6rem]"
                                            />
                                        </div>
                                    </fieldset>
                                </div>
                            </div>

                            <div>
                                <label className="label-form-application">
                                    ¿Cuentas con Visa de trabajo activa en?
                                </label>
                                <div className="mt-6">
                                    <fieldset>
                                        <div className="space-y-2">
                                            {visaWorkApplicationForm.map(({ id, desc }) => (
                                                <Checkbox
                                                    key={id}
                                                    id={desc}
                                                    name='hasVisa'
                                                    styleLabel='checkbox-label-application'
                                                    checkboxStyle='checkbox-form-application'
                                                    type='checkbox'
                                                >
                                                    {desc}
                                                </Checkbox>
                                            ))}
                                            <ErrorMessage
                                                name="hasVisa"
                                                component="div"
                                                className="text-red-600 mt-2 ml-2 text-xs screen600:text-[0.6rem]"
                                            />
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between mt-5'>
                            <PrevButton hidden={page === 1} onClick={handlePrevPage} />
                            <SubmitButton errors={props.errors} isSubmitting={props.isSubmitting} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
