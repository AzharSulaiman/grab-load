import React from 'react';
import EmailTemplateManager from './components/emailTemplateManager';
import MapView from './components/mapView';
import LoadBoardAnalyzer from './components/loadBoardAnalyzer';
import FactoringCheck from './components/factoringCheck';

function App() {
  return (
    <div className="popup-app">
      <h1 style={{fontWeight:600, color:'#49499a', fontSize:'1.25rem'}}>Grab Load</h1>
      <EmailTemplateManager />
      <MapView />
      <LoadBoardAnalyzer />
      <FactoringCheck />
    </div>
  );
}

export default App;
