// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
app: {
    head: {
      title: 'My App',
      meta: [
            { charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' }
        ],
	  link: [
			{ rel: 'icon', type: 'image/x-icon', href: '.././static/FH_logo.ico' },
			{ rel: "preconnect", href: "https://fonts.googleapis.com" },
			{ rel: "preconnect", href: "https://fonts.gstatic.com"},
			{ href:"https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap", rel: "stylesheet"},
	   ],
		script: [
	      	{ hid: 'avesome', crossorigin:'anonymous', src: 'https://kit.fontawesome.com/c0a8ee813d.js', defer: true }
	    ]  
},     
	        
	    },

css: ['@/assets/scss/main.scss'],

buildModules: ['@pinia/nuxt',],
})
