

const ENV: string = "PROD";
const PROD_URL = "https://www.ongqir-backend.com";

export const SERVER_URL: string = ENV === "PROD" ? PROD_URL : "http://localhost:8000";