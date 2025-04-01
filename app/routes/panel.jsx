import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  return json({ message: "Yönetim ekranına hoş geldiniz." });
}

export default function Panel() {
  const data = useLoaderData();
  return (
    <div style={{ padding: 20 }}>
      <h1>Telegram Bot Paneli</h1>
      <p>{data.message}</p>
    </div>
  );
}
