import { createStore } from 'redux'
import toggleFavorites from './Reducers/favoriteReducer'

export default createStore(toggleFavorites)