import useJsonFetch from "../services/useJsonFetch";
import links from "../services/link";

export default function Loading() {
    const [{ loading }] = useJsonFetch(`${links}/loading`)
    
    return (
        <div className="item">Загрузка данных. Loading: {loading !== null ? 'Загружается ...' : ''} </div>
    )

}