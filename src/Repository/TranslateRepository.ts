import puppeteer from "puppeteer";
import { TranslateRepositoryError } from "../SharedCode/Error/RepositoryError/TranslateError"
import { TranslationOrder } from "../SharedCode/Interface/TranslationOrder";

export interface ITranslateRepository{
    getTranslateByScraping: (translationOrder: TranslationOrder) => Promise<string>
}

export class TranslateRepository implements ITranslateRepository{
    public async getTranslateByScraping(translationOrder: TranslationOrder): 
    Promise<string> {
        let url = this.createUrl(translationOrder);

        try {
        const browser = await puppeteer.launch({
            headless: true,
        }); 

        const page = await browser.newPage();
        await page.goto(url);
        await page.waitForTimeout(1000);
        
        const response = await page.evaluate(() => {
            return document.getElementsByClassName('ryNqvb')[0].innerText;
        });

        browser.close();
        return response;

        } catch (error) {
            throw  new TranslateRepositoryError(error.message);
        }
    }

    private createUrl(translationOrder: TranslationOrder): string {
        return `https://translate.google.com.br/?sl=${translationOrder.detectLinguage}&tl=${translationOrder.translateTo}&text=${translationOrder.text}&op=translate`;
    }
}