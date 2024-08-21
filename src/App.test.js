import { render, screen, waitFor } from '@testing-library/react';
import App from './App';  // or the relevant component file

test('renders learn react link', async () => {
  render(<App />);
  await waitFor(() => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});

test('renders learn react link', async () => {
  render(<App />);
  await waitFor(() => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});

test('renders learn react link', async () => {
  render(<App />);
  await waitFor(() => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});