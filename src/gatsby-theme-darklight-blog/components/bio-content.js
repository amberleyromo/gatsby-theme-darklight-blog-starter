import React, { Fragment } from "react";
import { Styled } from "theme-ui";

/**
 * This component shadows the default theme bio content
 */

export default () => (
  <Fragment>
    Words by{" "}
    <Styled.a href="https://twitter.com/amber1ey">Amberley Romo</Styled.a>.
    <br />
    Albeit irregularly. ¯\_(ツ)_/¯.
  </Fragment>
);
