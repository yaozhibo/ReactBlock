import React from 'react';

import Redirect from 'umi/redirect';
import { checkCookie } from '@/utils/cookie';

export default props => {
  if (checkCookie('user')) {
    return <Redirect to="/" />;
  } else {
    return props.children;
  }
};