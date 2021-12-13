import React from "react";
import { render, fireEvent } from "@testing-library/react";

import BuscarCep from './index'

jest.mock("react-router-dom", () => {
    return {
      useLocation: () => ({
        pathname: "/buscarCEP",
      }),
      Link: ({ children} ) => children,
    };
  });
  

describe("BuscarCep", () => {
    it("verificar valor do input CEP", () => {
      const { getByPlaceholderText} = render(<BuscarCep/>);
      fireEvent.change(getByPlaceholderText("CEP *"), {
        target: { value: "12345678" },
      });
     
       expect(getByPlaceholderText("CEP *")).toHaveDisplayValue('12345678');
    });
});






