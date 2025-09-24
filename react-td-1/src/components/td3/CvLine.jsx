export default function CvLine({title, date}) {

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p style={{margin: 0}}>{title}</p>
            <strong>{date}</strong>
        </div>
    );
}