export default class Card {
    constructor() {
        this.columnsCartlist = document.querySelectorAll('.card-list');
        this.ids = [];
    }  
    idAdd(){
        const id = Math.floor(Math.random() * 16);
        return id;
    }

    greatCard() {
        const btnSubmit = document.querySelectorAll('.cart_add');
        btnSubmit.forEach((item, index) => {
            item.addEventListener('click', e => {
                e.preventDefault();
                const form = e.target.closest('.addcart-form');
                const textarea = form.querySelector('textarea');
                const newCard = this.columnsCartlist[index].createElement('div');
                newCard.classList.add('.newcard');
                newCard.textContent = textarea.value;
                if(!this.ids[this.idAdd()] !== -1) {
                    newCard.dataset.id = this.idAdd();
                }
            });
        });
    }
}