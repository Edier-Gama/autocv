'use client'
/* eslint-disable react/react-in-jsx-scope */
import Datepicker from 'tailwind-datepicker-react'
import { options } from '../Calendar'
import { FormLabel } from '@chakra-ui/react'
import { useAddExperience, useCancelExperience } from '@/components/experience-form/use-add-experience'
import { ButtonWithLogo } from '@/components/Button'
import { useState } from 'react'
import { AddSectionButton } from '../add-section-button'
import { Experience } from '@/sections/Experience'
import { addExperience } from '@/lib/add-experience'

const CalendarStartAndFinish = ({ setDate }: any): any => {
  const [show, setShow] = useState(false)
  const handleChange = (selectedDate: Date): any => {
    setDate(selectedDate)
  }
  const handleClose = (state: boolean): any => {
    setShow(state)
  }
  return (
    <div className='font-sans m-3 w-96'>
    <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} classNames='font-sans'/>
    </div>
  )
}

function ExperienceForm (): any {
  // Funciones para manejar eventos en los formularios
  const [hasExperience, setHasExperience] = useState(false)
  const useExperienceAdd = useAddExperience()
  const useExperienceCancel = useCancelExperience()
  const toggleExperience = useExperienceAdd.toggleAddExperience
  const cancelExperience = useExperienceCancel.cancelExperience

  // Estados de los inputs

  const [company, setCompany]: any = useState()
  const [charge, setCharge]: any = useState()
  const [jobDescription, setJobDescription]: any = useState()
  const [jobAchievements, setJobAchievements]: any = useState()
  const [date, setDate]: any = useState()

  return (
    <section className='flex m-auto flex-col relative top-96 mt max-w-7xl flex-wrap' id='add-experience-form'>
        <div>
           <p className='text-xl text-left font-semibold ml-3'>Experiencia Laboral</p>
        </div>
    <div className='flex flex-wrap flex-col'>
        <Experience
           company={company}
           charge={charge}
           jobDescription={jobDescription}
           jobAchievements={jobAchievements}
           date={date}
        />
        {!hasExperience && (
        <div className='m-3 w-60 add-experience-button'>
          <ButtonWithLogo
              text='Añadir nueva educación'
              callback={toggleExperience}
              callBackData={setHasExperience}
            />
        </div>
        )}
        {
            hasExperience && (
              <section id='add-experience'>
                  <section className='flex flex-wrap'>
                    <div className='flex flex-col'>
                    <FormLabel className='font-sans text-xl m-3'>Nombre de la empresa</FormLabel>
                    <input
                      onChange={(event) => { setCompany(event.target.value) }}
                      type="text"
                      placeholder='Empresa'
                      className='w-96 m-3 rounded'>
                    </input>
                    </div>
                    <div className='flex flex-col'>
                    <FormLabel className='font-sans text-xl m-3'>Cargo</FormLabel>
                    <input
                      onChange={(event) => { setCharge(event.target.value) }}
                      type="text"
                      placeholder='Cargo'
                      className='w-96 m-3 rounded'>
                    </input>
                    </div>
                  </section>
                  <section className='flex flex-wrap max-w-5xl'>
                    <div className='flex flex-col'>
                      <FormLabel className='font-sans text-xl m-3'>Describe las responsabilidades del cargo</FormLabel>
                      <textarea
                         onChange={(event) => { setJobDescription(event.target.value) }}
                         placeholder='Liderar equipos. Hacer mantenimiento a bases de datos hechas en SQL. Crear diseños innovadores para la empresa ...'
                         className='m-3 w-96 resize-none rounded'>
                      </textarea>
                    </div>
                    <div className='flex flex-col'>
                      <FormLabel className='font-sans text-xl m-3'>Describe tus logros, metas, premios</FormLabel>
                      <textarea
                         onChange={(event) => { setJobAchievements(event.target.value) }}
                         placeholder='Desarrollé una plataforma de noticias geolocalizadas y una API para consumir la información. Escalé los servicios para soportar la carga de más de cientos de miles de peticiones al día ...'
                         className='m-3 w-96 resize-none rounded'>
                      </textarea>
                    </div>
                      <div className='flex flex-col'>
                        <FormLabel className='font-sans text-xl m-3'>Fecha de inicio</FormLabel>
                        <CalendarStartAndFinish setDate={setDate}/>
                      </div>
                      <div className='flex flex-col'>
                        <FormLabel className='font-sans text-xl m-3'>Fecha de finalización</FormLabel>
                        <CalendarStartAndFinish setDate={setDate}/>
                      </div>
                  </section>
                  <div className='flex flex-wrap'>
                    <div className='w-96 m-3 add-button'>
                      <AddSectionButton
                        text='Añadir'
                        callback={addExperience}
                      />
                    </div>
                    <div className='w-96 m-3'>
                      <ButtonWithLogo
                         text='Cancelar'
                         callback={cancelExperience}
                         callBackData={setHasExperience}
                      />
                    </div>
                  </div>
                </section>
            )
        }
    </div>
</section>
  )
}

export { ExperienceForm }