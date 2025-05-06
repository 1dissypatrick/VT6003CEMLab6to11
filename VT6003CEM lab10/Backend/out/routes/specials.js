"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const koa_router_1 = __importDefault(require("koa-router"));
const auth_1 = require("../controllers/auth");
const router = new koa_router_1.default({ prefix: '/api/v1' });
exports.router = router;
router.get("/private", auth_1.basicAuth, privateAPI);
// Add a protected route that requires authentication
function privateAPI(ctx, next) {
    const user = ctx.state.user;
    //  console.log('user=> '+JSON.stringify(user))
    //  console.log('status=> '+ctx.status)
    ctx.body = { message: `Hello ${user.user.username} you registered on ${user.user.dateregistered}` };
}
