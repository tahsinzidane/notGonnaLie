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
cd notGonnaLie/backend
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



