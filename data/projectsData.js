// const createProject = (
//   title,
//   tech,
//   link,
//   github,
//   desc,
//   icon,
//   images,
//   type,
//   bold
// ) => {
//   images = images.map(img => `~/assets/${img}`);

//   return {
//     title: title,
//     tech: tech,
//     pageLink: link,
//     github: github,
//     description: desc,
//     icon: icon,
//     images: images,
//     isWebsite: type,
//     bold: bold
//   };
// };

class Project {
  constructor(id, title, tech, link, github, desc, icon, images, type) {
    this.id = id
    this.title = title
    this.tech = tech
    this.pageLink = link
    this.github = github
    this.description = desc
    this.icon = icon
    this.images = images.map(img => `/project-images${img}`);
    this.isWebsite = type
   
  }
}


const projectsData = [
  new Project(
    '1',
    "Wizafy",
    ["react native"],
    "https://play.google.com/store/apps/details?id=com.vortexplayer",
    "https://github.com/SyntappZ/vortex-mp3-player",
    `This is my first react native project and the biggest project i have made so far, 
        making this app i learn a lot about optimization and avoiding memory leaks, there are a couple problems with this app
        that i have found which i just cannot fix yet, one being that getting track metadata takes a long time, i read this is due to the react native
        bridge so that is unavoidable at the moment. The library i used has a batch reciever but it is not working at this moment in time... read more on 
        github.
       
        `,
    "fab fa-react",
    ["/vortex/vortex3.png", "/vortex/vortex2.png", "/vortex/vortex1.png"],

  ),
 new Project(
  '2',
    "Vortex Player",
    ["react native"],
    "https://play.google.com/store/apps/details?id=com.vortexplayer",
    "https://github.com/SyntappZ/vortex-mp3-player",
    `This is my first react native project and the biggest project i have made so far, 
        making this app i learn a lot about optimization and avoiding memory leaks, there are a couple problems with this app
        that i have found which i just cannot fix yet, one being that getting track metadata takes a long time, i read this is due to the react native
        bridge so that is unavoidable at the moment. The library i used has a batch reciever but it is not working at this moment in time... read more on 
        github.
       
        `,
    "fab fa-react",
    ["/vortex/vortex3.png", "/vortex/vortex2.png", "/vortex/vortex1.png"],

  ),
 new Project(
  '3',
    "CDN Javascript",
    ["react", "javascript", "css"],
    "https://cdn-javascript.netlify.com/",
    "https://github.com/SyntappZ/cdn-javascript",
    `This is a javascript cdn database, it has a live search, random, sort and favorites functions, the favorites save to local storage.
      There is a quick copy button and also a button that goes to the repo of the cdn so you can get more information.
        `,
    "fab fa-react",
    ["/cdn/cdn.png"],
   
  ),

 new Project(
  '4',
    "awesome recipes",
    ["vanilla javascript", "sass", "edamam api"],
    "https://awesome-recipes.netlify.com",
    "https://github.com/SyntappZ/Awesome-Recipes",
    `Making this project turned out to be a failure due to api restrictions so i had to remove all functionality that i had planned
        and just have the search function, i got some well needed design practice in making this app tho which is good as i still feel like
        my design skills are lacking. it was also fun using just vanilla javascript to make a project after using frameworks
         for most of them.`,
    "fab fa-sass",
    ["/awesome/main.jpg"],

  ),
 new Project(
  '5',
    "the vault",
    ["vue", "vuetify", "firebase"],
    "https://vue-password-manager.web.app/",
    "https://github.com/SyntappZ/the-vault",
    `The vault is a password manager made with vue and vuetify, it can store passwords or notes and you can add, 
        delete, edit both, the password manager has a strength indicator and a generator so you
         can always have a stong password stored and add them to favorites and even filter between strengths or favorites to find your passwords 
         easier. for testing use ---->`,
    "fab fa-vuejs",
    ["/vault/main.jpg"],
  
   
  ),
 new Project(
  '6',
    "image recipes",
    ["react", "firebase", "google vision", "edamam api"],
    "https://image-recipes.netlify.com",
    "https://github.com/SyntappZ/image-recipe-search",
    `I made image recipes just as a quick project to test out the google vision api i 
        plan to make an app using vision in the future. it was also my first time using react 
        and i really like how it works i will defo be making more projects with react in the future.`,
    "fab fa-react",
    ["/imageRecipe/main.jpg"],

  ),
 new Project(
  '7',
    "regex-js",
    ["ionic", "angular", "cordova"],
    "https://play.google.com/store/apps/details?id=io.syntappz.regex",
    "https://github.com/SyntappZ/regex-cheatsheet",
    `I made this app with ionic/angular and this app has full documents on javaScript regular expressions and most will apply to other languages too.
          It also has a regex tester which can test with match which will highlight the matched results, 
          or can replace words with replace.`,
    "fab fa-angular",
    ["/regexjs/list.jpg", "/regexjs/text.jpg", "/regexjs/tester.jpg"],
 
  ),
new Project(
  '8',
    "memester",
    ["vue", "framework 7", "cordova", "imgur api"],
    "https://play.google.com/store/apps/details?id=syntappz.memester.fm7",
    "https://github.com/SyntappZ/memester",
    `I made Memester with framwork 7 and vue it is a meme search and share app for android with lazyLoad images with
         masonary layout and has related tags images too and pressing the tag will load more images of that tag name 
         and you can also save images to your favorites.`,
    "fab fa-vuejs",
    ["/memester/home.jpg", "/memester/image.jpg", "/memester/tags.jpg"],
 
  ),

 new Project(
  '9',
    "fusion ninja",
    ["vue", "framework 7", "cordova"],
    "https://play.google.com/store/apps/details?id=io.syntappz.fusion",
    "https://github.com/SyntappZ/trials-fusion-ninja-app",
    `I made this using vue, framework7 and cordova and this is for a game called trials fusion, it allows people to search for other peoples ninja tracks that they have made
         so they can play them, i used a web scraper with node.js to get the track details. i also learned about virtual lists making this app.`,
    "fab fa-vuejs",
    ["/fusion/front.jpg", "/fusion/filter.jpg", "/fusion/info.jpg"],
   
  )
];


const projectsThumbnails = [
 {
   id: '1',
   title: "wizafy",
   thumbnail: '/project-thumbnails/wizafy.png'
 },
 {
  id: '2',
  title: "vortex player",
  thumbnail: '/project-thumbnails/vortex.png'
},
{
  id: '3',
  title: "CDN javascript",
  thumbnail: '/project-thumbnails/cdn.png'
},
{
  id: '4',
  title: "memester",
  thumbnail: '/project-thumbnails/meme.png'
},
{
  id: '5',
  title: "the vault",
  thumbnail: '/project-thumbnails/password.png'
},
{
  id: '6',
  title: "awesome recipes",
  thumbnail: '/project-thumbnails/awesome.png'
},

{
  id: '7',
  title: "regex js",
  thumbnail: '/project-thumbnails/regex.png'
},
{
  id: '8',
  title: "image recipes",
  thumbnail: '/project-thumbnails/image-recipes.png'
},

{
  id: '9',
  title: "fusion ninja",
  thumbnail: '/project-thumbnails/trials.png'
},
]

export { projectsData, projectsThumbnails };
