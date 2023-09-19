# NG-APP-POKEMON-!

Hi! It's my first angular project. In this application, you can manage pokemons. You can add, edit or remove any pokemons.

## Goal of Application

For me, this application has enable me to learn a dynamic routes, and I learn why components is a right way to create a complex application that can be maintainable and perform. I learn too, that create a logic more dispatch from many file is a good thing for the maintainability, for example : a template and a logic of component has in different files.

I worked with event, like user want login, I transfer his demand to server with event, and when server respond, this respond is automatically send to user. For example: the login form : when user click on submit button, the values of inputs (ex: password, email, username...) can be send to server so as to server check in database the information and resend a respond if user exist or not.

## The principal routes :

Here you can see the principal routes that user can be used, when he click on button, link etc...

|   Names of Pages|ROUTES  and parameters
|----------------|-------------------------------
|HomePage or List of Pokemon|				`'/pokemons'` or another routes (when not connected)
|Detail of Pokemon|`"pokemon/:id"` \ ':id' is a parameter to display a specific pokemon
|Add Pokemon|`"/pokemon/add"`            
|Edit Pokemon|`"/edit/pokemon/:id"` \ ':id' is a parameter to edit a specific pokemon


# Angular and Angular CLI:

This project be developed with angular in version `16.2.0` and can be generate this project with angular/cli in version `16.2.0`.

For init project, you can execute in angular/cli, this command in project folder: 
>   -- ng n [name] or ng new [name]

For create component, you can execute in angular/cli, this command in project folder: 
>   -- ng generage component [name] or ng g c [name]

I discover two parameters:
>    --- --dry-out | This parameters can be used check if component has been generate in good folder. Is a test command for check the generate command of angular/cli
>    --- --inline-template | This parameters can be used for disable a separating of template and component. For example : In [PageNotFound](https://github.com/QuentinLagree/ng-pokemon-app/blob/master/src/app/page-not-found/page-not-found.component.ts) component (created with parameter) you can see that template and logical of component has not separate. However in [DetailPokemon](https://github.com/QuentinLagree/ng-pokemon-app/tree/master/src/app/pokemon/components/detail-pokemon) component (created without parameter) you can see 2 files, one is template and second is component's logic.

# Why this project?

This project is a goal for me, I wanted to learn a javascript framework like Vue oor React. And I finally go to youtube channel of Youtuber : Simon Dieny who realise this app for learning how to use angular in web. [Video of Simon Dieny](https://www.youtube.com/watch?v=DTIYVffhJuU)

# What I think of Angular?
SOON
