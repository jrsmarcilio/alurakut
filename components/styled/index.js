import styled from "styled-components";

export const Box = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background: #fff;
  border-radius: 8px;
`;

export const Container = styled.div`
  width: 70vw;
  height: 100%;

  display: flex;
  margin: 0 auto;

  justify-content: space-between;
  flex-direction: row;
`;

export const Nav = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  aside {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .primaryText {
    color: ${({ theme }) => theme.primaryText};
    font-weight: 700;
  }
  .tertiaryText {
    color: ${({ theme }) => theme.tertiaryText};
    font-weight: 700;
    font-size: 16px;
  }

  .divider {
    position: static;
    width: 2px;
    height: 18px;

    background: #5292c1;

    flex: none;
    flex-grow: 0;
    margin: 0px 15px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    line-height: 14px;

    text-decoration: none;
    color: ${({ theme }) => theme.primaryText};

    padding: 12px 10px;
  }
`;

export const NavBar = styled.div`
  width: 100%;
  height: 55px;

  background: ${({ theme }) => theme.headerElement};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.aside`
  position: relative;
  width: 100px;
  height: 34px;

  background: ${({ theme }) => theme.backgroundgSecondary};
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 27px;

  svg {
    margin-left: -18px;
    width: 100%;
    height: 18px;
  }
`;

export const SearchInput = styled.input`
  width: 182px;
  height: 34px;

  background: ${({ theme }) => theme.anotherElement};
  border-radius: 34px;

  border: none;

  ::placeholder {
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    text-align: center;
    color: #fff;

    border-radius: 34px;
  }
`;

export const Search = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 27px;

  ::before {
    content: "";
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 16px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill-rule='evenodd'%3E%3Cpath d='M15.6211 13.6851L11.9426 10.0063C12.5676 9.01126 12.9303 7.8352 12.9303 6.57307C12.9303 3.00232 10.0356 0.108032 6.46503 0.108032C2.89442 0.108032 0 3.00232 0 6.57307C0 10.1439 2.89429 13.038 6.46503 13.038C7.83856 13.038 9.1108 12.6085 10.1577 11.8789L13.7924 15.5139C14.045 15.7662 14.3761 15.8918 14.7068 15.8918C15.0378 15.8918 15.3685 15.7662 15.6215 15.5139C16.1262 15.0086 16.1262 14.1902 15.6211 13.6851ZM6.46503 10.9434C4.05162 10.9434 2.09498 8.98688 2.09498 6.57333C2.09498 4.15979 4.05162 2.20315 6.46503 2.20315C8.87858 2.20315 10.8351 4.15979 10.8351 6.57333C10.8351 8.98688 8.87858 10.9434 6.46503 10.9434Z' fill='white'%3E%3C/path%3E%3C/svg%3E")
      center / contain no-repeat;
  }
`;

export const AsideMenu = styled.aside`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.secundaryText};

  label {
    display: flex;
    align-items: center;

    padding: 8px 0px;

    svg {
      margin-right: 7px;
    }

    :hover {
      background: #f4f4f4;
      border-radius: 8px;
      padding: 8px;
    }
  }

  h4 {
    margin: 0 0 10px 0;
    padding: 0;
    color: #999;
  }

  .img-perfil {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 26px;
  }

  .text-perfil {
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }

  .divider-hor {
    position: static;
    width: 165px;
    height: 2px;

    background: #ecf2fa;

    margin: 15px auto;

    flex: none;
    flex-grow: 0;
    margin: 8px 0vpx;
  }

  .secundatyText {
    font-size: 16px;
    font-weight: bold;

    color: ${({ theme }) => theme.secundaryText};

    margin-bottom: 7px;
  }

  .status-perfil {
    font-size: 14px;
    line-height: 134.53%;
    color: #999;
    width: 61px;
  }
`;

/**
 * Styled Box Headers
 */

export const Headers = styled.div``;

export const Title = styled.h3`
  margin: 0;

  font-weight: normal;
  font-size: 30px;
  line-height: 33px;
  color: #333333;
  padding: 25px 0 0 25px;
`;

export const SubTitle = styled.span`
  padding: 25px;
  font-family: Verdana, sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #999;

  strong {
    font-size: 16px;
    font-family: Verdana, sans-serif;
    font-weight: 700;
  }
`;
