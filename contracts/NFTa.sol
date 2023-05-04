// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

import "erc721a/contracts/ERC721A.sol";

contract NFTa is ERC721A {
    constructor() ERC721A("TEST ERC721A", "TERC721A") {}

    function mint(uint _amount) external {
        _mint(msg.sender, _amount);
    }
}
