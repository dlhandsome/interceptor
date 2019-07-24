/**
 * interceptor v0.1.0
 * (c) 2019 dlhandsome
 * @license MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.WeCropper = {}));
}(this, function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) { throw t[1]; } return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) { throw new TypeError("Generator is already executing."); }
            while (_) { try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) { return t; }
                if (y = 0, t) { op = [op[0] & 2, t.value]; }
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) { _.ops.pop(); }
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; } }
            if (op[0] & 5) { throw op[1]; } return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    var Interceptor = (function () {
        function Interceptor() {
            this._interceptor = {};
        }
        Interceptor.register = function (api, provider) {
            var i = new Interceptor();
            return i.inject(api, provider);
        };
        Interceptor.prototype.inject = function (api, provider) {
            var self = this;
            var _interceptor = self._interceptor;
            var _interceptorMethods = Object.keys(provider);
            Object
                .keys(api)
                .forEach(function (method) {
                Object.defineProperty(_interceptor, method, {
                    get: function () {
                        var _this = this;
                        return function (obj) { return __awaiter(_this, void 0, void 0, function () {
                            var err_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        obj = obj || {};
                                        if (!(_interceptorMethods.indexOf(method) > -1)) { return [3, 4]; }
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4, self.configInject(obj, provider[method])];
                                    case 2:
                                        obj = _a.sent();
                                        return [3, 4];
                                    case 3:
                                        err_1 = _a.sent();
                                        throw new Error(err_1);
                                    case 4: return [2, api[method](obj)];
                                }
                            });
                        }); };
                    }
                });
            });
            return _interceptor;
        };
        Interceptor.prototype.configInject = function (obj, option) {
            return __awaiter(this, void 0, void 0, function () {
                var _interceptor;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _interceptor = this._interceptor;
                            if (!option.config) { return [3, 2]; }
                            return [4, option.config.call(_interceptor, obj)];
                        case 1:
                            obj = _a.sent();
                            _a.label = 2;
                        case 2: return [2, obj];
                    }
                });
            });
        };
        return Interceptor;
    }());

    exports.Interceptor = Interceptor;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
