import { watchVideo } from '../../redux/action'
import moment from "moment"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


const RelatedVideo = ({ id, thumbnail, title, channelTitle, viewLive, publishedAt, viewCount, description, live, timeLive, likeCount }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const time = moment(publishedAt).fromNow()
    const view = new Intl.NumberFormat().format(viewCount)
    const viewer = new Intl.NumberFormat().format(viewLive)
    let payload =
    {
        id, thumbnail, title, channelTitle, viewLive, publishedAt, viewCount,
        description, live, timeLive, likeCount
    }

    const hanldeWatchVideo = () => {
        navigate(`/watch/${id}`)
        dispatch(watchVideo(payload))
    }

    return (
        <div className="related-video-wrap" onClick={hanldeWatchVideo}>
            <img src={thumbnail} alt="Error picture" />
            <div>
                <h6>{title}</h6>
                <p>{channelTitle}</p>
                {live
                    ? (<><span>{viewer} watching</span></>)
                    : (<><span>{view} views • {time}</span></>)
                }
            </div>
        </div>
    )
}

export default RelatedVideo