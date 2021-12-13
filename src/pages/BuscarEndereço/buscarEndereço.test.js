import React from "react";
import { render, fireEvent } from "@testing-library/react";

import BuscarEndereço from './index'

jest.mock("react-router-dom", () => {
    return {
      useLocation: () => ({
        pathname: "/buscarEndereço",
      }),
      Link: ({ children} ) => children,
    };
  });
  

describe("BuscarCep", () => {
    it("verificar valor do input Logradouro", () => {
      const { getByPlaceholderText} = render(<BuscarEndereço/>);
      fireEvent.change(getByPlaceholderText("Logradouro"), {
        target: { value: "rua siqueira campos" },
      });
     
       expect(getByPlaceholderText("Logradouro")).toHaveDisplayValue('rua siqueira campos');
    });
});
