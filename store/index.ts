import { defineStore } from 'pinia'

import productType from './../types/products.type.ts'

import {category} from '.././moki/category.mock.ts'

const student= [
	{
		id:0,
		img:'jpg',
		title:'Game',
		description:'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum '
	},
	{
		id:1,
		img:'jpg',
		title:'LIjer',
		description:'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum '
	},
	{
		id:2,
		img:'jpg',
		title:'tehnolo',
		description:'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum '
	},	
]

export const useStore = defineStore({
  id: 'Products',
  state: () =>({

 	product:[] as productType,
  defaultProduts: [] as productType,

  }),
  getters:{
	getProducts({ product }:productType){
		return product
	}
  },

  actions: {
  	fetchAllProduct(){
  		this.defaultProduts = student
      this.product = this.defaultProduts
  	},
	fetchCategoryProduct(categoryId:Number){
	
		this.product.length = 0
		for(let i of category){
			console.log(1, i)
			if(i.id === categoryId){
				console.log(2, i.id, categoryId, i.id == categoryId)
				for(let e of student){
					console.log(3, this.defaultProduts)
					for(let p of i.productCategory){
						console.log
						if(p === e.id){
							this.product.push(e)
						}
					}
				}
			}
		}
	}
}
})