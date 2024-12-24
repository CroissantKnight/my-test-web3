import React, { useState } from "react";
import { Connection, PublicKey, clusterApiUrl, Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { Navigate, useNavigate } from "react-router-dom";

// import './ConnectWallet.css';

function ConnectWallet() {
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const navigate = useNavigate();

  const [publicKey, setPublicKey] = useState(null);
  const [walletBalance, setWalletBalance] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleClick_back = (path, index) => {
    navigate("/test");
  };


  // เชื่อมต่อกับ Phantom Wallet
  const handleConnectWallet = async () => {
    if ("solana" in window) {
      try {
        const wallet = await window.solana.connect();
        setPublicKey(new PublicKey(wallet.publicKey));
        setIsWalletConnected(true);
        console.log("Connected wallet: ", wallet.publicKey.toString());

        // ดึงยอดคงเหลือจากบัญชี
        const balance = await connection.getBalance(wallet.publicKey);
        setWalletBalance(balance / 10 ** 9); // แปลงจาก lamports เป็น SOL
        // ~ console.log wallet data & balance data
        console.log(balance);
        console.log(wallet);
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
    console.log(
      "Private Key (DO NOT SHARE): ",
      newKeypair.secretKey.toString()
    );
    console.log(newKeypair);
  };

  // = สร้าง function ตัดดการเชื่อมต่อกับกระเป๋า
  const handleDisconnectWallet = () => {
    setPublicKey(null);
    setWalletBalance(null);
    setIsWalletConnected(false);
    console.log("Disconnected wallet.");
  };

  // = สร้างfunction generate เหรีญ
 


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
        <div>{/* เอาปุ่ม Create New Wallet ออก */}</div>
      )}

      {/* แสดงข้อมูลเกี่ยวกับกระเป๋าที่เชื่อมต่อ */}
      {publicKey && (
        <div className="wallet-info">
          <h2>Connected Wallet</h2>
          <p>
            <span>Public Key:</span> {publicKey.toString()}
          </p>
          <p>
            <span>Balance:</span> {walletBalance ? walletBalance : "Loading..."}{" "}
            SOL
          </p>
          <button onClick={handleDisconnectWallet}>Disconect your wallet</button>
          <button onClick={handleClick_back}>Go to page test</button>

        </div>
        
      )}
    </>
  );
}

export default ConnectWallet;
