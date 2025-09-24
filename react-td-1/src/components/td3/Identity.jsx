export default function Identity({UserInfos}) {

  return (
    <>
        <h2>A propos de moi</h2>
        <p>
            Avec cinq années
            d'expérience militaire, je me
            lance résolument dans le
            développement web,
            déterminé à transformer ma
            passion de l’informatique en
            une carrière professionnelle
            prometteuse et ambitieuse.
        </p>
        {UserInfos.map(item => (
           <li style={{listStyleType: "none"}} key={item.id}>
           <item.icon style={{ marginRight: "8px", verticalAlign: "middle" }} />
           {item.info}
         </li>
        ))}

    </>
  );
}