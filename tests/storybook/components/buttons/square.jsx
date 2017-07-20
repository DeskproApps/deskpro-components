import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'Components/Buttons';
import Icon from 'Components/Icon';

storiesOf('Buttons', module)
  .add('square', () => (
    <div>
      <div style={{ marginBottom: 10 }}>
        <Button type="square" size="small">
          <Icon name="plus" />
        </Button>&nbsp;
        <Button type="square" size="medium">
          <Icon name="plus" />
        </Button>&nbsp;
        <Button type="square" size="large">
          <Icon name="plus" />
        </Button>
      </div>
      <div>
        <Button type="square" size="small">
          <Icon name="search" />
        </Button>&nbsp;
        <Button type="square" size="medium">
          <Icon name="search" />
        </Button>&nbsp;
        <Button type="square" size="large">
          <Icon name="search" />
        </Button>
      </div>
    </div>
  )
)
;
