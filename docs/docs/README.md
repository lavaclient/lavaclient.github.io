# Getting Started

## Installation

> node.js v12 or newer needed.

```sh
npm install lavaclient
# or
yarn add lavaclient
```

## Usage

```ts
import LavaClient from "lavaclient";

const nodes = [
  {
    id: "My Node",
    host: "localhost",
    port: 3000,
    password: "lavaclient-is-amazing"
  }
]

const manager = new LavaClient.Manager(nodes, {
  send(id, payload) {
    sendPayloadToDiscord()
    // check out our guides for an eris and discord.js examples.
  }
});

await manager.init("your client id.");

// Use these two methods when receiving voice state and server updates.
await manager.stateUpdate(<update>);
await manager.serverUpdate(<update>);

```

[discord]: https://discordapp.com/api/guilds/696355996657909790/embed.png
[codacy]: https://api.codacy.com/project/badge/Grade/fe049eb85ee74900ae764fc5af6a6299
[version]: https://img.shields.io/npm/v/lavaclient.svg?maxAge=3600

---

[MeLike2D](https://melike2d.me/) &copy; 2020
