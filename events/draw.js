import config from "../config.js";
import { MessageEmbed } from "discord.js";

export var currentDrawNum;
var currentDrawAnimals;

const animals = {
    'avestruz': ['01', '02', '03', '04'],
    'aguia': ['05', '06', '07', '08'],
    'burro': ['09', '10', '11', '12'],
    'borboleta': ['13', '14', '15', '16'],
    'cachorro': ['17', '18', '19', '20'],
    'cabra': ['21', '22', '23', '24'],
    'carneiro': ['25', '26', '27', '28'],
    'camelo': ['29', '30', '31', '32'],
    'cobra': ['33', '34', '35', '36'],
    'coelho': ['37', '38', '39', '40'],
    'cavalo': ['41', '42', '43', '44'],
    'elefante': ['45', '46', '47', '48'],
    'galo': ['49', '50', '51', '52'],
    'gato': ['53', '54', '55', '56'],
    'jacare': ['57', '58', '59', '60'],
    'leao': ['61', '62', '63', '64'],
    'macaco': ['65', '66', '67', '68'],
    'porco': ['69', '70', '71', '72'],
    'pavao': ['73', '75', '76', '77'],
    'peru': ['77', '78', '79', '80'],
    'touro': ['81', '82', '83', '84'],
    'tigre': ['85', '86', '87', '88'],
    'urso': ['89', '90', '91', '92'],
    'veado': ['93', '94', '95', '96'],
    'vaca': ['97', '98', '99', '00']
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    return result.toString().padStart(4, '0');
}

export function drawNumber(client) {
    if (config.channelId.length > 0) {

        let numDraw = getRandomIntInclusive(0, 9999);
        let animalsDraw = [];

        // Create an array with the animals from the draw.
        for (let animal in animals) {

            animals[animal].map((n) => {
                if (numDraw.includes(n)) {
                    animalsDraw.push(animal);
                }
            })
        }

        currentDrawNum = numDraw;
        currentDrawAnimals = [...new Set(animalsDraw)];

        console.log(numDraw);
        console.log(animalsDraw);

        // Send embed message comunicating the draw number and animals.
        client.channels.fetch(config.channelId)
            .then((channel) => {
                const drawResult = new MessageEmbed()
                    .setTitle("Resultado do sorteio de hoje 🎉")
                    .setDescription(`Numero: ${currentDrawNum}\nSe você ganhou não esqueça de usar \`${config.prefix} cobrar\` para receber seu premio!`)
                channel.send({ embeds: [drawResult] });
            })
    } else {

        console.log('The draw dint run doe to no channel being set.');
        return;
    }
}

export default currentDrawAnimals;