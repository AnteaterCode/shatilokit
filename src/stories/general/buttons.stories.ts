// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {CommonModule} from '@angular/common';
import { ShButton, ShButtonModule } from '../../app/components/button/public-api';

import { moduleMetadata } from '@storybook/angular/dist/client/preview/types';

// https://github.com/storybookjs/storybook/issues/8920
// https://github.com/sparkdesignsystem/spark-design-system/blob/33a1be8b54100c57a8bb252669f4cb042a1afb7e/angular/projects/spark-angular/src/lib/directives/inputs/sprk-button/sprk-button.stories.ts

const modules = {
  imports: [
    ShButtonModule,
  ],
};

export default {
  title: 'general/Button',
  component: ShButton
} as Meta;


export const primary = () => ({
  moduleMetadata: modules,
  template: `
    <button shButton> Button </button>
  `,
});
