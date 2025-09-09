export interface ICardGame{
    cards:{
        items?:{
        name:string,
        id:number,
        maxLevel:string,
        maxEvolutionLevel:string,
        elixirCost:string,
        iconUrls:{
            medium:string,
            evolutionMedium:string,
        },
        rarity:string
    }[],
    supportItems:{
        id:number,
        name:string,
        maxLevel:number,
        rarity:string,
        iconUrls:{
            medium:string
        }
    }[]
}
}
    