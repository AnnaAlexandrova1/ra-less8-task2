import useJsonFetch from "../services/useJsonFetch";
import links from "../services/link";

export default function Success() {
    const [{ data }] = useJsonFetch(`${links}/data`)
    return (
        <div className="item">Данные загружены. Data: {data !== null ? data.status : ''} </div>
    )

}