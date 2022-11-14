import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={1100}
    height={164}
    viewBox="0 0 1400 164"
    backgroundColor="#f4f4f4"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="9" y="15" rx="12" ry="12" width="100%" height="136" />
  </ContentLoader>
)

export default Skeleton

