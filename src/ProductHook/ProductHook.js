import { useEffect, useState } from "react";

const useProduct=()=>{
    const [Products, setProducts] = useState([]);

    useEffect(() => {
       
        fetch('https://desolate-hamlet-80016.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [Products,setProducts];
}
export default useProduct;