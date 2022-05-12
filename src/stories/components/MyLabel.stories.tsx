import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Ui/MyLabel',
    component: MyLabel, 
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
    }
} as ComponentMeta<typeof MyLabel>
 
const Template: ComponentStory<typeof MyLabel> =(args) => <MyLabel {...args}/>

export const Basic = Template.bind({});
//Config por default en Basic storie
Basic.args = {
    size: 'normal', 
    label: 'Texto de Prueba',
    allCaps: false,
    color: 'primary'
}
export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true, 
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'h2',
    color: 'secondary' 
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'h3',
    color: 'tertiary' 
}









