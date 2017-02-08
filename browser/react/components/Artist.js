import React from 'react';
import Artists from '../components/Artists';
import axios from 'axios';
import { convertAlbum } from '../utils';

export default class Artist extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedArtist: {},
      selectedArtistsAlbums: []
    };
  }

  componentDidMount() {
    const artistId = this.props.routeParams.artistId;

    axios.get(`/api/artists/${artistId}`)
      .then(res => res.data)
      .then(artist => {this.setState({
        selectedArtist: artist })
      });

    axios.get(`/api/artists/${artistId}/albums`)
    .then(res => res.data)
    .then(album => {this.setState({
      selectedArtistsAlbums: convertAlbum(album) })
    });


  }

  render () {
    console.log('~~~~~in Artist.js render', this.state.selectedArtistsAlbums)
    let artist = this.state.selectedArtist;
    let albums = this.state.selectedArtistsAlbums;
    return (
      <div>
        <h3>{artist.name}</h3>
        <h4></h4>
        <h4>Songs</h4>
      </div>
    )
  }
}
