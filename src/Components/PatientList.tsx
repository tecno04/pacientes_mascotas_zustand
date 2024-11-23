import { usePatientStore } from "../store";
import { PatientDetails } from "./PatientDetails";

export const PatientList = () => {

  const { patients } = usePatientStore()
  //const patients = usePatientStore((state) => state.patients) es otra forma de instanciar para obtener los datos / no me agrada mucho

  return (
    <div className="md: w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {
        patients.length
        ?
          <>
            <h2 className="font-black text-3xl text-center">Listado de Pacientes:</h2>
            <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {
            patients.map(patient => (
              <PatientDetails key={patient.id} patient={patient}/>
            ))
          }
          </>
        :
        <>
          <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza a agregar pacientes {''}
            <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
          </p>
          
        </>
      }
    </div>
  )
}
