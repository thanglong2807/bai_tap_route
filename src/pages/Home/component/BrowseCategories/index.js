import React from 'react'
import icon1 from '../../assets/icons/PhotoIcon1.svg'
import icon2 from '../../assets/icons/PhotoIcon2.svg'
import icon3 from '../../assets/icons/PhotoIcon3.svg'
import icon4 from '../../assets/icons/PhotoIcon4.svg'
import icon5 from '../../assets/icons/PhotoIcon5.svg'
import icon6 from '../../assets/icons/PhotoIcon6.svg'
import icon7 from '../../assets/icons/PhotoIcon7.svg'
import icon8 from '../../assets/icons/PhotoIcon8.svg'
import img1 from '../../assets/images/PhotoIcon.png'
import img2 from '../../assets/images/PhotoIcon2.png'
import img3 from '../../assets/images/PhotoIcon3.png'
import img4 from '../../assets/images/PhotoIcon4.png'
import img5 from '../../assets/images/PhotoIcon5.png'
import img6 from '../../assets/images/PhotoIcon6.png'
import img7 from '../../assets/images/PhotoIcon7.png'
import img8 from '../../assets/images/PhotoIcon8.png'
import BrowseItem from './BrowseItem'
import { v4 as uuidv4 } from 'uuid'
function BrowseCategories() {
    const browse = [
        {
            id: uuidv4(),
            icon: icon1,
            name: 'Art',
            img: img1
        },
        {
            id: uuidv4(),
            icon: icon2,
            name: 'Collectibles',
            img: img2
        },

        {
            id: uuidv4(),
            icon: icon3,
            name: 'Music',
            img: img3
        },
        {
            id: uuidv4(),
            icon: icon4,
            name: 'Photography',
            img: img4
        },
        {
            id: uuidv4(),
            icon: icon5,
            name: 'Video',
            img: img5
        },
        {
            id: uuidv4(),
            icon: icon6,
            name: 'Utility',
            img: img6
        },
        {
            id: uuidv4(),
            icon: icon7,
            name: 'Sport',
            img: img7
        },
        {
            id: uuidv4(),
            icon: icon8,
            name: 'Virtual Worlds',
            img: img8
        },
    ]
    return (
        <section>
            <section className="browse">
                <div className="container">
                    <div className="browse-content">
                        <h2 className="browse_title">
                            Browse Categories
                        </h2>
                        <div className="browse_list">
                            {browse.map(item => <BrowseItem key={item.id} data={item} />)}
                        </div>

                    </div>
                </div>
            </section>
        </section>
    )
}

export default BrowseCategories