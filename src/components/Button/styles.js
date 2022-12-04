import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background: #565656;
  border-radius: 22px;
  position: relative;

  color: #fff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  cursor: pointer;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      min-width: 167px;
      height: 33px;

      background: #e4105d;

      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
`; /*traduzindo essa parte, esse botão vai receber uma prop, 
essa prop foi desestruturada e a propriedade 'variant' exposta. 
Foi feito um teste lógico com if ternário nessa prop, se for 
verdadeira ele executa essa mudança no CSS*/
