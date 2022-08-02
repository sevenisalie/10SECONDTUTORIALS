import express, {Express, Request, Response} from "express"
import dotenv from "dotenv"
dotenv.config()

const app: Express = express()
app.use(express.json())

app.get("/", (req, res)=> {
    res.send(
        {

        }
    )
})

const PORT = process.env.PORT || 8090 //for prod


app.listen(
    PORT,
    () => console.log(`SERVER RUNNING ON PORT ${PORT}`)
)