// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MeetAndGreet {
    address public owner;
    mapping(address => bool) public influencers;
    mapping(address => uint256) public userBalances;
    
    event InfluencerAdded(address indexed influencer);
    event Interaction(address indexed user, address indexed influencer, uint256 amount);
    
    constructor() {
        owner = msg.sender;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }
    
    modifier onlyInfluencer() {
        require(influencers[msg.sender], "Not an influencer");
        _;
    }
    
    function addInfluencer(address _influencer) public onlyOwner {
        influencers[_influencer] = true;
        emit InfluencerAdded(_influencer);
    }
    
    function interactWithInfluencer(address _influencer) public payable {
        require(influencers[_influencer], "Not a valid influencer");
        require(msg.value > 0, "You need to pay to interact");
        
        userBalances[_influencer] += msg.value;
        emit Interaction(msg.sender, _influencer, msg.value);
    }
    
    function withdraw() public onlyInfluencer {
        uint256 amount = userBalances[msg.sender];
        require(amount > 0, "No funds to withdraw");
        
        userBalances[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}
