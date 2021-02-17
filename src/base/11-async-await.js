

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = 'ehCxuH2BVdfrlfRwY0km2tRg2nwAw4LJ';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        // console.log(url);
        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No existe';
    }
    
}




