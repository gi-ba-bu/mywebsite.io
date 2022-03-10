import {screen} from '@testing-library/react';
import About from './';

describe('About', () => {
    render(<About />)
    expect(screen.getByRole('heading').textContent).toContain(/About us/);
}

)
