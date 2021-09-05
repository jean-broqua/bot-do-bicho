import dotenv from 'dotenv';
dotenv.config();

const config = {
    token: process.env.TOKEN,
    prefix: "!bicho",
    adminId: 282274758907658240,
    channelId: "748304375700783137",
    startCoins: 10,
    drawTime: 22,
    betAmount: 2,
    prizeMultiplier: 1.5,
}

export default config;