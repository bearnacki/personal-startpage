# Personal Start-Page

Your own localhost start-page, GatsbyJS-powered, fully moddable. If you like this, use whatever you like :smile:

## About

| Start-Page Main View |
| --- |
| ![screenshot](/scrshots/startpage.png) |

Current implemented features:

* Weather
* TodoList
* Bookmarks
* HackerNews

## How to use

1. Install gatsby-cli

```
npm install -g gatsby-cli
```

2. Clone repo

```
git clone https://github.com/bearnacki/personal-startpage.git
```

3. Install all dependencies

```
npm install
```

4. Create *.env.development* and *.env.production* files in the root directory with APIs keys like example:

```
GATSBY_OPENWEATHER_API_KEY = YOUR_OPENWEATHER_API_SECRET_KEY
GATSBY_OPENWEATHER_API_CITYID = YOUR_OPENWEATHER_CITY_ID
```
OpenWeather API is free, all you need to do is singup at [OpenWeather.org](https://openweathermap.org/api) and get your key and city ID

**Remeber not to share your APIs keys with anybody**

5. Go to */src/utils* folder and set your list of bookmarks in *bookmarks-data.js* like in the example below:

```
export const bookmarksList = [
  {
    bookmarkName: 'gatsby',
    bookmarkUrl: 'https://www.gatsbyjs.org/'
  },
  {
    bookmarkName: 'github',
    bookmarkUrl: 'https://github.com/'
  }]
```

Next, place in */src/images/bookmark-icon/* folder icons that you want to use as bookmarks. Remeber to use same name like you used in *bookmarkName* property (*ex. gatsby.png*)

6. Use *gatsby build* command to build your project and *gatsby serve* to serve the production build of your site.


##### Have fun and modify you personal start-page whatever you like :grin: