import { useState } from "react";

export default function LikeButton () {
    const [likes, likeCount] = useState(0);

    return (
        <button onClick={() => likeCount(likes + 1)}>
            <img
                src="https://th.bing.com/th/id/OIP.I5gH1HULdljgroTtNpBDIgHaHa?pid=ImgDet&rs=1"
                alt="thumbs up"
                className="likes" 
            />
             {likes} Likes
        </button>
    );
}