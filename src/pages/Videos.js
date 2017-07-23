import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import AppBar from 'material-ui/AppBar'
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer'
import {Link} from 'react-router-dom'
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

class Videos extends Component {

    // write your code
    //https://youtu.be/pjVYWiuw3EQ
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            layout: ' col-lg-offset-1',
            cards: {
                card1: {
                    title: '더선에듀 홍보영상',
                    videoUrl: 'https://youtube.com/embed/pjVYWiuw3EQ'
                },
                card2: {
                    title: '더선에듀 강의 샘플',
                    videoUrl:'https://www.youtube.com/embed/r-9CFI8pyFQ'
                }
            }
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({open:!this.state.open})
    };


    render() {
        return (
            <div className="row video-page">
                <div className="margin-top-appbar video-cards col-md-8 col-md-offset-2">
                    <div className={"video-card"}>
                        <Card>
                            <CardHeader title={this.state.cards.card1.title} subtitle="Subtitle"/>
                            <CardMedia>
                                <iframe width="560" height="560" src={this.state.cards.card1.videoUrl} frameborder="0" allowfullscreen />
                            </CardMedia>
                            <CardTitle title={this.state.cards.card1.title} subtitle="Card subtitle" />
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                            </CardText>
                            <CardActions>
                                <FlatButton label="동영상 카테고리" onTouchTap={this.handleToggle}/>
                            </CardActions>
                        </Card>
                    </div>
                    <div className="video-card">
                        <Card>
                            <CardHeader title={this.state.cards.card2.title} subtitle="Subtitle"/>
                            <CardMedia>
                                <iframe width="560" height="560" src={this.state.cards.card2.videoUrl} frameborder="0" allowfullscreen />
                            </CardMedia>
                            <CardTitle title={this.state.cards.card2.title} subtitle="Card subtitle" />
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                            </CardText>
                            <CardActions>
                                <FlatButton label="동영상 카테고리" onTouchTap={this.handleToggle} />
                            </CardActions>
                        </Card>
                    </div>
                    <Drawer width={250}
                            open={this.state.open}
                            openSecondary={false}>
                        <AppBar title="Video List"
                                onLeftIconButtonTouchTap={this.handleToggle}
                                iconElementLeft={<IconButton><NavigationClose /></IconButton>}/>
                        <MenuItem><Link to="/">홈으로</Link></MenuItem>
                        <MenuItem>강의</MenuItem>
                        <MenuItem>소개 영상</MenuItem>
                    </Drawer>

                </div>
            </div>
        )
    }

}

export default Videos