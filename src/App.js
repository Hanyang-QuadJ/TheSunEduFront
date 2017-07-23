import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './Header'
import MainPage from "./pages/Mainpage";
import Videos from "./pages/Videos";
import Teachers from "./pages/Teachers";
import Curriculum from "./pages/Curriculum";

const muiTheme = getMuiTheme({
    appBar: {
        height: 50,
        color: '#757a7d',
        flexWrap: 'wrap',
    },
    flatButton: {
        fontSize: 16,
        textColor: '#ffffff',
        color: '#757a7d'
    }
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Router>
                    <div>
                        <Header title={this.props.headerTitle}/>
                        <Route exact path='/' component={MainPage}/>
                        <Route path='/video' component={Videos}/>
                        <Route path='/teacher' component={Teachers}/>
                        <Route path='/curriculum' component={Curriculum}/>
                    </div>
                </Router>
            </MuiThemeProvider>
        )
    }
}

injectTapEventPlugin();

App.defaultProps = {
    headerTitle: 'TheSunEdu'
};

export default App;
