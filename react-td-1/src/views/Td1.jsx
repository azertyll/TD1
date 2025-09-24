import Bonjour from '../components/td1/Bonjour'
import UserInfos from '../components/td1/UserInfos'
import Button from '../components/ui/Button'
import Student from '../components/td2/Student'
import StudentsList from '../components/td2/StudentsList'

export default function Td1() {

    const user = {
        firstname: "Burton",
        lastname: "Tyll",
        campus: "RI7",
        preferedLanguage: "PHP mais JS très bien aussi",
        isFromRI7: true
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <h1><Bonjour /></h1>
            {/* <UserInfos /> Remplacement logique par Student du TD2*/}
            <Student user={user} />
            <StudentsList />
            <Button text={'Cliquez ici!'} />
        </div>
    );
}