import CvLine from "./CvLine";

export default function Projects() {

    const projects = [
        {name: 'Un système d\'archivages de plans cadastraux', date: '2025'},
        {name: 'Un jeu de type clicker en JQUERY', date: '2023'},
        {name: 'Un site de cinéma, avec utilisation d’API et NodeJS', date: '2023'},
    ]

  return (
    <>
        <h1>Projets</h1>
        {projects.map(p => (
            <CvLine title={p.name} date={p.date} />
        ))}
    </>
  );
}