"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFontBG = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'Ui/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        colorFuente: { control: 'color' },
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
exports.Basic = Template.bind({});
//Config por default en Basic storie
exports.Basic.args = {
    size: 'h1',
    label: 'Texto de Prueba',
    allCaps: false,
    color: 'primary',
    // colorFuente: '#ece415'
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: 'normal',
    allCaps: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: 'h2',
    color: 'secondary'
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: 'h3',
    color: 'tertiary'
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    size: 'h1',
    label: 'Color Font',
    colorFuente: '#ece415'
};
exports.CustomFontBG = Template.bind({});
exports.CustomFontBG.args = {
    label: 'Bg-Color',
    size: 'h1',
    colorFuente: 'white',
    backgroundColor: 'black'
};
