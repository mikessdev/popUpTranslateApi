import { ITranslateRepository, TranslateRepository } from "../Repository/TranslateRepository";
import { Translate } from "../SharedCode/Interface/Translate"
import { TranslationOrder } from "../SharedCode/Interface/TranslationOrder";

export interface ITranslateUseCase {
    getTranslateByScraping: (translationOrder: TranslationOrder) => Promise<Translate>
}

export class TranslateUseCase implements ITranslateUseCase {
    private readonly repository: ITranslateRepository = new TranslateRepository();

    public async getTranslateByScraping(translationOrder: TranslationOrder): Promise<Translate> {
        const translate = await this.repository.getTranslateByScraping(translationOrder);
        return {
            result: `${translate}`
        } as Translate;
    }
}