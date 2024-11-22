import { useForm } from "react-hook-form"
import { ErrorAlert } from "./ErrorAlert"
import { DraftPatient } from "../types"
import { usePatientStore } from "../store";

export const PatientForm = () => {
  
    const { addPatient } = usePatientStore()

    const { 
            register, 
            handleSubmit, 
            formState: {errors} ,
            reset
        } = useForm<DraftPatient>()

    const registerPatient = (data: DraftPatient) => {
        addPatient(data)
        reset()
    }

    return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
          <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
  
          <p className="text-lg mt-5 text-center mb-10">
              Añade Pacientes y {''}
              <span className="text-indigo-600 font-bold">Administralos</span>
          </p>
  
          <form onSubmit={handleSubmit(registerPatient)}
              className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
              noValidate
          >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente 
                    </label>
                    <input  
                        id="name"
                        className="w-full p-3  border border-gray-100"  
                        type="text" 
                        placeholder="Nombre del Paciente" 
                        {
                            ...register('name', {
                                required: 'El campo del Nombre del Paciente es Obligatorio',
                                maxLength: {
                                    value: 50,
                                    message: 'Máximo de caracateres : 50'
                                }
                            })
                        }
                    />
                    {
                        errors.name && (
                            <ErrorAlert>{errors.name?.message?.toString()}</ErrorAlert>
                        )
                    }
                    {
                        errors.maxLength && (
                            <ErrorAlert>{errors.maxLength?.message?.toString()}</ErrorAlert>
                        )
                    }

                </div>
  
                <div className="mb-5">
                  <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                      Propietario 
                  </label>
                  <input  
                    id="caretaker"
                    className="w-full p-3  border border-gray-100"  
                    type="text" 
                    placeholder="Nombre del Propietario" 
                    {
                        ...register('caretaker', {
                            required: 'El campo del Nombre del Propietario es Obligatorio',
                            maxLength: {
                                value: 50,
                                message: 'Máximo de caracateres : 50'
                            }
                        })
                    }
                  />
                    {
                        errors.caretaker && (
                            <ErrorAlert>{errors.caretaker?.message?.toString()}</ErrorAlert>
                        )
                    }
                    {
                        errors.maxLength && (
                            <ErrorAlert>{errors.maxLength?.message?.toString()}</ErrorAlert>
                        )
                    }
                  
                </div>
  
              <div className="mb-5">
                <label htmlFor="email" className="text-sm uppercase font-bold">
                    Email 
                </label>
                <input  
                    id="email"
                    className="w-full p-3  border border-gray-100"  
                    type="email" 
                    placeholder="Email de Registro" 
                    {
                        ...register("email", 
                                            {
                                                required: "El Email es Obligatorio",
                                                pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: 'Email No Válido'
                                            }
                                        }
                        )
                    } 
                />
                {
                    errors.email && (
                        <ErrorAlert>{errors.email.message?.toString()}</ErrorAlert>
                    )
                }
              </div>
  
              <div className="mb-5">
                  <label htmlFor="date" className="text-sm uppercase font-bold">
                      Fecha Alta 
                  </label>
                  <input  
                      id="date"
                      className="w-full p-3  border border-gray-100"  
                      type="date"
                      {
                        ...register('date', {
                            required: 'El campo de la Fecha, para su alta o registro, es Obligatorio',
                        })
                    }
                  />
                  {
                    errors.date && (
                        <ErrorAlert>{errors.date.message?.toString()}</ErrorAlert>
                    )
                  }
              </div>
              
              <div className="mb-5">
                <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                    Síntomas 
                </label>
                <textarea  
                    id="symptoms"
                    className="w-full p-3  border border-gray-100"  
                    placeholder="Síntomas del paciente" 
                    {
                        ...register('symptoms', {
                            required: 'El campo de el/los sintomas es Obligatorio',
                        })
                    }
                />
                {
                    errors.symptoms && (
                        <ErrorAlert>{errors.symptoms.message?.toString()}</ErrorAlert>
                    )
                }
              </div>
  
              <input
                  type="submit"
                  className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                  value='Guardar Paciente'
              />
          </form> 
      </div>
    )
}
