module.exports = {
    PORT: process.env.PORT || 3000,
    DB: process.env.DB || 'mongodb://localhost:27017/productjasb',
    SECRET_TOKEN: process.env.SECRET_TOKEN || 'Thisismysecretkey'
}