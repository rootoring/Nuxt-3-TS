<template>
    <article class=" blur">
        <img :src="img" alt="">
        <div class="content">
            <h2>{{title}}</h2>
            <p>{{description}}</p>
        </div>
    </article>
</template>

<script lang="ts">

export default{
  name:'Product',

  props:{
    title:{
      type:String,
      default:''
    },
    img:{
      type:String,
      default:''
    },
    description:{
      type:String,
      default:''
    },  
  }
}
</script>

<style lang="scss">
  article{
    display: flex;
    width: 30%;
    transition: all .5s ease-in-out;
    cursor: pointer;
    &:hover{
      transform: scale(1.1);
    }
    img{
      width: 50%;
    }
    .content{
      padding: 5px 9px;
      font-family: 'Raleway', sans-serif;

      h2{
        color:#fff;
        font-size: 26px;
        padding-bottom: 8px;
      }
      p{
        color:#fff;
        font-size: 16px;
      }
    }
  }
</style>