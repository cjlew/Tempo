# React Components

## Functional Component Hierarchy
+ Root
    + App
        + PlaylistSidebar
        + MainPage
        + HeaderNav
        + SocialSidebar 
        + MediaPlayer

## PlaylistSidebar
+ PlaylistSidebar
    + Playlist/Friends ToggleButtons
    + Profile Link
        + State: `users[:id], session`
    + Saved Songs Link
        + State: `users[:id], session`
    + CreatedPlaylists Link
        + State: `users[:id], session`
    + MyPlaylistsContainer + PlaylistList
        + State: `users[:id], session`
    + MyFriendsContainer + MyFriendsList
        + State: `users[:id], session`

## HeaderNav
+ HeaderNav
    + SearchContainer + SearchBar
    + CurrentUserContainer + CurrentUserInfo
        + State: `session`

## MediaPlayer
+ MediaPlayer
    + MusicInfoContainer
        + State: `player`
    + MusicControllerContainer
        + State: `player`
    + VolumeControllerContainer
        + State: `player`
+ **Note:** All other components are rendered within the MainPage

## Playlists
 
### Index

+ `PlaylistsIndexContainer + PlaylistsIndex`
    + Route: `/#/playlists`
    + State: `playlists`
    + Components
        + `PlaylistIndexItems`
            + State: `playlist[:id], ui`

### Show

+ `PlaylistsShowContainer + PlaylistsShow`
    + Route: `/#/playlists/:id`
    + State: `playlists[:id], users[:id]`
    + Components
        + `PlaylistInfoContainer`
            + State: `playlist[:id], ui`
        + `SongsIndexContainer + SongsIndex`    
            + State: `playlist[:id], songs`
                + `SongsInfo`
                    + State: `songs[:id], users[:id]`

### New

+ `PlaylistFormContainer + PlaylistForm`
    + Route `/#/playlists/new`
    + State: `users[:id]`

### Update

+ `PlaylistFormContainer + PlaylistForm`
    + Route `/#/playlists/:playlistsid/edit`
    + State: `playlists[:id], users[:id]`

        
## Albums

### Index

+ `AlbumsIndexContainer + AlbumsIndex`
    + Route: `/#/albums`
    + State: `albums`
    + Components
        + `AlbumIndexItems`
            + State: `albums[:id], ui`

### Show

+ `AlbumsShowContainer + AlbumsShow`
    + Route: `/#/albums/:id`
    + State: `albums[:id], users[:id]`
    + Components
        + `AlbumInfoContainer`
            + State: `albums[:id], ui`
        + `SongsIndexContainer + SongsIndex`    
            + State: `albums[:id], songs`
                + `SongsInfo`
                    + State: `songs[:id], users[:id]`
        

## Artists

### Index

+ `ArtistsIndexContainer + ArtistsIndex`
    + Route: `/#/artists`
    + State: `artists`
    + Components
        + `ArtistIndexItems`
            + State: `artists[:id], ui`

### Show

+ `ArtistsShowContainer + ArtistsShow`
    + Route: `/#/artists/:id`
    + State: `artists[:id], users[:id]`
    + Components
        + `ArtistInfoContainer`
            + State: `artists[:id], ui`
        + `SongsIndexContainer + SongsIndex`    
            + State: `artists[:id], songs`
                + `SongsInfo`
                    + State: `songs[:id], users[:id]`
        
## Users

+ `UserProfileContainer + UserProfile`
    + Route: `/#/users/:id`
    + State: `playlists, users[:id]`
    + Components
        + PlaylistIndex


## Session
+ `SessionFormContainer + SessionForm`
    + Route: `/#/login` and `/#/signup`
    + State: `errors.login`

## Search
+ `SearchBarContainer + SearchIndex`
    + Route: `/#/search`
    + State: `ui`
    + Components
        + `ResultsContainer + ResultsIndex`
            + State: none (will be made seperatly in an ajax request)
            + Components
                + `SongsIndex`
                + `AlbumsIndex`
                + `ArtistsIndex`
                + `PlaylistsIndex`