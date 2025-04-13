import { LightningElement } from 'lwc';

export default class MyFirstLwcComp extends LightningElement {
    name;
    firstName='LNCT'
    lastName= 'Colleges'
    age=30
    amount=45.090
    flag=true
    myArray=['Apple', 'Banana', 'Cherry']
    date = new Date()
    objAccount={'sObjectType': 'Account'}
    objContact={'sObjectType': 'Contact'}
    objAcc={'Name':'db mall','Rating': 'Hot'}
}