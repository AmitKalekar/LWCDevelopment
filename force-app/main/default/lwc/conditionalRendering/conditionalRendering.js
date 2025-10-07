import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    displayDiv = false;

    handleClick() {
         this.displayDiv = true;
    }


     status = 'morning';

    changeHandler(evt){
        this.status = evt.target.value;
    }

    get isMorning(){
        return this.status == 'Morning';

    }
    get isAfternoon(){
        return this.status == 'Afternoon';

    }
}
