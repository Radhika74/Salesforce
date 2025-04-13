import { LightningElement } from 'lwc';

export default class ApplicationFormComponent extends LightningElement{
    name;
    dOB;
    emailId;
    getDataHandler(){
        console.log('You are in function')
        this.name=this.template.querySelector('lightning-input[data-formfield="myname"]').value
        console.log(this.name)
        this.dOB=this.template.querySelector('lightning-input[data-formfield="dob"]').value
        console.log(this.dOB)
        this.emailId=this.template.querySelector('lightning-input[data-formfield="email"]').value
        console.log(this.emailId)
    }
}