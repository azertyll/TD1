import CustomGalleryRow from "./CustomGalleryRow";

export function CustomGallery({ pictureArray }) {

    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const pictureChunks = chunkArray(pictureArray, 3);

    return (
        <>
            {pictureChunks.map((chunk, rowIndex) => (
                <div key={rowIndex} className="flex flex-row gap-4 mb-4">
                    <CustomGalleryRow pictures={chunk} />
                </div>
            ))}
        </>
    );
}