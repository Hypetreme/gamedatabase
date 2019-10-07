{% load static %}
<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container>
          <game-title></game-title>
          <v-row>
            <game-list :classes="classes" :game="game" v-on:emitPressed="pressed($event)"></game-list>
            <game-preview :classes="classes" :description="description"></game-preview>
          </v-row>
        </v-container>
      </v-content>
      <v-footer>
        <div>Janne Karppinen &copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import GameTitle from './components/GameTitle.vue';
import GameList from './components/GameList.vue';
import GamePreview from './components/GamePreview.vue';
import axios from 'axios';

export default {
  mounted: function() {
    axios.get('/api/games').then(response => (this.game = response.data));
  },
  name: 'app',
  data: function() {
    return {
      game: null,
      description: {
        title: null,
        year: null,
        developer: null,
        platform: null,
        photo: null
      },
      classes: {
        isFading: false,
        activated: false
      }
    };
  },
  components: {
    'game-title': GameTitle,
    'game-list': GameList,
    'game-preview': GamePreview
  },
  methods: {
    pressed: function(e) {
      this.description = e;
      this.classes.activated = true;
      this.classes.isFading = !this.classes.isFading;
      if (this.classes.isFading) {
        setTimeout(() => {
          this.classes.isFading = false;
        }, 600);
      }
    }
  }
};
</script>

