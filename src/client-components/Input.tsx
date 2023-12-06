"use client";

import styled from "styled-components";

const Input = styled.input`
    display: block;
    font-family: inherit;
    color: rgb(17 24 39);
    padding: 10px;
    border-radius: 0.375rem;
    width: 30%;
    margin-bottom: 10px;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: #e5e7eb;
    box-shadow: inset 0 0 0 0px #fff;
    
    &:focus,&:focus-visible {
        border-color: #38bdf8;
        border-right-color: #059669;
        -webkit-background-clip: text;
    }
`;

export default Input;
