import React from 'react';

import { Container, TabContent, LinkTab } from './styles';

function Tab({ tabName, Icon, path }) {
  return (
    <Container>
      <TabContent>
        {Icon}
        <LinkTab
          to={{
            pathname: path,
          }}
        >
          {tabName}
        </LinkTab>
      </TabContent>
    </Container>
  );
}

export default Tab;
