import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Label, SearchSelect } from '../../../../src/Components/Forms';

const results = [
  'Android feedback',
  'Customer service feedback',
  'E-commerce feedback',
  'Feedback (Sales)',
  'Feedback (Support)'
];

class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      results
    };
  }

  handleChange = (value) => {
    if (value.length > 0) {
      this.setState({ value, results });
    } else {
      this.setState({ value, results: [] });
    }
  };

  render() {
    return (
      <div>
        <Label>SEARCH EXAMPLE</Label>
        <SearchSelect
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search or select"
          results={this.state.results}
        />
      </div>
    );
  }
}

storiesOf('Search', module)
  .addDecorator(withInfo)
  .add(
    'Select',
    () => <Story />,
    {
      info: 'SearchSelect component usage.'
    }
  );

