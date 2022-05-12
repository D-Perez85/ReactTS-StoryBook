import MyButton from "../../components/MyButton";
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'ui/MyButton',
    component: MyButton,
    argTypes: {
        backgroundColor: {control: 'color'}
      },
}as ComponentMeta<typeof MyButton>

const Template: ComponentStory<typeof MyButton>  = (args) => <MyButton {...args}/>

export const Basic = Template.bind({})
Basic.args = {
    label: 'Touch Me',
    color: 'primary', 
    size: 'small'
 }
export const Primary = Template.bind({}); 
Primary.args = {
    label: 'Primary',
    color: 'secondary',
    size: 'medium',
    
}
export const Secondary = Template.bind({}); 
Secondary.args = {
    label: ' Secondary ',
    color: 'tertiary',
    size: 'large',

}


