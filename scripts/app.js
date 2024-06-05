/*----------------------------------------------- #||--app--|| */


// #\-IMPORTS-\

    // --ENV

    // --DATA

    // --NODE

    // --SVELTE

    // --LIB

    // --JS
    import topnav_init from './topnav.js'
    import modal_init  from './modal.js'
    import form_init   from './form.js'

    // --SCSS

//=======@COMPONENTS|

    // --*


// #\-EXPORTS-\

    // --THIS
    export function app_init() // initialize app
    {
        topnav_init()
        modal_init()
        form_init()
    }


// #\-CONSTANTES-\

    // --THIS


// #\-VARIABLES-\

    // --THIS


// #\-FUNCTIONS-\

    // --SET

    // --GET

    // --UPDATES

    // --TESTS


//=======@UTILS|

    // --*