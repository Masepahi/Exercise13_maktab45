$(function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("id");
  $.ajax({
    type: "post",
    url: `/car${myParam}`,
    success: function (response) {
      console.log(response);
      $("#container").html(`<h1>${response.title}</h1>
            <p>${response.description}</p>`);
    },
    error: function (err) {},
  });
});
