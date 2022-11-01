import { defineStore } from 'pinia'

import {category, typeCategory }from '.././moki/category.mock.ts'


export const useStoreCategory = defineStore({
  id: 'Category',
  state: () =>({
 	categories:[] as typeCategory,
  }),
  getters:{
	// getCatego({ category }:typeCategory){
	// 	return category
	// }
  },

  actions: {
  	fetchCategoty(){

  		this.categories = category
  		console.log(typeof category)
  	}
}
})