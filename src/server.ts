import { app } from "./app";
import { GetCards } from "./data/cards/get-cards";
import { env } from "./env/envSchema";

const start = async () => {
  try {
    await app.listen({ port: Number(env.PORT), host: "0.0.0.0" });
    console.log(`🚀 Server running on http://localhost:${env.PORT}`);

    // chamada de teste assíncrona
    const cards = await GetCards();
    console.log("Cards:", cards);

  } catch (err) {
    console.error("❌ Erro ao iniciar servidor:", err);
    process.exit(1);
  }
};

start();
