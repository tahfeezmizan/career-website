import './PostStyle.css'

export default function Post({post}){
    const {title, id, userId, body} = post;
    return (
        <div className="post">
            <h4>Title: {title}</h4>
            <p>Body: {body}</p>
            <p><small>userId: {userId}</small></p>
            <p><small>postId: {id}</small></p>
        </div>
    )
}