pragma solidity ^0.4.0;
contract Split{
    
    address[] employees =[
    0xb04D834A6b12868cec2fd41a984Cde20aB616E49,
    0x4Cd41De3bb7d3e59EC3128E38D92404C572e7E64
    ];
    uint totalReceived =0;
    mapping(address => uint) withdrawnAmounts;
    
    function Split() payable{
        updateTotalReceived();
    }
    
    function () payable{
        updateTotalReceived();
    }
    
    function updateTotalReceived() internal {
        totalReceived +=msg.value;
    }
    
    modifier canWithdraw() {
        bool contains = false;
        for(uint i =0;i<employees.length; i++){
            if(employees[i]== msg.sender){
                contains=true;
            }
        }
        if(contains){
            throw;
        }
        _;
    }
    function withdraw() canWithdraw {
        uint amountAllocated =totalReceived/employees.length;
        uint amountWithdrawn = withdrawnAmounts[msg.sender];
        uint amount = amountAllocated-amountWithdrawn;
        withdrawnAmounts[msg.sender]=amountAllocated+amount;
        
        if(amount>0){
            msg.sender.transfer(amount);
        }
    }
}
