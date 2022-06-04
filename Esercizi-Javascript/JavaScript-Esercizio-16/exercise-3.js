function createStore() {
    let store = [] //creo array vuoto
    const addProduct = (products) => { //costante per i prodotti da aggiungere, che è la arrow function 
        const checkProduct = store.find(check => { // check, tramite find() controlla che gli id nello store combacino col prod
            if (check.id == products.id) { // se la condizione è soddisfatta, product assume la forma dell'argomento passato in fondo 
                return check; // e me lo ritorna
            }
        })
        if (checkProduct == null) { // se il checkProduct è vuoto, allora mi pushi il nuovo prodotto 
            store.push(products); //pushandolo in store
        }
        console.log(store); 
    }
    return addProduct; //ritorna l'operazione eseguita
}

const redPants = { id: 1, name: 'Red Pants' };
const whiteHat = { id: 2, name: 'White Hat' };
const blackSneakers = { id: 3, name: 'Black Sneakers' };
const blueSneakers = { id: 4, name: 'Blue Sneakers' };

console.log('--- Dress Store ---');
const dressStore = createStore();
dressStore(redPants);
dressStore(whiteHat)

console.log('--- Shoes Store ---');
const shoesStore = createStore();
shoesStore(blackSneakers);
shoesStore(blueSneakers);