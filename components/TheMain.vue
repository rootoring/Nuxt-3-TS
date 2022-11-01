<template>
<main>
    <TheProduct v-for="({title, img, description} , index) in store.getProducts" :title="title"  :img="img" :description="description"/>
</main>
</template>

<script lang="ts" setup >
 import {useStore} from '@/store'

  const store = useStore() 
  const route = useRoute()

   onMounted (()=>{
    if(route.params.id){     
       store.fetchCategoryProduct(+route.params.id)
    }else{
      store.fetchAllProduct();
    }
  })


</script>

<style>
main{
  padding: 0 30px;
  width: 100%;
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
}
</style>