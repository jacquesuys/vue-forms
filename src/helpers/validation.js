const lengthRule = v => v && v.length > 0;

export default {
  currency: [v => lengthRule(v) || "You must specify the currency"],
  lcRefNumber: [
    v => lengthRule(v) || "You must specify the LC reference number"
  ],
  expiryDate: [v => lengthRule(v) || "You must specify the expiry date"],
  issuanceDate: [v => lengthRule(v) || "You must specify the issuance date"],
  tranche: [v => lengthRule(v) || "You select a tranche"],
  faceValue: [v => lengthRule(v) || "You must specify the face value"],
  issuingBank: [v => lengthRule(v) || "You must select the issuing bank"],
  facility: [v => lengthRule(v) || "You must select the facility"],
  beneficiary: [v => lengthRule(v) || "You must select the beneficiary"],
  applicant: [v => lengthRule(v) || "You must select the applicant"],
  lcType: [v => lengthRule(v) || "You must select the LC type"]
};
