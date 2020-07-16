# Player

> [Properties](#properties) &bull; [Methods](#methods)

---

class **Player** extends [EventEmitter](https://nodejs.org/api/events.html#events_class_eventemitter)

```js
new Player(socket, guild);
```

| Parameter <img width=1000/> | Type <img width=1000/> |
| :-------------------------- | :--------------------- |
| `socket`                    | [Socket](/socket)       |
| `guild`                     | [string][1]            |

## Properties

---

#### .socket

> The lavalink node that controls this player.  
> **Type**: `readonly` _[Socket](/socket)_

---

#### .guild

> The id of the guild this player belongs to.  
> **Type**: `readonly` _[string][1]_

---

#### .channel

> The id of the voice channel this player is connected to.  
> **Type**: _[string][1]_

---

#### .paused

> Whether this player is paused or not.  
> **Type**: _[boolean][5]_

---

#### .track

> The current playing track.  
> **Type**: _[string](1)_

---

#### .playing

> Whether this player is playing.  
> **Type**: _[boolean][5]_

---

#### .timestamp

> The unix timestamp of when this player started playing music.  
> **Type**: _[number][3]_

---

#### .position

> The current track position in milliseconds.  
> **Type**: _[number][3]_

---

#### .volume

> The current volume.  
> **Type**: _[number][3]_

---

#### .equalizer

> Equalizer bands this player is using.  
> **Type**: _[EqualizerBand]()[]_

## Accessors

---

#### .connected

> Whether this player is connected to a voice channel.  
> **Type**: _[boolean][5]_

---

#### .manager

> The player manager.  
> **Type**: _[Manager](./manager)_

## Methods

---

#### .connect(`channel`, `[options = {}]`)

> Connects to the specified voice channel.  
> **Returns**: _[Promise][5]‹[Player](#)›_

| Parameter | Type                                              | Description                                    |
| :-------- | :------------------------------------------------ | :--------------------------------------------- |
| `channel` | [string][1] \| [Object][4]                        | The channel id or channel object to connect to |
| `options` | [ConnectOptions](../interfaces/ConnectOptions.md) | Options for self mute and self deaf            |

---

#### .disconnect(`[remove = false]`)

> Disconnect from the voice channel.  
> **Returns**: _[Promise][4]‹[Player](#)›_

| Parameter | Type         | Description                                       |
| :-------- | :----------- | :------------------------------------------------ |
| `remove`  | [boolean][4] | If you want to remove the player from the manager |

---

#### .play(`track`)

> Plays the specified base64 track.  
> **Returns**: _[Promise][4]‹void›_

| Parameter | Type                                        | Description                         |
| :-------- | :------------------------------------------ | :---------------------------------- |
| `track`   | [string][1]                                 | The base64 lavaplayer track to play |
| `options` | [PlayOptions](../interfaces/PlayOptions.md) | Options for playing the track       |

---

#### .setVolume(`[volume = 100]`)

> Change the volume of the player. You can omit the volume to reset back to 100  
> **Returns**: _[Promise][4]‹void›_

| Parameter | Type        | Description        |
| :-------- | :---------- | :----------------- |
| `volume`  | [number][3] | The volume to use. |

---

#### .pause(`[state = true]`)

> Change the paused state of this player. `true` to pause, `false` to resume.  
> **Returns**: _[Promise][4]‹void›_

| Parameter | Type         | Description                               |
| :-------- | :----------- | :---------------------------------------- |
| `state`   | [boolean][5] | `true` for paused, `false` for not paused |

---

#### .resume()

> Resumes the player if paused.  
> **Returns**: _[Promise][4]‹void›_

---

#### .stop()

> Stops the current playing track  
> **Returns**: _[Promise][5]‹void›_

---

#### .seek(`position`)

> Seek to a position in the current song.  
> **Returns**: _[Promise][5]‹void›_

| Parameter  | Type        | Description             |
| :--------- | :---------- | :---------------------- |
| `position` | [number][3] | The position to seek to |

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise
[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean

[10]: https://discord.com/developers/docs/topics/voice-connections#retrieving-voice-server-information-gateway-voice-state-update-example
[11]: https://discord.com/developers/docs/topics/voice-connections#retrieving-voice-server-information-example-voice-server-update-payload