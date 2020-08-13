import React from "react"

const Contact = ({en, copyToClipboard}) => {
    return (
        <section className="container">
            <h1>{en ? 'Contact me!' : 'Kontaktuje mě!'}</h1>
            <h5>{en ? 'I love people! Almost as much as computers!' : 'Rád jednám s lidmi! Ale s počítači je to jednodušší!'}</h5>
            <h5>{en ? 'Feel free to use any of the ways below:' : 'Vyberte si libovolnou možnost níže:'}</h5>
            <div className="d-flex flex-column contacts-container-all">
                <div className="contact-container">
                    <h3>E-mail</h3>
                    <span><a href="mailto:dan.sprucek@gmail.com" title={en ? 'Send me an e-mail' : 'Pošlete mi e-mail'}>dan.sprucek@gmail.com</a> <i className="far fa-copy" data-value="dan.sprucek@gmail.com" onClick={copyToClipboard} title={en ? 'Copy to clipboard' : 'Zkopírovat do schránky'}></i></span>
                </div>
                <div className="contact-container">
                    <h3>LinkedIn</h3>
                    <span><a href="https://www.linkedin.com/in/dansprucek/" target="_blank" rel="noopener noreferrer" title={en ? 'Visit my LinkedIn profile' : 'Navštivte můj profil na LinkedInu'}>https://www.linkedin.com/in/dansprucek/</a> <i className="far fa-copy" data-value="https://www.linkedin.com/in/dansprucek/" onClick={copyToClipboard} title={en ? 'Copy to clipboard' : 'Zkopírovat do schránky'}></i></span>
                </div>
                <div className="contact-container">
                    <h3>Skype</h3>
                    <span title={en ? 'My Skype account name' : 'Moje uživatelské jméno'}>dan.sprucek <i className="far fa-copy" data-value="dan.sprucek" onClick={copyToClipboard} title={en ? 'Copy to clipboard' : 'Zkopírovat do schránky'}></i></span>
                </div>
                <div className="contact-container">
                    <h3>Facebook</h3>
                    <span><a href="https://www.facebook.com/dan.sprucek" target="_blank" rel="noopener noreferrer" title={en ? 'Visit my Facebook profile' : 'Navštivte můj profil na Facebooku'}>https://www.facebook.com/dan.sprucek</a> <i className="far fa-copy" data-value="https://www.facebook.com/dan.sprucek" onClick={copyToClipboard} title={en ? 'Copy to clipboard' : 'Zkopírovat do schránky'}></i></span>
                </div>

            </div>
        </section>
    )
}

export default Contact