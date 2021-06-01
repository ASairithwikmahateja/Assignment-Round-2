"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controllers/index.controller");
const router = express_1.Router();
const express_2 = __importDefault(require("express"));
const app = express_2.default();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
// const swaggerOptions = {
//     defination:{
//         openapi: '3.0.0',
//         info:{
//             title: 'Employee Management API',
//             version: '1.0.0',
//             description: 'Employe Api for employee management',
//             contact:{
//                 name: 'sairithwik',
//                 email: 'asrmt@gmail.com'
//             },
//             servers:["http://localhost:3000"]
//         }
//     },
//     apis:["intex.ts"] 
// }
// const swaggerDocs=swaggerJSDoc(swaggerOptions);
// app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));
// app.use(express.json());
// /**
//  * @swagger
//  * definitions:
//  *  users:
//  *   type: object
//  *   properties:
//  *    name:
//  *     type: string
//  *     description: name of the team
//  *     example: 'javscript'
//  *    email:
//  *     type: string
//  *     description: email of the team
//  *     example: 'javascript@whizpath.com'
//  */
// /**
//   * @swagger
//   * /users:
//   *  post:
//   *   summary: create users
//   *   description: create employee for the organisation
//   *   requestBody:
//   *    content:
//   *     application/json:
//   *      schema:
//   *       $ref: '#/definitions/users'
//   *   responses:
//   *    200:
//   *     description: employee created succesfully
//   *    500:
//   *     description: failure in creating employee
//   */
router.get('/test', (req, res) => res.send('hello world'));
router.get('/users', index_controller_1.getUsers);
router.get('/users/:id', index_controller_1.getUserById);
router.post('/users', index_controller_1.createUser);
router.put('/users/:id', index_controller_1.updateUser);
router.delete('/users/:id', index_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=app.js.map