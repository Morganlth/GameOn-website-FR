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
    export default function form_init() { form_set() } // initialize


// #\-CONSTANTES-\

    // --THIS
    const
    FORM       = document.getElementById('form'),
    FORM_TESTS = form_getTests()

    // --INSIDE


// #\-VARIABLES-\

    // --THIS
    let form_SUCCESS


// #\-FUNCTIONS-\

    // --SET
    function form_set() { form_setEvents() }

    function form_setEvents() { FORM?.addEventListener('submit', form_eSubmit) } // adds a 'submit' event to 'form'

    // --GET
    function form_getTests() // returns an array of tests to be performed to validate the form
    {
        return [...(FORM ?? document).querySelectorAll('.formData')].reduce((accumulator, e) => // retrieves all "formdata" elements and reduced according to "input" requiring validation
        {
            const INPUTS = [...e?.querySelectorAll('input') ?? []] // retrieves all "formdata input"

            if (INPUTS.length)
            {
                const TEST = form_getTest(INPUTS[0].id) // each "formdata" is associated with a test, here we check for the first "input"

                if (TEST) accumulator.push( // added test to accumulator
                {
                    formdata: e,
                    test    : TEST.bind(INPUTS)
                })
            }

            return accumulator
        }, [])
    }

    function form_getTest(id = '') // checks among a list of ids whether the "input" is associated with a test
    {
        switch (id)
        {
            case    'first'    :
            case    'last'     : return name_test
            case    'email'    : return email_test
            case    'quantity' : return quantity_test
            case    'location1':
            case    'location2':
            case    'location3':
            case    'location4':
            case    'location5':
            case    'location6': return location_test
            case    'checkbox1': return checkbox1_test
            default            : return void ''
        }
    }

    // --UPDATES

    // --TESTS
    function form_test() // after "form" submission or execute all tests for current values
    {
        for (let {formdata, test} of FORM_TESTS)
        {
            try
            {
                test()

                formdata?.removeAttribute('data-error')
            }
            catch ({message}) { return {formdata, message} } // in the case of a failed test, we return an error object
        }
    }

    function name_test() { if (this[0].value?.length < 2) throw new Error('Minimum 2 caractères.') }

    function email_test() { if (!/^\S+@\S+\.\S+$/.test(this[0].value)) throw new Error('Adresse email invalide.') } // simple email RegExp

    function quantity_test()
    {
        const VALUE = parseInt(this[0].value, 10)

        if (isNaN(VALUE) || VALUE < 0) throw new Error('Renseignez une valeur numérique positive.')
    }

    function location_test() { if (this.every(e => !e.checked)) throw new Error('Sélectionnez une localisation.') }

    function checkbox1_test() { if (!this[0].checked) throw new Error('Veuillez accepter les conditions d\'utilisation.') }


//=======@EVENTS|

    // --*
    function form_eSubmit(e)
    {
        e.preventDefault() // stop form submission

        form_SUCCESS?.remove() // suppresses the success message if it exists

        const ERROR = form_test() // test form

        if (ERROR) return ERROR.formdata?.setAttribute('data-error', ERROR.message) // in the event of an error, the error is displayed

        form_createSuccess()
    }


//=======@UTILS|

    // --*
    function form_createSuccess() // adds a success message
    {
        const NODE = document.createElement('p')

        NODE.innerText = 'Merci ! Votre réservation a été reçue.'

        form_SUCCESS = FORM?.appendChild(NODE)
    }