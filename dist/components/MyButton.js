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
exports.MyButton = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./mybutton.css");
var MyButton = function (_a) {
    var backgroundColor = _a.backgroundColor, label = _a.label, color = _a.color, size = _a.size;
    return ((0, jsx_runtime_1.jsx)("button", __assign({ type: "button", className: "storybook-button color-".concat(color, " storybook-button--").concat(size), style: { backgroundColor: backgroundColor } }, { children: label })));
};
exports.MyButton = MyButton;
exports.default = exports.MyButton;
