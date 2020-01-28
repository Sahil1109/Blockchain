pragma solidity ^0.5.1;

contract MyContract{
    
    // Person[] public people;
    
    uint256 public peopleCount;
    mapping(uint=>Person) public people;
    
    
    struct Person{
        uint id;
        string _firstname;
        string _lastname;
    }
    function addPerson( string memory _firstname, string memory _lastname) public{
        peopleCount+=1;
        people[peopleCount]=Person(peopleCount,_firstname,_lastname);
        
    }
    // string public constant stringValue ="myString";
    // bool public myBool = true;
    // int public myInt =-1;
    // uint public myUint =1;
    // uint8 public myUint8=8;
    
    // enum State {waiting, ready, active}
    // State public state;
    
    // constructor() public {
    //     state= State.waiting;
    // }
    // function activate() public{
    //     state= State.active;
    // }
    
    // function isActive() public view returns(bool){
    //     return state == State.active;
    // }
}
