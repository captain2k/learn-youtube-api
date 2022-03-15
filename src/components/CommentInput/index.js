import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"


const CommentInput = () => {
    const [commentText, setCommentText] = useState('')
    const params = useParams()

    const handleAddComment = () => {
        if (commentText) {
            axios.post('https://www.googleapis.com/youtube/v3/commentThreads', {
                params: {
                    key: 'AIzaSyB0Kauj7MgxdouXMWVbkuuQBkBAx6zEjhI',
                    part: 'snippet'
                }
            },
                {
                    'snippet': {
                        'videoId': params.id,
                        "topLevelComment": {
                            'snippet': {
                                "textOriginal": commentText
                            }
                        }
                    }
                }).then(res => {
                    console.log(res);
                })
        }
    }


    return (
        <div className='comment-input'>
            <img src='https://yt3.ggpht.com/SmnzWy4EaFwqnbjwpLpPfeL4LFBQA2Yejdp6c6KvGpGS3haEejaj62pTw39gAlitsZz5KCrlBw=s48-c-k-c0x00ffffff-no-rj' alt='Error picture' />
            <div>
                <input
                    type='text'
                    placeholder='Add a comment...'
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                />
                <div>
                    <button type="button" className="btn btn-light">CANCEL</button>
                    <button
                        type="button"
                        className={commentText ? `btn btn-primary` : `btn btn-secondary`}
                        onClick={handleAddComment}
                    >COMMENT</button>
                </div>
            </div>
        </div>
    )
}

export default CommentInput