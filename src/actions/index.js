//Importações Globais
import axios from 'axios';

//Importações Personalizadas
import { ITEMS } from './types';

export const searchItems = (search) => {

		return async dispatch => {
		//Recebe a Pesquisa do Blog
			axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${ search }#json`)
	      	.then((response) => {
				dispatch({
					type: ITEMS,
					payload: response.data.results
				})
	      	})
	      	.catch((error) => {
				console.log(error);
	      	});
		}

}