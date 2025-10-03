
import { useContext } from "react";
import MealList from "../components/MealDetail/MealsList/MealList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet, View, Text } from "react-native";

function FavoritesScreen(){
    const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter((meal)=> favoriteMealsCtx.ids.includes(meal.id));
    console.log(favoriteMeals.length);
    if(favoriteMeals.length===0){
        return (<View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>);
    }
    return <MealList items={favoriteMeals}/>;
}
export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    text:{
        fontSize: 18,
        fontWeight : 'bold',
        color: 'white'
    }
});