Icon
====
Renders an icon using the Font Awesome library.

```jsx
import { faCog, faBug, faCaretDown, faSync } from '@fortawesome/free-solid-svg-icons';

<div>
    <Icon name={faCog} />
    <Icon name={faBug} size="xsmall" />
    <Icon name={faCaretDown} rotate={180} />
    <Icon name={faSync} spin={true} />
</div>
```

### Props

**name={string}**  
Class of the icon from the [Font Awesome icon list](http://fontawesome.io/icons/).

**size={string}**  
Displays the icon at the given size. Possible values are: 'xsmall', 'small', 'medium', 'large', and 'xlarge'.

**rotate={number}**  
Rotates the icon. Possible values are 0, 90, 180, and 270.

**spin={bool}**  
Spins the icon using CSS animation.

**fixedWidth={bool}**  
Set icons at a fixed width. Great to use when different icon widths throw off alignment. Especially useful in things like nav lists & list groups.

### Examples

```jsx
import React from 'react';
import { render } from 'react-dom';
import Icon from 'Components/Icon';

const App = ({spin}) => (
    <div>
        <Icon name={faSync} spin={spin} />
    </div>
);

render(<App />, document.getElementById('mount'));
```
