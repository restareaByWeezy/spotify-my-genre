import logo from "./logo.svg";
import "./App.scss";
import Header from "./@shared/Header";
import Artists from "./artists/Artists";

function App() {
  return (
    <div className='global'>
      <div className='container'>
        <Header></Header>
        <Artists></Artists>
      </div>
    </div>
  );
}

export default App;
