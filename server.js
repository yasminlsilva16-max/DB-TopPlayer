import dontenv from "dontenv"
dontenv.config();
import app from "./src/app.js"

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
console.log('Servidor rodando http://localhost:5000')

})
