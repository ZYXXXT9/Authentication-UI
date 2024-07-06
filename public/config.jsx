const Configs = {
  tenant: [
    {
      tenant_name: "localhost",
      api_url: "http://192.168.1.200:5001",
    },
    {
      tenant_name: "192",
      api_url: "http://192.168.1.200:5001",
    },
  ],
};

window.Configs = Configs;

const SubDomain = window.location.hostname.split(".")[0];
const CfgIdx = Configs.tenant.findIndex(
  ({ tenant_name }) =>
    String(tenant_name).toUpperCase() === String(SubDomain).toUpperCase()
);

window.CfgIdx = CfgIdx;
