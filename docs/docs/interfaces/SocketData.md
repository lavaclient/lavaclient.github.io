# SocketData

| Property |               Type                | Optional | Description                        |
| :------- | :-------------------------------: | :------: | :--------------------------------- |
| id       |           _[string][1]_           |    ❌    | The identifier to use              |
| host     |           _[string][1]_           |    ❌    | The hostname of the lavalink node. |
| password |           _[string][1]_           |    ❌    | The password of the lavalink node. |
| port     |   _[number][2] \| [string][1]_    |    ❌    | The port of the lavalink node.     |
| options  | _[SocketOptions](/SocketOptions)_ |    ✔️    | Options for the socket.            |

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number
