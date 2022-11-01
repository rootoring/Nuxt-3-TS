<template>
	<header class="blur">
		<div class="contaner">
			<div class="glitch-wrapper">
				<nuxt-link to="/" class="glitch">LARAPTXE</nuxt-link>
			</div>
			<nav>
				<ul>
					<li v-for="{id, title} in storeCat.categories" :key="id" >
						<nuxt-link :to="`/category/${id}`">
							{{title}}
						</nuxt-link>
						
					</li>
				</ul>
				<div class="burger">
					<span></span>
					<span></span>
					<span></span>
				</div>
		  </nav>
		</div>  
	</header>
</template>							

<script >
	import {useStoreCategory} from '@/store/category.ts'
	import { ref, onMounted  } from 'vue'
export default{

	name:"HeaderApp",
	setup(){
		const storeCat = useStoreCategory()
		onMounted (()=>{storeCat.fetchCategoty()})

		return{
			storeCat
		}
	}
}
</script>

<style lang="scss" scoped>
	header{
		display: flex;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		box-shadow: 0 0 1rem 0 rgba(41, 39, 39, 0.2);
	  border-radius: 3px;
		padding:10px 5px;
		justify-content: center;
		.contaner{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			.glitch-wrapper {
			   display: flex;
			   align-items: center;
			   justify-content: center;
			   text-align: center;
			   	.glitch {
					   position: relative;
					   font-size: 30px;
					   font-weight: 700;
					   line-height: 1.2;
					   color: #fff;
					   letter-spacing: 5px;
					   z-index: 1;
					}

					.glitch:before {
					   content: attr(data-glitch);
					   position: absolute;
					   top: 0;
					   left: -2px;
					   text-shadow: -1px 0 #00ffff;
					   width: 100%;
					   color: #fff;
					   background-color: #222;
					   overflow: hidden;
					   clip: rect(0, 900px, 0, 0);
					}

					.glitch:after {
					   content: attr(data-glitch);
					   position: absolute;
					   top: 0;
					   left: 2px;
					   text-shadow: 1px 0 #ff00ff;
					   width: 100%;
					   color: #fff;
					   background-color: #222;
					   overflow: hidden;
					   clip: rect(0, 900px, 0, 0);
					}
			}




			nav{
				display: flex;

				ul{
					display: flex;

					li+li{margin-left: 5px;}
					li{
						font-family: 'Comforter Brush', cursive;
						padding: 5px;
						font-size: 28px;
						transition: .5s all;
						&:hover{
							border-bottom: 1px solid #ddd;
						}
					}
				}
			}
		}
	}
</style>