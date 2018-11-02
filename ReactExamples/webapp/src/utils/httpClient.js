import axios from "axios";

import { config } from "./index";


axios.defaults.withCredentials = true;

function getUrl(api) {
    if (api.indexOf("http") === 0) return api;
    if (api && api[0] !== "/") {
        api = "/" + api;
    }
    return config.getBaseUrl() + api;
}

export default {
    put: (url, data) => {
        url = getUrl(url);
        return new Promise(async (resolve, reject) => {
            try {
                let res = await axios.put(url, data);
                if (res.data.err) {
                    reject(res.data.err);
                } else {
                    resolve(res.data);
                }
            } catch (e) {
                reject(e);
            }
        });
    },
    post: (url, data) => {
        url = getUrl(url);
        return new Promise(async (resolve, reject) => {
            try {
                let res = await axios.post(url, data);
                if (res.data.err) {
                    reject(res.data.err);
                } else {
                    resolve(res.data);
                }
            } catch (e) {
                reject(e);
            }
        });
    },
    get: (url, data) => {
        url = getUrl(url);
        return new Promise(async (resolve, reject) => {
            try {
                let res = await axios.get(url, {
                    params: data
                });
                if (res.data.err) {
                    reject(res.data.err);
                } else {
                    resolve(res.data);
                }
            } catch (e) {
                reject(e);
            }
        });
    },
    patch: (url, data) => {
        url = getUrl(url);
        return new Promise(async (resolve, reject) => {
            try {
                let res = await axios.patch(url, data);
                if (res.data.err) {
                    reject(res.data.err);
                } else {
                    resolve(res.data);
                }
            } catch (e) {
                reject(e);
            }
        });
    },
    delete: (url, data) => {
        url = getUrl(url);
        return new Promise(async (resolve, reject) => {
            try {
                let res = await axios.delete(url, {
                    params: data
                });
                if (res.data.err) {
                    reject(res.data.err);
                } else {
                    resolve(res.data);
                }
            } catch (e) {
                reject(e);
            }
        });
    }
};
