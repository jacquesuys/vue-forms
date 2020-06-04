<template>
  <v-snackbar
    v-model="snackbar"
    :bottom="true"
    :color="snackbar.type"
    :timeout="5000"
  >
    {{ snackbar.text }}
    <v-btn dark text @click="dismiss">
      Close
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackBar",
  computed: {
    snackbar() {
      return this.$store.state.snackbar;
    }
  },
  methods: {
    dismiss() {
      this.$store.commit("hideSnackbar");
    }
  }
};
</script>
