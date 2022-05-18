import './App.css';
import ComponentProfil from './profile/ComponentProfil';

function App() {
  const handleName=(name)=> {
    alert(`Hi I'm ${name}`)
  }
  return (
    <div className="App">
     <ComponentProfil fullName="Amani Fallah " 
      bio="I'm FullStack JS Student "
      profession="Network engineer"
      handleName={handleName} >
        <div>
          <img src="https://m.media-amazon.com/images/I/71o6C5im+rL._SL1500_.jpg" style={{width:300,height:300}} alt="babyimg"></img>
        </div>
        </ComponentProfil>  
    </div>
  );
}

export default App;
