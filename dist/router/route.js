"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bing_translate_api_1 = require("bing-translate-api");
const router = express_1.default.Router();
router.get("/:msg/:lang", (req, res) => {
    let msg = req.params.msg;
    let lang = req.params.lang;
    (0, bing_translate_api_1.translate)(msg, null, lang)
        .then(result => {
        let translation = result.translation;
        res.json({ translation });
    })
        .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Translation failed" });
    });
});
exports.default = router;
