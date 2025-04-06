
#!/bin/bash

echo "Setting up backend (Flask)..."
cd server
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt &
cd ..

echo "Setting up frontend (React)..."
cd client
npm install &
cd ..

wait

echo "Starting backend..."
cd server
source venv/bin/activate
python app.py &
cd ..

echo "Starting frontend..."
cd client
npm run dev
