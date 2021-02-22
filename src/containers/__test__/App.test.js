import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders App component", () => {
  render(<App />);
});

describe("App Layout renders", () => {
  test("renders Search component", () => {
    render(<App />);

    expect(screen.getByText(/Pluralsight/)).toBeInTheDocument();
  });
});
