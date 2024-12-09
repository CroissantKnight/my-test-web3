import React, { useState } from 'react';
import { Connection, PublicKey, clusterApiUrl, Keypair } from '@solana/web3.js';
import './ConnectWallet.css';

function ConnectWallet() {
  const [publicKey, setPublicKey] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

  // เชื่อมต่อกับ Phantom Wallet
  const handleConnectWallet = async () => {
    if ('solana' in window) {
      try {
        const wallet = await window.solana.connect();
        setPublicKey(new PublicKey(wallet.publicKey));
        setIsWalletConnected(true);
        console.log("Connected wallet: ", wallet.publicKey.toString());

        // ดึงยอดคงเหลือจากบัญชี
        const balance = await connection.getBalance(wallet.publicKey);
        setWalletBalance(balance / 10 ** 9); // แปลงจาก lamports เป็น SOL
      } catch (err) {
        console.error("Error connecting to wallet: ", err);
      }
    } else {
      alert("Please install Phantom Wallet!");
    }
  };

  // สร้างกระเป๋าใหม่
  const handleCreateNewWallet = () => {
    // =create generate keypair object 
    const newKeypair = Keypair.generate();
    console.log("New Wallet Keypair: ", newKeypair);
    console.log("Public Key: ", newKeypair.publicKey.toString());
    console.log("Private Key (DO NOT SHARE): ", newKeypair.secretKey.toString());
  };

  return (
    <>
      <h1>Solana Web3 with React & Phantom</h1>

      {/* แสดงข้อความเตือนถ้ายังไม่ได้เชื่อมต่อกับ Phantom Wallet */}
      {!isWalletConnected ? (
        <div className="wallet-warning">
          <p>Please connect your Phantom Wallet to continue.</p>
          <button onClick={handleConnectWallet}>Connect Phantom Wallet</button>
        </div>
      ) : (
        <div>
          <button onClick={handleCreateNewWallet}>Create New Wallet</button>
        </div>
      )}

      {/* แสดงข้อมูลเกี่ยวกับกระเป๋าที่เชื่อมต่อ */}
      {publicKey && (
        <div className="wallet-info">
          <h2>Connected Wallet</h2>
          <p><span>Public Key:</span> {publicKey.toString()}</p>
          <p><span>Balance:</span> {walletBalance ? walletBalance : 'Loading...'} SOL</p>
        </div>
      )}
    </>
  );
}

export default ConnectWallet
