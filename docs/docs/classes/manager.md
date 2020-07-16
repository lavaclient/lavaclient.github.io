# Manager

> [Properties](#properties) &bull; [Methods](#methods)

---

class **Manager** extends [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)

```js
new Manager(nodes, options);
```

**Parameters:**

| Name <img width=1000/> | Type <img width=1000/>                           | Description <img width=1000/>      |
| :--------------------- | :----------------------------------------------- | :--------------------------------- |
| `nodes`                | _[SocketData](../interfaces/SocketData)[]_       | An array of sockets to connect to. |
| `options`              | _[ManagerOptions](../interfaces/ManagerOptions)_ |                                    |

## Properties

---

#### .sockets

> A map of connected\* sockets.  
> **Type**: `readonly` _Map<[string][1], [Socket](/socket)›_

---

#### .players

> The map of players  
> **Type**: `readonly` _Map<[string][1], [Player](/player)›_

---

#### .options

> The options this manager was created with.  
> **Type**: _[ManagerOptions](../interfaces/ManagerOptions.md)_

---

#### .userId

> The client's user id.  
> **Type**: _[string][1]_

---

#### .send

> A send method for sending voice state updates to discord.  
> **Type**: _(`id`: [string][1], `payload`: [Object][2]) => any_

---

#### .shards

> The number of shards the client is running on.  
> **Type**: _[number][3]_

## Accessors

---

#### .ideal

> An array of ideal sockets. Used for load balancing  
> **Type**: _[Socket](/socket.md)[]_

## Methods

---

#### .init(`[userId]`)

> Initiate the manager. Connects to all given lavalink hosts.  
> **Returns**: _[Promise][4]‹void›_

| Parameter | Type          | Description        |
| :-------- | :------------ | :----------------- |
| `userId`  | _[string][1]_ | The client user id |

---

#### .use(`plugin`)

> Register a plugin for use.  
> **Returns**: _[Manager](/manager)_

| Parameter | Type                | Description             |
| :-------- | :------------------ | :---------------------- |
| `plugin`  | _[Plugin](/plugin)_ | The plugin to register. |

---

#### .serverUpdate(`update`)

> Used for providing voice server updates to lavalink.  
> **Returns**: _[Promise][4]‹void›_

| Parameter | Type                | Description                              |
| :-------- | :------------------ | :--------------------------------------- |
| `update`  | _[VoiceServer](11)_ | The voice server update sent by Discord. |

---

#### .stateUpdate(`update`)

> Used for providing voice state updates to lavalink.  
> **Returns**: _[Promise][4]‹void›_

| Parameter | Type               | Description                             |
| :-------- | :----------------- | :-------------------------------------- |
| `update`  | _[VoiceState](10)_ | The voice state update sent by Discord. |

---

#### .create(`guild`)

> Create a player.  
> **Returns**: _[Promise][4]‹[Player](/player)›_

| Parameter | Type                           | Description                   |
| :-------- | :----------------------------- | :---------------------------- |
| `guild`   | _[string][1]_ \| _[Object][2]_ | The guild this player is for. |

<br />

#### .destroy(`guild`)

> Destroys a player and leaves the connected voice channel.  
> **Returns**: _[Promise][4]‹[boolean][5]›_

| Parameter | Type                           | Description                            |
| :-------- | :----------------------------- | :------------------------------------- |
| `guild`   | _[string][1]_ \| _[Object][2]_ | The guild id of the player to destroy. |

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise
[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean
[10]: https://discord.com/developers/docs/topics/voice-connections#retrieving-voice-server-information-gateway-voice-state-update-example
[11]: https://discord.com/developers/docs/topics/voice-connections#retrieving-voice-server-information-example-voice-server-update-payload
