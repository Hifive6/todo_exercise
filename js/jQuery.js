$('#addTodo').click(function(){
    $('#receipeList').append($('<li>', {
        text: $('#clear').val()
    }))
    $('#clear').val(" ");

    removeItem();

    // let element = $('<li>');

    // let input = $('#clear').val();
    // $('#receipeList').append(element, input);
    // console.log(input);
    // console.log($(input).html('li'));
    // console.log($('#receipeList').append().html(input));
    // input.attr('li');
    // input.append($('#receipList'));
    // $('#receiptList').after(input);
})

function removeItem(){
$('li').click(function(){
    this.remove();
})
}
removeItem();
    // console.log(e.target);
