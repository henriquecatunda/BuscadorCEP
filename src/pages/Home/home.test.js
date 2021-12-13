import React from "react";
import {render,fireEvent,waitFor} from "@testing-library/react";
import Home from './index'
import {BrowserRouter} from  'react-router-dom';


describe("Home", () => {
    it("Deve conter um botão Buscar CEP", () => {
        const { getByRole} = render(
            <BrowserRouter>
               <Home />
            </BrowserRouter>
        );

        const buttonIncrement =  fireEvent.change(getByRole("button", {
            name: /Buscar CEP/i,
          }));

       waitFor(() => { expect(buttonIncrement).toBeInTheDocument();})
    })

    it("Deve conter um botão Buscar Endereço", () => {
        const { getByRole} = render(
            <BrowserRouter>
               <Home />
            </BrowserRouter>
        );

        const buttonIncrement =  fireEvent.change(getByRole("button", {
            name: /Buscar Endereço/i,
          }));

       waitFor(() => { expect(buttonIncrement).toBeInTheDocument();})
    })
});
