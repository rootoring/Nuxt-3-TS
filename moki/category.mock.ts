export type typeCategory = {
  id: Number
  title:String
  productCategory:Number[]
}

export const category: typeCategory[] = [
  {
    id:0,
    title:'Game',
    productCategory:[0, 2]
  },
  {
    id:1,
    title:'Video',
    productCategory:[1]
  },
  {
    id:2,
    title:'Kill',
    productCategory:[2] 
  },
  {
    id:3,
    title:'Shop',
    productCategory:[0]
  },
]
