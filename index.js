
const express = require('express')
const app = express()
const port = 80

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/v1', (req, res) => {
	res.send('<script>location.href = "https://web.archive.org/web/20040402033137/https://homestarrunner.com/sbemail100.html"; </script>')
})

app.post('/api/v1/send', (req, res) => {
	var { message, to } = req.body;
	console.log("Message: " + message + " To: " + to)
	res.write("hi");
	res.end();
})

app.listen(port, () => {
  console.log(`smoothtalk hosted locally on port ${port}`)
})
