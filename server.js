const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// 5. Start the server and listen for requests
app.listen(PORT, () => {
    console.log(`Server is running live at http://localhost:${PORT}`);
});