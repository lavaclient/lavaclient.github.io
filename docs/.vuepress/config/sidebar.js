module.exports = {
  "/guide/": [
    {
      title: "Guide",
      collapsable: false,
      children: ["", "plugins", "players", "setup"],
    },
  ],
  "/docs/": [
    "",
    {
      title: "Classes",
      collapsable: false,
      children: [
        "/docs/classes/manager",
        "/docs/classes/player",
        "/docs/classes/plugin",
        "/docs/classes/socket",
        "/docs/classes/structures",
      ],
    },
    {
      title: "Interfaces",
      collapsable: false,
      children: [
        "/docs/interfaces/ConnectOptions",
        "/docs/interfaces/ManagerOptions",
        "/docs/interfaces/PlayOptions",
        "/docs/interfaces/Sendable",
        "/docs/interfaces/SocketData",
        "/docs/interfaces/SocketOptions",
        "/docs/interfaces/SendFunction",
      ],
    },
  ],
};
