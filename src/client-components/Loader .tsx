"use client";

import styled from "styled-components";

const Loader = styled.div`
    display: block;
    --height-of-loader: 4px;
    --loader-color: #0071e2;
    width: 130px;
    height: var(--height-of-loader);
  }
  
  ::before {
    content: "";
    position: absolute;
    background: var(--loader-color);
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    border-radius: 30px;
    animation: moving 1s ease-in-out infinite;
    ;
  }
  
  @keyframes moving {
    50% {
      width: 100%;
    }
  
    100% {
      width: 0;
      right: 0;
      left: unset;
    }
`;

export default Loader;
