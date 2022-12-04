import { useEffect } from "react";

const useTitle = (title) => {
    useEffect( () => {
        document.title = `${title} - Best Bikes`;
    }, [title])
}
export default useTitle;