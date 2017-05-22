fetch("garychang.cn").then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
}).catch(function(e) {
  console.log(e);
});

// axios