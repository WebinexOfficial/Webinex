const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const WebProjectRoute= require('./routes/webProjectRoute');
const UiProjectRoute= require('./routes/uiProjectRoute');
const SeoProjectRoute= require('./routes/seoProjectRoute');
const LogoDesignProjectRoute= require('./routes/logoDesignRoute');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));
  
  app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true,
}));


app.use('/api/auth', require('./routes/auth')); // path to authRoutes.js
app.use(WebProjectRoute);
app.use(UiProjectRoute);
app.use(SeoProjectRoute);
app.use(LogoDesignProjectRoute);



app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
