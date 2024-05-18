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

    // --SCSS

//=======@COMPONENTS|

    // --*


// #\-EXPORTS-\

    // --THIS
    export function app_init() // initialize app
    {
        topnav_init()
        modal_init()

        console.log('init')
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