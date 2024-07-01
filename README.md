# Google Sheets Database

This project is a simple example of how to use Google Sheets as a database. It uses the Google Sheets API to interact with the database.

## Tutorial

- Follow this guide to setup this project from scratch: [Google Sheets Database](https://thenewstack.io/how-to-use-google-sheets-as-a-database-with-react-and-ssr/)

## Setup

> Note: You have to create a Google Cloud Platform project and enable the Google Sheets API to use this project.
>
> Also, you have to create a service account and download the JSON file with the credentials to use the Google Sheets API.

- Clone the project and install the dependencies:

```bash
npm i
```

- Create a `.env` file in the root of the project with the following content:

```bash
# TIP: You can find the GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY in the JSON file you downloaded from Google Cloud Platform in project -> service accounts -> create service account -> create key -> JSON
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=

# TIP: You can find the GOOGLE_SHEET_ID in the URL of the Google Sheet after /d/ and before /edit
GOOGLE_SHEET_ID=
```

- Run the project:

```bash
npm run dev
```

- Open your browser and go to `http://localhost:3000`
