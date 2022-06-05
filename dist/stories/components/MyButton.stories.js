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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secondary = exports.Primary = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyButton_1 = __importDefault(require("../../components/MyButton"));
exports.default = {
    title: 'ui/MyButton',
    component: MyButton_1.default,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyButton_1.default, __assign({}, args)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: 'Touch Me',
    color: 'primary',
    size: 'small'
};
exports.Primary = Template.bind({});
exports.Primary.args = {
    label: 'Primary',
    color: 'secondary',
    size: 'medium',
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: ' Secondary ',
    color: 'tertiary',
    size: 'large',
};
