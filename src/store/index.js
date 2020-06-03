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
    direction: "outgoing",
    currencies,
    applicants: [
      "Applicants 1",
      "Applicants 2",
      "Applicants 3",
      "Applicants 4"
    ],
    beneficiaries: [
      "Benefiacry 1",
      "Benefiacry 2",
      "Benefiacry 3",
      "Benefiacry 4"
    ],
    facilities: ["Facility 1", "Facility 2", "Facility 3", "Facility 4"],
    tranches: ["Tranche 1", "Tranche 2", "Tranche 3", "Tranche 4"],
    advisingBanks: ["Bank 1", "Bank 2", "Bank 3"],
    issuingBanks: ["Bank 1", "Bank 2", "Bank 3"]
  },
  mutations: {
    direction(state, value) {
      state.direction = value;
    },
    submit(state) {
      const data = {
        direction: state.direction,
        ...state.form
      };
      console.log(data);
    },
    updateField(state, payload) {
      state.form[payload.field] = payload.value;
    }
  },
  actions: {},
  modules: {}
});
