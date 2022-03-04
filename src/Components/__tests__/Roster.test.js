import { render, screen, cleanup } from '@testing-library/react';
import Roster from '../Roster';

afterEach (() => {
    cleanup();
})

test('test', () => {
    expect(true).toBe(true);
});

test('Should render Roster component', () => {
    render(<Roster/>);
    const rosterElement = screen.getByTestId('rosterList-1'); // syntax; finds data-testid="rosterList-1", NOT id=""
    expect(rosterElement).toBeInTheDocument();  //is the element on the DOM
    //other options...
    expect(rosterElement).toHaveTextContent('ster');
})

test('should render student name', () => {
    const student = { id:3, firstName: "Adam Marcus", grade: 3, vehicle: false };
    render(<Roster/>)
    const rosterElement = screen.getByTestId('rosterList-1');
    expect(rosterElement).toBeInTheDocument();
    expect(rosterElement).toHaveTextContent(student.firstName);
})

test('switch access', () => {

})