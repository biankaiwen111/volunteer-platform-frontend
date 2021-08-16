const agreement = {
  sections: [],
};

$("#university-name").on("input", function () {
  console.log($(this).val());
  agreement["university"] = $(this).val();
});

$("#college-name").on("input", function () {
  console.log($(this).val());
  agreement["cc"] = $(this).val();
});

$("#major-name").on("input", function () {
  console.log($(this).val());
  agreement["major"] = $(this).val();
});

$("#server-button").bind("click", function () {
  console.log(document.URL);
  alert("data sent to server!");
  $.ajax({
    type: "POST",
    dataType: "json",
    data: JSON.stringify(agreement),
    contentType: "application/json",
    url: "https://jolly-hamilton-ea5d60.netlify.app/.netlify/functions/submit",
    success: function (data) {
      console.log("success");
      console.log(data);
    },
  });
});
