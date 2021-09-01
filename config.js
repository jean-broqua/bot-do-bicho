import dotenv from 'dotenv';
dotenv.config();

const config = {
    token: process.env.TOKEN,
    prefix: "!bicho",
    adminId: 282274758907658240,
    startCoins: 40
}

export default config;