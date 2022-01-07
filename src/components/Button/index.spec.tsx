import { render } from '@testing-library/react';

import { Button } from '.';

describe('Button', () => {
  it('renders the Button component', () => {
    render(<Button label='Hello world!' />);
  });
});