import React, { Component } from 'react';
import MenuToggle from '../../Navigation/MenuToggle.jsx';
import Drawer from '../../Navigation/Drawer.jsx';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false
        }
    }
    
    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    CloseHandler = () => {
        this.setState({
            menu: false
        })
    }
    render () {
        return (
            <div className="Layout">
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.CloseHandler}
                />
                <MenuToggle 
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout