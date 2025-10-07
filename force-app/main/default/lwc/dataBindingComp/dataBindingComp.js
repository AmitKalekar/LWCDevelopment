import { LightningElement, track} from 'lwc';

export default class DataBindingComp extends LightningElement {
          
    @track greetingMsg = 'World';
    changeHandler(evt){

        console.log('change handler was called');
        console.log(evt.target.value);
        this.greetingMsg = evt.target.value;

    }
}


