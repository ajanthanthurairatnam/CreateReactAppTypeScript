import * as React from 'react';
import './App.css';
import Contacts from './components/Contacts';


interface MyProps {
 
}

export interface IContactsState {
  allcontacts:string[]; 
}

class App extends React.Component<MyProps,IContactsState> {

  constructor(props:any) {
    super(props);   
    this.state = {
      allcontacts:['ajanthan','ajan','clear','mark','stu']
    };
}


handleInputChange = (e:any) => {
  this.setState({
    allcontacts:['ajanthan','ajan','clear']
  })
}

   render(): JSX.Element  {
    return (
      <div className="App">
<input
         placeholder="Search for..."        
         onChange={this.handleInputChange}
       />

       <Contacts allcontacts={this.state.allcontacts }/>
      </div>
    );
  }
}

export default App;
