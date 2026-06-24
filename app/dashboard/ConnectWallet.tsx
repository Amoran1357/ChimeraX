"use client";

export default function ConnectWallet() {

  async function connect() {

    if (!window.ethereum)
      return alert("No wallet found");

    await window.ethereum.request({
      method: "eth_requestAccounts"
    });

  }

  return (
    <button onClick={connect}>
      Connect Wallet
    </button>
  );

}
