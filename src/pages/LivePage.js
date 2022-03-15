import { useEffect, useState } from "react"
import SideBar from "../components/SideBar"
import VideoContent from "../components/VideoContent"
import { getLiveVideo, getSearchVideo } from "../customize/callAPI"


const LivePage = () => {
    const [liveList, setLiveList] = useState([])

    useEffect(async () => {
        const searchResult = await getSearchVideo('https://www.googleapis.com/youtube/v3/search', {
            key: 'AIzaSyB0Kauj7MgxdouXMWVbkuuQBkBAx6zEjhI',
            part: 'snippet',
            eventType: 'live',
            maxResults: 40,
            type: 'video'
        })
        let result = []
        if (searchResult.length > 0) {
            for (let item of searchResult) {
                let view = await getLiveVideo(item.id)
                let lastData = {
                    ...item,
                    ...view
                }
                result.push(lastData);
            }
        }
        setLiveList(result)
    }, [])
    const showVideo = (list) => {
        return list.map((item, index) => {
            return (
                <div className='col' key={index}>
                    <VideoContent
                        channelTitle={item.channelTitle}
                        id={item.id}
                        description={item.description}
                        likeCount={item.likeCount}
                        publishedAt={item.publishedAt}
                        thumbnails={item.thumbnails}
                        title={item.title}
                        viewCount={item.viewCount}
                        viewLive={item.viewLive}
                        timeLive={item.timeLive}
                        live
                    />
                </div>
            )
        })
    }
    return (
        <>
            <div className='col-md-0 col-lg-2 display-none'>
                <SideBar />
            </div>
            <div className='col-md-12 col-lg-10 p0'>
                <div className='container-fluid video'>
                    <div className='row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1'>
                        {liveList.length > 0 ? showVideo(liveList) : null}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LivePage