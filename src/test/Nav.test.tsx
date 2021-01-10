import { fireEvent, render, screen } from '@testing-library/react';
import NavMock from "./NavMock"
import '@testing-library/jest-dom/extend-expect'

test('nav bar interactions', async () => {
  render(<NavMock />);
  fireEvent.click(screen.getByText("Immersive"))
  expect(screen.getByText("Captivating")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Compare"))
  expect(screen.getByText("Associate")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Simple"))
  expect(screen.getByText("Easy")).toBeInTheDocument();
});
