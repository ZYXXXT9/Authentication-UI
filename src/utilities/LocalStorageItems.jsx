export const token = JSON.parse(localStorage.getItem("token"));
export const token_expiration = JSON.parse(localStorage.getItem("expiry"));
export const localStoreUserAccountId = JSON.parse(
  localStorage.getItem("userAccountId")
);
export const reloadCounter = JSON.parse(
  sessionStorage.getItem("reloadCounter")
);
export const validLicense = JSON.parse(localStorage.getItem("validLicense"));
