import ImageKit from "imagekit";
import config from "@/lib/config";
import { NextResponse } from "next/server";

const {
  env: {
    imagekit: { publicKey, privateKey, urlEndpoint },
  },
} = config;

const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint });

export async function GET() {
  try {
    return NextResponse.json(imagekit.getAuthenticationParameters());
  } catch (error: any) {
    throw new Error(`a3333333333333333: ${error.message}`);
  }
}
