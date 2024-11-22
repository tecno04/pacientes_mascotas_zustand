import { create } from "zustand";
import { DraftPatient, Patient } from "./types";
import { v4 as UUID4 } from "uuid";

type PatientState = {

    patients: Patient[]
    addPatient: (data: DraftPatient) => void,
    deletePatient : (id:Patient['id']) => void
}

const createPatient = (patient:DraftPatient) : Patient => {
    return {
        ...patient, id: UUID4()
    }
}

export const usePatientStore = create<PatientState>((set) => ({

    patients : [],
    addPatient: (data) => {
       const newPatient = createPatient(data)
       set((state) => ({
        patients: [...state.patients, newPatient]
       }))
    },
    deletePatient: (id) => {
        console.log(id)
    }

}))