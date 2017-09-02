	import {getGithubPhofile} from './api'

     getGithubPhofile()
		.then(response => response.json())
		.catch(e => console.error('Something went wrong'))