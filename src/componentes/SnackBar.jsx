import { useEffect } from "react"


export function SnackBar({children,open,setOpen}){

    useEffect(()=>{
        if(open){
            const close=setTimeout(()=>{
                setOpen(false)
            },2000)
            return () => clearTimeout(close)
        }
    },[open])


    return(
        <div className={`${open == true ? 'snack-open': 'snackbar'}`}>
            {children}
        </div>
    )
}