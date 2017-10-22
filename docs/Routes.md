# Routes

## HTML
* `GET /` `StaticPagesController#root`

## API Endpoints

### `users`
* `GET /api/users/:userid` - retrieves user info regarding playlists created or followed, and songs followed
* `GET /api/users` - retrieves users for search
* `POST /api/users` - creates a new user

## `artists`
* `GET /api/artists` - retrieves artists for a search 
* `GET /api/artists/:id` - retrieves a specific artist and info pertaining to it

### `albums`
* `GET /api/albums` - retrieves albums for a search 
* `GET /api/albums/:id` - retrieves a specific album and info pertaining to it

### `playlists`
* `GET /api/playlists` - retrieves playlists for search or a users playlists
* `GET /api/playlists/:id` - retrieves playlist info including song ids, and author for the given id
* `POST /api/playlists` - creates a new playlist
* `DELETE `/api/playlists/:id` - deletes a playlist with the given id
* `PATCH `/api/playlists/:id` - updates a playlist with the given id

### `songs`
* `GET /api/songs` - returns songs for search
* `GET /api/songs/:id` - retrieves a song with the given id to play or add to the queue

### `session`
* `POST /api/session`
* `DELETE /api/session` 

### `friendships`
* `GET /api/friends` - retrieves current users friends
* `GET /api/friends/:userid` - retrieves friends of specified user
* `POST /api/friends` - creates friendship between current user and another user
* `DELETE /api/friends` - deletes friendship between current user and another user

### `playlist_followships`
* `GET /api/playlist_followships` - retrieves current users playlists
* `GET /api/playlist_followships/:userid` - retrieves playlists of specified user
* `POST /api/playlist_followships` - creates followship between current user and playlist
* `DELETE /api/playlist_followships` - deletes followship between current user and playlist

## Frontend Routes

* `/login`
* `/signup`
* `/search`
* `/albums` - index of albums
* `/playlists` - index of playlists
* `/artists` - index of artists 
* `/artists/:id` - shows the songs and albums of a specific artist
* `/users/:userid` - shows a specific user
* `/users/:userid/playlists` - shows a specific users playlists
* `/albums/:id` - shows a specific album
* `/playlists/:id` - shows specific playlist
* `/playlists/new` - creates a new playlist
* `/playlists/:playlistid/edit` - edits a aplaylist
