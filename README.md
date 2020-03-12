# Project 1 @cmda-minor-web · 2019-2020

## OBA Paper (Prototype)

![c223af6ed012dccaa7805457ab4c9204](https://user-images.githubusercontent.com/43183768/75981579-17521b00-5ee5-11ea-86bc-433bcd2ab16c.jpg)

OBA Paper helps children to make a report with the books from the OBA.

* A range of books that can help you make a report
* See more information about your selected book
* A Editor were you can make a report.
* You can mail your report or export it in a pdf file

![2172e9e2537cd05985668212a180c167](https://user-images.githubusercontent.com/43183768/75982285-8d0ab680-5ee6-11ea-94bd-4f06d40da4e0.jpg)
Detail page 

![ca4b94f4ee379b365852ff57bdbd7b1f](https://user-images.githubusercontent.com/43183768/75982276-88de9900-5ee6-11ea-9f07-3aae66a19c01.jpg)
Editor page: You can make a report and also read the book you selected. 

## API
 [http://zoeken.oba.nl/api/v1](http://zoeken.oba.nl/api/v1)

## Micro libraries 
* Routie for routes

### Wishlist
* Make the editor buttons work! 


### Backlog
* After close detail search function doens't work

### Browser-technology
i used web developer tool (chrome extention) to test my app

Afbeeldingen uitzetten

* You can not see the bookcover. A fix could be to use text instead of a img
Custom fonts uitzetten

* The site use the default font from the browser 

Kleur uitzetten & kleurenblindheid instellen
* there is alot of different colors the app is usable with colors off or colorblind settings

muis/Trackpad werkt niet

* Searching a book works fine. but if you want more detail that will take a bit time. A fix cloud be if you select a book you will go to a different page. 

Breedband internet uitzetten

The Books are not visible because the API needs a . A fix could be to use local storage
* Javascript (volledig) uitzetten

The App needs the API to work. A fix could be to use local storage

* Cookies niet accepteren

NO cookies are used

* localStorage doet het niet

No localStorage is used

## Browsers

Google Chrome: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36

* Everything works JS, CSS

Firefox: Windows 10 Firefox/74.0

* Everything works JS, CSS

Edge: Windows 10 Edge/18.18362

* JS Works it renders the books the only think that doenst work is CSS ::After

Internet Explore: Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; Touch; .NET4.0C; .NET4.0E; Tablet PC 2.0; rv:11.0) like Gecko

* Display: grid is not support. JS doesn't work

Opera OPR/67.0.3575.53

* Everything works JS, CSS

Brave: Mozilla/5.0 Windows 10 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36

* Everything works JS, CSS

## Devices

Oneplus 6: Chrome 80 - Oneplus 6 - Android 10

* Everything works JS, CSS. only the editorpage is not responsive but it wasn't build for it.

Apple Ipad touch - IOS 6.1.6 - Safari

* CSS Grid and flex dont work. Also JS is not working 

Apple Ipad mini 2 - IOS 9.3.5 - Safari

* CSS  Grid dont work. Flex does work better use flexbox instead of grid. CSS ::after doens't work and JS is not working.

Nexus 5 Android 6.0.1 - Chrome 75

* Everything works JS, CSS. only the editorpage is not responsive but it wasn't build for it.

## Screen Reader Windows Narrator

* Screen reader works only the books img doens't have a alt that is a fix. 
