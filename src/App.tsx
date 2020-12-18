import * as React from 'react';
import './App.css';
import Launch from './components/Launch';
import LaunchInfo from './components/LaunchInfo';

function App() {
  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);
  return (
    <div className="App">
      <Launch handleIdChange={handleIdChange}/>

      < LaunchInfo id={id} />
    </div>
  );
}

export default App;