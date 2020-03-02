
import React, { Component } from 'react';
// import Menu from '../Components/Menu';

class Home extends Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

// click fubction here start here

handleClick() {
  console.log('this is:', 'thi is new function start here');
}

  render()
  //  {
  //   return (
  //       <div>
  //         <h2>Home</h2>
  //         <Menu id="hello" />
  //         <div className="abvd" onClick={(e) => this.handleClick(e)}>click event here</div>
  //       </div>
  //   );
  // }


  {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.userId}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }




  
}

export default Home;