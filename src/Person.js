import React from "react";

class Person extends React.Component {
  state = {
    name: "sunrise",
    age: 23,
    friends: ["victoria", "daniel", "hanna"],
  };
  //이벤트 핸들러 함수(()=>{}이런 화살표 함수를 써야 좋다)
  displayInfo = () => {
    const { name, age, friends } = this.state;
    //템플릿 리터럴(template literal)-``사이에 글을 쓰면 여러줄로도 가능하고 편하다(1번키 옆의 ~ 아래거)
    alert(`
        * 신상정보 *
        -------------------------
        이름 : ${name}
        나이 : ${age}
        친구 : ${friends.join(" ")}
      `);
  };
  //join은 배열을 문자열로 바꿀 때 사이에 뭘 넣을까이다. , / 이런거 넣어도 된다
  render() {
    return (
      <>
        <button onClick={this.displayInfo}>신상정보 확인하기</button>
      </>
    );
  }
}

export default Person;
