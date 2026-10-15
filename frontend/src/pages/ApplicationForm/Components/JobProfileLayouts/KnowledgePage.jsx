import { useContext, useEffect } from 'react';
import { FormContext } from '../../ApplicationForm';
import { Formik, Form } from 'formik';
import { LevelLayout } from './LevelLayout';
import { TextArea } from '../../../../components/Form';
import { PrevButton, NextButton } from './../../../../components/Modal';
import { knowledgeValidations } from '../../../../validation/applicationFormValidations';
import { frameworksApplicationForm, lenguagesApplicationForm, toolsApplicationForm } from '../../../../helpers/forms/multiSelectorApplicationForm';
import { getArrayLenguages, getArrayFrameworks, getArrayTools } from '../../../../helpers';

const initialProps = {
    lang1: 'lenguagesLv1',
    frame1: 'frameworksLv1',
    tools1: 'toolsLv1',
    lang2: 'lenguagesLv2',
    frame2: 'frameworksLv2',
    tools2: 'toolsLv2',
    lang3: 'lenguagesLv3',
    frame3: 'frameworksLv3',
    tools3: 'toolsLv3'
}

export const KnowledgePage = () => {
    const { page, handleNextPage, handlePrevPage } = useContext(FormContext)
    let formikRef;

    let lenguagesOptions = []
    let frameworksOptions = []
    let toolsOptions = []

    useEffect(() => {
        const storedData = localStorage.getItem('knowledge')
        if (storedData) {
            formikRef.setValues(JSON.parse(storedData))
        }
    }, [])

    const handleSubmit = (values) => {
        localStorage.setItem('knowledge', JSON.stringify(values))
        handleNextPage()
    }

    return (
        <Formik
            initialValues={knowledgeValidations.initialValues}
            validationSchema={knowledgeValidations.validationSchema}
            onSubmit={handleSubmit}
        >
            {(props) => {
                formikRef = props
                { lenguagesOptions = getArrayLenguages(props, lenguagesApplicationForm) }
                { frameworksOptions = getArrayFrameworks(props, frameworksApplicationForm) }
                { toolsOptions = getArrayTools(props, toolsApplicationForm) }
                return (
                    <Form>
                        <LevelLayout
                            lenguages={lenguagesOptions}
                            frameworks={frameworksOptions}
                            tools={toolsOptions}
                            nameLenguages={initialProps.lang1}
                            nameFrameworks={initialProps.frame1}
                            nameTools={initialProps.tools1}
                        >
                            <div className='text-lg'>
                                <strong>Indícanos tus conocimientos a Nivel 1</strong>
                                <p>
                                    (No tengo experiencia laboral, pero he desarrollado proyectos utilizado esta tecnología/herramienta)
                                </p>
                            </div>
                        </LevelLayout>

                        <LevelLayout
                            lenguages={lenguagesOptions}
                            frameworks={frameworksOptions}
                            tools={toolsOptions}
                            nameLenguages={initialProps.lang2}
                            nameFrameworks={initialProps.frame2}
                            nameTools={initialProps.tools2}
                        >
                            <div className='text-lg'>
                                <strong>Indícanos tus conocimientos a Nivel 2</strong>
                                <p>
                                    (Tengo poca experiencia laboral, menos de dos años, necesito supervisión constante)
                                </p>
                            </div>
                        </LevelLayout>

                        <LevelLayout
                            lenguages={lenguagesOptions}
                            frameworks={frameworksOptions}
                            tools={toolsOptions}
                            nameLenguages={initialProps.lang3}
                            nameFrameworks={initialProps.frame3}
                            nameTools={initialProps.tools3}
                        >
                            <div className='text-lg'>
                                <strong>Indícanos tus conocimientos a Nivel 3</strong>
                                <p>
                                    (Tengo experiencia laboral (+2 años) y/o autonomía completa a la hora de desarrollar proyectos)
                                </p>
                            </div>
                        </LevelLayout>

                        <TextArea formikValue='otherKnowledge' styleTitle='text-base font-semibold'>
                            Indícanos alguna otra competencia, herramienta o tecnología que conozcas que creas importante agregar:
                        </TextArea>

                        <div className='flex justify-between mt-5'>
                            <PrevButton hidden={page === 1} onClick={handlePrevPage} />
                            <NextButton errors={props.errors} />
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}
