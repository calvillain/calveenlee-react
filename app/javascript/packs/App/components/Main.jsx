import React from 'react'
import { HashRouter } from 'react-router-dom'
import HeaderComponent from './Header/HeaderComponent'
import LoremIpsum from './LoremIpsum'
import AboutComponent from './About/AboutComponent'
import WorkComponent from './Work/WorkComponent'
import ContactComponent from './Contact/ContactComponent'

class Main extends React.Component {
  render() {
    return (
      <HashRouter hashType='noslash'> 
        <div>
          <HeaderComponent />
          <content>
            <AboutComponent />
            <WorkComponent />	
            <ContactComponent />
          </content>
        </div>
      </HashRouter>
    )
  }
}

export default Main;
