import * as spacing from '../../design-patterns/spacing/_vars';
import { fontSizeSm, fontSizeMd, fontSizeBase } from '../typography/_vars';

module.exports = {
  buttonBorderWidth: '1px',
  buttonBorderRadius: '2px',
  buttonSizes: [{
    id: 'sm',
    paddingV: 0,
    paddingH: spacing.componentPaddingHSm,
    fontSize: fontSizeSm,
  }, {
    id: 'md',
    paddingV: spacing.componentPaddingVSm,
    paddingH: spacing.componentPaddingHSm,
    fontSize: fontSizeMd,
    default: true,
  }, {
    id: 'lg',
    paddingV: spacing.componentPaddingVBase,
    paddingH: spacing.componentPaddingHBase,
    fontSize: fontSizeBase,
  }],
};