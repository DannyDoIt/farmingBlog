// server.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const users = []; // Simulating a database for now

// Register route
app.post('/api/register', async (req, res) => {
	const { email, password } = req.body;
	const hashedPassword = await bcrypt.hash(password, 10);
	users.push({ email, password: hashedPassword });
	res.status(201).json({ message: 'User registered successfully' });
});

// Login route
app.post('/api/login', async (req, res) => {
	const { email, password } = req.body;
	const user = users.find(u => u.email === email);
	if (!user) return res.status(400).json({ message: 'User not found' });

	const isPasswordValid = await bcrypt.compare(password, user.password);
	if (!isPasswordValid) return res.status(400).json({ message: 'Invalid password' });

	const token = jwt.sign({ email }, 'your_secret_key', { expiresIn: '1h' });
	res.json({ token });
});

// Verify token route
app.get('/api/verify', (req, res) => {
	const token = req.headers['authorization'];
	if (!token) return res.status(401).json({ message: 'No token provided' });

	jwt.verify(token, 'your_secret_key', (err, decoded) => {
		if (err) return res.status(401).json({ message: 'Failed to authenticate token' });
		res.json({ email: decoded.email });
	});
});

process.on('uncaughtException', (err) => {
	console.error('There was an uncaught error', err);
	process.exit(1);
});

app.listen(9001, () => {
	console.log('Server running on port 9001');
    });