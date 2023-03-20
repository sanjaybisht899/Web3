async function showAlert() {
  event.preventDefault();
  const tokenInput = document.getElementById('tokenInput').value.trim();

  try {
    const connection = new solanaWeb3.Connection("https://api.devnet.solana.com");
    const publicKey = new solanaWeb3.PublicKey(tokenInput);

    // Request airdrop to the public key
    const txhash = await connection.requestAirdrop(publicKey, 1e9);
    console.log(`txhash: ${txhash}`);

    alert("Got Tokkens");
  } catch (err) {
    console.error(err);
    alert("Error occurred: " + err.message);
  }
}
