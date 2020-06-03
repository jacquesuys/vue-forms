<template>
  <v-container>
    <v-card>
      <v-card-title class="headline">
        <v-radio-group label="Direction: " v-model="direction" row>
          <v-radio label="Outgoing" :value="'outgoing'"></v-radio>
          <v-radio label="Incoming" :value="'incoming'"></v-radio>
        </v-radio-group>
      </v-card-title>
      <v-card-text v-if="direction === 'outgoing'">
        <Outgoing />
      </v-card-text>
      <v-card-text v-if="direction === 'incoming'">
        <Incoming />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Outgoing from "@/components/Outgoing";
import Incoming from "@/components/Incoming.vue";

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
    Incoming
  }
};
</script>
