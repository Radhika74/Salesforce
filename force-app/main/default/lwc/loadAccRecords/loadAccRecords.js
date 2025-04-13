import fatchData from '@salesforce/apex/AccountProvider.fatchData';
import getUsername from '@salesforce/apex/AccountProvider.getUsername';
import { LightningElement } from 'lwc';
const columns = [
    { label: 'Name', fieldName: 'Name', editable: true },
    { label: 'Createdby', fieldName: 'CreatedBy.Name', editable: true },
];

export default class LoadAccRecords extends LightningElement {
    columns=columns;
    accList;
    totalCount=0;
    userName;
    connectedCallback(){
        getUsername()
        .then(result=>{
            this.userName=result;

        })
        .catch(error=>{
            console.log(JSON.stringify(error));
        })
    
        fatchData()

        .then(result=>{
            this.accList=result;
            this.totalCount=result.length;

        })
        .catch(error=>{
            console.log(JSON.stringify(error));
        })
    }
}
