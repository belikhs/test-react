import React from 'react';

// function Person(props) {
//     return (
//         <>
//             <h3>{props.name}</h3>
//             <h4>{props.age}</h4>
//         </>
//     )
// }
//비구조화 할당 => 객체의 프로터치 값들을 변수에 풀어서 복사해준다
// function Person(name, age) {
//     return (
//         <>
//             <h3>{name}</h3>
//             <h4>{age}</h4>
//         </>
//     )
// }
//이렇게도 가능
const Person = ({name, age})=> {
    return (
        <>
            <h3>{name}</h3>
            <h4>{age}</h4>
        </>
    )
}

export default Person;