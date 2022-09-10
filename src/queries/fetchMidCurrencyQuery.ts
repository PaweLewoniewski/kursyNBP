
const queryMidCurrency = 'http://api.nbp.pl/api/exchangerates/tables/a';
const querySingleLastDaysCurrerncy = 'http://api.nbp.pl/api/exchangerates/rates/c/usd/last/30/';
const queryBidAskCurrency = 'https://api.nbp.pl/api/exchangerates/tables/c/';
//const querySingleCurrency = 'https://api.nbp.pl/api/exchangerates/rates/c/usd';
//const querySingleRageCurrency = 'http://api.nbp.pl/api/exchangerates/rates/c/usd/2022-08-01/2022-08-30/';

const pln = [{ currency: 'polski złoty', code: 'PLN', ask: 1, bid: 1 }]

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
            return data[0].rates;
        } catch (err: any) {
            console.error(err);
        }
    },
    getSingleLastCurrency: async () => {
        try {
            const response = await fetch(querySingleLastDaysCurrerncy, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Accept-Encoding": "gzip, deflate, br",
                    "User-Agent": "kursy (gzip)",
                },
            });
            const data = await response.json();
            return console.log(data);
        } catch (err: any) {
            console.error(err);
        }
    },
    getMultipleCurrency: async () => {
        try {
            const response = await fetch(queryBidAskCurrency, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Accept-Encoding": "gzip, deflate, br",
                    "User-Agent": "kursy (gzip)",
                },
            });
            const data = await response.json();
            const addPln = [...data[0].rates, ...pln];
            return addPln;
        } catch (err: any) {
            console.error(err);
        }
    },
}


export default api;