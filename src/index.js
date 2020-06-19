import app from './app';
import '@babel/polyfill';
async function main() {
    await app.listen(3333); 
console.log('Servidor con el puerto 3333');
};
main();
