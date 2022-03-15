import { useParams } from "react-router-dom"
import Video from "../components/Video"

const WatchingPage = () => {
    const params = useParams()

    return (
        <>
            <Video id={params.id} />
        </>
    )
}

export default WatchingPage