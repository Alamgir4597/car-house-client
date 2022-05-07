import { useEffect, useState } from "react";

const useProduct=()=>{
    const [Products, setProducts] = useState([]);

    useEffect(() => {
       
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [Products,setProducts];
}
export default useProduct;