#target photoshop
//@include "./console.jsxlib"

var console = new ConsoleLog();

for (i = 0; i < 20; i++) {
  console.log(i.toString());
  $.sleep(10)
}
