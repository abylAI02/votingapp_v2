> [!NOTE]
> If you are having problem getting the SMS from the Digital-ID in votingapp-v2.vercel.app/ use the default test code which is 00000
# Development of the Information Security System for Electronic Voting

## Table of Contents
1. [Introduction](#introduction)
2. [Development of Smart Contract](#development-of-smart-contract)
   - 2.1 [Setting the Framework](#setting-the-framework)
   - 2.2 [Writing Solidity Code](#writing-solidity-code)
   - 2.3 [Compiling Solidity Code](#compiling-solidity-code)
   - 2.4 [Deploying Smart Contract](#deploying-smart-contract)
3. [Development of Web App](#development-of-web-app)
   - 3.1 [Starting the Setup of Web App Framework](#starting-the-setup-of-web-app-framework)
   - 3.2 [Writing TypeScript Code for Voting](#writing-typescript-code-for-voting)
4. [Creating Authorization Mechanism](#creating-authorization-mechanism)
   - 4.1 [Connecting Digital ID](#connecting-digital-id)
5. [Hosting Web App](#hosting-web-app)
   - 5.1 [Connecting to Vercel](#connecting-to-vercel)
   - 5.2 [Uploading Project to GitHub](#uploading-project-to-github)
6. [Additional Security Features](#additional-security-features)
   - 6.1 [Adding Geolocation IP Blocker](#adding-geolocation-ip-blocker)
   - 6.2 [reCaptcha Security Implementation](#recaptcha-security-implementation)
7. [Conclusion](#conclusion)

## Introduction

This project aims to develop an information security system for electronic voting, addressing the critical issues of security, transparency, and trust in the electoral process. By leveraging blockchain technology, this project seeks to enhance the integrity and reliability of electronic voting systems, providing a robust solution tailored for the Kazakhstani e-government system.

## Development of Smart Contract

### Setting the Framework

The framework chosen for the creation of the web app is ThirdWeb, which offers an extensive toolkit and utilities for integrating blockchain networks into React.js apps. ThirdWeb provides a comprehensive solution with web3.js integration, support for IPFS, and DID.

### Writing Solidity Code

Smart contracts are written in Solidity, a statically-typed programming language designed for developing smart contracts that run on the Ethereum Virtual Machine (EVM). This section covers the creation of the Solidity code necessary for the electronic voting system.

### Compiling Solidity Code

Solidity
code is compiled using the Solidity compiler (solc). This step ensures that the smart contracts are syntactically correct and ready for deployment on the blockchain.

### Deploying Smart Contract

Deployment of the smart contract is conducted through ThirdWeb. This process involves setting up the blockchain development environment and choosing the appropriate toolchains, such as Hardhat, for testing and deployment.

## Development of Web App

### Starting the Setup of Web App Framework

The web app framework is set up using modern web development tools and libraries, including React.js. This section details the initial setup and configuration required to start building the web application.

### Writing TypeScript Code for Voting

TypeScript is used to write the code for the voting functionalities within the web app. This ensures type safety and enhances the development experience by catching errors early in the development process.

## Creating Authorization Mechanism

### Connecting Digital ID

The authorization mechanism involves integrating a Digital ID system to ensure secure and verifiable voter identities. This section outlines the process of connecting and verifying Digital IDs within the web app.

## Hosting Web App

### Connecting to Vercel

Vercel is used for hosting the web application. This step includes connecting the project to Vercel, configuring the deployment settings, and ensuring continuous deployment from the code repository.

### Uploading Project to GitHub

The project is uploaded to GitHub, enabling version control and collaboration. This section provides instructions for setting up the repository, committing code, and managing project updates.

## Additional Security Features

### Adding Geolocation IP Blocker

To enhance security, a geolocation IP blocker is implemented. This feature restricts access to the voting system based on geographical location, adding an additional layer of protection against unauthorized access.

### reCaptcha Security Implementation

reCaptcha is integrated into the web application to prevent automated attacks and ensure that only legitimate users can access the voting system. This section covers the implementation and configuration of reCaptcha.

## Conclusion

This project demonstrates the development of a secure and transparent electronic voting system using blockchain technology. By addressing the key issues of security and trust, the system provides a reliable solution for modern democratic processes. The implementation details covered in this document serve as a comprehensive guide for developing similar systems in other contexts.

---

For detailed code listings and further explanations, please refer to the full thesis document.
