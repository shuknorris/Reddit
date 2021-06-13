import React from 'react';
import './PostItem.css';
function PostItem(props) {
    const {post} = props;
    const title = post.title
    const link = title.toLowerCase().replaceAll(" ", "-")
    return(
        <div className='post'>
            <div className='post-left'>
            <i className="fa fa-caret-up"></i>
            <span>{post.upvote}</span>
            <i className="fa fa-caret-down"></i>
            </div>
            <div className='post-center'>
            <img src={post.image} alt="" />
            </div>
            <div className="post-right">
          <h3><a href={`/${post.subreddit}/${link}`}>{post.title} </a></h3>
          <span className="post-info">
          submitted an hour ago by
           <a href={`/u/${post.user}`}> {post.user}</a> to{" "}
          <a href={`/r/${post.subreddit}`}> {post.subreddit}</a>
          </span>
          <p className="post-info">
          <a href={`/${post.subreddit}/${link}/comments`}>
            {post.comments_count} comments
          </a>{" "}
          | share | save | hide | report
        </p>
        </div>
        </div>
    )
}
export default PostItem;