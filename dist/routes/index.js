"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("../config/config");
const test_route_1 = __importDefault(require("./api/test.route"));
const router = express_1.default.Router();
router.use(`${config_1.API_PREFIX_PATH}/test`, test_route_1.default);
exports.default = router;
