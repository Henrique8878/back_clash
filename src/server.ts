import { app } from "./app";
import { env } from "./env/envSchema";

const start = async () => {
  try {
    await app.listen({ port: Number(env.PORT)});
    console.log(`🚀 Server running on http://localhost:${env.PORT}`);

  } catch (err) {
    console.error("❌ Erro ao iniciar servidor:", err);
    process.exit(1);
  }
};

start();
