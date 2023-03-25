# Web Dev Deliverable - HTML, Noah
## Intentions:
Goal of my portion is to lay out an html structure with classes and uniform structure to minimize necessary styling and javascript logic. 
While my html files are not intended to be run, they will be interconnected sans formatting, and should be replicated in the appropriate REACT
files as necessary.

## Home Tab
Home will resemble the following structure:

![Diagram](https://i.gyazo.com/d740c94eedfcddaa69f18461b3d257e8.png)

With our navigation to Search, which will will use single-page-architecture for, in a left-side banner
alongside our navigation to preset categories of search, such as "T-Shirts", "Kids", et cetera. 
Clicking the search bar should otherwise change our filepath to ./home/search, which transforms the banner
nav-section into a filtration menu for the eventual query we send, and layers an opaque grey filter over
the main body of the form. Footer will contain all necessary info.

Main section will be a card format with horizontal, arrow based navigation as follows:

| hidden card | < |card| |card| |card| > |hidden card| |hidden card|

with javascript functionality and CSS animations to add the appearance of sliding.
### Log-in/profile access will be a conditional component in the top right hand side of the main body

## Search / Results Tab
Results tab should have the same layout of the home tab to allow for subsequent queries. 
Results filepath should contain all necessary information from the search for REST call to API or server
to pull data. 

Card rows should be reimplemented with Search Results for card entries with a boolean logic to styling
if we have categorical search in place (searching for, say, T-Shirts) we use horizontal arrow navigation with
various satisfactory categories. Else, if we're simply searching by name, we should navigate via vertical scrolling of the main
body page with a page_number qualifier to refresh content after X number of entries. (this is similar to what amazon does).

## Login/Register page
Login and register page should be two respective modals which pop up depending on which option we've taken.
Submission form obviously then tries to log the user in. Username or Email and password should be fine.
We should maintain an "attempts" count or something to prevent frequent log-ins attempts?

## Profile Page
If user is logged in, clicking on a profile icon in the top right of any given page will bring someone to their own personal profile page in a S-P-A.
Past Orders, Wishlist, Profile Info, Changing User Profile Image, as well as any other commercial info (rating, no. sales, etc) should be
available. 

## Profile/{UUID} Page
Full blown page, not SPA. Search bar unavailable for this. Big Header with profile photo, navigation to available products, rating, etc.







