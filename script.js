var myDiv = 100;

for (let i = 0; i < myDiv; i++) {
  var div = document.createElement("div");
  div.className = "divElement";
  document.getElementById("container").appendChild(div);

  var remaining = i % 2;
  console.log(remaining);

  if (remaining == 0) {
    div.style.backgroundColor = "red";
  } else {
    div.style.backgroundColor = "blue";
  }

  div.addEventListener("click", function () {
    this.style.backgroundColor = "black";
  });
}
