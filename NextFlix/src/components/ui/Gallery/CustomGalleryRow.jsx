export default function CustomGalleryRow({ pictures }) {

    return (
        <div className="grid gap-4">
            {pictures.map(picture => (
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={picture} alt="" />
                </div>
            ))}
        </div>
    );
}