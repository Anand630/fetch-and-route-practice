import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails
  return (
    <Link to={`/blogs/${id}`} className="blog-link">
      <li className="each-blog-item-in-a-list-display">
        <img src={imageUrl} alt="primary" className="item-primary-image" />
        <div className="all-text-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="profile-icon-and-name-container">
            <img alt="avatar" src={avatarUrl} className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
