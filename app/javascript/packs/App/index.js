import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleDoubleDown)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Main />, 
    document.getElementById('App')
  );
})
