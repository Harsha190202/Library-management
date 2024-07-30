import { auth } from "@/Lib/auth";
import React from "react";

export default async function IndexPage() {
  const session = await auth();
  console.log(session);
  return <div>Render</div>;
}
