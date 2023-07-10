import express from 'express'
import { Router, Request, Response } from 'express';
import { Translate } from './SharedCode/Interface/Translate';
import { ITranslateUseCase, TranslateUseCase } from './UseCase/TranslateUseCase';
import { TranslationOrder } from './SharedCode/Interface/TranslationOrder';

const app = express();
const route = Router();

app.use(express.json())
app.use(route)
app.listen(3333, () => 'server running on port 3333')

const translate: ITranslateUseCase = new TranslateUseCase;

const response = async (JsonParams: any): Promise<Translate> => {
  const translationOrder = {
    ...JSON.parse(JsonParams)
  } as TranslationOrder;
  return await translate.getTranslateByScraping(translationOrder); 
}

route.get('/', async (req: Request, res: Response) => {
  res.json(await response(req.query.translationOrder))
})