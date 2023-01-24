import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={600}
        height={600}
        viewBox="0 0 600 600"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="10" y="355" rx="20" ry="20" width="261" height="89" />
        <rect x="14" y="465" rx="11" ry="11" width="94" height="27" />
        <rect x="120" y="459" rx="22" ry="22" width="153" height="47" />
        <circle cx="125" cy="125" r="125" />
        <rect x="14" y="318" rx="19" ry="19" width="248" height="25" />
    </ContentLoader>
)

export default Skeleton