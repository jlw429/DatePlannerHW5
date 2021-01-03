$(document).ready(function () {
    //Active time, date.
    $('.lead').text(moment().format('MMM Do YY'));

    //Saving to local storage. The form conrol class changes to a string where it can be shipped to local storage
    $('button').click(function() {
        $('.form-control').html('user-data');
        localStorage.content = $('form-control').html();
        $('.form-control').html(localStorage.content);
    })

    //Time Block

    let currentTime= moment().hour();
    // if #blockTime < currentTime 
    if $("#blockTime" < currentTime)
        
    // css turn cells light grey.

    // current hour highlighted lime

    // if #blockTime > currentTime
    //css turn cells green











































});
