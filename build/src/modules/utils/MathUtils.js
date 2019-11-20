"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log_1 = require("../../modules/log");
exports.round = (input, scale = 2) => {
    if (input == null) {
        log_1.logger.warn('Warning rounding undefined/null number');
        return input;
    }
    else {
        try {
            return Number(input.toFixed(scale));
        }
        catch (e) {
            log_1.logger.error(`Error while round data: ${input}`);
            return 0;
        }
    }
};
//# sourceMappingURL=MathUtils.js.map