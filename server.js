const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

if(process.env.NODE_ENV === 'production') {
	app.get('/*', (req, res) => {
		res.sendFile(path.join(__dirname, 'dist', 'index.html'))
	})
}

app.listen(8081, () => {
	console.log('App is listening')
})