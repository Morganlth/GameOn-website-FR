/*----------------------------------------------- #||--form--|| */


// #\-IMPORTS-\

    // --ENV

    // --DATA

    // --NODE

    // --SVELTE

    // --LIB

    // --JS

    // --SCSS

//=======@COMPONENTS|

    // --*


// #\-EXPORTS-\

    // --THIS
    export default function form_init() { form_set() }


// #\-CONSTANTES-\

    // --THIS
    const FORM = document.getElementById('form')

    // --INSIDE
    const FORM_DATA = (FORM ?? document).querySelectorAll('.formData')


// #\-VARIABLES-\

    // --THIS


// #\-FUNCTIONS-\

    // --SET
    function form_set() { form_setEvents() }

    function form_setEvents() { FORM?.addEventListener('submit', form_eSubmit) }

    // --GET

    // --UPDATES

    // --TESTS
    function form_testInput()
    {

    }


//=======@EVENTS|

    // --*
    function form_eSubmit(e)
    {
        e.preventDefault()

        form_testInput()
    }


//=======@UTILS|

    // --*