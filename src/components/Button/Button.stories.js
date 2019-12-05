import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Button } from './Button';

const stories = storiesOf('components/Button', module);
stories.addDecorator(withKnobs);

const defaultText = 'Click Me';
stories.add('default', () => <Button text={text('text', defaultText)} />);
