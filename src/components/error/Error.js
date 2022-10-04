import useJsonFetch from "../services/useJsonFetch";
import links from "../services/link";

export default function Error() {
    const [{ error }] = useJsonFetch(`${links}/error`)
    
    return (
        <div className="item">Ошибка. Error: {error !== null ? error : ''} </div>
    )
}