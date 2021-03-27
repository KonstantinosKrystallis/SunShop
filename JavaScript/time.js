function startTime() {
  console.log("startTime running");
  document.getElementById('timezone').innerHTML = Intl.DateTimeFormat().resolvedOptions().timeZone + " "
    + offsetToUTC(new Date().getTimezoneOffset()).toString();
  refreshTime();
}

function refreshTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('display-time').innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(refreshTime, 500);
}

function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

//Does not account for special timezones
function offsetToUTC(offset) {
  offset = (offset / 60)
  if (offset < 0)
    return " UTC" + " +" + (-offset);
  else if (offset > 0)
    return " UTC" + " -" + (offset);
  else
    return 0 + " UTC";
}