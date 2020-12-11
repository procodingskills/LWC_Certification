/**
 * @description       : Contact Controller to Publish the Contact Details
 * @author            : i.lakshmideepak@gmail.com
 * @group             : 
 * @last modified on  : 12-11-2020
 * @last modified by  : i.lakshmideepak@gmail.com
 * Modifications Log 
 * Ver   Date         Author                      Modification
 * 1.0   12-11-2020   i.lakshmideepak@gmail.com   Initial Version
**/
public with sharing class ContactController {
    /**
    * @description Which Returns the Contact Record
    * @author i.lakshmideepak@gmail.com | 12-11-2020 
    * @param accountId 
    * @return List<Contact> 
    **/
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        return [
            SELECT FirstName, LastName, Email
            FROM Contact
       ];
    }
}
