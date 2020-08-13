import React, {useState, useEffect} from 'react';
import {Route, Switch, useLocation} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {

// ENGLISH-CZECH SWITCH
  const [pageName, setPageName] = useState("/");
  let location = useLocation();
  
  useEffect(() => {
      setPageName(document.getElementsByClassName("active")[0].textContent)
      window.scrollTo(0,0)
  }, [location])

// PAGENAME IN NAVBAR
  const [en, setEn] = useState(true)
  const handleLanguageChange = () => {
    setEn(!en)
  }

// COPY FUNCTION + CONFIRMATION
  const copyToClipboard = (event) => {
    let copyText = event.currentTarget.dataset.value
    let textArea = document.createElement("textarea")
    textArea.value = copyText
    textArea.style.top = "0"
    textArea.style.left = "0"
    textArea.style.position = "fixed"
    document.getElementsByClassName("fa-copy")[0].appendChild(textArea)
    textArea.focus()
    textArea.select();
    document.execCommand("copy")
    textArea.remove()
    let confirmation = document.createElement("span")
    confirmation.innerText = en ? "\xa0Copy Successful!" : "\xa0Zkopírováno!"
    confirmation.classList.add("copy-confirmation")
    event.currentTarget.appendChild(confirmation)
    setTimeout(() => {
      confirmation.remove()
    }, 2000)
  }
  
// SMOOTH SCROLL UPON CLICK
  const handleScroll = (event) => {
    let scrollTo = event.currentTarget.dataset.value
    document.getElementById(scrollTo).scrollIntoView({behavior: "smooth"})
}

  return (
    <div className="App">
      <Navbar pageName={pageName} en={en} handleLanguageChange={handleLanguageChange} />
      <main>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} copyToClipboard={copyToClipboard} en={en} />}/>
          <Route path="/about" render={(props) => <About {...props} en={en} handleScroll={handleScroll}/>}/>
          <Route path="/portfolio" render={(props) => <Portfolio {...props} en={en} />}/>
          <Route path="/contact" render={(props) => <Contact {...props} copyToClipboard={copyToClipboard} en={en} />}/>
        </Switch>
      </main>
      <Footer en={en}/>
    </div>
  );
}

export default App;
