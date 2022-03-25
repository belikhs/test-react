import React, { Component } from 'react';

class Todo extends Component {
    constructor(props){
        super(props)      // props 상속(부모로부터 전달받는 데이터)
        //데이터 초기화
        this.state = {      // state 선언(객체의 멤버변수)
            name: "cleaning",
            done: false,
            description: "cleaning my room on weekends"
        }
    }
    
    // 이벤트 핸들러 함수
    changeTodoName = () => { //멤버 메서드
        this.setState({name: "learning react"}) //this는 Todo
    }
    
  // HTML 템플릿
    render() {
        //비구조화 할당 (destructuring assignment)
        const { name, done, description } = this.state
        //props 조회
        const { user } = this.props
            return (
                <>
                    <h2>user: {user}</h2>
                    <h3>name: {name}</h3>
                    <h4>done: {done? "finished": "ongoing"}</h4>
                    <p>description: {description}</p>
                    <button type="button" onClick={this.changeTodoName}>이름 변경하기</button>
                    <h2>{user}</h2>
                </>
            )
        }
    }
export default Todo