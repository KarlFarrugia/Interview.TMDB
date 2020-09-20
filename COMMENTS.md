# Interview.TMDB

## Assumption

This site uses cookies to stash api responses. However, no cookie banner has been included with this site. Until the creation of a cookie banner I am assuming that a future refinement before a go live would create the cookie policy. <br />

## Further Refinements

Further consolidate routes <br />
Create a centralised caching mechanism to cache requests from different users <br />

## Known Issues

At the writing of this markdown there is only one known issue due to github pages. An occasional 404 error may be encountered if you go to a direct url, howevers no 404 should be encountered during browsing. __Not enough time to investigate the issue__ <br />

## Commits Batches 

### Commit Batch 1 09/09/2020 

Created basic react application using yarn <br />
Added gh-pages as a dev dependency and deployed it to Github Pages - https://karlfarrugia.github.io/Interview.TMDB/ <br />
For future deployments use `yarn run deploy` <br />
____

### Commit Batch 2 11/09/2020 

Added bootstrap <br />
Added some styling assets from a personal project <br />
Added material ui core and styles <br />
Added basic style for set up <br />
Added polyfills <br />
Created a config file <br />
Added axios <br />
Registered an API key <br />
Setup Redux <br />
____

Fixed redux bugs <br />
Created send query to search with redux <br />
Created pages for latest movies, now playing, etc <br />
Created redux elements to add and remove movie arrays <br />
Created BootStrapped Elements to display data <br />
____

Added genres and a genre drop down to refine <br />

____

### Commit Batch 3 12/09/2020 

Added MultiLanguage Support <br />
____

### Commit Batch 4 13/09/2020 

Synced the language with redux <br />
Made multilanguage update the currently rendered bodies <br />
Moved the current page number into redux <br />
added keywords and similar movie apis <br />
cleaned axios <br />
made genre filtering <br />
____

### Commit Batch 5 13/09/2020 

Added Styled Components <br />
Applied style to search <br />
Search Routes to movie page <br />
Started centralising some constants <br />
Added Paging <br />
Added a second navigation bar <br />
____

Commit Batch 6 14/09/2020 

Added fontawesome <br />
Streamlined some styles <br />
Added more structure to navigation bar  <br />
Added more responsiveness <br />
____

Commit Batch 6 16/09/2020 

Added more structure to the navigation bar <br />
Added more structure to the secondary navigation bar <br />
Styled the individual movie page <br />
Updated Routes for github pages <br />

____

### Commit Batch 7 17/09/2020 

Converted all the solution to propertly use redux <br />
Implemented caching <br />

____

### Commit Batch 8 19/09/2020 

Added sentry <br />
Started cleaning code and adding comments <br />
Modified some responsiveness issues <br />
Modified the way the __REDUX_DEVTOOLS_EXTENSION__ is declared within the store <br />
Created generic error page <br />
Created filtering by genre/language/adult content <br />

____

### Commit Batch 9 20/09/2020 

Added all routes and apis <br />
Implemented Lazy loading and added spinners for bad internet -- tested on firefox <br />
Refactoring and adding comments <br />
