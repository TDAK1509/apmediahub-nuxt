import api from "@/utils/api";
import apiDev from "@/utils/api_dev";

const isProduction = process.env.NODE_ENV === "production";

const mixinApi = isProduction ? api : apiDev;

export default mixinApi;
