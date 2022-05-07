import { useEffect, useState } from "react"

const useMyItem=(itemId)=>{
    const[myitem ,setMyIetm]=useState();


    useEffect(()=>{
        const url = `http://localhost:5000/product/${itemId}`;
fetch(url,)
.then(res=> res.json())
.then(data=>  setMyIetm(data))
    },[itemId]);
    return [myitem]
}
export default useMyItem;