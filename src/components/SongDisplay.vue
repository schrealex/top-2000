<template>
  <div class="song-display">
    <div class="left">
      <transition name="fade">
        <img v-show="showCoverArt" :src="getCoverArt()" />
      </transition>
    </div>
    <ul>
      <li v-for="song in myTop2000Songs" :key="song.songTitle">
        <span @mouseover="onSongMouseOver(song)" @mouseleave="onSongMouseLeave()">
          {{ song.artist }} - {{ song.songTitle }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SongDisplay',
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showCoverArt: false,
      selectedSong: {
        image: '',
      },
    };
  },
  computed: {
    myTop2000Songs() {
      return this.data.songs.slice()
        .sort((a, b) => {
          if (a.artist === b.artist) {
            return a.songTitle.localeCompare(b.songTitle);
          }
          return a.artist > b.artist ? 1 : -1;
        });
    },
  },
  methods: {
    onSongMouseOver(song) {
      this.selectedSong = song;
      this.showCoverArt = true;
    },
    onSongMouseLeave() {
      this.showCoverArt = false;
    },
    getCoverArt() {
      return `../static/images/${this.selectedSong.image}`;
    },
  },
};
</script>

<style lang="scss">
  .song-display {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .left {
    margin-left: 100px;

    img {
      position: fixed;
      top: calc(50% - 254px);
      border: 8px solid #f3c500;
    }
  }

  h1 {
    -webkit-text-stroke: 2px #f3c500;
  }

  ul {
    width: 1300px;
    list-style: none;
    text-align: left;
    margin: 0;
    padding: 0;

    li {
      color: var(--mainColor);
      text-decoration: none;
      text-align: center;
      cursor: pointer;
      transition: 0.6s;
    }
  }

  :root {
    --mainColor: #808080;
  }

  li:hover {
    color: transparent;
    -webkit-text-stroke: 2px #f3c500;
    font-size: 1.9em;
  }

  @supports not(-webkit-text-stroke: 2px red) {
    li:hover {
      font-size: 2.2em;
      text-shadow: 3px 3px 0 var(--mainColor),
      -1px -1px 0 var(--mainColor),
      1px -1px 0 var(--mainColor),
      -1px 1px 0 var(--mainColor),
      1px 1px 0 var(--mainColor);
    }
  }

  .fade-enter-active {
    transition: opacity 2s ease-in-out;
  }

  .fade-enter-to {
    opacity: 1;
  }

  .fade-enter {
    opacity: 0;
  }
</style>
