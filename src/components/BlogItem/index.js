import './index.css'

const BlogItem = props => {
  const {blogDetail} = props
  const {title, description, publishedDate} = blogDetail

  return (
    <li className="blog-item">
      <div className="blog-container">
        <h1 className="title-name">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    <hr/>
    </li>
  )
}

export default BlogItem
