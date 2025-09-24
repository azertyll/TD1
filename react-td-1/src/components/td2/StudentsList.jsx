import {useState} from 'react'
import Student from './Student'

export default function StudentsList()
{

    const [students, setStudents] = useState([
        {lastname: "Doe", firstname: "John", campus: "RI7", preferedLanguage: "JS"},
        {lastname: "Doe", firstname: "Jane", campus: "RI7", preferedLanguage: "Python"},
        {lastname: "Doe", firstname: "Jacques", campus: "RI7", preferedLanguage: "C#"},
        {lastname: "Doe", firstname: "Josseline", campus: "RI7", preferedLanguage: "Java"},
    ])

    return(
        <>
            <ul>
                {students.map((student, index) => (
                    <Student key={index} user={student} />
                ))}
            </ul>
        </>
    )
}