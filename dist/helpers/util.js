"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger = __importStar(require("./logger"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLogger = (moduleName) => {
    const moduleLogger = logger.initializeLogger(moduleName);
    return moduleLogger;
};
exports.getLogger = getLogger;
