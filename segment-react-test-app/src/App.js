import logo from './logo.svg';
import './App.css';
import Analytics from "@segment/analytics.js-core/build/analytics";
import SegmentIntegration from "@segment/analytics.js-integration-segmentio";
import React from 'react';
import { Button } from '@material-ui/core';


const analytics = new Analytics();
analytics.use(SegmentIntegration);

const integrationSettings = {
  "Segment.io": {
    apiKey: "C0uZwymZWVHMFoR7RynMdLeScYpYbIEx",
    retryQueue: true,
    addBundledMetadata: true
  }
};


// Initialize the library
analytics.initialize(integrationSettings);

//first page
analytics.page('first page')

// named page event
const page = () => {
  analytics.page("named page")
}

// track event
const track = () => {
  analytics.track('test');
}

//identify event
const identify = () => {
  analytics.identify('user')
}

const goToWorkspace = () => {
  window.open('https://app.segment.com/goto-my-workspace/overview', '_blank');
}

function App() {
  return (
    <div className="App">
      <div className='flex title'>
        <h1>Segment React Test Web App</h1>
      </div>
      <div>
        <div className='flex'>
          <div>
            <div>
            <Button color="primary" onClick={page}>Page</Button>
            </div>
            <div>
            <Button color="primary" onClick={track}>Track</Button>
            </div>
            <div>
            <Button color="primary" onClick={identify}>Identify</Button>
            </div>
          </div>
          <div className='slothDiv' title='Click me to go to your workspace!' onClick={goToWorkspace} ></div>
        </div>
        
      </div>
      
    </div>
  )
}

export default App;
