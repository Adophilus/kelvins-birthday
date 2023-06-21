"use server"

import { ethers, parseEther } from 'ethers'
import { env } from '~/env.mjs';
import { prisma } from '~/server/db';

const provider = new ethers.JsonRpcProvider(env.POLYGON_RPC_URL);
const wallet = new ethers.Wallet(env.WALLET_PRIVATE_KEY, provider)
const amount = '1'

export async function sendMatic({ recipientAddress }: { recipientAddress: string }) {
  const previousTransactions = await prisma.transaction.findMany()
  if (previousTransactions.length !== 0) {
    return { status: false, message: "Transfer already in progress" }
  }

  try {
    await wallet.sendTransaction({
      to: recipientAddress,
      value: parseEther(amount),
    });

    await prisma.transaction.create({
      data: {
        recipientAddress,
        amount: parseInt(amount)
      }
    })
    return { status: true, message: "Check your wallet 😉" }
  } catch (error) {
    console.log(error)
    return { status: false, message: "Failed to transfer funds!" }
  }
}
