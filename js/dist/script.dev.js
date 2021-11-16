"use strict";

alert("welcome to the akan's");

function ghana() {
  var d = new Date();
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value - 1;
  var year = document.getElementById("year").value;

  if (day < 0 || day > 31) {
    alert("please enter the correct date");
  } else if (day == "") {
    alert("please fill in the field below correctly");
  } else {
    d.setday(day);
  }

  if (month < 1 || month > 12) {
    alert("please enter the correct month");
  } else if (month == "") {
    alert("please fill the field below correctly");
  } else {
    d.setmonth(month);
  }

  if (year < 0 || year > 2022) {
    alert("please enter the correct year");
  } else if (year == "") {
    alert("please fill the field below correctly");
  } else {
    d.setyear(Year);
  }

  var day = d.getDay();
  var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  var male = ["kwasi", "kwadwo", "kwabena", "kwaku", "Yaw", "kofi", "kwame"];
  var female = ["akosua", "Adwoa", "abeena", "Akua", "Yaa", "Afua", "Ana"]; //male functions

  function getghana() {
    var ismale = document.getElementByid("male").checked;
    var isfemale = document.getElementById("female").checked;

    if (ismale == true && isfemale == false) {
      if (day == 0) {
        alert("your Akan name is" + male[0]);
      } else if (day == 1) {
        alert("your Akan name is" + male[1]);
      } else if (day == 2) {
        alert("your Akan name is" + male[2]);
      } else if (day == 3) {
        alert("your Akan name is" + male[3]);
      } else if (day == 4) {
        alert("your Akan name is" + male[4]);
      } else if (day == 5) {
        alert("your Akan name is" + male[5]);
      } else if (day == 6) {
        alert("your Akan name is" + male[6]);
      } else {
        alert("enter valid values");
      }
    } //female functions
    else if (ismale == false && isfemale == true) {
        if (day == 0) {
          alert("your Akan name is" + female[0]);
        } else if (day == 1) {
          alert("your Akan name is" + female[1]);
        } else if (day == 2) {
          alert("your Akan name is" + female[2]);
        } else if (day == 3) {
          alert("your Akan name is" + female[3]);
        } else if (day == 4) {
          alert("your Akan name is" + female[4]);
        } else if (day == 5) {
          alert("your Akan name is" + female[5]);
        } else if (day == 6) {
          alert("your Akan name is" + female[6]);
        } else {
          alert("enter the valid values");
        }
      }
  }

  getghana();
}