export default class FakeApi{
    static getRandomCocktail: Function = async ()=>{
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve(JSON.parse(cocktailStr))
            },3000);
        });
    }

    static getCocktailById: Function = async (id:string)=> {
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve(JSON.parse(cocktailStr))
            },3000)
        });
    }

    static searchByIngredient: Function = async (ingredientName:string)=>{

    }

    static getCategories: Function = async ()=>{
        return new Promise(resolve => {
            setTimeout(()=>{
                resolve(JSON.parse(categoriesStr))
            },3000)
        });
    }
}

//const categoriesStr = '{"drinks":[{"strCategory":"Ordinary Drink"},{"strCategory":"Cocktail"},{"strCategory":"Shake"},{"strCategory":"Other\\/Unknown"},{"strCategory":"Cocoa"},{"strCategory":"Shot"},{"strCategory":"Coffee \\/ Tea"},{"strCategory":"Homemade Liqueur"},{"strCategory":"Punch \\/ Party Drink"},{"strCategory":"Beer"},{"strCategory":"Soft Drink"}]}'
const categoriesStr = '{"drinks":[]}'

const cocktailStr = '{"idDrink":"16403",' +
    '"strDrink":"Black and Brown",' +
    '"strDrinkAlternate":null,' +
    '"strTags":null,' +
    '"strVideo":null,' +
    '"strCategory":"Beer",' +
    '"strIBA":null,' +
    '"strAlcoholic":"Alcoholic",' +
    '"strGlass":"Beer pilsner",' +
    '"strInstructions":"CAREFULLY to avoid explosive head formation: Pour Beer glass half full of favorite rootbeer and top off with Guinness.",' +
    '"strInstructionsES":null,' +
    '"strInstructionsDE":"Sorgf\u00e4ltig vorgehen, um eine explosive Kopfverformung zu vermeiden: Gie\u00dfen Sie ein Bierglas halb voll mit beliebten Rootbeeren und verfeinern Sie es mit Guinness.",' +
    '"strInstructionsFR":null,' +
    '"strInstructionsIT":"CON ATTENZIONE per evitare la formazione di schiuma esplosiva: versare mezzo bicchiere di birra di radice e completare con Guinness.",' +
    '"strInstructionsZH-HANS":null,' +
    '"strInstructionsZH-HANT":null,' +
    '"strDrinkThumb":"https:\\/\\/www.thecocktaildb.com\\/images\\/media\\/drink\\/wwuvxv1472668899.jpg",' +
    '"strIngredient1":"Guinness stout",' +
    '"strIngredient2":"Root beer",' +
    '"strIngredient3":null,' +
    '"strIngredient4":null,' +
    '"strIngredient5":null,' +
    '"strIngredient6":null,' +
    '"strIngredient7":null,"strIngredient8":null,"strIngredient9":null,"strIngredient10":null,"strIngredient11":null,"strIngredient12":null,"strIngredient13":null,"strIngredient14":null,"strIngredient15":null,"strMeasure1":"1\\/2 ","strMeasure2":"1\\/2 ","strMeasure3":null,"strMeasure4":null,"strMeasure5":null,"strMeasure6":null,"strMeasure7":null,"strMeasure8":null,"strMeasure9":null,"strMeasure10":null,"strMeasure11":null,"strMeasure12":null,"strMeasure13":null,"strMeasure14":null,"strMeasure15":null,' +
    '"strImageSource":null,' +
    '"strImageAttribution":null,' +
    '"strCreativeCommonsConfirmed":"No",' +
    '"dateModified":"2016-08-31 19:41:39"}';