var urlParams = new URLSearchParams(window.location.search);
var sessionId = urlParams.get('session_id');

if (sessionId) {
  fetch('/checkout-session?sessionId=' + sessionId)
    .then(function (result) {
      return result.json();
    })
    .then(function (session) {
      var sessionJSON = JSON.stringify(session, null, 2);
      document.querySelector('pre').textContent = sessionJSON;
      $.post("/save_name", {
        name: session.customer_details.name
      },
      function(data){
        alert(data);
      })
    })
    .catch(function (err) {
      console.log('Error when fetching Checkout session', err);
    });
}
