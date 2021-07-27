import React from "react";
import { TableRow, TableCell } from "@material-ui/core";
import styled from "styled-components";

const Beer = ({ name, image, abv }) => {
  return (
    <TableRow>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">
        <BeerImg src={image} alt="" />
      </TableCell>
      <TableCell align="center">{abv}</TableCell>
    </TableRow>
  );
};

const BeerImg = styled.img`
  height: 200px;
  margin: 0 30px 30px;
`;

export default Beer;
