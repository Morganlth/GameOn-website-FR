/*----------------------------------------------- #||--modal--|| */


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
    export default function modal_init() { modal_set() } // initialize

    export function modal_update(show = false) // updates the modal by modifying its display
    {
        if (MODAL instanceof HTMLElement)
        {
            document.documentElement.classList[show ? 'add' : 'remove']('hidden')
  
            MODAL.style.display = show ? 'block' : 'none'
        }
    }


// #\-CONSTANTES-\

    // --OUTSIDE
    const BTN = document.querySelectorAll('.modal-btn')

    // --THIS
    const MODAL = document.querySelector('.bground')

    // --INSIDE
    const CLOSE = (MODAL ?? document).querySelector('.close')


// #\-VARIABLES-\

    // --THIS


// #\-FUNCTIONS-\

    // --SET
    function modal_set()
    {
        btn_set()
        close_set()
    }


    function btn_set() { btn_setEvents() }

    function btn_setEvents() { for (let i = 0; i < BTN.length; i++) BTN[i]?.addEventListener('click', btn_eClick) } // adds a 'click' event to 'btn'


    function close_set() { close_setEvents() }

    function close_setEvents() { CLOSE?.addEventListener('click', close_eClick) } //  adds a 'click' event to 'close'

    // --GET

    // --UPDATES

    // --TESTS

//=======@EVENTS|

    // --*
    function btn_eClick() { modal_update(true) } // 'btn' click event callback


    function close_eClick() { modal_update(false) } // 'close' click event callback


//=======@UTILS|

    // --*