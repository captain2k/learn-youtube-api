import { useSelector } from "react-redux";
import SearchResult from "../components/SearchResult";
import SideBar from "../components/SideBar";

const SearchResultPage = () => {
    const searchList = useSelector(state => state.videoReducer)

    const showSearchResult = (list) => {
        return list.map((item, index) => {
            return (
                <SearchResult
                    key={index}
                    id={item.id.videoId}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    publishedAt={item.publishedAt}
                    channelTitle={item.channelTitle}
                    description={item.description}
                    viewCount={item.viewCount}
                    likeCount={item.likeCount}
                />
            )
        }
        )
    }
    return (
        <>
            <div className='col-md-0 col-lg-2 display-none'>
                <SideBar />
            </div>
            <div className="col-md-12 col-lg-10 p0">
                <div className="searchWrap">
                    {searchList.length > 0 ? showSearchResult(searchList) : null}
                </div>
            </div>
        </>
    )
}

export default SearchResultPage;