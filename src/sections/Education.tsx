'use client'
/* eslint-disable react/react-in-jsx-scope */

import { InputComponent } from '@/components/Inputcomponents'
import { CalendarStartAndFinish } from '@/components/Calendarcomponents'
import { TextArea } from '@/components/textareacomponents'
import { Button, FormLabel } from '@chakra-ui/react'
import { useAddEducation, useCancelEducation } from '@/logic/useAddEducationcomponents'

import { useState } from 'react'

function Education (): any {
  const useEducationAdd = useAddEducation()
  const useEducationCancel = useCancelEducation()
  const [hasEducation, setHasEducation] = useState(false)
  return (
    <section className='flex m-auto flex-col relative top-80 max-w-7xl flex-wrap' id='add-education-form'>
        <div>
           <p className='text-xl text-left font-semibold ml-3'>Educación</p>
        </div>
    <div className='flex flex-wrap flex-col'>
        {!hasEducation && (
        <div className='m-3 w-60 add-education-button'>
           <Button
           className='w-96'
           colorScheme='blue'
           onClick={() => useEducationAdd.toggleAddEducation(setHasEducation)}
           >Añadir formación académica
           </Button>
        </div>
        )}
        {
            hasEducation && (
                <section>
                  <section id='add-education' className='flex flex-wrap'>
                   <InputComponent placeholder='Institución' labelText='Nombre de la institución'/>
                   <InputComponent placeholder='Título' labelText='¿Qué estudiaste?'/>
                  </section>
                  <section className='flex flex-wrap max-w-5xl'>
                      <TextArea
                         classList='m-3 w-96'
                         placeholder='Obtuve becas académicas por destacado rendimiento en matemáticas y ciencias. Presenté ponencias en conferencias universitarias sobre avances en neurociencia cognitiva...'
                         labelText='Describe tus logros, premios y actividades'
                      />
                      <div className='flex flex-col'>
                        <FormLabel className='font-sans text-xl m-3'>Fecha de inicio</FormLabel>
                        <CalendarStartAndFinish/>
                      <div className='flex flex-col'>
                        <FormLabel className='font-sans text-xl m-3'>Fecha de finalización</FormLabel>
                        <CalendarStartAndFinish/>
                      </div>
                      </div>
                  </section>
                  <div className='flex flex-wrap'>
                  <Button
                      className='m-3'
                      colorScheme='blue'
                      >Añadir
                  </Button>
                  <Button
                      className='m-3'
                      colorScheme='blue'
                      onClick={() => useEducationCancel.cancelEducation(setHasEducation)}
                      >Cancelar
                  </Button>
                  </div>
                </section>
            )
        }
    </div>
</section>
  )
}

export { Education }
