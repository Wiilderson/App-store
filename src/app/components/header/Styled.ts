import styled from 'styled-components';
import Image from 'next/image';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0f52ba;
  padding: 1rem 10rem 1rem 10rem;
`;

export const Logo = styled.div`
  color: #ffffff;
  gap: 5px;
  display: flex;
  align-items: center;
  width: 100px;
  height: auto;
  h1 {
    font-size: 40px;
  }
  span {
    margin-top: 10px;
  }
`;

export const CartIcon = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90px;
  height: 45px;
  border-radius: 8px;
  background: #fff;
  span {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const CartModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background-color: #0f52ba;
  box-shadow: -1px 0 10px rgba(0, 0, 0, 0.1);
  //padding: 20px;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  flex-direction: column;
`;
export const CartButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  gap: 30px;

  .headCart {
    display: flex;
    justify-content: space-between;
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    align-items: center;
    button {
      width: 50px;
      height: 50px;
      background-color: #000;
      color: #fff;
      border: none;
      border-radius: 43px;
      font-size: 28px;
      font-family: var(--font-family);
      cursor: pointer;
    }
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MiniCard = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  .small-button {
    position: absolute;
    width: 21px;
    height: 21px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 43px;
    font-size: 11px;
    font-family: var(--font-family);
    cursor: pointer;
    right: -8px;
    top: -10px;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  gap: 10px;
  color: #2c2c2c;
  display: flex;
  align-items: center;
  width: 385px;
  height: 95px;
  border-radius: 8px;
  background: #fff;

  .spaceCard {
    width: 121px;
  }
`;

export const Button = styled.div`
  width: 100%;
  height: auto;
  div {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    font-family: var(--font-family);
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
  }
  button {
    font-family: var(--font-family);
    color: #fff;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    width: 100%;
    height: 100px;
    background-color: #000;
  }
`;

export const CardImage = styled(Image)`
  padding: 0 5px 0 20px;
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  span {
    font-size: 10px;
  }
  .buttons {
    display: flex;
    margin-bottom: 17px;
    button {
      width: 25px;
      height: 20px;
    }
  }
`;
