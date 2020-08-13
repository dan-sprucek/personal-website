import React from "react"

const ApplicationDesktop = ({name, url, imgName, HTML, CSS, Sass, Bootstrap, JavaScript, ReactJS, Redux}) => {
    return (
        <div className="desktop-app-container">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="desktop-app-img-container" id={name}>
                    <img className="desktop-app" src={`./sources/${imgName}.png`} alt={name} title={name}></img>
                </div>
            </a>
            <div>
                <h4 className="mb-0 mt-1"><a className="desktop-app-heading" href={url} target="_blank" rel="noopener noreferrer">{name}</a></h4>
                <div className="d-flex justify-content-center">
                    {HTML && <span className="badge badge-pill badge-info">HTML5</span>}
                    {CSS && <span className="badge badge-pill badge-success">CSS</span>}
                    {Sass && <span className="badge badge-pill badge-success">Sass</span>}
                    {Bootstrap && <span className="badge badge-pill badge-success">Bootstrap</span>}
                    {JavaScript && <span className="badge badge-pill badge-danger">JavaScript</span>}
                    {ReactJS && <span className="badge badge-pill badge-danger">ReactJS</span>}
                    {Redux && <span className="badge badge-pill badge-danger">Redux</span>}
                </div>
            </div>
        </div>
    )
}

export default ApplicationDesktop