<template>
  <v-row no-gutters>
    <v-col class="col-12">
      <v-card max-height="150">
        <v-row>
          <v-col class="col-9">
            <v-card-title
              class="hidden-sm-and-down font-weight-light display-4 text-no-wrap"
            >Game Database</v-card-title>
            <v-card-title
              class="hidden-md-and-up display-1 font-weight-light text-no-wrap"
            >Game Database</v-card-title>
          </v-col>
          <v-col class="col-3 mt-auto mb-auto mb-md-8 ml-lg-auto">
            <div class="d-flex align-center justify-center">
              <v-btn
                class="hidden-sm-and-down"
                href="/admin"
                rounded
                color="primary"
                dark
              >Admin Login</v-btn>
            </div>
            <div class="d-flex align-center justify-center">
              <v-btn
                fab
                small
                class="mx-2 hidden-md-and-up"
                href="/admin"
                rounded
                color="primary"
                dark
              >
                <v-icon dark>person</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>