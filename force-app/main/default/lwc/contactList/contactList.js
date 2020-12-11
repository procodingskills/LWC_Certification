import { LightningElement, api , wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import LASTNAME from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';
const COLUMNS = [
    { label: 'FirstName', fieldName: FIRSTNAME.fieldApiName, type: 'text' },
    { label: 'LastName', fieldName: LASTNAME.fieldApiName, type: 'text' },
    { label: 'Email', fieldName: EMAIL.fieldApiName, type: 'email' }
];
export default class ContactList extends LightningElement {
    columns = COLUMNS;
    @wire(getContacts, {  })
    contacts;
}