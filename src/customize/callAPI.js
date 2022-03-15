import axios from "axios"


const getVideo = async (url, params) => {
    let res = await axios.get(url, {
        params: params
    })
    let result
    if (res && res.data && res.data.items.length > 0) {
        result = res.data.items.map(item => {
            return {
                id: item.id,
                channelTitle: item.snippet.channelTitle,
                description: item.snippet.description,
                publishedAt: item.snippet.publishedAt,
                thumbnails: item.snippet.thumbnails.high.url,
                title: item.snippet.title,
                likeCount: item.statistics.likeCount,
                viewCount: item.statistics.viewCount,
            }
        })
    }
    return result
}

const getView = async (id) => {
    let view = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
            key: 'AIzaSyB0Kauj7MgxdouXMWVbkuuQBkBAx6zEjhI',
            part: 'statistics',
            id: id
        }
    })
    return {
        viewCount: view.data.items[0].statistics.viewCount,
        likeCount: view.data.items[0].statistics.likeCount
    }
}

const getSearchVideo = async (url, params) => {
    let res = await axios.get(url, {
        params: params
    })
    let result
    if (res && res.data && res.data.items.length > 0) {
        result = res.data.items.map(item => {
            return {
                id: item.id.videoId,
                channelTitle: item.snippet.channelTitle,
                description: item.snippet.description,
                publishedAt: item.snippet.publishedAt,
                thumbnails: item.snippet.thumbnails.high.url,
                title: item.snippet.title
            }
        })
    }
    return result
}

const getLiveVideo = async (id) => {
    let view = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
            key: 'AIzaSyB0Kauj7MgxdouXMWVbkuuQBkBAx6zEjhI',
            part: 'liveStreamingDetails',
            id: id
        }
    })
    return {
        timeLive: view.data.items[0].liveStreamingDetails.actualStartTime,
        viewLive: view.data.items[0].liveStreamingDetails.concurrentViewers
    }
}

export { getVideo, getView, getSearchVideo, getLiveVideo }