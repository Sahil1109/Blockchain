pragma solidity ^0.5.1;

contract MyContract{
    
    uint256 public peopleCount;
    mapping(uint=>Person) public people;
    
    uint256 openingTime = 1580197110;
    modifier onlyTime(){
        require(block.timestamp >=openingTime);
        _;
    }
    
    struct Person{
        uint id;
        string _firstname;
        string _lastname;
    }

    function addPerson
    ( 
    string memory _firstname, 
    string memory _lastname
    ) 
    
    public onlyTime
    {
        incrementCount();
        people[peopleCount]=Person(peopleCount,_firstname,_lastname);
    }
    
    function incrementCount() internal {
        peopleCount+=1;
    }
}
