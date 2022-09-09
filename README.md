# React Bootstrap Avatar

The Avatar component which can display the person's image, initials, or an icon, and can be either circular or square.


## Installation

```bash
npm install --save @xterr/react-bootstrap-avatar
```

or:

```bash
yarn add @xterr/react-bootstrap-avatar
```

## Usage

To import Avatar:

```js
import { Avatar } from '@xterr/react-bootstrap-avatar';
```

### Examples

```jsx
<Avatar name="Miguel Garcia" />
<Avatar size={72} name="Mona Kane" image="./MonaKane.jpg" />
<Avatar shape="square" icon={<IDBadgeIcon />} />
```

Displaying a badge:

```jsx
<Avatar name="Allan Munger" badge={<PresenceBadge status="busy">} />
```

With active state indication:

```jsx
<Avatar name="Daisy Phillips" active={true} activeAppearance="ring-shadow" />
<Avatar name="Robin Counts" active={false} activeAppearance="ring-shadow" />
```

## License

[MIT License](http://opensource.org/licenses/MIT)
