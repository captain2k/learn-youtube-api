import moment from "moment"

const Comment = ({ authorProfileImageUrl, authorDisplayName, publishedAt, textDisplay, likeCount }) => {

    const time = moment(publishedAt).fromNow()
    const like = new Intl.NumberFormat().format(likeCount)

    return (
        <div>
            <img src={authorProfileImageUrl} alt='Error' />
            <div>
                <h6>{authorDisplayName}
                    <span style={{ fontSize: ' 12px', fontWeight: '500', color: '#606060', marginLeft: '4px' }}>{time}</span>
                </h6>
                <p>{textDisplay}</p>
                <i className="bi bi-hand-thumbs-up">{like}</i>
                <span style={{ marginLeft: '16px', fontWeight: '500', color: '#636363' }}>RELY</span>
            </div>
        </div>
    )
}

export default Comment