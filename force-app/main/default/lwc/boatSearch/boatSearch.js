/**
 * @description       : 
 * @author            : i.lakshmideepak@gmail.com
 * @group             : 
 * @last modified on  : 12-13-2020
 * @last modified by  : i.lakshmideepak@gmail.com
 * Modifications Log 
 * Ver   Date         Author                      Modification
 * 1.0   12-13-2020   i.lakshmideepak@gmail.com   Initial Version
**/
import { LightningElement , track , api} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class BoatSearch extends NavigationMixin(LightningElement){
    @track isLoading = false;
    // Handles loading event
    handleLoading() {
        this.isLoading = true;
    }
    // Handles done loading event
    handleDoneLoading() {
        this.isLoading = false;
    }
    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) { 
        const boatTypeId = event.detail.boatTypeId;
        this.template.querySelector("c-boat-search-results").searchBoats(boatTypeId);
    }
    createNewBoat() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
            objectApiName: 'Boat__c',
            actionName: 'new'
            }
        });
    }
}