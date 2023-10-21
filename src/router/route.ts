import express, { Request, Response } from "express";
import { translate } from "bing-translate-api";

const router = express.Router();

router.get("/:msg/:lang", (req: Request, res: Response) => {
  let msg: string = req.params.msg;
  let lang: string = req.params.lang;

  translate(msg, null, lang)
    .then(result => {
      let translation: string = result.translation;
      res.json({ translation }); 
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: "Translation failed" });
    });
});

export default router;
