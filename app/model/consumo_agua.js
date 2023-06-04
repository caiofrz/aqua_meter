import { getObjectStore, REGISTRO_CONSUMO_AGUA } from "../store/store.js";

class ConsumoAgua {
    constructor(id, timestamp, quantidade){
        this.id = id;
        this.timestamp = timestamp;
        this.quantidade = quantidade;
    }

    static async salvar(quantidade) {
        const timestamp = new Date().getTime();
        const store = await getObjectStore(REGISTRO_CONSUMO_AGUA);
        const measure = localStorage.getItem("measure");

        store.add({
            quantidade,
            timestamp
        })
    }

    static async getAll() {
        const store = await getObjectStore(REGISTRO_CONSUMO_AGUA);
        const request = store.getAll();
        const measure = localStorage.getItem("measure");

        return new Promise((resolve, reject) => {
            request.onsuccess = function() {
              let registers = request.result;
              registers = registers.map(element => {
                if(measure === "L") {element.quantidade = element.quantidade/1000};  

                return new ConsumoAgua(element.id, element.timestamp, element.quantidade);
                })
                  resolve(registers);
                }
          })
    }
}

export default ConsumoAgua;