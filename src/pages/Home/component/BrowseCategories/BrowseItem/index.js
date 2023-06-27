import React from 'react'

function BrowseItem({ data }) {
    return (
        <div className="browse_item" style={{ backgroundImage: data.img }}>
            <div className="browse_item-bg">
                <img className="browse_item-icon" src={data.icon} alt="" />
            </div>
            <span className="browse_name">{data.name}</span>
        </div>
    )
}

export default BrowseItem