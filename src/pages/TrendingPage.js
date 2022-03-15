import { useEffect, useState } from "react"
import VideoContent from "../components/VideoContent"
import SideBar from "../components/SideBar"
import { getVideo } from "../customize/callAPI"


const TrendingPage = () => {
    const [trendingList, setTrendingList] = useState([])


    useEffect(() => {
        getVideo('https://www.googleapis.com/youtube/v3/videos', {
            key: 'AIzaSyB0Kauj7MgxdouXMWVbkuuQBkBAx6zEjhI',
            part: 'snippet, statistics',
            chart: 'mostPopular',
            maxResults: 40,
            regionCode: 'VN'
        }).then(res => {
            setTrendingList(res)
        })
    }, [])
    // const data = useSelector(state => state.videoReducer)
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
                    />
                </div>
            )
        })
    }
    return (
        <>
            <div className='col-md-0 col-lg-2 display-none '>
                <SideBar />
            </div>
            <div className='col-md-12 col-lg-10 p0'>
                <div className='container-fluid video'>
                    <div className='row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1'>
                        {trendingList.length > 0 ? showVideo(trendingList) : null}
                    </div>
                </div>

            </div>
        </>
    )
}

export default TrendingPage