import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import './Header.css'
export default class HeaderI extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="navbarBack">
      <Menu className="navbarBack" pointing secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='cars'
          active={activeItem === 'cars'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='prices'
          active={activeItem === 'prices'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>

    </div>    )
  }
}

// import React from 'react';
// import Navigation from './Navigation';

// import { Menu, Container } from 'semantic-ui-react'

// class Header extends React.Component {


//   render() {
//     return (
//       <header className="header">
//         <Container>
//           <Menu secondary>
//             <Menu.Item>
//               <a className="" to="/">
//                 <img src="/images/creatuviaje-logo.png" alt=""/>

//               </a>
//             </Menu.Item>
//               <Navigation />
//           </Menu>
//         </Container>
//       </header>
//     );
//   }
// }

// export default Header;
