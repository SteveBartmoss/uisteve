import { useEffect, useState } from "react"


const useScreen = ()=>{
    const [width, setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    useEffect(()=>{
        window.addEventListener("resize",handleResize);

        return ()=>{
            window.removeEventListener('resize',handleResize);
        }
    },[])

    const handleResize=()=>{
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return {width,height}

}

export default useScreen;