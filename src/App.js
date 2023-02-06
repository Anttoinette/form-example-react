import Greeting from './componenets/Greeting';
import './App.css';
import FormDemo from './componenets/FormDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <> 
       <FormDemo />
       <Greeting />
       </>
      </header>
    </div>
  );
}

export default App;
