export const deleteDataInLocalSTorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expiry");
  localStorage.removeItem("userAccountId");
};
