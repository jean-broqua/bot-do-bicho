import { user, aposta, sorteio } from './tables.js';

// 
async function dbSync() {
    try {
        const userResult = await user.sync();
        const apostaResult = await sorteio.sync();
        const sorteioResult = await aposta.sync();
        console.log(userResult);
        console.log(apostaResult);
        console.log(sorteioResult);
    } catch (error) {
        console.log(error);
    }
}

export default dbSync;