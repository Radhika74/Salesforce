import createAccountRecord from '@salesforce/apex/AccountProvider.createAccountRecord';
import fetchDataAccount from '@salesforce/apex/AccountProvider.fetchDataAccount';
import { LightningElement } from 'lwc';
export default class CurdCompo extends LightningElement {

objAcc={"sObjectType":"Account"};
showCreatButton=false;
    creatAccountHandle(){
        console.log('you are in create');
        this.showCreatButton=true;
    }
    searchAccountHandle(){
        console.log('you are in search');
        
        this.showCreatButton=false;
    }
    updateAccountHandle(){
        console.log('you are in update');
        this.showCreatButton=false;

    }
    deleteAccountHandle(){
        console.log('you are in delete');
        this.showCreatButton=false;
    }
    createAccuntData(){
        this.objAcc.Name=this.template.querySelector('lightning-input[data-formfield="Acc"]').value;
        createAccountRecord({objNewAcc: this.objAcc})
        .then(result=>{
            console.log(JSON.stringify(result));
        })
        .catch(error=>{
            console.log('error');
        })
    }
    get ratingDataHandler(){
        return[
            {label:'Hot',value:'Hot'},
            {label:'Cold',value:'Cold'},
            {label:'Warm',value:'Warm'}
        ];
        
    }
    ratingCreateHandler(event){
        this.objAcc.Rating=event.detail.value;
    }
    fetchDataHandler(){
        this.objAcc.Name=this.template.querySelector('lightning-input[data-formfield="AccName"]').value;
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

