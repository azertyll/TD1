const unsplashApiKey = "j3X_iQ2TnglvV_tjXx4HuW2vJKapaXrAvFOZYYAqyYc";

export const getRandomBrewery = async () => {
    const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/random`);
    const data = await response.json();

    return data
}

export const getLandscapePicture = async (count, subject) => {
    const response = await fetch(`https://api.unsplash.com/photos/random?count=${count}&orientation=landscape&query=${subject}&client_id=${unsplashApiKey}`);
    const data = await response.json()

    return data;
}

export const getPortraitPicture = async (count, subject) => {
    const response = await fetch(`https://api.unsplash.com/photos/random?count=${count}&orientation=portrait&query=${subject}&client_id=${unsplashApiKey}`);
    const data = await response.json()

    return data;
}