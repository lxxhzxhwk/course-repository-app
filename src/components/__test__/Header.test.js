import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

test("renders Header Component", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const homeNav = screen.getByText(/Home/);
  expect(homeNav).toBeInTheDocument();

  const coursesNav = screen.getByText(/Courses/);
  expect(coursesNav).toBeInTheDocument();

  const authorsNav = screen.getByText(/Authors/);
  expect(authorsNav).toBeInTheDocument();

  const aboutNav = screen.getByText(/About/);
  expect(aboutNav).toBeInTheDocument();
});
