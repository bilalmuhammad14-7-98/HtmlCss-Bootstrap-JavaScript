function getUserInfo() {
  var searchInp = document.getElementById("searchInput").value;
  console.log(searchInp, "searchInp");

  fetch("https://api.github.com/users/" + searchInp)
    .then(function (data) {
      return data.json();
    })
    .then(function (response) {
      console.log(response, "res");
      dataSync(response);
    })
    .catch(function (err) {
      console.log(err, "err");
    });
}

function dataSync(response) {
  console.log(response, "function response");

  var avatar = response.avatar_url;
  var followerscount = response.followers;
  var followingcount = response.following;
  var publicrepos = response.public_repos;
  var name = response.name;
  var address = response.location;
  var githubUrl = response.html_url;
  var bio = response.bio;
  var company = response.company;
  var blog = response.blog;

  document.getElementById(
    "img_avatar"
  ).style.backgroundImage = `url(${avatar})`;

  document.getElementById("followers-count").innerHTML = followerscount;
  document.getElementById("following-count").innerHTML = followingcount;
  document.getElementById("repos-count").innerHTML = publicrepos;
  document.getElementById("username").innerHTML = name;
  document.getElementById("useraddress").innerHTML = address;
  document.getElementById("user-company").innerHTML = company;
  document.getElementById("footer-details").innerHTML = bio;
  document.getElementById("github").href = githubUrl;
  document.getElementById("blog").href = blog;
  document.getElementById("searchInput").value = "";
}
