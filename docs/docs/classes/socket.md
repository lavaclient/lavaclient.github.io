# Socket

> [Properties](#properties) &bull; [Methods](#methods)

---

class **Socket**

```js
new Socket(manager, data);
```

| Name <img width=1000/> | Type <img width=1000/>                 |
| :--------------------- | :------------------------------------- |
| `manager`              | [Manager](/manager)                    |
| `data`                 | [SocketData](../interfaces/SocketData) |

## Properties

---

#### .manager

> The manager this socket belongs to  
> **Type**: `readonly` _[Manager](/manager)_

---

#### .id

> This sockets identifier.  
> **Type**: `readonly` _[string][1]_

---

#### .host

> The host of the lavalink node we're connecting to.  
> **Type**: `readonly` _[string][1]_

---

#### .port

> The port of the lavalink node we're connecting to.  
> **Type**: `readonly` _[string][1]_

---

#### .password

> The authorization being used when connecting.  
> **Type**: `readonly` _[string][1]_

---

#### .remaining

> Total remaining tries this socket has for reconnecting  
> **Type**: _[number][2]_

---

#### .resumeKey

> The resume key being used for resuming.  
> **Type**: _[string][1] \| undefined_

---

#### .stats

> The stats sent by lavalink.  
> **Type**: _[NodeStats][21]_

---

#### .options

> The options the user provided.  
> **Type**: _[SocketOptions](../interfaces/SocketOptions)_

#### .ws

> The websocket instance for this socket.  
> **Type**: `protected` _[WebSocket](https://github.com/websockets/ws)_

---

#### .queue

> The queue for messages.  
> **Type**: _[Sendable](../interfaces/Sendable)\[]_

## Accessors

---

#### .connected

> Whether this socket is connected.  
> **Type**: `getter` _[boolean][5]_

## Methods

---

#### .toString()

> Get the string representation of this socket.  
> **Returns**: _[string][1]_

#### .send(`data`)

> Send data to lavalink.  
> **Returns**: _[Promise](4)‹void›_

| Parameter | Type  | Description         |
| :-------- | :---- | :------------------ |
| `key`     | _any_ | Data to send (JSON) |

---

#### .configureResuming(`[key]`)

> Configure Lavalink Resuming.  
> **Returns**: _[Promise](4)‹void›_

| Parameter | Type          | Description    |
| :-------- | :------------ | :------------- |
| `key`     | _[string][1]_ | The resume key |

---

#### .connect(`[userId]`)

> Connects to the lavalink websocket.  
> **Returns**: _[this](#socket)_

| Name     | Type          | Description         |
| :------- | :------------ | :------------------ |
| `userId` | _[string][1]_ | The user id to use. |

---

#### `protected` .flush()

> Flushes out the send queue.  
> **Returns**: _[Promise](4)‹void›_

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise
[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean

[10]: https://discord.com/developers/docs/topics/voice-connections#retrieving-voice-server-information-gateway-voice-state-update-example
[11]: https://discord.com/developers/docs/topics/voice-connections#retrieving-voice-server-information-example-voice-server-update-payload
[21]: https://github.com/Frederikam/Lavalink/blob/master/IMPLEMENTATION.md#incoming-messages
