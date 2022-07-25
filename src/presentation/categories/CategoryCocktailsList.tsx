import React, {Component, useEffect, useState} from 'react';
import getCategoryFiltered from "../../domain/use_cases/getCategoryFiltered";
import CategoryCocktailsItem from "./CategoryCocktailsItem";
import PropTypes from "prop-types";
import toCategoryName from "../../domain/use_cases/toCategoryName";
import CocktailInList from "../../domain/model/CocktailInList";
import {useParams} from "react-router-dom";
import Loader from "../general/Loader";

interface Props{
    categoryName?: string
}
const CategoryCocktailsList:React.FC<Props> = (props:Props)=>{
    const [cocktails, setCocktail] = useState<Array<CocktailInList>>([]);
    const {categoryParam} = useParams<string>()
    let category:string = (props.categoryName)?props.categoryName: categoryParam || "";

    const getCategory = () =>{
        getCategoryFiltered(category).then((data)=>{
            console.log(JSON.stringify(data));
            setCocktail(data);
        });
    }
    useEffect(()=>{
        getCategory();
    },[props.categoryName,categoryParam]);

    category = toCategoryName(category);
    console.log("Category - "+category);

    return (category != "")?(
        <div>
            {cocktails.map((item)=>{
                    return <CategoryCocktailsItem key={item.id}
                                                  category={category} cocktail={item}/>
                }
            )}
        </div>
    ):<Loader/>
}

export default CategoryCocktailsList;