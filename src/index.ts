
const port = process.env.PORT || 4000;
const nodeEnv = process.env.NODE_ENV || "not set";

console.log(`🚀 Server starting in ${nodeEnv} mode`);
console.log(`📡 Port: ${port}`);
console.log(`🌍 Environment variables loaded:`, {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL ? "***configured***" : "not set",
});
