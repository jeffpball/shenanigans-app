# **Shenanigans Espresso App**

<br>
<p>Shenanigans Espresso App was created for local business owners of Shenanigans Espresso, Bridgett and Mel, located in Everett, WA. Bridgett and Mel's goals are to make life easier for their customers by having a mobile app built so they could put their coffee and food order in ahead of time, pay through the app, pickup at a desired time, and go about their day seamlessly and efficiently.</p>

[Heroku Link](https://shenanigans-espresso-app.herokuapp.com/ "Shenanigans-Espresso-App - Heroku")

## Getting Started

<p>To run this on your own system, you will need the following software:</p>

- VSCode or another code compiler
- Command Line software such as GitBash (or the one in VSCode works just fine)

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/download "VSCode") - download latest version here
- [GitBash](https://git-scm.com/downloads "GitBash") - download latest version here
- [Shenanigans Espresso Repo]( github.com:jeffpball/shenanigans-app.git "Shenanigans Espresso") - Cloning the repo

<br>

### Installing

**_Cloning the repo_**

<p>cd into the folder you would like the repo to be stored on, then type into Gitbash or any command line terminal: </p>

```

git clone  github.com:jeffpball/shenanigans-app.git

```

1. Press enter and provide passphrase, if prompted.
1. Type this next command in your command line terminal to open the folder in VSCode:

```

code .

```

**_Downloading the Dependencies_**

<p>You will need to first download all of the dependency packages in the <strong>package.json</strong> in two different parts of the directory:</p>

- at the root
- in the client folder

<p>This can be achieved through the command line:</p>

_For root directory_

```

cd shenanigans-app 
cd Shenanigans-Espresso-App

```

<p> press enter</p>

```

npm i --save

```

<p> press enter</p>

```

cd shenanigans-app/Shenanigans-Espresso-App/client

```

<p> press enter</p>

```

npm i --save

```

<p> press enter</p>
<br>

**_Creating the build folder for React_**

```

cd shenanigans-app/Shenanigans-Espresso-App/client

```

<p> press enter</p>

```

npm run build

```

<p> press enter</p>
<br>

//can probably delete this section

**_Cloudinary API keys_**

<p> You will need to obtain your own API keys for uploading and storing media assets.</p>

[Cloudinary](https://cloudinary.com/users/register/free "Cloudinary API") - sign up here!

 <p>You will need to create a .env folder in the root directory. Your API keys should be stored in this format:</p>

```

# Cloudinary API keys
cloudinaryAPIKey = [Your API key]
cloudinaryAPISecret = [Your APISecret]
cloudinaryName = [Your cloudinaryName]

```

**_Starting the dev environment_**

<p>To run the front-end and back-end concurrently, type the following into your command line terminal: </p>

```
npm run dev
```

<p>Press enter</p>
<p>Congratulations, you are now ready to run Shenanigans Espresso App!</p>
<br>

//edit screenshots to reflect Shenanigans-Espresso
## Screenshots

**Home Page**
![Home Page](client/public/images/home_page_final.png)
<br>
<br>
**Signup Page**
![Signup Page](client/public/images/signup_page_final.png)
<br>
<br>
**Login Page**
![Login Page](client/public/images/login_page_final.png)
<br>
<br>

//edit/update built with as you are building
## Built With

<hr><br>

- [React](https://reactjs.org/ "React") - Component-based JavaScript library for front-end dev
- [MongoDB](https://www.mongodb.com/ "MongoDB") - back end dev/data storage
- [Passport](https://www.npmjs.com/package/passport "Google") - user authentication
  <br>

//edit job decriptions
## Authors

<hr><br>

- [Jeff Ball](https://github.com/jeffpball) - _Back End_ - <p>Worked on backend with a focus on user login. Using MongoDB, Passport, and Redux to allow the user to sign up/login and remain signed in to the site.</p>

- [Chelsey MacNeill](https://github.com/chelseymacneill) - _Back End_ - <p>Worked on backend with a focus on user login. Using MongoDB, Passport, and Redux to allow the user to sign up/login and remain signed in to the site.</p>

- [Loann Pham](https://github.com/loannpham87) - _Front End_ - <p>Initial setup of React Native folder structure. UI/UX design for all front-end pages. Creating components with React for front-end pages. And a sick Readme.</p>

- [Jonah Severn](https://github.com/jsevern94) - _Back End_ - <p>contributions</p>


