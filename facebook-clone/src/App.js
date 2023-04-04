import './App.css';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import Login from './Login/Login';
import RightSideBar from './RightSideBar/RightSideBar';
import TopBar from './TopBar/TopBar';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <TopBar/>
      <div className='hidden md:flex justify-between'>
      <RightSideBar/>
      <LeftSideBar/>
      </div>
    </div>
  );
}

export default App;
