$('div.keypad').on('click', 'div', (event)=>{
    let $target = $(event.currentTarget);
    console.log($target);

    if ($target.hasClass('keypad_ENTER')) {
        checkInput();
    } else {
        addNumer($target.find('span').text());
    }


});

function addNumer(number) {
    const $inputArea = $('div.input-area');
    console.log($inputArea.find('div.input_1').textContent);
    if ($inputArea.find('div.input_1').text() === '') {
        $inputArea.find('div.input_1').text(number);
        return;
    }
    if ($inputArea.find('div.input_2').text() === '') {
        $inputArea.find('div.input_2').text(number);
        return;
    }
    if ($inputArea.find('div.input_3').text() === '') {
        $inputArea.find('div.input_3').text(number);
        return;
    }
    if ($inputArea.find('div.input_4').text() === '') {
        $inputArea.find('div.input_4').text(number);
    }
}

function clearInput() {
    const $inputArea = $('div.input-area');
    $inputArea.find('div').text('');
}

function checkInput() {
    const CODE = "1234";

    const $inputArea = $('div.input-area');
    const input = $inputArea.find('div.input_1').text().toString()
        + $inputArea.find('div.input_2').text().toString()
        + $inputArea.find('div.input_3').text().toString()
        + $inputArea.find('div.input_4').text().toString();

    if (input === CODE) {
        $('div.code_correct').show();
    } else {
        clearInput();
        $('div.code_wrong').show();
        window.setTimeout(()=>{
            $('div.code_wrong').hide();
        }, 2000);
    }
}