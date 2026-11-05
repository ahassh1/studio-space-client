import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getTokenFromServer = async () => {
  const jwtToken = await auth.api.getToken({
    headers: await headers(), // Get request headers
  });

  const token = jwtToken?.token; // Extract JWT token

  return token;
};