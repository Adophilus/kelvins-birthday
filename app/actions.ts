"use server"

import { ethers, parseEther } from 'ethers'
import { env } from '~/env.mjs';

const provider = new ethers.JsonRpcProvider(env.POLYGON_RPC_URL);
const wallet = new ethers.Wallet(env.WALLET_PRIVATE_KEY, provider)
const amount = parseEther('1')

export async function sendMatic({ recipientAddress }: { recipientAddress: string }) {
  try {
    await wallet.sendTransaction({
      to: recipientAddress,
      value: amount,
    });

    return { status: true, message: "Check your wallet 😉" }
  } catch (error) {
    console.log(error)
    return { status: false, message: "Failed to transfer funds!" }
  }
}
