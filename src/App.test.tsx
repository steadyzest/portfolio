import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("메인페이지 텍스트 포함여부 확인", () => {
  render(<App />);
  const linkElement = screen.getByText(/메인페이지/i);
  expect(linkElement).toBeInTheDocument();
});
