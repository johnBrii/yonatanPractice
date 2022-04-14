import axios from "axios";

const tokenAxios = axios.create({

    baseURL: 'https://claplablmsapi.clap.co.il',
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    }
})

export { tokenAxios }