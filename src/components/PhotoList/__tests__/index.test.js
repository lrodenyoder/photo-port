import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

afterEach(cleanup);

describe('photolist is rendering', () => {
    it('renders', () => {
        render(<PhotoList></PhotoList>)
    });

    it('match snapshot', () => {
        const { asFragment } = render(<PhotoList />);
        expect(asFragment()).toMatchSnapshot()
    });
});