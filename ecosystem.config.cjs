// pm2 de atilax-web en el VPS 144. Topes de reinicio obligatorios (README-144 de balancin): un fallo de
// arranque no puede convertirse en un bucle que sature la caja que comparte con el ERP de ACE.
module.exports = {
  apps: [
    {
      name: "atilax-web",
      cwd: "/var/proyectos/atilax_web",
      script: "node_modules/next/dist/bin/next",
      args: "start -H 127.0.0.1 -p 3020",
      env: { NODE_ENV: "production", NEXT_TELEMETRY_DISABLED: "1" },
      max_restarts: 10, // 10 caídas seguidas antes de min_uptime ⇒ pm2 lo deja en «errored»
      min_uptime: "30s",
      exp_backoff_restart_delay: 2000, // 2 s, 3 s, 4,5 s… entre reintentos
      max_memory_restart: "512M",
    },
  ],
};
