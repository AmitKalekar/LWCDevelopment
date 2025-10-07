import { LightningElement, api } from 'lwc';

export default class StudentInfo extends LightningElement {
    @api studentInfo;
    
    tileClickHandler() {
        alert('Tile Clicked');
    }
}
