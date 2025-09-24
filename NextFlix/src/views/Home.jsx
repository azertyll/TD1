import { useEffect, useState } from "react";
import { CustomCarousel } from "@ui/Carousel/CustomCarousel";
import { CustomGallery } from "@ui/Gallery/CustomGallery";
import { getRandomBrewery, getLandscapePicture } from "@services/api";

export default function Home() {

    const [slides, setSlides] = useState([{
        picturePath: "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Brasserie de Nord",
        paragraphe: "Venez découvir notre large gamme de plus de 50 bières!"
    }])

    const createSlides = async (count) => {
        const pictures = await getLandscapePicture(count, "beer-and-food");
        console.log(pictures)
        console.log(pictures)
        const slidesData = await Promise.all(
          pictures.map(async (picture) => {
            const [brewery] = await getRandomBrewery();
            return {
              picturePath: picture.urls.regular,
              title: brewery.name,
              paragraphe: `${brewery.city}, ${brewery.state}`,
            };
          })
        );
    
        setSlides(slidesData); 
    };

    const getGalleryPictures = () => {
        const response = await fetch(``)
    }

    useEffect(()=>{
        createSlides(3)
    }, [])
    

  return (
    <>
        <CustomCarousel slides={slides} height={"70svh"} />
        <CustomGallery  pictureArray={["1", "2"]} />
    </>
  );
}