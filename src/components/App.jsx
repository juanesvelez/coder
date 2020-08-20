import React from 'react';
import './styles/App.css';
import {Button, Icon, Section} from 'react-materialize'
import Nav from './Nabvar'
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
    
      <header>
        <Nav/>
      </header>
     
      <Section className="App-content">
        
      </Section>
    
      <footer>

      </footer>
    </React.Fragment>
  )
}


export default App;
