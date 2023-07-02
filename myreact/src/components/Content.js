import React from "react";
import LikeButton from "./LikeButton";


export default class Content extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <img 
                        src="https://static.vecteezy.com/system/resources/previews/013/516/047/original/man-person-character-avatar-png.png"
                        alt="avatar"
                        className="avatar"
                    />
                    Username
                </div>
                <div className="card-body">
                    Content, Tweet, Send
                </div>
                <div>
                    <LikeButton />
                </div>
            </div>
        )
    }
}