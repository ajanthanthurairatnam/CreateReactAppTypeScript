import * as React from 'react';


export interface IContactProps {
    contactName: string;    
}


class Contact extends React.Component<IContactProps>{
  constructor(props:IContactProps) {
    super(props);
  }

  render() {
    return (
      <div>Contact Name {this.props.contactName}</div>
    );
  }
}

export default Contact;