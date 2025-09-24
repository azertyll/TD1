import CvLine from "./CvLine"

export default function Experiences({name, date}) {


    return (
        <>
            <h1>Expériences</h1>
            <CvLine title={name} date={date} />
        </>
    )
   
}