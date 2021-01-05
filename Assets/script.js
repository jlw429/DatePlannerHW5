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
  // getUserData();
  //timeRendering();

  //time rendering
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
