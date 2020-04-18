/*
 * Sidebar Messages
 *
 * This contains all the text for the Sidebar component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Sidebar';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'home',
  },
  manage: {
    id: `${scope}.manage`,
    defaultMessage: 'manage',
  },
  configure: {
    id: `${scope}.configure`,
    defaultMessage: 'configure',
  },
  learning: {
    id: `${scope}.learning`,
    defaultMessage: 'learning',
  },
});
