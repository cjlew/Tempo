# Tempo

Tempo is a live streaming music app inspired by Spotify. Users can enjoy their favorite songs while exploring the many playlists created by their friends. Tempo was created using Rails 5, React, Redux, PostgreSQL and Amazon Web Services S3.

Listen live at [tempo-app.com](http://www.tempo-app.com/#/)

## Features

### Persistant streaming while navigating through the site.

Utilizing Redux's ability to pass specific props from the store to key components, music streaming is achieved by creating a seperate slice of state for the audio file, ensuring that the media player component is allowed to run as the rest of the components change.

### Following playlists and friending other users

Tempo uses Ruby on Rails' Active Record to create relationships between playlists and songs and between users. These relationships are stored in junction tables that connect two other tables in the SQL database.

### Backend and frontend User authentication

User creation is handled by model level validations. By using Auth routes on the frontend and controller validations on the backend, only logged in users can access the full site. Guests are redirected to a splash page where they can login or sign up.

### Create your own playlists with your favorite songs

Users can add songs to their own playlists on the frontend, which triggers an action to update the store and send a POST request to the backend. This POST request creates a new membership on the junction table, connecting the song to the playlist in the database.

### Search for your favorite songs by artists, album or song title

Ruby on Rails' Active Record is used to query the SQL database for matches in the titles of albums or songs, and the names of artists. The results of these queries are sent to the front end in a JSON format, where users can toggle between the different types of results.

###

## To-Do:
* [ ] Index views for followed playlists, followed users, albums and artists
* [ ] Show views for albums and artists
* [ ] Preloading queued songs
* [ ] Adding a more robust library of songs
