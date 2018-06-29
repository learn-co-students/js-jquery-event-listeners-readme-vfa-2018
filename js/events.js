function getIt() {
  $('p') .click("hey!")
  return;
}
function frameIt() {
  $("img") .addClass("tasty")
  return;
}
function pressIt() {
  alert('g')
  return;
}
$("form").on("submit")
function submitIt() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
}}