import React from 'react';
import ReactDOM from 'react-dom';




function PostItems(props) {
    
    // const listItems = props.listItems;
    const listItems = [
        {
            name:"石丸",
            time:"021/11/12/ 08:12",
            post:"やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！"
        },
        {
            name:"石丸",
            time:"021/11/12/ 08:12",
            post:"やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！"
        },
        {
            name:"石丸",
            time:"021/11/12/ 08:12",
            post:"やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！"
        },
        {
            name:"石丸ひろき",
            time:"021/11/12/ 08:12",
            post:"やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！やまたくかっこいい！！"
        }
    ]

    const items = listItems.map((listItem) =>
        <div className="postWarp">
            <p className="contributor">{listItem.name}</p>
            <div className="postItem">
                <time className="postTime">{listItem.name}</time>
                <p className="post">{listItem.post}</p>
            </div>
        </div>
    );
    return(
        <div className="chatArea">
            {items}
        </div>
    )
}
// ReactDOM.render(
//     <PostItems listItems={listItems} />,
//     document.getElementById('root')
// );

export default PostItems;