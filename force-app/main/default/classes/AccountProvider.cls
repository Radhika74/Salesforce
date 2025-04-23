public with sharing class AccountProvider {

    @AuraEnabled
    public static List<Account> fetchDataAccount(Account objNewAcc) {
        try {
            if (objNewAcc == null || String.isBlank(objNewAcc.Name)) {
                throw new AuraHandledException('Account Name is required.');
            }

            if (!Schema.sObjectType.Account.isAccessible()) {
                throw new AuraHandledException('You do not have access to Account records.');
            }

            return [
                SELECT Name, Rating, Type, SLA__c, CreatedDate
                FROM Account
                WHERE Name = :objNewAcc.Name
            ];
        } catch (Exception e) {
            throw new AuraHandledException('Error fetching account: ' + e.getMessage());
        }
    
    }
    @AuraEnabled
        public static List<Account> fatchData(){
    try {
        return [select Id,Name,CreatedBy.Name from Account];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}
    @AuraEnabled
        public static string getUsername(){
    try {
        String username=[select Id,username from User where Id=:UserInfo.getUserId()].username;
        return username;
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}

}

