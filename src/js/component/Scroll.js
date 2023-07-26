import React from 'react'

const Scroll = ({ children }) => {
    return (
        <div className="d-flex scroller">
            {children}
        </div>
    )
}

export default Scroll