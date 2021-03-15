class Project {
  constructor(id, title, tech, link, github, desc, images, type) {
    this.id = id;
    this.title = title;
    this.tech = tech;
    this.pageLink = link;
    this.github = github;
    this.description = desc;
    this.images = images.map(img => `/project-images${img}`);
    this.isWebsite = type;
  }
}

const images = (n, path) =>
  Array(n)
    .fill(1)
    .map((x, i) => `${path}${i + x}.jpg`);

const wizImages = images(12, "/wizard/wizafy");
const aweImages = images(4, "/awesome/awesome");
const vaultImages = images(4, "/vault/vault");
const cdnImages = images(3, "/cdn/cdn");
const recipeImages = images(3, "/imageRecipe/recipe");
const regexImages = images(8, "/regexjs/regex");
const memesterImages = images(6, "/memester/meme");
const fusionImages = images(5, "/fusion/fusion");
const vortexImages = images(5, "/vortex/vortex");

const tech1 = ["react", "spotify api"];
const tech2 = ["react native"];
const tech3 = ["react"];
const tech4 = ["vue", "framework 7", "cordova"];
const tech5 = ["vue", "vuetify", "firebase"];
const tech6 = ["javascript", "sass"];
const tech7 = ["react native", "kotlin", "redux"];
const tech8 = ["react", "firebase", "google vision"];
const tech9 = ["vue", "framework 7", "cordova"];

const projectsData = [
  new Project(
    "Wizafy",
    "Wizafy",
    tech1,
    "https://wizafy.netlify.app",
    "https://github.com/SyntappZ/wizafy-sample",
    `Wizafy is spotify playlist generator but has many more features such as search, explore, add and remove playlists, albums and songs, it has a 
    few different ways to generate a playlist such as generate from a song or from genres and also add attributes to tune the playlist to your 
    liking and if you don’t like a song in the playlist you can reroll it until you find one to your liking.
    
    I plan to work on this more in the
    future with continued updates to make it better, if i knew about next at the time i would of made this app with it so i could get better seo on it by 
    having it server side, maybe i will refurbish it at a later time.

    I learnt a lot about react making this site, hooks and functional components make it such pleasure to work with and now after working with react
    in my last few projects i feel i understand react more than vue now, i didnt use redux for this app i decided to use useReducer and useContext
    for my state management and seems to work fine for now.
    `,

    wizImages,
    true
  ),
  new Project(
    "Vortex_Player",
    "Vortex Player",
    tech2,
    "https://play.google.com/store/apps/details?id=com.vortexplayer",
    "https://github.com/SyntappZ/vortex-mp3-player",
    `This app is outdated will be upgraded to new version shortly.
    
    This is my first react native project and the biggest project i have made so far, making this app i learn a lot about optimization and avoiding memory leaks,
     there are a couple problems with this app that i have found which i just cannot fix yet, one being that getting track metadata takes a long time, i read this
     is due to the react native bridge so that is unavoidable at the moment. The library i used has a batch reciever but it is not working at this moment in time...
     read more on github.
       
        `,

    vortexImages,
    false
  ),
  new Project(
    "Cdn_Javascript",
    "CDN Javascript",
    tech3,
    "https://cdn-javascript.netlify.com/",
    "https://github.com/SyntappZ/cdn-javascript",
    `This is a javascript cdn database, it has a live search, random, sort and favorites functions, the favorites save to local storage. There is a quick
     copy button and also a button that goes to the repo of the cdn so you can get more information.
        `,

    cdnImages,
    true
  ),
  new Project(
    "Memester",
    "memester",
    tech4,
    "https://play.google.com/store/apps/details?id=syntappz.memester.fm7",
    "https://github.com/SyntappZ/memester",
    `I made Memester with framwork 7 and vue it is a meme search and share app for android with lazyLoad images with masonary layout 
    and has related tags images too and pressing the tag will load more images of that tag name and you can also save images to your favorites.`,

    memesterImages,
    false
  ),

  new Project(
    "The_Vault",
    "the vault",
    tech5,
    "https://vue-password-manager.web.app/",
    "https://github.com/SyntappZ/the-vault",
    `The vault is a password manager made with vue and vuetify, it can store passwords or notes and you can add,  delete, edit both,
     the password manager has a strength indicator and a generator so you can always have a stong password stored and add them to favorites
      and even filter between strengths or favorites to find your passwords easier. for testing use this email and password - test@test.com - Test1234`,

    vaultImages,
    true
  ),
  new Project(
    "Awesome_Recipes",
    "awesome recipes",
    tech6,
    "https://awesome-recipes.netlify.com",
    "https://github.com/SyntappZ/Awesome-Recipes",
    `Making this project turned out to be a failure due to api restrictions so i had to remove all functionality that i had planned and just have
     the search function, i got some well needed design practice in making this app tho which is good as i still feel like my design skills are lacking.
    it was also fun using just vanilla javascript to make a project after using frameworks for most of them.`,

    aweImages,
    true
  ),

  new Project(
    "Regex_Js",
    "regex-js",
    tech7,
    "https://play.google.com/store/apps/details?id=io.syntappz.regex",
    null,
    `The old app i made of this was with ionic/angular, but i remade it with react native/kotlin as the old design was bad and i got a few 1 stars for it,
     i was very new to making apps, this app has full documents on javaScript regular expressions and most will apply to other languages too.
     It has a regex tester which will highlight the matched results, it has a history and save section so you can save your regex for later,
     it also has a light and dark mode with premium there are 12 themes and quick access symbols.
     React native doesn't support positive/negative lookbehinds so i had to make my own module with kotlin to handle this.`,

    regexImages,
    false
  ),
  new Project(
    "Image_Recipes",
    "image recipes",
    tech8,
    "https://image-recipes.netlify.com",
    "https://github.com/SyntappZ/image-recipe-search",
    `I made image recipes just as a quick project to test out the google vision api i plan to make an app using vision in the future. it was also my 
    first time using react and i really like how it works i will defo be making more projects with react in the future.`,

    recipeImages,
    true
  ),

  new Project(
    "Fusion_Ninja",
    "fusion ninja",
    tech9,
    "https://play.google.com/store/apps/details?id=io.syntappz.fusion",
    "https://github.com/SyntappZ/trials-fusion-ninja-app",
    `I made this using vue, framework7 and cordova and this is for a game called trials fusion, it allows people to search for other peoples ninja tracks that they have made
         so they can play them, i used a web scraper with node.js to get the track details. i also learned about virtual lists making this app.`,

    fusionImages,
    false
  )
];

const projectsThumbnails = [
  {
    id: "Wizafy",
    title: "Wizafy",
    thumbnail: "/project-thumbnails/wizafy.png",
    tech: tech1
  },
  {
    id: "Vortex_Player",
    title: "Vortex player",
    thumbnail: "/project-thumbnails/vortex.png",
    tech: tech2
  },
  {
    id: "Regex_Js",
    title: "Regex js",
    thumbnail: "/project-thumbnails/regex.png",
    tech: tech7
  },
 
  {
    id: "Memester",
    title: "Memester",
    thumbnail: "/project-thumbnails/meme.png",
    tech: tech4
  },
  {
    id: "The_Vault",
    title: "The vault",
    thumbnail: "/project-thumbnails/password.png",
    tech: tech5
  },
  {
    id: "Awesome_Recipes",
    title: "Awesome recipes",
    thumbnail: "/project-thumbnails/awesome.png",
    tech: tech6
  },
  {
    id: "Cdn_Javascript",
    title: "Cdn javascript",
    thumbnail: "/project-thumbnails/cdn.png",
    tech: tech3
  },

 
  {
    id: "Image_Recipes",
    title: "Image recipes",
    thumbnail: "/project-thumbnails/image-recipes.png",
    tech: tech8
  },

  {
    id: "Fusion_Ninja",
    title: "Fusion ninja",
    thumbnail: "/project-thumbnails/trials.png",
    tech: tech9
  }
];

export { projectsData, projectsThumbnails };
