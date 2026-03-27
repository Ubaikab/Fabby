import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import path from 'path';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';


// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB().catch(err => console.error("Database Connection Error:", err));
connectCloudinary();

// Middleware
app.use(express.json());

// CORS configuration - handles all subdomains and localhost
const allowedOrigins = process.env.ALLOWED_ORIGINS 
    ? process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim().toLowerCase().replace(/\/$/, '')) 
    : ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:4000'];

app.use(cors({
    origin: (origin, callback) => {
        // allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        const cleanOrigin = origin.trim().toLowerCase().replace(/\/$/, '');
        
        if (allowedOrigins.indexOf(cleanOrigin) !== -1 || allowedOrigins.includes('*') || cleanOrigin.endsWith('.onrender.com')) {
            callback(null, true);
        } else {
            console.warn(`CORS Rejected for origin: ${origin}`);
            callback(null, false);
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'token'],
    credentials: true
}));


//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("API Working");
})

app.listen(port, () => console.log('Server started on PORT : '+ port));