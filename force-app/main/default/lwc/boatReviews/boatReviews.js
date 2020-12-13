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
import { LightningElement,api,track } from 'lwc';
import getAllReviews from '@salesforce/apex/BoatDataService.getAllReviews';
import { NavigationMixin } from 'lightning/navigation';

export default class BoatReviews extends NavigationMixin(LightningElement) {
    // Private
    boatId;
    error;
    @track boatReviews;
    isLoading;
    
    // Getter and Setter to allow for logic to run on recordId change
    @api
    get recordId() {  
        return this.boatId;
      }
    set recordId(value) {
        this.setAttribute('boatId', value);
        this.boatId = value;
        //console.log(' @@@ boat Id' + this.boatId);
        this.getReviews();
    }
    
    // Getter to determine if there are reviews to display
    get reviewsToShow() {
        console.log( 'this.boatReviews  ==> ' +this.boatReviews);
        return (this.boatReviews != undefined && this.boatReviews != null && this.boatReviews != '') ? true : false;
     }
    
    // Public method to force a refresh of the reviews invoking getReviews
    @api
    refresh() {
        this.getReviews();
     }
    
    // Imperative Apex call to get reviews for given boat
    // returns immediately if boatId is empty or null
    // sets isLoading to true during the process and false when it’s completed
    // Gets all the boatReviews from the result, checking for errors.
    getReviews() { 
        console.log(' refresh getReviews ' + this.boatId);
        this.isLoading = true;
        getAllReviews({boatId : this.boatId})
            .then(result => {
                this.boatReviews = result;
                this.isLoading = false;
                console.log(' == getAllReviews == ');
            })
            .catch(error => {
                this.boatReviews = undefined;
                this.error = error;
            });
    }
    
    // Helper method to use NavigationMixin to navigate to a given record on click
    navigateToRecord(event) { 
        const userId = event.target.dataset.recordId
        // Generate a URL to a User record page
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: userId ,
                objectApiName: 'User',
                actionName: 'view',
            },
        });
     }
    }