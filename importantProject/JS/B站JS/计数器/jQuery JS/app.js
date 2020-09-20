var count = 0

$('input[type = "text"]').val(count)

$('#subtract').on("click",function(e){
    count--
    $('input[type = "text"]').val(count)
})

$('#add').on("click",function(e){
    count++
    $('input[type = "text"]').val(count)
})

$('input[type="text"]').on("change",function(e){
    count = e.target.value
})