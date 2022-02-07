import React from "react"
import ContentLoader from "react-content-loader"

const PizzaLoading = () => (
    <ContentLoader
        speed={0.7}
        width={290}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#dedede"
        foregroundColor="#c9c9c9"
    >
        <circle cx="133" cy="147" r="119" />
        <rect x="38" y="290" rx="18" ry="18" width="197" height="33" />
        <rect x="0" y="339" rx="7" ry="7" width="274" height="63" />
        <rect x="0" y="421" rx="3" ry="3" width="158" height="24" />
        <rect x="179" y="421" rx="6" ry="6" width="92" height="24" />
    </ContentLoader>
)

export default PizzaLoading;