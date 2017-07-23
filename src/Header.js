import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import {Link} from 'react-router-dom'
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

import mainPageLogo from './img/mainPageLogo.png'

const styles = {
    appBar: {
        flexWrap: 'wrap',
        position: 'fixed'
    },
    tabs: {
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleImg: {
        height: 50,
        margin: 0,
        width: 150
    },

};

let mainTitle = (
    <img src={"./../img/mainPageLogo.png"} style={styles.titleImg} />
);

const AppBarTabs = () => (
    <div>
        <FlatButton label="소개 영상" containerElement={<Link to="video"/>} style={styles.tabs}/>
        <FlatButton label="강사진" containerElement={<Link to="teacher" />} style={styles.tabs}/>
        <FlatButton label="커리큘럼" containerElement={<Link to="curriculum" />} style={styles.tabs}/>
    </div>
);

class Header extends Component {

    // write your code
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({open:!this.state.open})
    };

    render() {

        return(
            <div class="header">
                <AppBar title={<img src={mainPageLogo} className="title-img" />}
                        onLeftIconButtonTouchTap={this.handleToggle}
                        onTitleTouchTap={<Link to="/"/>}
                        style={styles.appBar}>
                    <FlatButton label="소개 영상" containerElement={<Link to="video"/>} style={{height: 50, margin: 0}}/>
                    <FlatButton label="강사진" containerElement={<Link to="teacher" />} style={{height: 50, margin: 0}}/>
                    <FlatButton label="커리큘럼" containerElement={<Link to="curriculum" />} style={{height: 50, margin: 0}}/>
                </AppBar>

                <Drawer width={250}
                        open={this.state.open}
                        openSecondary={false}>
                    <AppBar title="Menu"
                            onLeftIconButtonTouchTap={this.handleToggle}
                            iconElementLeft={<IconButton><NavigationClose /></IconButton>}/>
                    <MenuItem><Link to="/">홈으로</Link></MenuItem>
                    <MenuItem>로그인</MenuItem>
                </Drawer>
            </div>
        );
    }

}

//<Tabs>
//    <Tab label="소개 영상"/>
//    <Tab label="강사진"/>
//    <Tab label="커리큘럼"/>
//</Tabs>

export default Header