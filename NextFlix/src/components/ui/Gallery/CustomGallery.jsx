import { useEffect, useState } from "react";
import CustomGalleryRow from "./CustomGalleryRow";

export function CustomGallery({ pictureArray }) {

    const [chunks, setChunks] = useState([])

    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };


    useEffect(() => {
        const pictureChunks = chunkArray(pictureArray, 3);
        setChunks(pictureChunks)
        // console.log(pictureChunks)
    }, [])

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {chunks.length > 0 && chunks.map((chunk, rowIndex) => (
                <CustomGalleryRow key={rowIndex} picturesChunks={chunk} />
            ))}
        </div>

    );
}