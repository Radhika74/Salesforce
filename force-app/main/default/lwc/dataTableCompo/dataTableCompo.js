import deleteAccountRecords from '@salesforce/apex/AccountProvider.deleteAccountRecords';
import fetchDataAccount from '@salesforce/apex/AccountProvider.fetchDataAccount';
import { LightningElement, track } from 'lwc';

export default class AccountDataTableCompo extends LightningElement {
    @track accList = [];
    countOfRecords = 0;
    selectedRecords = [];

    columns = [
        { label: 'Name', fieldName: 'Name', editable: true },
        { label: 'Rating', fieldName: 'Rating', editable: true }
    ];

    connectedCallback() {
        this.loadAccountData();
    }

    loadAccountData() {
        fetchDataAccount()
            .then(result => {
                this.accList = result;
                this.countOfRecords = 0;
                this.selectedRecords = [];
            })
            .catch(error => {
                console.error('Error fetching accounts:', error);
            });
    }

    selectedRecordsHandler(event) {
        const selectedRows = event.detail.selectedRows || [];
        this.countOfRecords = selectedRows.length;
        const recordIds = selectedRows.map(row => row.Id);
        this.selectedRecords = Array.from(new Set(recordIds));
    }

    deleteDataHandler() {
        if (!this.selectedRecords.length) return;

        deleteAccountRecords({ accIDList: this.selectedRecords })
            .then(result => {
                this.accList = result;
                this.countOfRecords = 0;
                this.selectedRecords = [];
            })
            .catch(error => {
                console.error('Error deleting accounts:', error);
            });
    }
}



