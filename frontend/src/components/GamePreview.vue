<template>
  <v-col class="col-sm-9">
    <v-card
      tile
      class="max-auto preview"
      max-width="800"
      min-height="520"
      :class="classes.activated ? '':'hidden'"
    >
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content
          :class="{'animated flipInX': classes.isFading, 'not-fading': !classes.isFading }"
        >
          <v-list-item-title class="headline">{{description.title}}</v-list-item-title>
          <v-list-item-subtitle>
            Released in
            <span class="black--text">{{description.year}}</span>
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            By
            <span class="black--text">{{description.developer}}</span>
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            For
            <span class="black--text">{{description.platform}}</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-img
        height="520"
        eager
        :src="description.photo ? description.photo : 'static/null.png'"
        aspect-ration="1.7"
        class="preview-img"
        :class="{'animated fadeIn': classes.isFading, 'not-fading': !classes.isFading }"
      ></v-img>
    </v-card>
  </v-col>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    description: {
      type: Object
    },
    classes: {
      type: Object,
      default: false
    }
  },
  methods: {}
};
</script>