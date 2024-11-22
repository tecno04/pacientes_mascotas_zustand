type PatientProps = {
    data : string
    label:string
}

export const PatientDetailItem = ({data, label}: PatientProps) => {
  return (
    <>
        <p className="font-bold text-gray-700 uppercase mt-10">{label}: {''}</p>
        <span className="font-normal normal-case">{data}</span>
    </>
  )
}
