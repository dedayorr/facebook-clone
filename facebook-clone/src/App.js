import "./App.css";
import LeftSideBar from "./LeftSideBar/LeftSideBar";
// import LeftSideBar from './LeftSideBar/LeftSideBar';
import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import Register from "./Register/Register";
import RightSideBar from "./RightSideBar/RightSideBar";
import Timeline from "./Timeline/Timeline";
import TopBar from "./TopBar/TopBar";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      {/* {/* <TopBar /> */}
      {/* <div className="flex justify-between">
        <RightSideBar />
        <Timeline />
        <LeftSideBar />
      </div> */}
      <Profile />
    </div>
  );
}

export default App;
