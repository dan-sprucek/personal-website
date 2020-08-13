import React from "react"

const ApplicationDesktopList = ({name, url, HTML, CSS, Sass, Bootstrap, JavaScript, ReactJS, Redux, description}) => {
    return (
        <dl>
            <dt>
                <div>
                    <span><a className="desktop-app-heading" href={url} target="_blank" rel="noopener noreferrer" title={name}>{name}</a></span>
                </div>
                <div>
                    {HTML && <span className="badge badge-pill badge-info">HTML5</span>}
                    {CSS && <span className="badge badge-pill badge-success">CSS</span>}
                    {Sass && <span className="badge badge-pill badge-success">Sass</span>}
                    {Bootstrap && <span className="badge badge-pill badge-success">Bootstrap</span>}
                    {JavaScript && <span className="badge badge-pill badge-danger">JavaScript</span>}
                    {ReactJS && <span className="badge badge-pill badge-danger">ReactJS</span>}
                    {Redux && <span className="badge badge-pill badge-danger">Redux</span>}
                </div>
            </dt>
            <dd className="text-justify">{description}</dd>
        </dl>
    )
}

export default ApplicationDesktopList