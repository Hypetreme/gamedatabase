Vue.component('games', {
  data: function() {
    return {
      isFading: false
    };
  },
  props: ['games'],
  template: `<v-list-item-group color="primary"><v-list-item 
  v-for="game in games":key="game.id"class="clicker"v-on:click="pressed(),
  title = game.name, platform = game.platform_name, 
  developer = game.developer, year = game.year, photo = game.photo">
  <v-list-item-content><v-list-item-title v-text="game.name">
  </v-list-item-title></v-list-item-content></v-list-item></v-list-item-group>`
});

new Vue({
  delimiters: ['[[', ']]'],
  el: '#app',
  vuetify: new Vuetify(),

  mounted: function() {
    axios.get('/api/games').then(response => (this.games = response.data));
  },
  data: {
    activated: false,
    isFading: false,
    games: null,
    title: '???',
    platform: null,
    developer: null,
    year: null,
    photo: null
  },
  methods: {
    pressed: function() {
      this.activated = true;
      this.isFading = !this.isFading;
      if (this.isFading) {
        setTimeout(() => {
          this.isFading = false;
        }, 600);
      }
    }
  }
});
