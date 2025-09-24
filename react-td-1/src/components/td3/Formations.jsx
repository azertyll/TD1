import CvLine from "./CvLine";

export default function Formations() {

    const formations = [
        {id: 1, name: 'Bachelor IT - titre RNCP niv.6 Concepteur développeur d\'applications', date: 'en cours...'},
        {id: 2, name: 'Certificat VOLTAIRE', date: '2023'},
        {id: 3, name: 'TOSA Excel 2016', date: '2023'},
        {id: 4, name: 'Baccalauréat Général (Economique et Social)', date: '2023'}

    ]

    return (
        <>
            <h1>Formations</h1>
            {formations.map(item => (
                <CvLine title={item.name} date={item.date} />
            ))}
        </>
    );
}