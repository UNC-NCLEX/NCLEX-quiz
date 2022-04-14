# nclex-quiz

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Connecting to Supabase

Supabase is an open-source alternative to Firebase that provides a backend SQL database for storing and retrieving data that the NCLEX Quiz will use. To connect your development environment to Supabase to make requests to the database, please carefully follow the following instructions.

### Setting up your .env file

A .env file is a text configuration file that lets you set environment variables for your development environment. For example, in src/supabase.js, the values of supabaseUrl and supabaseAnonKey are pulled from the .env file, and these credentials are used to create a client and securely connect to the database. 

**NOTE: The .env file stores sensitive credentials, and as such, must never be uploaded to GitHub or shared publicly. The values of environment variables such as the ANON Key or the Supabase URL must go in the .env file, and if you were to reference these values throughout the project, you must use the variable names from .env rather than the values themselves.**

Your .env file must be located in the root directory of your project, and the file's contents should look like this:

```
VUE_APP_SUPABASE_URL=YOUR_SUPABASE_URL
VUE_APP_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

You can retrieve the URL and ANON Key from Supabase. All you need to do is replace "YOUR_SUPABASE_URL" and "YOUR_SUPABASE_ANON_KEY" with their corresponding values (do not wrap the values in quotation marks).

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
