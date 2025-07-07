import {ISpoken_language} from "@/models/ISpoken_language";

type PropsLanguageType = {
    language: ISpoken_language
}

const LanguageComponent= ({language}:PropsLanguageType) => {
    return (
        <span className={'mr-2'}>
            {language.name};

</span>
    );
};

export default LanguageComponent;