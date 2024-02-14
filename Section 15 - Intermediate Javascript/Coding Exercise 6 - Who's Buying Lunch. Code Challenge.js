function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        var totalNames = names.length;
        var pickRandomName = Math.floor(Math.random() * totalNames);
        var randomPeron = names[pickRandomName];

        return randomPeron + " is going to buy lunch today!";
    /******Don't change the code below*******/    
    }