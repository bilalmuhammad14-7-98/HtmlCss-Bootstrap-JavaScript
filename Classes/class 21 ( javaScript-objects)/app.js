var obj = [
  {
    name: "Bilal",
    age: 36,
    des: "doctor",
  },

  {
    name: "hello world",
    age: 36,
    des: "doctor",
  },

  {
    name: "hello world",
    age: 36,
    des: "doctor",
  },
];

console.log(obj);

// for (var i = 0; i < obj.length; i++) {
//   //   console.log(obj[i], "objects");
//   for (var key in obj[i]) {
//     console.log(key, obj[i][key], "keyes");
//     document.write(key + ": " + obj[i][key] + "<br/>");
//   }
// }

for (var i = 0; i < obj.length; i++) {
  console.log(obj[i], "object");

  for (var key in obj[i]) {
    document.write(key + "-" + obj[i][key] + "<br/>");
  }
}
