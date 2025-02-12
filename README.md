# LWCE
`LWCE` is a cross-platform independent text editing library which uses it's own Algorithms for highlighting the text and rendering the edited text on the screen. `LWCE` offers set of Algorithms which can be used for Syntax Highlighting and are designed to be simple to use.

## Installation
Installation of `LWCE` is very simple, Just make sure that you have git installed.

**Open the folder in a terminal where you want to install the libLWCE**
```bash
git clone 'https://github.com/darkyboys/lwce.git'
echo 'LWCE Is installed!'
```

Yes, This was the installation and it will work on any system.

## Why Use LWCE ?
Before you make any decission please be sure to check the `pros` & `cons` of libLWCE.

**Pros**
 - Easy To Install
 - Simple To Integrate
 - Easy To Use
 - One Configuration Will Worky Everytime, So No Need For Manual Configuration Everytime You Need Syntax Highlighting.
 - Easy To Manipulate

**Cons**
 - May Be Slightly-Slower For Very very Very much Large Codebase
 - Still Needs Manuall Configurations For The First Time

## Docs
Okay, So let's suppose that you have installed the `LWCE` in your project, Now let's learn the Functions Which LWCE provides us to work with.

**Choosing the right editor**
`LWCE` has a variety of Editing Algorithms and first you would need to know what each does, To choose a perfect editing algorithm.
 *All Algorithms Includes*
  - Greece X Fluid

### Greece X Fluid
This is the default and base algorithm of LWCE which can be used with any type of syntax highlighting. This highlights specific keywords in specific colors as per the maked configuration. The highlights can't be wrong and be even work in complex code base. Highlights will be language independent

**How it works?**
The Following processes are ran by GreeceXFluid to highlight the syntax.

 - Input The Orignal Code
 - Tokenises The Code
 - Checks The Keys For Each Tokens & Highlights It
 - A Marker Is Placed To Denote the Start & End Pos Of Each Token
 - Checks For Other Keys With Markers & Highlights It
 - Once Every Key Is Highlighted In Tokens It Removes The Marker
 - Returns The Edited Code

**How To Use**
Let Suppose you have a `div` element of html and you want to highlight the code inside it.
```html
<div>
    print 'hy'
</div>
```

First you will need to assign an id to the div.
```html
<div id="code">
    print 'hy'
</div>
```

Include the LWCE Library from the installation
```html
<script src="LWCE/lwce.lib.js"></script>
```

*Now let's move on code.*

**Macros**
These are constants which are used by the LWCE to perform a specific action.

*Included Macros*
 - LWCE_EDITOR_GREECE_X_FLUID (Defines the version)
 - LWCE_EDITOR_PERMISSION_WRITE (Defines the write permission)
 - LWCE_EDITOR_PERMISSION_VIEW (Defines the view permission)

**Configurations**
Every Algorithm of LWCE needs a configuration to work with and `greecexfluid` needs it too. This configuration will tell the LWCE to highlight what keywords in what color.

The configurations is stored as an array named `lwce_greece_x_fluid_highlightables`

*Warning! Please do not directly deal with `lwce_greece_x_fluid_highlightables` Array, It may corrupt the entire configuration. Instead use a helper function which LWCE offers to make and manipulate configurations*

**Helper Functions**
These functions are provided by `LWCE` to stop the programmer to deal directly with critical components of `LWCE` instead use these functions to safely communicate.

*Included helpers*
 - lwce_greece_x_fluid_make_editor
 - lwce_greece_x_fluid_mkconfig
 - lwce_greece_x_fluid_rmconfig
 - lwce_greece_x_fluid_clconfig
 - lwce_greece_x_fluid_defconfig

We Will learn all of these within a few minutes.

**Critical Functions**
These functions are those which are directly used to directly communicate with the `LWCE Algorithm` you are currently using, But try avoiding directly using them manually as you may corrupt the entire process and these functions don't have the good error handeling so you may see an unexpected output.

*Included criticals*
 - lwce_greece_x_fluid_call_edit

*Non-Function Criticals*
 - lwce_greece_x_fluid_highlightables

*Warning! Try Avoiding using these manually as they may result in unexpected outputs. Instead use a helper function*

**Default colors**
The `lwce_greece_x_fluid_default_color` is a variable used to store the default colors which LWCE Algorithm may use later through helpers or criticals.

#### Learning Functions
Let's finally dive-deeper into functions

**Helpers**
 - `lwce_greece_x_fluid_make_editor` This function asks for 2 arguments , (Id of the element, permission to the element). 
 
 The id tells the function about where the element is and if the element is not found with the given id it will throw an error, And from the assigned id if the element is found then the function will fetch the children of div as code. 

 The permission tells the function to which permission to givve the element after processing. You must use permission macros here eg: LWCE_EDITOR_PERMISSION_WRITE for write and LWCE_EDITOR_PERMISSION_VIEW for view only.

 After processing it will highlight the code inside the assigned element.
 
 - `lwce_greece_x_fluid_mkconfig` this function will take two arguments, (key, color) where the key will be with keyword you want to highlight and the color will be the color you want to assign to the keyword when it will be highlighted and it will make a configuration of the key as for the given color. Please call this before the `lwce_greece_x_fluid_make_editor` function to make the configuration before.

 - `lwce_greece_x_fluid_rmconfig` this function only asks for the key as an argument and then finds the key in configuration , if the key was found then it will remove it from the configuration or it will throw an error. Please call this before the `lwce_greece_x_fluid_make_editor` function to remove the configuration before.

 - `lwce_greece_x_fluid_clconfig` this function doesnot asks for anything just clears the entire configuration. Please call this before the `lwce_greece_x_fluid_make_editor` function to remove the configuration before.

 - `lwce_greece_x_fluid_defconfig` this function doesnot asks for anything just resets the entire configuration keys with the default text color value defined in `lwce_greece_x_fluid_default_color` variable. Please call this before the `lwce_greece_x_fluid_make_editor` function to re-define the configuration before.

**Criticals**
 - `lwce_greece_x_fluid_call_edit` this function will directly communicate with the algorithm to directly edit the text content based on the configuration and the node. It doesnot asks for the id of the element but it asks for the entire element it self. Please avoid calling this manually, Instead use the `lwce_greece_x_fluid_make_editor` function to ddo changes.

 - `lwce_greece_x_fluid_highlightables` this is the array containing the entire configuration in sub-arrays. Please avoid dealing with this directly, Instead use other helpers to deal with config.

*Note: Please use the helpers as much as possible and try avoiding the criticals as much as possible, because helpers allows you to safely edit the code, Although helpers internally uses Criticals to work.*

## Contributing
Check out the <a href="CONTRIBUTING.md">Contributing Guidelines</a>

Thanks For Reading! Regards ghgltggamer 2025
This project is under the MIT LICENSE.
The Readme file is written at 10:55 AM , 2.12.25