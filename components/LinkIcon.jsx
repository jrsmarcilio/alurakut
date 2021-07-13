import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 29px;
  height: 14px;

  font-size: 12px;
  line-height: 14px;

  color: #2e7bb4;
/*
  ::before {
    background: url(${require(`../assets/Icons/${name}.svg`)});
  } */
`;

const LinkStyled = styled.p`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: papayawhip;
  color: palevioletred;
`;

const Icon = styled.svg`
  flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  ${Link}:hover & {
    fill: rebeccapurple;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  line-height: 1.2;

  &::before {
    content: "◀";
    margin: 0 10px;
  }
`;

const LinkIcon = (name = "GoSearch", Href = "/") => {
  return (
    <Link>
      <Icon viewBox="0 0 20 20">
        <path d="M10 15h8c1 0 2-1 2-2V3c0-1-1-2-2-2H2C1 1 0 2 0 3v10c0 1 1 2 2 2h4v4l4-4zM5 7h2v2H5V7zm4 0h2v2H9V7zm4 0h2v2h-2V7z" />
      </Icon>
      <Label>{name} style!</Label>
    </Link>
  );
};

export default LinkIcon;
