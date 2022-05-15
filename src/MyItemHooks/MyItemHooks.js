import { useEffect, useState } from "react"

const useMyItem=(itemId)=>{
    const[myitem ,setMyIetm]=useState();


    useEffect(()=>{
        const url = `https://desolate-hamlet-80016.herokuapp.com/product/${itemId}`;
fetch(url,)
.then(res=> res.json())
.then(data=>  setMyIetm(data))
    },[itemId]);
    return [myitem]
}
export default useMyItem;