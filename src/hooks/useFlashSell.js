import { useEffect, useState } from 'react';

const useFlashSell = () => {
    
     const [products,setProducts]= useState([]);

    useEffect(()=>{
        fetch('https://lit-wildwood-25531.herokuapp.com/flashsell')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[]);
   
    // console.log(products);

    return [products,setProducts]
};

export default useFlashSell;