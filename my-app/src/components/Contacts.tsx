import * as React from 'react';
import Contact from './Contact';



export interface IContactsProps {
  allcontacts:string[];  
}

class Contacts extends React.Component<IContactsProps>{
  constructor(props:IContactsProps) {
    super(props);
  }
  
  render(): JSX.Element {
    return (
      <div>
                {this.props.allcontacts.map(function(name, index){
                    return <Contact contactName={name}></Contact>;
                  })}
    
      </div>
    );
  }
}

export default Contacts;