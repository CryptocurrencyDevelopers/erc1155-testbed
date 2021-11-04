// contracts/GameItems.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract GameItems is ERC1155 {
    uint256 public constant SKYBIT_SKYBOXES = 3;

    constructor() public ERC1155("SkyBit ERC1155 NFT Token") {
        _mint(msg.sender, SKYBIT_SKYBOXES, 1, "We in the skybox yo");
    }
}