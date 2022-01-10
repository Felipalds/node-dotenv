# Dotenv properties repository
---
Dotenv is the tool used to orchestrate the environment variables of a project; <br>
<em>npm i dotenv</em> to install the library. <br>
All the informations in the .env file is going to be in a "key-value" format
---
Example:
APP_NAME=Name of the application <br>
DATABASE_NAME=Name of the database <br>
SECRET_KEY=The secret key
---
1) The uppercase for the keys is a convention, not a rule;
2) Keys cannot have whitespace;
3) The values will always be a "string" type;
4) The values CAN have a whitespace, but it will be done a "trim";
5) Could exist a key without a value. It will be a empty string.
---
To initialize the dotenv, you need to require the lib: <br>
<em>require('dotenv/config')</em> <br>
Otherwise, it will be returned <em>undefined</em>
Then, just do: <br>
const VARIABLE = (process.env.KEY_NAME)
---
## Best praticies:
1) Always put your .env file into your .gitignore;
2) Create a *.env.example* file for generic informations.

## Production praticies: ##
You can change the dotenv.config base path by adding a NODE_ENV: <br>
1) 
<em>require('dotenv').config({ <br>
    path: process.env.NODE_ENV === "develop" ? ".env.example" : ".env" <br>
}) <br>
</em>
2) Call your application this way: NODE_ENV=your_env node app.js
