import './App.css';
import FruitsChange from './Component/FruitsChange';
// import Greet from './Component/Greet';
// import Book from './Component/Book';
// import Hello from './Component/Hello';
import NumberChange from './Component/NumberChange';
import ProgramChange from './Component/ProgramChange';

function App() {
  return (
    <div className='App'>
      <h1>안녕! 리액트!</h1>
      {/* <Greet/>
      <Book/>
      <Hello/> */}
      <NumberChange val={100} name={'hong1'}/>
      <NumberChange val={200} name={'hong2'}/>
      <ProgramChange/>
      <FruitsChange/>
    
    </div>
  );
}

export default App;
