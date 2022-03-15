import "./videoContent.scss";
import moment from "moment";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { watchVideo } from "../../redux/action";

const VideoContent = ({ channelTitle, id, description, likeCount, publishedAt, thumbnails, title, viewCount, live, viewLive, timeLive }) => {
    const dispatch = useDispatch()
    const payload = {
        channelTitle,
        id,
        description,
        likeCount,
        publishedAt,
        title,
        viewCount,
        viewLive,
        timeLive,
        live
    }


    let time = moment(publishedAt).fromNow()
    let view = new Intl.NumberFormat().format(viewCount)
    let viewer = new Intl.NumberFormat().format(viewLive)

    return (
        <Link to={`/watch/${id}`} style={{ textDecoration: 'none', color: 'black' }} onClick={() => dispatch(watchVideo(payload))}>
            <div className="video-info">
                <img src={thumbnails} alt='Error picture' />
                <div>
                    <h6>{title}</h6>
                    <p>{channelTitle}</p>
                    {live === true
                        ? (<> <span>{viewer} watching</span></>)
                        : (<><span>{time}</span> . <span>{view} views</span></>)}
                </div>
            </div>
        </Link>
    )
}

export default VideoContent;