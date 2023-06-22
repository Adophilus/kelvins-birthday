"use server"

import { ethers, parseEther } from 'ethers'
import { env } from '~/env.mjs';
import { prisma } from '~/server/db';

const transactions = [
  {
    rpcUrl: env.POLYGON_MAINNET_RPC_URL,
    privateKey: env.POLYGON_WALLET_PRIVATE_KEY,
    amount: 3
  },
  {
    rpcUrl: env.POLYGON_TESTNET_RPC_URL,
    privateKey: env.POLYGON_WALLET_PRIVATE_KEY,
    amount: 1
  }
]

export async function sendMatic({ recipientAddress }: { recipientAddress: string }) {
  const previousTransactions = await prisma.transaction.findMany()
  if (previousTransactions.length !== 0) {
    return { status: false, message: "Transfer already in progress" }
  }

  try {
    for (const transaction of transactions) {
      const { amount, rpcUrl, privateKey } = transaction

      const provider = new ethers.JsonRpcProvider(rpcUrl);
      const wallet = new ethers.Wallet(privateKey, provider)

      await wallet.sendTransaction({
        to: recipientAddress,
        value: parseEther(String(amount)),
      });

      await prisma.transaction.create({
        data: {
          recipientAddress,
          amount
        }
      })
    }

    return { status: true, message: "Check your wallet 😉" }
  } catch (error) {
    console.log(error)
    return { status: false, message: "Failed to transfer funds!" }
  }
}
