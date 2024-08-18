
export default class ChangeCardSit{
    constructor() {
        this.cardsColumn = document.querySelectorAll('.card-list');
        this.actualElement;
    }
    mouseUp(e){
        const mouseUpItem = e.target;
        items.insertBefore(actualElement, mouseUpItem);
        this.actualElement.classList.remove('dragged');
        this.actualElement = undefined;

        document.documentElement.removeEventListener('mouseup', this.mouseUp());
        document.documentElement.removeEventListener('mouseover', this.mouseOver());
    }
    mouseOver(e){
        actualElement.style.top = e.clientY + 'px';
        actualElement.style.left = e.clientX + 'px';
    }
    mouseDown(){
        this.cards.forEach(columnList => {
            columnList.addEventListener('mousedown', (e) => {
                e.preventDefault();
                const cards = e.target.querySelectorAll('.newcard');
                cards.forEach(card => {
                    card.addEventListener('mousedown', (e) => {
                        this.actualElement = e.target;
                        this.actualElement.classList.add('dragged');

                    })
                });
                
            })
        });
        document.documentElement.addEventListener('mouseup', this.mouseUp());
        document.documentElement.addEventListener('mouseover', this.mouseOver());
    }

}