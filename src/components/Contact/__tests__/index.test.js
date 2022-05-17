import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe('contact component', () => {
    it('renders', () => {
        render(
            <ContactForm></ContactForm>
        )
    });

    it('matches snapshot', () => {
        const { asFragment } = render(
            <ContactForm></ContactForm>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('nav elements are visible', () => {
    it('inserts text into elements', () => {
        const { getByTestId } = render(
            <ContactForm></ContactForm>
        );
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('contact')).toHaveTextContent('Contact Me');
        // eslint-disable-next-line testing-library/prefer-screen-queries
        expect(getByTestId('submit-btn')).toHaveTextContent('Submit');
    });
});