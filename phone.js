var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Rogers",
        number: 502-555-5555,
        address: ['14 Cuck Rd', 'Las Vegas', 'NV', '78656']
        },
    steve: {
        firstName: "Steve",
        lastName: "Craig",
        number: 451-555-5897,
        address: ['56 Phildro St', 'Tacoma', 'WA', '89456']
        }
    };
    
function list(x){
    for(var key in friends){
        console.log(key);
        }
    
    };   
    
function search(name){
    for(var key in friends){
        if(friends[key].firstName === name){
            console.log(friends[key]);
            return friends[key];
            
            }
        }
    };    
    list(friends);
    search("Bill");
