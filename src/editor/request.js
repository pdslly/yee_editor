import Axios from "axios";

const Request = Axios.create({
    baseURL: "/",
    timeout: 20000,
});

// Request.interceptors.request.use((req) => {
//     return req;
// });

Request.interceptors.response.use(({ data: { code, msg, data } }) => {
    if (code === 10000) {
        return Promise.resolve(data);
    } else {
        return Promise.reject({ code, msg });
    }
});

export default Request;
