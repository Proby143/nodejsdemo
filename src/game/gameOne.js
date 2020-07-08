function runSlots() {
    var slotOne;
    var slotTwo;
    var slotThree;
    
    var images = ["https://www.w3cschool.cn/statics/codecamp/images/9H17QFk.png", "https://www.w3cschool.cn/statics/codecamp/images/9RmpXTy.png", "https://www.w3cschool.cn/statics/codecamp/images/VJnmtt5.png"];
    
    slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    
    // Only change code below this line.
    $($('.slot')[0]).html('<img src = "' + images[slotOne-1] + '">');
    $($('.slot')[1]).html('<img src = "' + images[slotTwo-1] + '">');
    $($('.slot')[2]).html('<img src = "' + images[slotThree-1] + '">');
    // Only change code above this line.
    
    if (slotOne === slotTwo && slotTwo === slotThree) {
    $('.logger').html("It's A Win");
    return null;
    }
    
    if (slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined){
    $(".logger").html(slotOne + " " + slotTwo + " " + slotThree);
    }
    
    $('.logger').append(" Not A Win");
    
    return [slotOne, slotTwo, slotThree];
    }
    
    $(document).ready(function() {
     $('.go').click(function() {
     runSlots();
     });
     });