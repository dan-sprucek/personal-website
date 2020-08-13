import React from "react"

const Footer = ({en}) => {
    return (
        <footer id="footer" className="flex align-items-center">
            <p className="small">{en ? "This page has been created with love... and ReactJS" : "Tato stránka byla vyrobena jen díky silné vůli... a ReactJS"}</p>
        </footer>
    )
}

export default Footer