import id from "date-fns/esm/locale/id/index.js";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";

const useToken = (email) => {
    const [token, setToken] = useState('');

    useEffect( () => {
        if(email){
            fetch(`https://best-bikes-server.vercel.app/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if(data.accessToken){
                    localStorage.setItem('bestBikeToken', data.accessToken);
                    setToken(data.accessToken);
                    toast.success('Token Issued Successfully')
                }
                else{
                    toast.error('Token Not Issued')
                }
            })
        }
    }, [email])
    return [token]
}

export default useToken; 