import logo from "./logo.svg";
import "./App.css";
/*import Lesson5 from "./components/Lesson5";
import Lesson6 from "./components/Lesson6";
import Lesson10 from "./components/Lesson10";
import Lesson11_counter from "./components/Lesson11_counter";
import Lesson13_EventHandling from "./components/Lesson13_EventHandling";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import ListRendering from "./components/ListRendering";
import Person from "./components/Person";
import PostData from "./components/PostData";
import GetData from "./components/GetData";
import ClassCounter from "./components/Hooks/ClassCounter"; */
import HookCounter from "./components/Hooks/HookCounter";

function App() {
  return (
    <div className="App">
      <HookCounter />
    </div>
    /*
    <div className="App">
      <Lesson5 date={"12/10/2021"}>
        <p>This is a children from lesson5</p>
      </Lesson5>
      <Lesson6 date={"12/10/2021"} />
      <Lesson10 />
      <Lesson11_counter />
      <Lesson13_EventHandling />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <Person />
      <PostData />
      <GetData />
      <ClassCounter />
      <HookCounter />
    </div>
    */
  );
}

export default App;
