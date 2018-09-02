# StringRoller.js

### Demo

[https://amitad16.github.io/StringChangeStyle/](https://amitad16.github.io/StringChangeStyle/)

### Dependencies

No dependacies! Written in plain javascript.

### Syntax

```js
StringChange(selector, { finalText: Some string }).play();
```

### Use

```html
<p id='stringRoller'>What is this?</p>
<button type='button' id='roll'>Roll It</button>
```

```js
window.onload = () => {
  let rollBtn = document.querySelector("button#roll");
  rollBtn.addEventListener("click", () => {
    StringChange("#stringRoller", {
      finalText: "This is StringRoller.js"
    }).play();
  });
};
```

### Full Example

```html
<html>
<head>
	<title>StringRoller.js</title>
</head>
<body>
	<p id='stringRoller'>What is this?</p>
	<button type='button' id='roll'>Roll It</button>

	<script src="./src/stringRoller.js"></script>
	<script>
		window.onload = () => {
			let rollBtn = document.querySelector("button#roll");
			rollBtn.addEventListener("click", () => {
				StringRoller('#stringRoller', { finalText: "This is StringRoller.js" }).roll();
			});
		}
	</script>
</body>
</html>
```

### Options

```js
{
  // Mandatory options
  finalText: 'Some text', // String to change to
}
```

### Licence

Licensed under the MIT license.
