import React from 'react'
import Discover from './component/Discorver'
import Trending from './component/Trending'
import TopCreators from './component/TopCreators'
import BrowseCategories from './component/BrowseCategories'
import DiscoverMoreNFTs from './component/DiscoverMoreNFTs'
import MagicMashrooms from './component/MagicMashrooms'
import Works from './component/Works'
import Digest from './component/Digest'
import "./style.css"
function Home() {
    return (
        <React.Fragment>
            <main>
                {/* discorver */}
                <Discover />
                {/* end discorver */}
                {/* trending */}
                <Trending />
                {/*end trending */}
                {/*Top creators */}
                <TopCreators />
                {/* END Top creators */}
                {/* Browse Categories */}
                <BrowseCategories />
            </main>
            {/* END Browse Categories */}
            {/* Discover More NFTs */}
            <DiscoverMoreNFTs />
            {/* END Discover More NFTs */}
            {/* Magic Mashrooms */}
            <MagicMashrooms />
            {/* END Magic Mashrooms */}
            {/* works */}
            <Works />
            {/* END works */}
            {/* Join our weekly digest */}
            <Digest />
            {/* END Join our weekly digest */}
        </React.Fragment>

    )
}

export default Home