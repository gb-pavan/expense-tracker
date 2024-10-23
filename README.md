# expense-tracker


# To register a user

path: http://localhost:3000/auth/register

method: POST

body: {
  "username": "john",
  "password": "secret"
}

output: user registered


# To login a user

path: http://localhost:3000/auth/login

method: POST 

body: {
  "username": "john",
  "password": "secret"
}

output: you will get the token

# Post a transaction

path : http://localhost:3000/transactions

method: POST

Authorization : select Authorization tab, select bearer token Auth Type,paste the token key in the right


body:{
  "type": "expense",
  "category": "Food",
  "amount": 150.50,
  "date": "2024-10-22",
  "description": "Lunch"
}

# Get all the transactions

path : http://localhost:3000/transactions

method: GET

Authorization : select Authorization tab, select bearer token Auth Type,paste the token key in the right


# Get summary

path : http://localhost:3000/transactions/summary?startDate=2024-05-24&endDate=2024-10-22

method: GET





