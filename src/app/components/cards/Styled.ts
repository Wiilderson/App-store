import styled from 'styled-components';
import Image from 'next/image';

export const CardContainer = styled.div`
  width: 218px;
  height: 290px;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-family);
  box-shadow: 2px 3px 9px rgba(0, 0, 0, 0.2);
`;

export const CardImage = styled(Image)`
  padding-top: 20px;
`;

export const NamePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
  p {
    margin: 0;
    font-size: 16px;
    padding: 0 0 0 10px;
  }

  div {
    padding-right: 10px;
    span {
      font-size: 15px;
      font-weight: 700;
      border-radius: 5px;
      background: #373737;
      width: 64px;
      height: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
`;

export const Description = styled.div`
  width: 200px;
  padding-bottom: 8px;
  p {
    color: #2c2c2c;
    font-size: 10px;
    font-style: normal;
    font-weight: 300;
    line-height: 12px;
  }
`;

export const Button = styled.button`
  font-family: var(--font-family);
  width: 100%;
  height: auto;
  border-radius: 0 0 8px 8px;
  border: none;
  cursor: pointer;
  background-color: #0f52ba;
  color: #fff;
  padding: 10px 0;
`;
