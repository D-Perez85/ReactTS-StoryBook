import { MyLabel } from '../../components/MyLabel';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Ui/MyLabel',
    component: MyLabel, 
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        colorFuente:{control: 'color'},
    }
} as ComponentMeta<typeof MyLabel>
 
const Template: ComponentStory<typeof MyLabel> =(args) => <MyLabel {...args}/>

export const Basic = Template.bind({});
//Config por default en Basic storie
Basic.args = {
    size: 'h1', 
    label: 'Texto de Prueba',
    allCaps: false,
    color: 'primary',
    // colorFuente: '#ece415'
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


export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    label: 'Color Font',
    colorFuente: '#ece415'
}






