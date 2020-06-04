import Vue from "vue";
import Vuex from "vuex";
import currencies from "@/utils/currencies";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {
      beneficiary: "",
      applicant: "",
      facility: "",
      issuingBank: "",
      lcRefNumber: "",
      expiryDate: new Date().toISOString().substr(0, 10),
      lcType: "",
      faceValue: "",
      tolerance: "",
      tranche: "",
      issuanceDate: new Date().toISOString().substr(0, 10),
      newIssuanceFee: 500.0,
      autoCancellation: "",
      tradeRefNumber: "",
      currency: "",
      isAdvisingBankConfirming: false,
      advisingBank: "",
      lcDescription: ""
    },
    snackbar: null,
    direction: "outgoing",
    currencies,
    lcTypes: ["LC Type 1", "LC Type 2", "LC Type 3"],
    applicants: [
      "Applicant 1",
      "Applicant 2",
      "Applicant 3",
      "Applicant 4"
    ],
    beneficiaries: [
      "Beneficiary 1",
      "Beneficiary 2",
      "Beneficiary 3",
      "Beneficiary 4"
    ],
    facilities: ["Facility 1", "Facility 2", "Facility 3", "Facility 4"],
    tranches: ["Tranche 1", "Tranche 2", "Tranche 3", "Tranche 4"],
    advisingBanks: ["Bank 1", "Bank 2", "Bank 3"],
    issuingBanks: ["Bank 1", "Bank 2", "Bank 3"]
  },
  mutations: {
    hideSnackbar(state) {
      state.snackbar = false;
    },
    direction(state, value) {
      state.direction = value;
    },
    submit(state) {
      const data = {
        direction: state.direction,
        ...state.form
      };
      console.log(data);
      state.snackbar = { type: "success", text: "Form submitted" };
    },
    save(state) {
      state.snackbar = { type: "info", text: "Form saved" };
    },
    updateField(state, payload) {
      state.form[payload.field] = payload.value;
    }
  },
  actions: {},
  modules: {}
});
