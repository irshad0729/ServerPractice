// const stripe = require("stripe");

async function getAllUsers(req, res) {
  let data;

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      data = "irshad";
      resolve();
    }, 2000);
  });

  // const paymentIntent = stripe.createPaymentIntent({
  //   amount: 1000,
  //   currency: "USD",
  //   customer: '12345',
  // });

  // paymentIntent
  //   .then(function (response) {
  //     // The payment has been created successfully.
  //     console.log("payment has been created");
  //   })

  //   .catch(function (error) {
  //     // There was an error processing the payment.
  //     console.log("error :", error);
  //   });

  return await res.send(`<h1>getAllUserss</h1> ${data}`);
}

module.exports = {
  getAllUsers,
};
