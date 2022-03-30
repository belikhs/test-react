import React, { Component } from "react";
import Friends from "./Friends";
import Person from "./Person";
import Book from "./Book";
import Animal from "./Animal";
import NameTag from "./NameTag";
import Counter from "./Counter";
import YoutubeVideo from "./YoutubeVideo";
import dummyData from "./dummyData";

// const friends = [
//   { name: "victoria", age: 13, city: "seoul" },
//   { name: "sun", age: 34, city: "busan" },
//   { name: "johseb", age: 25, city: "busan" },
//   { name: "syleemomo", age: 9, city: "seoul" },
//   { name: "hannah", age: 41, city: "daegu" },
//   { name: "shara", age: 37, city: "seoul" },
//   { name: "martin", age: 28, city: "daegu" },
//   { name: "gorgia", age: 39, city: "seoul" },
//   { name: "nana", age: 24, city: "busan" },
//   { name: "dannel", age: 19, city: "seoul" },
// ];

// class App extends Component {
// render() {
// return <Person2 name="syleemomo" age={23}></Person2>
// return <Todo2
//         user="syleemomo"
//         name="cleaning"
//         done="false"
//         description="cleaning my room on weekends" />
// return (
//   <>
//     <Friends name="victoria" age={13} city="seoul" />
//     <Friends name="sun" age={34} city="busan" />
//     <Friends name="johseb" age={25} city="busan" />
//     <Friends name="syleemomo" age={9} city="seoul" />
//     <Friends name="hannah" age={41} city="daegu" />
//     <Friends name="shara" age={37} city="seoul" />
//     <Friends name="martin" age={28} city="daegu" />
//     <Friends name="gorgia" age={39} city="seoul" />
//     <Friends name="nana" age={24} city="busan" />
//     <Friends name="dannel" age={19} city="seoul" />
//   </>
// );
// return (
//   <>
//     {friends.map((friends, id) => {
//       return (
//         <Friends
//           key={id}
//           name={friends.name}
//           age={friends.age}
//           city={friends.city}
//         />
//       );
//     })}
//     ;
//   </>
// );
// return (
//   <div className="App">
//     <Person />
//   </div>
// );
// return (
//   <div className="App">
//     <Book />
//   </div>
// );
// return (
//   <div className="App">
//     <Animal
//       type="cat"
//       name="meyow"
//       size="small"
//       sound="low"
//       appearence="cute"
//     />
//   </div>
// );
// return (
//   <div className="App">
//     <NameTag></NameTag>
//   </div>
// );
//   return (
//     <div className="App">
//       <Counter></Counter>
//     </div>
//   );
// }
// }
// class App extends Component {
//   state = {
//     name: "parent",
//   };
//   changeName = () => {
//     this.setState({ name: "parent changed" });
//   };
//   render() {
//     console.log("parent");
//     const { name } = this.state;
//     return (
//       <div className="App">
//         <h1>{name}</h1>
//         <button type="button" onClick={this.changeName}>
//           change name
//         </button>
//         <Counter></Counter>
//       </div>
//     );
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Counter user="sunrise"></Counter>
//       </div>
//     );
//   }
// }

function App() {
  return (
    <div className="App">
      {dummyData.map((d) => {
        return (
          <YoutubeVideo
            key={d.videoId}
            videoId={d.videoId}
            videoName={d.videoName}
            videoLength={d.videoLength}
            videoDescription={d.videoDescription}
          ></YoutubeVideo>
        );
      })}
    </div>
  );
}

export default App;
