<template>
  <v-col class="col-sm-3 pb-0">
    <v-card tile max-height="800">
      <div class="scroller">
        <v-list :disabled="classes.isFading">
          <v-list-item-group color="primary">
            <v-list-item
              v-for="game in game"
              :key="game.id"
              class="clicker"
              v-on:click="emitPressed(game)"
            >
              <v-list-item-content>
                <v-list-item-title v-text="game.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
      <span>
        <p class="text-center">
          <v-icon>keyboard_arrow_down</v-icon>
        </p>
      </span>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    game: {
      type: Array,
      default: []
    },
    classes: {
      type: Object,
      default: false
    }
  },
  methods: {
    emitPressed(game) {
      this.$emit('emitPressed', {
        title: game.name,
        year: game.year,
        developer: game.developer,
        platform: game.platform_name,
        photo: game.photo
      });
    }
  }
};
</script>