$(document).ready(function () {
  //Active time, date.
  $('.lead').text(moment().format('MMM Do YY'));
  //local storage
  function saveUserData() {
    $('#save7').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input7').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input7').append(userData);
      console.log(userText);
      //used an array to retreive the local storage. One for "time", one for the note."Worked well. Took me a couple lifelines to get this right.
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
      var data = JSON.parse(localStorage.getItem('Notes')) || [];
      var n = {
        time: '8',
        note: userText,
      };
      data.push(n);
      localStorage.setItem('Notes', JSON.stringify(data));
    });
    $('#save9').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input9').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input9').append(userData);
      console.log(userText);
      var data = JSON.parse(localStorage.getItem('Notes')) || [];
      var n = {
        time: '9',
        note: userText,
      };
      data.push(n);
      localStorage.setItem('Notes', JSON.stringify(data));
    });

    $('#save10').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input10').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input10').append(userData);
      console.log(userText);
      var data = JSON.parse(localStorage.getItem('Notes')) || [];
      var n = {
        time: '10',
        note: userText,
      };
      data.push(n);
      localStorage.setItem('Notes', JSON.stringify(data));
    });

    $('#save11').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input11').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input11').append(userData);
      console.log(userText);
      var data = JSON.parse(localStorage.getItem('Notes')) || [];
      var n = {
        time: '11',
        note: userText,
      };
      data.push(n);
      localStorage.setItem('Notes', JSON.stringify(data));
    });

    $('#save12').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input12').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input12').append(userData);
      console.log(userText);
      var data = JSON.parse(localStorage.getItem('Notes')) || [];
      var n = {
        time: '12',
        note: userText,
      };
      data.push(n);
      localStorage.setItem('Notes', JSON.stringify(data));
    });

    $('#save13').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input13').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input13').append(userData);
      console.log(userText);
      var data = JSON.parse(localStorage.getItem('Notes')) || [];
      var n = {
        time: '13',
        note: userText,
      };
      data.push(n);
      localStorage.setItem('Notes', JSON.stringify(data));
    });

    $('#save14').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input14').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input14').append(userData);
      console.log(userText);
      var data = JSON.parse(localStorage.getItem('Notes')) || [];
      var n = {
        time: '14',
        note: userText,
      };
      data.push(n);
      localStorage.setItem('Notes', JSON.stringify(data));
    });

    $('#save15').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input15').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input15').append(userData);
      console.log(userText);
      var data = JSON.parse(localStorage.getItem('Notes')) || [];
      var n = {
        time: '15',
        note: userText,
      };
      data.push(n);
      localStorage.setItem('Notes', JSON.stringify(data));
    });

    $('#save16').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input16').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input16').append(userData);
      console.log(userText);
      var data = JSON.parse(localStorage.getItem('Notes')) || [];
      var n = {
        time: '16',
        note: userText,
      };
      data.push(n);
      localStorage.setItem('Notes', JSON.stringify(data));
    });

    $('#save17').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input17').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input17').append(userData);
      console.log(userText);
      var data = JSON.parse(localStorage.getItem('Notes')) || [];
      var n = {
        time: '17',
        note: userText,
      };
      data.push(n);
      localStorage.setItem('Notes', JSON.stringify(data));
    });
    $('#save18').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input18').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input18').append(userData);
      console.log(userText);
      var data = JSON.parse(localStorage.getItem('Notes')) || [];
      var n = {
        time: '18',
        note: userText,
      };
      data.push(n);
      localStorage.setItem('Notes', JSON.stringify(data));
    });
    $('#save19').on('click', function (event) {
      event.preventDefault();
      let userText = $('#user-input19').val();
      let userData = $('<p>' + userText + '</p>');
      $('#user-input19').append(userData);
      console.log(userText);
      var data = JSON.parse(localStorage.getItem('Notes')) || [];
      var n = {
        time: '19',
        note: userText,
      };
      data.push(n);
      localStorage.setItem('Notes', JSON.stringify(data));
    });
  }
  saveUserData();
  // The time, Jquery saved alot of time. The add and remove class did well for me!
  $(".note-row").each(function () {
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

  });
//function name explains itself.
  function dispData() {
    var data = JSON.parse(localStorage.getItem('Notes')) || [];

    for (var i = 0; i < data.length; i++) {
      var id = data[i].time;
      $('#user-input' + id).val(data[i].note);
    }
  }

  dispData();

});
