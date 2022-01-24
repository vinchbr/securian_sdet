# Securian SDET Challenge

## Use case
>As a person who doesn’t want to work for my entire lifetime, I’d like to see check if I’m saving enough 
> for my retirement, so that I can make smart financial decisions. \
> Acceptance criteria: 
> * User should be able to submit form with all required fields filled in
> * Additional Social Security fields should display/hide based on Social Security benefits toggle
> * User should be able to submit form with all fields filled in
> * User should be able to update default calculator values

## How to run

Have node 17 installed on the terminal on the root folder:
`npm run wdio`

## PageObject Flow

This is a concept that I came up with mixing these two techniques together to make the tests have an easier readability.  

Ideally you would break down pages and flows into two different files, pages/sections would contain all the webelements
information, and flows would have complex interactions with the page, IE filling the calculator, you create functions to
fill the form, if new fields are added, or the selectors are changed, you change the page object or the flow, and the
test is still valid.

## Time crunch limitation

I was taking my time trying to figure out a better way to make the wdio wait for elements to render, but the transition
times where playing tricks with the driver wait functions, so I did the 1 trick I don't like using which is 
`browser.pause`.  
I would rather keep trying more wdio functions, but time wise, needed this to be done.

## Bugs found

On the "Default calculator values", the range limit on the amount available in each year of your retirement, accepts 
more than 100%, tooltip shows that the range should be between 0-100.

On the "Default calculator values", the pre/post retirement input fields allow negative values, when you enter a 
negative value, you cannot remove the `-` after inserting it into the field, you need to remove numbers and unfocus the
field for it to convert to 0% for then you be able to enter positive values again. 
