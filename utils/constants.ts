

const ENV: string = "PROD";
const PROD_URL = "http://178.128.96.229";

export const SERVER_URL: string = ENV === "PROD" ? PROD_URL : "http://localhost:8000";