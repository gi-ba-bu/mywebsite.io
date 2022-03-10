import {screen} from '@testing-library/react';
import { render } from 'react-dom';
import Home from '.';

describe('About', () => {
    render(<Home />)
    // expect(screen.getByRole('heading').textContent).toContain('Welcome');
    expect(screen.getByRole('heading').textContent).toContain(/Welcome/);
}
)
