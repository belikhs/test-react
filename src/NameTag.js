import React, { Component } from "react";

// class NameTag extends Component {
//   state = {
//     name: "initial name",
//   };
//   //state 값만 바뀌는 게 아니고 render()도 다시 호출을 한다
//   changeName = () => {
//     this.setState({ name: "changed name" });
//   };
//   render() {
//     console.log("NameTag");
//     const { name } = this.state;
//     return (
//       <>
//         <h1>{name}</h1>
//         <button type="button" onClick={this.changeName}>
//           change name
//         </button>
//       </>
//     );
//   }
// }
// class NameTag extends Component {
//   state = {
//     name: "initial name",
//   };
//   //state 를 직접 변경하면 render 함수는 호출되지 않는다
//   changeName = () => {
//     this.state.name = "changed name";
//   };
//   render() {
//     console.log("NameTag");
//     const { name } = this.state;
//     return (
//       <>
//         <h1>{name}</h1>
//         <button type="button" onClick={this.changeName}>
//           change name
//         </button>
//       </>
//     );
//   }
// }

class NameTag extends Component {
  state = {
    name: "initial name",
  };
  changeName = () => {
    console.log("clicked !");
    this.setState({ name: "changed name" });
  };
  //setState 메서드를 render 함수 안에서 호출하면 무한루프에 빠진다
  render() {
    console.log("NameTag");
    const { name } = this.state;
    return (
      <>
        <h1>{name}</h1>
        <button type="button" onClick={this.changeName()}>
          change name 2
        </button>
      </>
    );
  }
}
export default NameTag;
