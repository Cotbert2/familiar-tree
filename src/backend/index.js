import app from './app.js';
import { PORT } from './config.js';
import connectDB from './dbHandler.js';

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));

connectDB();

