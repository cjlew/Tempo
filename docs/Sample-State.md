# Sample State
     {
    entities: {
      songs: {
        1: {
          id: 1,
          name: “Bluebirds",
          artist_id: 11,
          file_path: ‘/file/songs/bluebirds’,
          current_user_saved: false
        },
        2: {
          id: 2,
          body: “blackbirds”,
          artist_id: 25,
          file_path: ‘/file/songs/blackbirds’,
          current_user_saved: true
        },
      },
      albums: {
        1: {
          id: 1,
          title: 'great albums 99',
          img_url: 'some/img/for/albums',
          song_ids: [2,4,7,1],
          artist_id: 2,
          current_user_follows: false,
        }
      },
      playlists: {
        77: {
          id: 77,
          title: 'myfirstplaylist',
          img_url: null,
          song_ids: [88,66,35],
          author_id: 57,
          current_user_follows: true,
          current_user_author: true
        }
      },
      artists: {
        61: {
          id: 61,
          name: 'Eminem',
          img_url: '/picture/of/mnm',
          song_ids: [32,54,6],
          album_ids: [45,3,1],
          current_user_follows: false,
        }
      }
      users: {
        11: {
          id: 11,
          username: "blue_macaw",
          img_url: "http://maxpixel.freegreatpicture.com/static/photo/1x/Wildlife-Tropical-Pet-Colorful-Macaw-Parrot-			Bird-410144.jpg",
          playlists_ids: [1,2,3],
          friend_ids: [3,5,2],
          current_user_friends: true
        }
        31: {
          id: 31,
          username: "black_macaw",
          img_url: "files/images/birds",
          playlists_ids: [],
          friend_ids: [],
          current_user_friends: false,
        },
      }
    },
    ui: {
      loading: true/false
    },
    errors: {
      session: ["Incorrect username/password combination"],
      playlist: ["Invalid playlists parameters"],
    },
    session: {
      currentUser: {
        id: 57,
        username: "blue_hawk",
        img_url: "/path/images/blue"
        friend_ids: [5,4],
        playlists_ids: [1],
      }
    }
    player: {
      currentSongId = 3,
      QueueSongIds = [2,6,8],
      volume = 2,
      paused = false,
    }

  