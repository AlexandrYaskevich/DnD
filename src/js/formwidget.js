import Card from './card';
import ChangeCardSit from './cardchange';

export default class Form {
    constructor() {
        this.buttons = document.querySelectorAll('.spancard');
        this.init();
    }

   init(){
    this.onClick();
    this.onClose();
    this.onSubmit();
   }

   onClick() {
    this.buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const form = e.target.closest('.addcart').querySelector('.addcart-form');
            btn.classList.remove('.noactive');
            form.classList.add('.active');
        });
    });
   }

   onClose() {
    const btnReset = document.querySelectorAll('.card-close');
    btnReset.forEach(item => {
        item.addEventListener('click', e => {
            const form = e.target.closest('.addcart-form');
            const span = e.target.closest('.addcart').querySelector('.spancard');
            this.close(form, span);
        });
    });
   }

   close(form, span){
    form.classList.remove('.active');
    span.classList.add('.noactive');
   }

   onSubmit() {
    const btnSubmit = document.querySelectorAll('.cart_add');
    btnSubmit.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            const form = e.target.closest('.addcart-form');
            const newCard = new Card();
            newCard.greatCard() ;
            form.reset();
            const span = e.target.closest('.addcart').querySelector('.spancard');
            this.close(form, span);
        })
    });
   }
   
}
