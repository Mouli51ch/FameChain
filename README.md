# Fame Chain

Fame Chain is a decentralized social media platform designed to connect celebrities with their fans through direct, secure, and engaging interactions. This project was developed for the HackOn Blocks 2024 hackathon by Team NodeNerd.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Fame Chain aims to solve the problem of impersonal and insecure interactions on traditional social media platforms by leveraging blockchain technology. Our platform prioritizes real-time engagement and privacy, allowing fans to interact directly with their favorite celebrities in a secure environment.

## Features

- **Secure Signup:** Users sign up using MetaMask, Trust Wallet, or an Ethereum address.
- **Livestreaming:** Fans can support their favorite creators by donating tokens during live sessions.
- **Home Page:** Includes polls, NFTs from followed celebrities, and livestreams.
- **For You Page:** Discover trending posts, top creators, and top fans.
- **Wallet:** Manage tokens with low transaction fees. Features include adding tokens (converting ETH to tokens) and transferring tokens.
- **Profile Page:** 
  - **Stats:** Track followers, following, leaderboard rank, and tokens spent.
  - **Daily Tasks and Collectibles:** Complete tasks for rewards and showcase digital collectibles.
  - **Posts and Activity:** View all posts made by the user and log all interactions and transactions.

## Tech Stack

- **Solidity:** Smart contract development
- **PostgreSQL:** Database management
- **Golang:** Backend services
- **React Native:** Frontend development

## Setup

### Prerequisites

- Node.js
- PostgreSQL
- Golang
- MetaMask or Trust Wallet

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/NodeNerd/FameChain.git
   cd FameChain
   ```

2. **Install dependencies for the frontend:**

   ```sh
   cd frontend
   npm install
   ```

3. **Install dependencies for the backend:**

   ```sh
   cd backend
   go mod tidy
   ```

4. **Set up PostgreSQL database:**

   Create a new database and update the database configuration in the backend.

   ```sh
   psql -U postgres
   CREATE DATABASE famechain;
   ```

5. **Migrate the database schema:**

   ```sh
   cd backend
   go run migrate.go
   ```

6. **Start the backend server:**

   ```sh
   go run main.go
   ```

7. **Start the frontend server:**

   ```sh
   cd frontend
   npm start
   ```

## Usage

1. Open the application in your web browser or mobile device.
2. Sign up or log in using MetaMask, Trust Wallet, or an Ethereum address.
3. Explore the home page, participate in polls, view NFTs, and join livestreams.
4. Use the wallet to manage tokens, add new tokens, and transfer tokens to others.
5. Check your profile for stats, daily tasks, collectibles, posts, and activity logs.

## Contributing

We welcome contributions from the community. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push the branch to your fork.
5. Open a pull request.

