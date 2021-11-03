const app = require("./main")
const db = require('./db/db');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
	
});
