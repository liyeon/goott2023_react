// import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Component/ExpenseItem';
import SubComponent from './Component/SubComponent';
// import Message from './Component/Message';
// import Counter from './Component/Counter';

function App() {
  // let expenseDate=new Date(2023,8,20);
  // let expenseTitle='School Fee'
  // let expenseAmount=300;
  let expenses=[
    {
      id:'c1',
      title:'School Fee1',
      amount:250,
      date:new Date(2023,8,1)
    },
    {
      id:'c2',
      title:'School Fee2',
      amount:220,
      date:new Date(2023,3,1)
    },
    {
      id:'c3',
      title:'School Fee3',
      amount:280,
      date:new Date(2023,8,4)
    }
  ]
  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   <Message/>
    //   <Counter/>
    //   </header> */}
      
    // </div>
    <div className="app-container">
      <h3>First Component</h3>
      <p>add tag</p>
      <SubComponent/>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <h2>Let's get end</h2>
    </div>
  );
}

export default App;
