import axios from "axios"

const commonConfig = {
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
};

const instance = axios.create({
    baseURL: "http://localhost:3000",
    ...commonConfig
})

export default instance;