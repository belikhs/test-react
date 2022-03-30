import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//   };
//   increase = () => {
//     const { count } = this.state;
//     console.log(`before updating state: ${count}`);
//     this.setState({ count: count + 1 });
//     console.log(`after updating state: ${count}`);
//   };
//   render() {
//     const { count } = this.state;
//     console.log(`state in render function: ${count}`);
//     return (
//       <>
//         <h1>{count}</h1>
//         <button type="button" onClick={this.increase}>
//           increase count
//         </button>
//       </>
//     );
//   }
// }
// export default Counter;

//state값이 비동기 방식이라 위에서 바로 바뀌는 게 아니고 render()안에서 바뀐다
// import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//   };
//   increase = () => {
//     const { count } = this.state;
//     console.log(`before updating state: ${count}`);
//     this.setState({ count: count + 1 });
//     console.log(`after updating state: ${count}`);
//   };
//   increaseMultiple = () => {
//     // ------------ 업데이트 되지 않는 구간 -----------------//
//     this.increase(); // setState 인자로 객체를 사용하면 업데이트 안된다(0 -> 1)
//     this.increase(); // setState 인자로 객체를 사용하면 업데이트 안된다(0 -> 1)
//     this.increase(); // setState 인자로 객체를 사용하면 업데이트 안된다(0 -> 1)

//     console.log(`right after event: ${this.state.count}`);
//     // ----------------------------------------------------//
//   };
//   render() {
//     // 여기서 state 가 업데이트된다
//     // 모든 이벤트가 종료되는 이 시점에서 state 를 변경하고 render 함수를 한번만 호출한다
//     console.log("counter");
//     const { count } = this.state;
//     console.log(`state in render function: ${count}`);
//     return (
//       <>
//         <h1>{count}</h1>
//         <button type="button" onClick={this.increaseMultiple}>
//           increase count
//         </button>
//       </>
//     );
//   }
// }
// export default Counter;

//원래 예상한 값을 출력하려면 이렇게 바꿔야한다
// import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//   };
//   increase = () => {
//     const { count } = this.state;
//     console.log(`before updating state: ${count}`);
//     this.setState((prevState) => {
//       return { count: prevState.count + 1 };
//     });
//     console.log(`after updating state: ${count}`);
//   };
//   increaseMultiple = () => {
//     // ------------ 업데이트 되지 않는 구간 -----------------//
//     this.increase(); // updater 사용시 this.state.count 는 업데이트되지 않지만 prevState 는 계속 업데이트된다 (0 -> 1)
//     this.increase(); // updater 사용시 this.state.count 는 업데이트되지 않지만 prevState 는 계속 업데이트된다 (1 -> 2)
//     this.increase(); // updater 사용시 this.state.count 는 업데이트되지 않지만 prevState 는 계속 업데이트된다 (2 -> 3)

//     console.log(`right after event: ${this.state.count}`);
//     // ----------------------------------------------------//
//   };
//   render() {
//     // 여기서 state 가 업데이트된다
//     // 모든 이벤트가 종료되는 이 시점에서 state 를 변경하고 render 함수를 한번만 호출한다
//     console.log("counter");
//     const { count } = this.state;
//     console.log(`state in render function: ${count}`);
//     return (
//       <>
//         <h1>{count}</h1>
//         <button type="button" onClick={this.increaseMultiple}>
//           increase count
//         </button>
//       </>
//     );
//   }
// }
// export default Counter;
class Counter extends Component {
  render() {
    this.props = { user: "성용" };
    console.log(this.props);
    return (
      <>
        <h1>Props 변경하기</h1>
      </>
    );
  }
}
export default Counter;
