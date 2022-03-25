import React, { Component } from 'react';
import Friends from './Friends';
import Person2 from './Person2';
import Todo2 from './Todo2';

class App extends Component {
  render() {
    // return <Person2 name="syleemomo" age={23}></Person2>
    // return <Todo2 
    //         user="syleemomo" 
    //         name="cleaning" 
    //         done="false" 
    //         description="cleaning my room on weekends" />
    return (
      <>
      <Friends name= 'victoria' age= {13} city= 'seoul'/>
      <Friends name= 'sun' age= {34} city= 'busan'/>
      <Friends name= 'johseb' age= {25} city= 'busan'/>
      <Friends name= 'syleemomo' age= {9} city= 'seoul'/>
      <Friends name= 'hannah' age= {41} city= 'daegu'/>
      <Friends name= 'shara' age= {37} city= 'seoul'/>
      <Friends name= 'martin' age= {28} city= 'daegu'/>
      <Friends name= 'gorgia' age= {39} city= 'seoul'/>
      <Friends name= 'nana' age= {24} city= 'busan'/>
      <Friends name= 'dannel' age= {19} city= 'seoul'/>
      </>
    )
  }
}
export default App;