import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const responseData = await response.json()
    const formattedresponseData = {
      id: responseData.id,
      title: responseData.title,
      content: responseData.content,
      imageUrl: responseData.image_url,
      avatarUrl: responseData.avatar_url,
      author: responseData.author,
    }
    this.setState({blogItemDetails: formattedresponseData, isLoading: false})
  }

  renderingPageContent = () => {
    const {blogItemDetails} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogItemDetails
    return (
      <div className="blog-item-details-container">
        <h1 className="blog-item-details-title">{title}</h1>
        <div className="blog-item-details-avatar-and-name-container">
          <img src={avatarUrl} alt="avatar" className="blog-item-avatar" />
          <p className="blog-item-details-author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-item-image" />
        <p className="blog-item-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const result = isLoading ? (
      <div className="blog-item-details-container">
        <Loader
          className="react-spinner-loader"
          type="TailSpin"
          color="#00bfff"
          height={50}
          width={50}
        />
      </div>
    ) : (
      this.renderingPageContent()
    )
    return result
  }
}

export default BlogItemDetails
