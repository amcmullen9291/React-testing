import { render, screen, cleanup } from '@testing-library/react';
import Roster from '../Roster';
import renderer from 'react-test-renderer';

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
    const student = { id:6, firstName: "Adam Marcus", grade: 3, vehicle: "No" };
    render(<Roster student={student}/>)
    const rosterElement = screen.getByTestId('rosterList-1');
    expect(rosterElement).toBeInTheDocument();
    expect(rosterElement).toHaveTextContent(student.firstName);
})

it('renders correctly', () => {

    let student = {id: 7, firstName: "Mark Paul", grade: 10, vehicle: "No"};
    const tree = renderer
      .create(<Roster student={student}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
    console.log(tree);
  });