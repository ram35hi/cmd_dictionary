console.log(process.env.apiKey);
const appConfig = {
    wordnik: {
        apiKey: process.env.apiKey || "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
        url: "http://api.wordnik.com:80/v4",

    },
}
module.exports = appConfig;