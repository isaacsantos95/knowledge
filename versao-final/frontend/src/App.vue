<template>
	<div id="app" :class="{'hide-menu': !isMenuVisible || !user}">
		<customHeader title="knowledge base" 
			:hideToggle="!user"
			:hideUserDropdown="!user" />
		<CustomMenu v-if="user" />
		<customLoading v-if="validatingToken" />
		<customContent v-else />
		<customFooter />
	</div>
</template>

<script>
import axios from "axios"
import { baseApiUrl, userKey } from "@/global"
import { mapState } from "vuex"
import  customHeader from "@/components/template/customHeader"
import CustomMenu from "@/components/template/CustomMenu"
import customContent from "@/components/template/customContent"
import customFooter from "@/components/template/customFooter"
import customLoading from "@/components/template/customLoading"

export default {
	name: "App",
	components: { customHeader, CustomMenu, customContent, customFooter, customLoading },
	computed: mapState(['isMenuVisible', 'user']),
	data: function() {
		return {
			validatingToken: true
		}
	},
	methods: {
		async validateToken() {
			this.validatingToken = true

			const json = localStorage.getItem(userKey)
			const userData = JSON.parse(json)
			this.$store.commit('setUser', null)

			if(!userData) {
				this.validatingToken = false
				this.$router.push({ name: 'auth' })
				return
			}

			const res = await axios.post(`${baseApiUrl}/validateToken`, userData)

			if (res.data) {
				this.$store.commit('setUser', userData)
				
				if(this.$mq === 'xs' || this.$mq === 'sm') {
					this.$store.commit('toggleMenu', false)
				}
			} else {
				localStorage.removeItem(userKey)
				this.$router.push({ name: 'auth' })
			}

			this.validatingToken = false
		}
	},
	created() {
		this.validateToken()
	}
}
</script>

<style>
	* {
		font-family: "Lato", sans-serif;
	}

	body {
		margin: 0;
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 40vh;
		display: center;
		grid-template-rows: 60px 1fr 40px;
		grid-template-columns: 10px 1fr;
		grid-template-areas:
		
			name 'customHeader'
			name 'CustomMenu customContent'
			name 'CustomMenu customFooter';
	}

	#app.hide-menu {
		grid-template-areas:
			name 'Header'
			name 'customContent'
			mame 'customFooter';
	}
</style>