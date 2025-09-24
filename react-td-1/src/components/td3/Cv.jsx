import "../../assets/styles/cv.css"
import Avatar from "./Avatar";
import profil from "../../assets/img/profile.jpg"
import Experiences from "./Experiences";
import Projects from "./Projects";
import Formations from "./Formations";
import Identity from "./Identity";

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';

export default function Cv() {

    const leftBand = {
        padding: "20px",
        paddingTop: "230px",
        backgroundColor: "#001",
        width: "35%"
    }

    const rightBand = {
        padding: "20px",
        paddingTop: "230px",
        backgroundColor: "#FEE",
        color: "black",
        width: "65%"
    }

    const userInfos = {
        Identity: [
            {id: 1, icon: PhoneIcon, info: "06-46-23-94-63"},
            {id: 2, icon: EmailIcon, info: "tyllburton@outlook.com"},
            {id: 3, icon: LocationOnIcon, info: "Martigues"},
            {id: 4, icon: LanguageIcon, info: "https://burton-tyll.pro"}
        ],
        Experiences: { 
            id: 1,
            name: "militaire du rang", 
            date: "2018-2023"
        }
    }

    return (
        <>
            <div className="cvContainer">
                <Avatar lastName={"Tyll"} firstName={"Burton"} picture={profil} catchPhrase={"Etudiant en Développement web"} />
                <div style={leftBand}>
                    <Identity UserInfos={userInfos.Identity} />
                </div>
                <div style={rightBand}>
                    <Projects />
                    <Experiences {...userInfos.Experiences} />
                    <Formations />
                </div>
            </div>
        </>
    );
}