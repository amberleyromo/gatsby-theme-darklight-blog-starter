import React, { Fragment } from "react";
import { Styled } from "theme-ui";

/**
 * This component shadows the default theme footer content
 */

export default () => (
  <Fragment>
    <Styled.a
      href="https://twitter.com/amber1ey"
      target="_blank"
      rel="noopener noreferrer"
    >
      twitter
    </Styled.a>
    {` `}
    &bull;{` `}
    <Styled.a
      href="https://github.com/amberleyromo"
      target="_blank"
      rel="noopener noreferrer"
    >
      github
    </Styled.a>
  </Fragment>
);
