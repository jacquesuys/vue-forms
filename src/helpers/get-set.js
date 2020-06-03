import store from "@/store";

export default field => ({
  get() {
    return store.state.form[field];
  },
  set(value) {
    store.commit("updateField", { field, value });
  }
});
