import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Menu pointing secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
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

      <Segment>
        <img src='/images/wireframe/media-paragraph.png' />
      </Segment>
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
