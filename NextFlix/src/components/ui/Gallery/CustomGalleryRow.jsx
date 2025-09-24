import { useEffect } from "react";

export default function CustomGalleryRow({ picturesChunks }) {

    return (
        <div className="grid gap-4">
            {picturesChunks.length > 0 && picturesChunks.map((picture, index) => (
                    <div className="h-auto">
                        <img className="h-auto max-w-full rounded-lg" src={picture} alt="" />
                    </div>
            ))}
        </div>
    );
}