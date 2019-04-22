import React, { Component } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';

const photos = [{
    photo: "https://images.wallpaperscraft.com/image/snow_leopard_snow_hunting_attention_black_and_white_57947_1024x768.jpg",
    caption: "snezni leopard",
    subcaption: "snezni leopard, ugrozena vrsta",
    thumnail: ""
},{
    photo: "https://images.wallpaperscraft.com/image/deer_grass_leaves_autumn_trees_59721_1024x768.jpg",
    caption: "evropski jelen",
    subcaption: "evropski jelen, nastanjuje ritska stanista i velike sume",
    thumnail: ""
},{
    photo: "https://images.wallpaperscraft.com/image/wolf_rock_precipice_predator_120088_1024x768.jpg",
    caption: "vuk",
    subcaption: "vuk, jedna od najopsanijih zivotinja nasih suma",
    thumnail: ""
},{
    photo: "https://images.wallpaperscraft.com/image/polar_bear_alaska_snow_105367_1024x768.jpg",
    caption: "polarni medved",
    subcaption: "polarni medved, ugrozena vrsta, nastanjuje severni pol",
    thumnail: ""
}]

class Photos extends Component{
    constructor(){
        super(...arguments);
        this.state = {galleryOpened: false};
        this.toggleGallery = this.toggleGallery.bind(this);
    }
    toggleGallery(){
        this.setState(prevState => ({
            galleryOpened: !prevState.galleryOpened
        }));
    }
    render(){   
        return(
            <div>
            <button className="btn btn-primary" onClick = {this.toggleGallery}>Open Photo Gallery</button>
            <ReactBnbGallery
            show = {this.state.galleryOpened} 
            photos = {photos}
            onClose = {this.toggleGallery}
            />
            </div>
        )
    }
}

export default Photos