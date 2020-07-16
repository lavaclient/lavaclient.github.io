# ManagerOptions

| Property             |               Type                | Optional | Description                                                   |
| :------------------- | :-------------------------------: | :------: | :------------------------------------------------------------ |
| defaultSocketOptions | _[SocketOptions](/SocketOptions)_ |    ✔️    | Default options for lavalink sockets                          |
| plugins              |  _[Plugin](../classes/plugin)[]_  |    ✔️    | An array of plugins to use                                    |
| send                 |  _[SendFunction](/SendFunction)_  |    ❌    | A function for sending voice updates to discord               |
| shards               |           _[number][2]_           |    ✔️    | The number of shards your bot is using (must be 1 or greater) |
| userId               |           _[string][1]_           |    ✔️    | Pre-define the client user id (not recommended)               |

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number
