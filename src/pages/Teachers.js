import React, { Component } from 'react'
import {GridList, GridTile, IconButton } from 'material-ui'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'

import avatarSample from '../img/avatarSample.png'


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        overflowY: 'auto',
    },

};

const tilesData = [
    {
        img: '../img/avatarSample.png',
        title: 'Breakfast',
        author: 'jill111',
        featured: true,
    },
    {
        img: '../img/avatarSample.png',
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: '../img/avatarSample.png',
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: '../img/avatarSample.png',
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img: '../img/avatarSample.png',
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: '../img/avatarSample.png',
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img: '../img/avatarSample.png',
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img: '../img/avatarSample.png',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];

class Teachers extends Component {

    // write your code


    render() {
        return (
            <div className="row teacher-page">
                <div className="margin-top-appbar teacher-introduces">
                    <div className="col-md-8 col-md-offset-2">
                        <div style={styles.root}>
                            <GridList
                                cols={3}
                                cellHeight={200}
                                padding={1}
                                style={styles.gridList}>
                                {tilesData.map((tile) => (
                                    <GridTile
                                        title={tile.title}
                                        actionPosition="left"
                                        titlePosition="bottom"
                                        titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                                        cols={tile.featured ? 2 : 1}
                                        rows={tile.featured ? 2 : 1}>
                                        <img src={avatarSample} />
                                    </GridTile>
                                ))}

                            </GridList>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Teachers