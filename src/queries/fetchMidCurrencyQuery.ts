
const queryMidCurrency = 'http://api.nbp.pl/api/exchangerates/tables/a'

const api = {
    getMidCurrency: async () => {
        try {
            const response = await fetch(queryMidCurrency, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Accept-Encoding": "gzip, deflate, br",
                    "User-Agent": "kursy (gzip)",
                },
            });
            const data = await response.json();
           return data;
           // return console.log(data);
        } catch (err: any) {
            console.error(err);
        }
    },
}


export default api;