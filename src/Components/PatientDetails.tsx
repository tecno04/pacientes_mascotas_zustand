import { usePatientStore } from "../store"
import { Patient } from "../types"
import { PatientDetailItem } from "./PatientDetailItem"

type PatientProps = {
    patient : Patient
}

export const PatientDetails = ({patient} : PatientProps) => {

    const deletePatient = usePatientStore((state) => state.deletePatient)
    const getPatientById = usePatientStore((state) => state.getPatientById)

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDetailItem data={patient.id} label="ID"/>
        <PatientDetailItem data={patient.name} label="Nombre (Mascota)"/>
        <PatientDetailItem data={patient.caretaker} label="Dueño"/>
        <PatientDetailItem data={patient.email} label="Correo"/>
        <PatientDetailItem data={patient.date.toString()} label="Fecha de Alta"/>
        <PatientDetailItem data={patient.symptoms} label="Síntomas"/>

        <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
            <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" type="button"
            onClick={() => getPatientById(patient.id)}
            >
                Editar
            </button>
            <button 
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg" type="button"
                onClick={() => deletePatient(patient.id)}
            >
                Eliminar
            </button>
        </div>

    </div>
  )
}
