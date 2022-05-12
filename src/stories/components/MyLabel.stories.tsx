import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Ui/MyLabel',
    component: MyLabel, 
} as ComponentMeta<typeof MyLabel>
 
const Template: ComponentStory<typeof MyLabel> =(args) => <MyLabel {...args}/>
export const Basic = Template.bind({});
//Config por default en Basic storie
Basic.args = {
    size: 'normal', 
    label: 'Holaaa'
}
export const AllCaps = Template.bind({});








