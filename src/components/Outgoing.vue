<template>
  <v-form v-model="valid" ref="form">
    <v-row>
      <v-col cols=" 12" sm="6">
        <v-select
          v-model="beneficiary"
          :items="beneficiaries"
          :rules="beneficiaryRules"
          label="Beneficiary Name *"
          data-cy="beneficiary"
          required
        ></v-select>
      </v-col>
      <v-col cols=" 12" sm="6">
        <v-select
          v-model="applicant"
          :items="applicants"
          label="Applicant"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols=" 12" sm="6">
        <v-select
          v-model="facility"
          :items="facilities"
          :rules="facilityRules"
          label="Facility *"
          required
        ></v-select>
      </v-col>
      <v-col cols=" 12" sm="6">
        <v-select
          v-model="issuingBank"
          :items="issuingBanks"
          :rules="issuingBankRules"
          label="Issuing Bank *"
          required
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="lcRefNumber"
          label="LC Reference Number *"
          :rules="lcRefNumberRules"
          data-cy="lc-ref-number"
          required
        >
        </v-text-field>
      </v-col>
      <v-col cols=" 12" sm="6">
        <v-menu
          v-model="expiryDatePicker"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="expiryDate"
              :rules="expiryDateRules"
              label="Expiry Date *"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="expiryDate"
            @input="expiryDatePicker = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols=" 12" sm="6">
        <v-select
          v-model="lcType"
          :items="lcTypes"
          :rules="lcTypeRules"
          label="LC Type *"
          required
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols=" 12" sm="6">
        <v-text-field
          v-model="faceValue"
          label="Face Value *"
          :rules="faceValueRules"
          data-cy="face-value"
          required
        >
        </v-text-field>
      </v-col>
      <v-col cols=" 12" sm="6">
        <v-text-field v-model="tolerance" label="Tolerance"> </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols=" 12" sm="6">
        <v-select
          v-model="tranche"
          :items="tranches"
          :rules="trancheRules"
          label="Tranche *"
          required
        ></v-select>
      </v-col>
      <v-col cols=" 12" sm="6">
        <v-menu
          v-model="issuanceDatePicker"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="issuanceDate"
              :rules="issuanceDateRules"
              label="Issuace Date"
              prepend-icon="event"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="issuanceDate"
            @input="issuanceDatePicker = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols=" 12" sm="6">
        <v-text-field
          v-model="newIssuanceFee"
          label="New Issuance Fee"
          hint="if different from default"
        >
        </v-text-field>
      </v-col>
      <v-col cols=" 12" sm="6">
        <v-text-field
          v-model="autoCancellation"
          label="Autocancellation Threshold"
          hint="if applicable"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols=" 12" sm="6">
        <v-text-field
          v-model="tradeRefNumber"
          label="Trade Reference Number"
          hint="Comma separated numbers"
        >
        </v-text-field>
      </v-col>
      <v-col cols=" 12" sm="6">
        <v-autocomplete
          v-model="currency"
          :items="currencies"
          label="Currency *"
          :rules="currencyRules"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols=" 12" sm="6">
        <v-checkbox
          v-model="isAdvisingBankConfirming"
          label="Is advising bank confirming?"
        ></v-checkbox>
      </v-col>
      <v-col cols=" 12" sm="6">
        <v-select
          v-model="advisingBank"
          :items="advisingBanks"
          label="Advising Bank Name"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols=" 12" sm="6">
        <v-textarea
          label="LC Description"
          v-model="lcDescription"
          outlined
        ></v-textarea>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="form-controls">
          <v-btn
            :disabled="!valid"
            color="primary"
            @click="submit"
            data-cy="submit-btn"
          >
            Submit
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="reset" data-cy="reset-btn">
            Reset
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="save" data-cy="save-btn">
            Save
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import validation from "@/helpers/validation";
import getSet from "@/helpers/get-set";

export default {
  name: "Outgoing",
  data: () => ({
    valid: false,
    expiryDatePicker: false,
    issuanceDatePicker: false,

    // validation
    beneficiaryRules: validation.beneficiary,
    facilityRules: validation.facility,
    issuingBankRules: validation.issuingBank,
    expiryDateRules: validation.expiryDate,
    lcTypeRules: validation.lcType,
    faceValueRules: validation.faceValue,
    trancheRules: validation.tranche,
    issuanceDateRules: validation.issuanceDate,
    currencyRules: validation.currency,
    lcRefNumberRules: validation.lcRefNumber
  }),
  computed: {
    // values
    beneficiary: getSet("beneficiary"),
    applicant: getSet("applicant"),
    facility: getSet("facility"),
    issuingBank: getSet("issuingBank"),
    lcRefNumber: getSet("lcRefNumber"),
    expiryDate: getSet("expiryDate"),
    lcType: getSet("lcType"),
    faceValue: getSet("faceValue"),
    tolerance: getSet("tolerance"),
    tranche: getSet("tranche"),
    issuanceDate: getSet("issuanceDate"),
    newIssuanceFee: getSet("newIssuanceFee"),
    autoCancellation: getSet("autoCancellation"),
    tradeRefNumber: getSet("tradeRefNumber"),
    currency: getSet("currency"),
    isAdvisingBankConfirming: getSet("isAdvisingBankConfirming"),
    advisingBank: getSet("advisingBank"),
    lcDescription: getSet("lcDescription"),

    // lists
    lcTypes() {
      return this.$store.state.lcTypes;
    },
    beneficiaries() {
      return this.$store.state.beneficiaries;
    },
    applicants() {
      return this.$store.state.applicants;
    },
    facilities() {
      return this.$store.state.facilities;
    },
    issuingBanks() {
      return this.$store.state.issuingBanks;
    },
    advisingBanks() {
      return this.$store.state.advisingBanks;
    },
    currencies() {
      return this.$store.state.currencies;
    },
    tranches() {
      return this.$store.state.tranches;
    }
  },
  methods: {
    setDatePicker(picker) {
      this[picker] = false;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    submit() {
      this.$refs.form.validate();
      if (this.valid) {
        this.$store.commit("submit");
        this.reset();
      }
    },
    save() {
      this.$store.commit("save");
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
<style scoped>
.form-controls {
  width: 33.3%;
  margin: 0 auto;
  display: flex;
}
</style>
