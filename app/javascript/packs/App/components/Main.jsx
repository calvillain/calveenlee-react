import React from 'react';
import HeaderComponent from './Header/HeaderComponent'
import LoremIpsum from './LoremIpsum'
import AboutComponent from './About/AboutComponent'

class Main extends React.Component {
  render() {
    return (
      <div> 
        <HeaderComponent />
        <content>
          <AboutComponent />
	      <LoremIpsum />	
		</content>
      </div>
    )
  }
}

export default Main;
