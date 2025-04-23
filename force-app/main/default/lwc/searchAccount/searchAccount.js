import { LightningElement } from 'lwc';
import fetchDataAccount from '@salesforce/apex/AccountProvider.fetchDataAccount';
export default class SearchAccount extends LightningElement {

    objAcc={"sObjectType":"Account"}
    createDataHandler(){
        console.log('you are in function');
        this.objAcc.Name=this.template.querySelector('lightning-input[data-formfield="Acc"]').value;
        console.log(this.objAcc.Name);
        fetchDataAccount({objNewAcc:this.objAcc})
        .then(result=>{
            console.log(result);
            this.objAcc=result;
        })
        .catch(error=>{
            console.log('error');
        })
    }
}
