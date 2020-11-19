import React, {useState} from 'react';
import DrumMachine from './Components/DrumMachine.jsx'
import './App.css';

export const APPLContext = React.createContext({
  Message: '',
  ChangeMessage: () => {},
  
});



function App() {
  
  const [Message, setMessage] = useState('')
  

  return (
    <APPLContext.Provider value = {{
      Message,
      setMessage,
      
      ChangeMessage: Message => setMessage(Message),
     
  
      }}>
    <div className="App">
      <header className="App-header">
        
        <DrumMachine />
        
      </header>
    </div>
    </APPLContext.Provider>
  );
}

export default App;
