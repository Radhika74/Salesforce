import fetchDataAccount from '@salesforce/apex/AccountProvider.fetchDataAccount';
import { LightningElement } from 'lwc';

export default class AccountTableCompo extends LightningElement {
    objAcc={'sObjectType':'Account'}
    showAccountTable=false;
    accountDataHandler(){
        this.objAcc.Name=this.template.querySelector('lightning-input[data-formfield="Acc"]').value;
        
        fetchDataAccount({objNewAcc:this.objAcc})
        .then(result=>{
            console.log(JSON.stringify(result));
            this.showAccountTable=true;
            this.objAcc=result;
        })
        .catch(error=>{
            console.log('somthing went worng')
            this.showAccountTable=false;
        })

    }
    
}

