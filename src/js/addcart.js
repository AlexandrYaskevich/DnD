export default class Cart {
    constructor() {
        this.columns = document.querySelectorAll('.column');
        this.buttons = document.querySelectorAll('.card_add')
        this.ids = [];
    }

   addCard(){
        this.buttons.forEach((btn, index) => {
            btn.addEventListener('click', (e) =>{
                const newcart = document.createElement('div');
                newcart.classList.add('ncart');     
                newcart.setAttribure('id', this.generateId());
                newcart.textContent = "";
                this.columns[index].appendChild(newcart);
            })
        });
    }

    

    

    generateId() {
        const id = Math.floor(Math.random() * 1000000);
        if (this.ids.includes(id)) {
          return this.generateId();
        }
        this.ids.push(id);
        return id;
      }
}