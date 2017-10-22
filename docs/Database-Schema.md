# Schema

## `users`

**column name** | **data type** | **details**
------- | ------ | -------
`id` | integer | not null, primary key
`username` | string | not null, unique, indexed
`email` | string | not null, unique
`image_url` | string | 
`password_digest` | string | not null
`session_token` | string | not null, unique, indexed
`created_at` | datetime | not null
`updated_at` | datetime | not null

* has many created playlists
* has many playlist followships 
* has many playlist followers
* has many friendships
* has many friends


## `albums`

**column name** | **data type** | **details**
------- | ------ | -------
`id` | integer | not null, primary key
`artist_id` | integer | not null, foreign key, indexed
`title` | string | not null, indexed
`image_url` | string | 
`release_year` | integer | not null
`created_at` | datetime | not null
`updated_at` | datetime | not null

* has many songs
* belongs to artist

## `songs`

**column name** | **data type** | **details**
------- | ------ | -------
`id` | integer | not null, primary key
`album_id` | integer | not null, foreign key, indexed
`title` | string | not null, indexed
`artist_id` | integer | not null, foreign key, indexed
`length` | integer | not null
`file_path` | string | not null, unique
`image_url` | string | 
`explicit` | t.boolean | not null
`created_at` | datetime | not null
`updated_at` | datetime | not null

* has many playlist memberships
* belongs to album
* belongs to artist

## `artists`

**column name** | **data type** | **details**
------- | ------ | -------
`id` | integer | not null, primary key
`name` | string | not null, indexed
`image_url` | string | 
`created_at` | datetime | not null
`updated_at` | datetime | not null

* has many songs
* has many albums

## `friendships`

**column name** | **data type** | **details**
------- | ------ | -------
`id` | integer | not null, primary key
`user_id` | integer | not null, foreign key, indexed
`friend_id` | integer | not null, foreign key, indexed
`created_at` | datetime | not null
`updated_at` | datetime | not null

## `playlists`

**column name** | **data type** | **details**
------- | ------ | -------
`id` | integer | not null, primary key
`creator_id` | integer | not null, foreign key, indexed
`title` | string | not null, indexed
`image_url` | string |
`created_at` | datetime | not null
`updated_at` | datetime | not null

* has many songs
* belongs to creator
* has many playlist songs
* has many playlist followships
* has many followers

## `playlist_followships`

**column name** | **data type** | **details**
------- | ------ | -------
`id` | integer | not null, primary key
`playlist_id` | integer | not null, indexed
`user_id` | integer | not null, indexed
`created_at` | datetime | not null
`updated_at` | datetime | not null

## `playlist_songs`

**column name** | **data type** | **details**
------- | ------ | -------
`id` | integer | not null, primary key
`playlist_id` | integer | not null, indexed
`song_id` | integer | not null, indexed
`created_at` | datetime | not null
`updated_at` | datetime | not null

#







