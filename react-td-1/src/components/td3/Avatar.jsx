import "../../assets/styles/avatar.css"

export default function Avatar({ picture, lastName, firstName, catchPhrase }) {

    return (
        <div className="avatarContainer">
            <div style={{ borderRadius: "100px" }}>
                <img style={{ width: '200px' }} src={picture} alt={`Profil de ${firstName}`} />
            </div>
            <div style={{marginLeft: 10}}>
                <h1>{firstName} {lastName}</h1>
                <p style={{fontWeight: "bolder"}}>{catchPhrase}</p>
            </div>
        </div>
    );
}