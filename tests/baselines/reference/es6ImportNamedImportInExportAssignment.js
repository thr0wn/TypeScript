//// [tests/cases/compiler/es6ImportNamedImportInExportAssignment.ts] ////

//// [es6ImportNamedImportInExportAssignment_0.ts]

export var a = 10;

//// [es6ImportNamedImportInExportAssignment_1.ts]
import { a } from "./es6ImportNamedImportInExportAssignment_0";
export = a;

//// [es6ImportNamedImportInExportAssignment_0.js]
exports.a = 10;
//// [es6ImportNamedImportInExportAssignment_1.js]
var es6ImportNamedImportInExportAssignment_0_1 = require("./es6ImportNamedImportInExportAssignment_0");
module.exports = es6ImportNamedImportInExportAssignment_0_1.a;


//// [es6ImportNamedImportInExportAssignment_0.d.ts]
export declare var a: number;
//// [es6ImportNamedImportInExportAssignment_1.d.ts]
import { a } from "./es6ImportNamedImportInExportAssignment_0";
export = a;
