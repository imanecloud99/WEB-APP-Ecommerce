import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjBhMDExOTE1MmUwMmM2ZGEzY2Q1YSIsImlzQWRtaW5lIjp0cnVlLCJpYXQiOjE2NDMzNzU0ODksImV4cCI6MTY0MzYzNDY4OX0.Gas6Aa9qC7U8XQM_QXbIX-5C6Di1c8dB-rtnZmCta5Y";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});
