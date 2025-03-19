# Not Gonna Lie - Backend Setup

Follow this step-by-step guide to get the backend up and running.

## Prerequisites

Make sure you have **Node.js** installed on your machine. You can download it from [here](https://nodejs.org/).

## Setup

### 1. Clone the Repository
Clone the project to your local machine:

```bash
git clone https://github.com/tahsinzidane/notGonnaLie.git
```

### 2. Navigate to the Project Directory
Change to the project directory:

```bash
cd notGonnaLie
```

### 3. Install Dependencies
Install the required dependencies by running:

```bash
npm install
```

### 4. Set Up Environment Variables
Create an `.env` file to store the environment variables:

```bash
new-Item .env
```

### 5. Configure the `.env` File
Open the `.env` file:

```bash
code .env
```

Inside the `.env` file, add the following configuration:

```
PORT=3000
DB_URI=mongodb://localhost:27017/not-gonna-lie
```

Make sure to update any configuration values to match your setup.

### 6. Start the Project
Now you’re ready to run the project. Start the backend by typing:

```bash
npm run start
```

The server will start running, and your project should be up and running!

---

## API Endpoints

### 1. **POST** `/register-user`
This endpoint creates a new user account by asking for a **username** and **age**.

#### Request Body:
```json
{
  "username": "speed",
  "age": 20
}
```

#### Response:
If successful, the response will return the **userId** URL:
```json
{
    "message": "User saved successfully",
    "user": {
        "username": "speed",
        "age": 20,
        "_id": "67db29f4855fc3c9277612d9",
        "createdAt": "2025-03-19T20:32:52.826Z",
        "updatedAt": "2025-03-19T20:32:52.826Z",
        "__v": 0
    },
    "askLink": "http://localhost:<port number>/ask/67db29f4855fc3c9277612d9"
}
```

### 2. **POST** `/submit-question/:userId`
This endpoint allows a user to submit a question. The **userId** is passed as a parameter in the URL.

#### Request Body:
```json
{
  "question": "What is your favorite color?"
}
```

#### Response:
The question is saved to the database and a confirmation message is returned:
```json
{
    "message": "Your question has been successfully submitted!",
    "questionData": {
        "userId": "67db29f4855fc3c9277612d9",
        "question": "what is your favorite color ? ",
        "date": "2025-03-19T20:36:13.415Z"
    }
}
```