"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const get_courses_1 = require("./controllers/get-courses");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/api/courses', get_courses_1.getCoursesController);
exports.default = app;
