/*----------------------------------------------- #||--topnav--|| */


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
    export default function topnav_init() { topnav_set() } // initialize


// #\-CONSTANTES-\

    // --THIS
    const
    TOPNAV = document.getElementById('myTopnav')
    ,
    TOPNAV_RESPONSIVE_CLASS = 'responsive'

    // --INSIDE
    const ICON = TOPNAV?.querySelector('.icon')


// #\-VARIABLES-\

    // --THIS


// #\-FUNCTIONS-\

    // --SET
    function topnav_set() { icon_set() }


    function icon_set() { icon_setEvents() }

    function icon_setEvents() { ICON?.addEventListener('click', icon_eClick) } // adds a 'click' event to the 'icon'

    // --GET

    // --UPDATES
    function topnav_update() // updates 'topnav' by adding / removing the 'responsive' class
    {
        if (TOPNAV instanceof HTMLElement)
        {
            const CLASS = TOPNAV.classList

            CLASS[CLASS.contains(TOPNAV_RESPONSIVE_CLASS) ? 'remove' : 'add'](TOPNAV_RESPONSIVE_CLASS)
        }
    }

    // --TESTS


//=======@EVENTS|

    // --*
    function icon_eClick() { topnav_update() } // 'icon' click event callback


//=======@UTILS|

    // --*