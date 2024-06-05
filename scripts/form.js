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
    let
    form_SUCCESS,
    form_TIMER
    ,
    form_TIMEOUT


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
                    inputs  : INPUTS,
                    test    : TEST
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
            case    'birthdate': return birthdate_test
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
        for (let {formdata, inputs, test} of FORM_TESTS)
        {
            try
            {
                test(inputs)

                formdata?.removeAttribute('data-error')
            }
            catch ({message}) { return {formdata, message} } // in the case of a failed test, we return an error object
        }
    }

    function name_test(inputs = []) { if (inputs[0].value?.length < 2) throw new Error('Minimum 2 caractères.') }

    function email_test(inputs = []) { if (!/^\S+@\S+\.\S+$/.test(inputs[0].value)) throw new Error('Adresse email invalide.') } // simple email RegExp

    function birthdate_test(inputs = [])
    {
        const
        [_, Y, M, D] = inputs[0]?.value?.match(/^(\d{4})-(\d{2})-(\d{2})$/) ?? [], // I retrieve the values for the year (Y), month (M), and day (D) using a RegExp.
        YEAR         = parseInt(Y, 10),
        MONTH        = parseInt(M, 10),
        DAY          = parseInt(D, 10)

        // I could have passed the value to the Date Object constructor to check the validity of the value, but it passes both '2002-01' and '2002-01-29'.
        // Here I'm doing simple checks, but for example '2002-02-31' would be accepted as a valid date.
        if (isNaN(YEAR ) || YEAR  < 1907 || YEAR  > new Date().getFullYear()
         || isNaN(MONTH) || MONTH < 1    || MONTH > 12
         || isNaN(DAY  ) || DAY   < 1    || DAY   > 31) throw new Error('Renseignez une date de naissance valide.')
    }

    function quantity_test(inputs = [])
    {
        const VALUE = parseInt(inputs[0].value, 10)

        if (isNaN(VALUE) || VALUE < 0) throw new Error('Renseignez une valeur numérique positive.')
    }

    function location_test(inputs = []) { if (inputs.every(e => !e.checked)) throw new Error('Sélectionnez une localisation.') }

    function checkbox1_test(inputs = []) { if (!inputs[0].checked) throw new Error('Veuillez accepter les conditions d\'utilisation.') }


//=======@EVENTS|

    // --*
    function form_eSubmit(e)
    {
        e.preventDefault() // stop form submission

        form_SUCCESS?.remove() // suppresses the success message if it exists

        const ERROR = form_test() // test form

        if (ERROR) return ERROR.formdata?.setAttribute('data-error', ERROR.message) // in the event of an error, the error is displayed

        form_createSuccess()
        // form_createTimer()
        form_clear()
    }


//=======@UTILS|

    // --*
    function form_createSuccess() // adds a success message
    {
        const NODE = document.createElement('p')

        NODE.className = 'success'
        NODE.innerText = 'Merci ! Votre réservation a été reçue.'

        form_SUCCESS = FORM?.appendChild(NODE)
    }

    // function form_createTimer()
    // {

    // }

    function form_clear()
    {
        for (let {formdata, inputs} of FORM_TESTS)
        {
            formdata?.removeAttribute('data-error')

            for (const INPUT of inputs) switch (INPUT?.type)
            {
                case    'radio'   :
                case    'checkbox': INPUT.checked = false
                default           : INPUT.value   = ''
            }
        }
    }