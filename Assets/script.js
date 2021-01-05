// let plannerData = [];

$(document).ready(function () {
  //Active time, date.
  $('.lead').text(moment().format('MMM Do YY'));

  // function callUserData() {
  //     const seven = localStorage.getItem("7AM");
  //     $("#user-input7").innertext(seven);

  // }

  //  callUserData();

  function saveUserData() {
    $('#save7').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input7').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input7').append(userData);
      console.log(userText);
      var data = JSON.parse(localStorage.getItem('Notes')) || [];
      var n = {
        time: '7',
        note: userText,
      };
      data.push(n);
      localStorage.setItem('Notes', JSON.stringify(data));
    });
    $('#save8').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input8').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input8').append(userData);
      console.log(userText);
      localStorage.setItem('8AM', userText);
      localStorage.getItem('8AM');
    });
    $('#save9').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input9').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input9').append(userData);
      console.log(userText);
      localStorage.setItem('9AM', userText);
      localStorage.getItem('9AM');
    });

    $('#save10').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input10').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input10').append(userData);
      console.log(userText);
      localStorage.setItem('10AM', userText);
      localStorage.getItem('10AM');
    });

    $('#save11').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input11').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input11').append(userData);
      console.log(userText);
      localStorage.setItem('11AM', userText);
      localStorage.getItem('11AM');
    });

    $('#save12').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input12').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input12').append(userData);
      console.log(userText);
      localStorage.setItem('12PM', userText);
      localStorage.getItem('12PM');
    });

    $('#save13').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input13').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input13').append(userData);
      console.log(userText);
      localStorage.setItem('1 PM', userText);
      localStorage.getItem('1 PM');
    });

    $('#save14').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input14').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input14').append(userData);
      console.log(userText);
      localStorage.setItem('2 PM', userText);
      localStorage.getItem('2 PM');
    });

    $('#save15').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input15').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input15').append(userData);
      console.log(userText);
      localStorage.setItem('3 PM', userText);
      localStorage.getItem('3 PM');
    });

    $('#save16').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input16').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input16').append(userData);
      console.log(userText);
      localStorage.setItem('4 PM', userText);
      localStorage.getItem('4 PM');
    });

    $('#save17').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input17').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input17').append(userData);
      console.log(userText);
      localStorage.setItem('5 PM', userText);
      localStorage.getItem('5 PM');
    });
    $('#save18').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input18').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input18').append(userData);
      console.log(userText);
      localStorage.setItem('6 PM', userText);
      localStorage.getItem('6 PM');
    });
    $('#save19').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input19').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input19').append(userData);
      console.log(userText);
      localStorage.setItem('7 PM', userText);
      localStorage.getItem('7 PM');
    });
  }
  saveUserData();
  // getUserData();
  //timeRendering();

  //time rendering
  $('.note-row').each(function () {
    let currentTime = moment().hour();

    let blockHour = $(this).attr('id');
    console.log('Block Hours: ' + blockHour);

    if (blockHour < currentTime) {
      $(this).addClass('past');
    } else if (parseInt(blockHour) === currentTime) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }

    // if (currentTime >= 7 && currentTime < 8) {
    //   $('#7a, #7ab, #user-input7, #save7').css('background-color', 'lime');
    // } else if (currentTime >= 14 && currentTime < 15) {
    //   $('#7a, #7ab, #user-input7, #save7').css('background-color', 'purple');
    //   $('#8a, #8ab, #user-input8, #save8').css('background-color', 'lime');
    // }
  });

  function dispData() {
    var data = JSON.parse(localStorage.getItem('Notes')) || [];

    for (var i = 0; i < data.length; i++) {
      var id = data[i].time;
      $('#user-input' + id).val(data[i].note);
    }
  }

  dispData();

  //Saving to local storage. The form conrol class changes to a string where it can be shipped to local storage
  // $('button').click(function() {
  //     $('.form-control').html('user-data');
  //     localStorage.content = $('form-control').html();
  //     $('.form-control').html(localStorage.content);
  // })

  //Time Block

  // let currentTime= moment().hour();
  // // if #blockTime < currentTime
  // if $("#blockTime" < currentTime)

  // css turn cells light grey.

  // current hour highlighted lime

  // if #blockTime > currentTime
  //css turn cells green
});
