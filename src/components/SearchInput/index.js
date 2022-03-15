import axios from "axios"
import { search } from "../../redux/action";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import moment from 'moment';
import { getView } from "../../customize/callAPI";

const SearchInput = () => {
    const [query, setQuery] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()



    const handleSearch = async () => {
        if (query) {
            let res = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: 'AIzaSyB0Kauj7MgxdouXMWVbkuuQBkBAx6zEjhI',
                    part: 'snippet',
                    q: query,
                    type: 'video',
                    maxResults: 27
                }
            }).catch(err => { console.log(err) })
            if (res && res.data && res.data.items.length > 0) {
                let resultList = []
                for (let item of res.data.items) {
                    let view = await getView(item.id.videoId)
                    let resultItem = {
                        id: item.id,
                        thumbnail: item.snippet.thumbnails.high.url,
                        title: item.snippet.title,
                        publishedAt: item.snippet.publishedAt,
                        channelTitle: item.snippet.channelTitle,
                        description: item.snippet.description,
                        viewCount: view.viewCount,
                        likeCount: view.likeCount
                    }
                    resultList.push(resultItem)
                }
                dispatch(search(resultList))
            }
            navigate('/searchResult')
            setQuery('')
        }

    }

    return (
        <div className="header-search">
            <div className="header-search-input">
                <input
                    type='text'
                    placeholder="Search"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <div onClick={handleSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
            </div>
            <div className="header-search-mic">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-mic-fill" viewBox="0 0 16 16">
                    <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                </svg>
            </div>
        </div>
    )
}

export default SearchInput