# Structures

[Methods](#methods)

---

`abstract` class **Structures**

## Methods

> Both these methods are static.
> ```js
> Structures.extend()
> Structures.get()
> ```

---

#### .extend‹K, E›(`name`, `extender`)

_Make sure to extend all classes before initializing your Manager_

> Extend the specified structure.  
> **Returns**: _E_

| Parameter  | Type            | Description                                                  |
| :--------- | :-------------- | :----------------------------------------------------------- |
| `name`     | _*K*_           | The name of the class to extend, either "player" or "socket" |
| `extender` | _[Function][6]_ | The extender function                                        |

---

#### .get‹K›(`name`)

> Get the specified structure.  
> **Returns**: _[Socket](/socket) | [Player](/player)_

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/object
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number
[4]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise
[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean
[6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/function
