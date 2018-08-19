//Importações Personalizadas
import { ITEMS } from '../actions/types';

const INITIAL_STATE = {
    items: []
};

export default (state = INITIAL_STATE, action) => {
    
    switch(action.type) {
    	case ITEMS:
    		return { items: action.payload }
        default:
            return state;
    }
}