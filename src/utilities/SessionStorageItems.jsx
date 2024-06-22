export const redirectTo = JSON.parse(
  JSON.stringify(sessionStorage.getItem("redirectTo"))
);
export const reloadCounter = JSON.parse(
  sessionStorage.getItem("reloadCounter")
);
