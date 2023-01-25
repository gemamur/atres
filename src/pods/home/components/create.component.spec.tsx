import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { CreateSite } from "./create.component";
import '@testing-library/jest-dom';


describe('Create Component specs', ()=>{
    it('should display a button', () => {
        //Arrange

        const props = {
            onCreateSite: jest.fn(),
        }
        
        //Act

        render(<CreateSite {...props} />);

        const buttonElement = screen.getByRole('button');
        
        
        //Assert
        expect(buttonElement).toBeInTheDocument();
        
    });


    
})