import axios from 'axios';

const { REACT_APP_SPOTIFY_CLIENT_SECRET, REACT_APP_SPOTIFY_CLIENT_ID } =
  process.env;
const redirectUrl = 'http://localhost:3000/';
const accessUrl = `https://accounts.spotify.com/authorize?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
let accessToken;

const Spotify = {
  getAccessToken: () => {
    if (accessToken) {
      console.log(`returning acess token ${accessToken}`)
      return accessToken;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      const expiresIn = Number(expiresInMatch[1]);
      accessToken = accessTokenMatch[1];
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      window.location = accessUrl;
      console.log(accessUrl);
    }
  },

  search: async (term) => {
    accessToken = Spotify.getAccessToken();
    const searchEndpoint = `https://api.spotify.com/v1/search?type=track&q=${term}`;
    try {
      console.log(accessToken);
      const response = await axios.get(searchEndpoint, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (response) {
          console.log(response.data.tracks.items);
          return response.data.tracks.items;
      }
    } catch (err) {
      console.error(err);
    }
  },

  savePlaylist: async(playlistName,tracks) => {
    if(playlistName && tracks) {
      accessToken = Spotify.getAccessToken();
      const playlistsEndpoint = 'https://api.spotify.com/v1/me/playlists';
      const userNameEndpoint = 'https://api.spotify.com/v1/me';
      const userName = await axios.get(userNameEndpoint, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if(userName) {
        console.log(userName.data.id);
      }
    } else {
      return;
    }
  }
};

export default Spotify;
