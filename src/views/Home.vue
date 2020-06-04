<template>
  <v-container>
    <v-card>
      <v-card-title class="headline">
        <v-radio-group
          class="direction-controls"
          label="Direction: "
          v-model="direction"
          row
        >
          <v-radio
            label="Outgoing"
            :value="'outgoing'"
            data-cy="outgoing-form"
          ></v-radio>
          <v-radio
            label="Incoming"
            :value="'incoming'"
            data-cy="incoming-form"
          ></v-radio>
        </v-radio-group>
      </v-card-title>
      <v-card-text v-if="direction === 'outgoing'">
        <Outgoing />
      </v-card-text>
      <v-card-text v-if="direction === 'incoming'">
        <Incoming />
      </v-card-text>
    </v-card>
    <Snackbar />
  </v-container>
</template>

<script>
import Outgoing from "@/components/Outgoing";
import Incoming from "@/components/Incoming.vue";
import Snackbar from "@/components/Snackbar.vue";

export default {
  name: "Home",
  computed: {
    direction: {
      get() {
        return this.$store.state.direction;
      },
      set(value) {
        this.$store.commit("direction", value);
      }
    }
  },
  components: {
    Outgoing,
    Incoming,
    Snackbar
  }
};
</script>
<style>
.direction-controls .v-messages {
  display: none !important;
}

.direction-controls .v-input__slot {
  margin-bottom: 0;
}
</style>
