import axios from "axios";

const contactsApi = axios.create({
    baseURL: "https://6ae12faebe3bc8fead984d05.mockapi.io",
});

export default contactsApi;