var Configs = {
  tenant: [
    {
      tenant_name: "localhost",
      api_url: "http://192.168.1.200:5000",
    },
    {
      tenant_name: "192",
      api_url: "http://192.168.1.200:5000",
    },
  ],
};

var SubDomain = window.location.hostname.split(".")[0];
var CfgIdx = Configs.tenant.findIndex(
  ({ tenant_name }) =>
    String(tenant_name).toUpperCase() === String(SubDomain).toUpperCase()
);
