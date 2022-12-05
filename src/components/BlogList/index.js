import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

// const express = require('express')
// const app = express()

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const responseData = await response.json()
    const formattedresponseData = responseData.map(eachBlog => ({
      id: eachBlog.id,
      title: eachBlog.title,
      imageUrl: eachBlog.image_url,
      avatarUrl: eachBlog.avatar_url,
      author: eachBlog.author,
      topic: eachBlog.topic,
    }))
    this.setState({blogList: formattedresponseData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    console.log(blogList)
    return (
      <ul className="blog-list-container">
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogList.map(eachBlog => (
            <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList
