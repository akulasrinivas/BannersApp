import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList

  return (
    <li className={`${className} banner-card-item`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p>{description}</p>
        <button className="show-more-btn">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
