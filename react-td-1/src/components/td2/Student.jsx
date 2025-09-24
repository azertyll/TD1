export default function Student({ user }) {

    const avatar = "../src/assets/img/utilisateur.png";

    return (
        <div className="centeredContainer">
            <div className="userContainer">
                <img src={avatar} alt="photo_profil" />
                <table className="userListTable">
                    <thead>
                        <tr>
                            <th>Prénom</th>
                            <th>Nom</th>
                            <th>Campus</th>
                            <th>Langage préféré</th>
                            <th>RI7</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.campus}</td>
                            <td>{user.preferedLanguage}</td>
                            <td>{user.isFromRI7 ? "oui" : "non"}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="customButton" onClick={() => { alert(`Bonjour je m'appelle ${user.firstname}`) }}>Recevoir un bonjour</button>
            </div>
        </div>
    )
}