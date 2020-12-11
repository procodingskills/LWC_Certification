/**
 * @description       : 
 * @author            : i.lakshmideepak@gmail.com
 * @group             : 
 * @last modified on  : 12-11-2020
 * @last modified by  : i.lakshmideepak@gmail.com
 * Modifications Log 
 * Ver   Date         Author                      Modification
 * 1.0   12-11-2020   i.lakshmideepak@gmail.com   Initial Version
**/
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRSTNAME from '@salesforce/schema/Contact.FirstName';
import LASTNAME from '@salesforce/schema/Contact.LastName';
import EMAIL from '@salesforce/schema/Contact.Email';
export default class ContactCreator extends LightningElement {
    objectApiName = CONTACT_OBJECT;
    fields = [FIRSTNAME, LASTNAME, EMAIL];
    handleSuccess(event) {
        const toastEvent = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }
}