function toUps() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function smlImg(x) {
  x.style.height="195px";
x.style.width="192px"
}

function bigImg(x) {
x.style.height="422px";
x.style.width="292px"
}

function showList() {
var r = document.createElement("LI");
  var s = document.createTextNode("Coimbatore");
  r.appendChild(s);
  document.getElementById("myList").appendChild(r);

  var a = document.createElement("LI");
  var b = document.createTextNode("Mysuru");
  a.appendChild(b);
  document.getElementById("myList").appendChild(a);

  var c = document.createElement("LI");
  var d = document.createTextNode("Vijayawada");
  c.appendChild(d);
  document.getElementById("myList").appendChild(c);

  var e = document.createElement("LI");
  var f = document.createTextNode("Nagpur");
  e.appendChild(f);
  document.getElementById("myList").appendChild(e);

  var g = document.createElement("LI");
  var h = document.createTextNode("Surat");
  g.appendChild(h);
  document.getElementById("myList").appendChild(g);

  var i = document.createElement("LI");
  var j = document.createTextNode("Indore");
  i.appendChild(j);
  document.getElementById("myList").appendChild(i);

  var k = document.createElement("LI");
  var l = document.createTextNode("Kanpur");
  k.appendChild(l);
  document.getElementById("myList").appendChild(k);

  var m = document.createElement("LI");
  var n = document.createTextNode("Cuttack");
  m.appendChild(n);
  document.getElementById("myList").appendChild(m);
}
