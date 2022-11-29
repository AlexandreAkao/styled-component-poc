// @ts-ignore
import { DivStyled, SpanStyled } from "@ambevtech/components";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: blueviolet;
`;

export default function Root(props) {
  return (
    <Container>
      <DivStyled>
        <SpanStyled>aaaaa</SpanStyled>
      </DivStyled>
    </Container>
  );
}
