export default function NewPost() {
    return (
        <div className="newPost">
            <label>
                Create a Post:  
                <textarea name="postContent" rows={5} cols={60} />
            </label>
            <button type="submit">Post!</button>
        </div>
    )
}