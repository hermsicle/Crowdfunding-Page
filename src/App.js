import './App.css';
import React , {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import About from './components/about/About';
import Hero from './components/hero/Hero';
import Riser from './components/riser/Riser';
import SectionOne from './components/sectionOne/SectionOne';
import {Context} from './components/Context'
import Alert from './components/alert/Alert'
import SelectReward from './components/selectReward/SelectReward'

function App() {

  const {modalOpen} = useContext(Context)

  return (
    <div className="App">
      <Hero/>
      <Riser/>
      <SectionOne/>
      <About/>

      {
        modalOpen &&
          <Alert/>
      }

      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
      </Switch>
    </div>
  );
}

export default App;
