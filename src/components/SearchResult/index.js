import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { watchVideo } from '../../redux/action';
import './searchResult.scss';

const SearchResult = ({ thumbnail, title, publishedAt, channelTitle, description, viewCount, likeCount, id }) => {
    const views = new Intl.NumberFormat().format(viewCount)
    const time = moment(publishedAt).fromNow()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const payload = {
        thumbnail, title, publishedAt, channelTitle, description, viewCount, likeCount, id
    }

    const handleWatchVideo = () => {
        navigate(`/watch/${id}`)
        dispatch(watchVideo(payload))
    }

    return (
        <div className="searchVideo" onClick={handleWatchVideo}>
            <img alt="Error picture" src={thumbnail} />
            <div className="videoInfo">
                <h5>{title}</h5>
                <p>{views} views . {time}</p>
                <h6>{channelTitle}</h6>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default SearchResult;