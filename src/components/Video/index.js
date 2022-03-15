import { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import { useSelector } from 'react-redux';
import RelatedVideo from '../RelatedVideo';
import './video.scss';
import Comment from '../Comment';
import CommentInput from '../CommentInput';

const Video = ({ id }) => {
    const data = useSelector(state => state.listVideoInfoReducer)
    const view = new Intl.NumberFormat().format(data.viewCount)
    const viewer = new Intl.NumberFormat().format(data.viewLive)
    const date = moment(data.publishedAt).format('ll')
    const timeStartLive = moment(data.timeLive).fromNow()
    const [relatedList, setRelatedList] = useState([])
    const [commentList, setCommentList] = useState([])

    useEffect(async () => {
        let relatedVideo = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                key: 'AIzaSyB0Kauj7MgxdouXMWVbkuuQBkBAx6zEjhI',
                part: 'snippet',
                relatedToVideoId: id,
                type: 'video',
                maxResults: 15
            }
        })
        if (relatedVideo && relatedVideo.data && relatedVideo.data.items.length > 0) {
            let dataList = relatedVideo.data.items
            let resultList = []
            for (let item of dataList) {
                let info = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
                    params: {
                        key: 'AIzaSyB0Kauj7MgxdouXMWVbkuuQBkBAx6zEjhI',
                        part: 'snippet,statistics,liveStreamingDetails',
                        id: item.id.videoId
                    }
                })
                if (info.data.items.length > 0) {
                    let resultItem = {
                        id: info.data.items[0].id,
                        title: info.data.items[0].snippet.title,
                        description: info.data.items[0].snippet.description,
                        thumbnail: info.data.items[0].snippet.thumbnails.high.url,
                        channelTitle: info.data.items[0].snippet.channelTitle,
                        publishedAt: info.data.items[0].snippet.publishedAt,
                        viewCount: info.data.items[0].statistics.viewCount,
                        likeCount: info.data.items[0].statistics.likeCount,
                        live: false,
                        viewLive: null,
                        timeLive: null
                    }
                    if (info.data.items[0].snippet.liveBroadcastContent === 'live') {
                        resultItem = {
                            ...resultItem,
                            viewLive: info.data.items[0].liveStreamingDetails.concurrentViewers,
                            timeLive: info.data.items[0].liveStreamingDetails.actualStartTime,
                            live: true
                        }
                    }
                    resultList.push(resultItem)
                }
            }
            setRelatedList(resultList);
        }
    }, [id])

    useEffect(async () => {
        const res = await axios.get('https://www.googleapis.com/youtube/v3/commentThreads', {
            params: {
                key: 'AIzaSyB0Kauj7MgxdouXMWVbkuuQBkBAx6zEjhI',
                part: 'snippet', // replies 
                videoId: id
            }
        })
        if (res && res.data && res.data.items.length > 0) {
            const nesData = res.data.items.map(item => {
                return {
                    id: item.snippet.topLevelComment.id,
                    authorProfileImageUrl: item.snippet.topLevelComment.snippet.authorProfileImageUrl,
                    authorDisplayName: item.snippet.topLevelComment.snippet.authorDisplayName,
                    publishedAt: item.snippet.topLevelComment.snippet.publishedAt,
                    textDisplay: item.snippet.topLevelComment.snippet.textDisplay,
                    likeCount: item.snippet.topLevelComment.snippet.likeCount,
                }
            })
            setCommentList(nesData)
        }
    }, [id])

    const showRelated = (list) => {
        if (list.length > 0) {
            return list.map(item => (
                <RelatedVideo
                    key={item.id}
                    id={item.id}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    publishedAt={item.publishedAt}
                    viewCount={item.viewCount}
                    channelTitle={item.channelTitle}
                    description={item.description}
                    live={item.live}
                    viewLive={item.viewLive}
                    timeLive={item.timeLive}
                    likeCount={item.likeCount}
                />)
            )
        }
    }

    const showComment = (list) => {
        if (list.length > 0) {
            return list.map(item => (
                <Comment
                    key={item.id}
                    authorProfileImageUrl={item.authorProfileImageUrl}
                    authorDisplayName={item.authorDisplayName}
                    publishedAt={item.publishedAt}
                    textDisplay={item.textDisplay}
                    likeCount={item.likeCount}
                />
            ))
        }
    }

    return (
        <>
            <div className="col-8">
                <div className="video-wrapper">
                    <iframe
                        width='100%'
                        height='480px'
                        src={`https://www.youtube.com/embed/${id}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                    </iframe>
                    <h4>{data.title}</h4>
                    {data.live
                        ? (<><span>{viewer} watchings • Live from {timeStartLive} • {data.description}</span> </>)
                        : (<><span>{view} views • {date} • {data.description}</span></>)
                    }
                    <p>Channel: {data.channelTitle}</p>
                </div>
                <div className='video-comment'>
                    <h5>Comments</h5>
                    <CommentInput />
                    {showComment(commentList)}
                </div>
            </div>
            <div className="col-4">
                {showRelated(relatedList)}
            </div>
        </>
    )
}

export default Video