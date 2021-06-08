"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var helmet_1 = __importDefault(require("helmet"));
dotenv_1.default.config();
var port = process.env.port || 4000;
var app = express_1.default();
app.use(helmet_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.json({ message: 'from index api' });
    // res.statusCode = 200
    // res.send('OK')
});
app.listen(port, function () {
    console.log("Server is running on port: " + port);
});
//# sourceMappingURL=index.js.map