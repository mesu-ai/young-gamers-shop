import { useEffect } from 'react';
import { useState } from 'react';

const useCamera = () => {
    const [cameras,setCameras]=useState([]);
    
    // https://lit-wildwood-25531.herokuapp.com/products?category=camera
    useEffect(()=>{
        fetch('https://lit-wildwood-25531.herokuapp.com/products?category=pubg')
        .then(res=>res.json())
        .then(data=>setCameras(data.slice(-9)))

    },[]);





    return [cameras];
};

export default useCamera;