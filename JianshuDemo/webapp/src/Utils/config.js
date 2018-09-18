const config = {
    colorMap: {
        a: "#ff4d4f",
        b: "#ff7a45",
        c: "#ffa940",
        d: "#ffc53d",
        e: "#ffec3d",
        f: "#bae637",
        g: "#73d13d",
        h: "#36cfc9",
        i: "#40a9ff",
        j: "#597ef7",
        k: "#9254de",
        l: "#f759ab",
        m: "#f5222d",
        n: "#fa541c",
        o: "#fa8c16",
        p: "#faad14",
        q: "#fadb14",
        r: "#a0d911",
        s: "#52c41a",
        t: "#13c2c2",
        u: "#1890ff",
        v: "#2f54eb",
        w: "#722ed1",
        x: "#eb2f96",
        y: "#389e0d",
        z: "#08979c"
    },

    getBaseUrl: () => {
        if (config.isProdDev || config.isDev) {
            //prod ENV on sjn
            return "http://localhost:3000";
        }
        // prod ENV on PAZ
        return "http://localhost:3000";
    },

    isDev: process.env.NODE_ENV === "dev",
    isProd: process.env.NODE_ENV === "prod",
    isProdDev: true,
    getIsDev: () => {
        console.log(process.env.NODE_ENV);
        return config.isDev;
    },
    setIsDev: b => {
        config.isDev = b;
    }
};
export default config;
