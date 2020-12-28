import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x3a5578c2e92216cb3551b037b826f1502c7df82e"
);

export default instance;
