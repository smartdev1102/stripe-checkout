const stripe = require('stripe')('sk_test_51MNhvTKKJ0wjtnKvUNbpRyX8pXVaQRu4Ye6XJViL6MRm3lHQcnlcNeIznlthsWeMhA8CqGgYMpwGoxf1i0TsKQDA00YIW7dEFF');

async function create() {
    const product = await stripe.products.create({
      name: 'RICHLISTED',
    })

    const price = await stripe.prices.create({
        unit_amount: 10000,
        currency: 'usd',
        product: product.id,
    });
    console.log(price);
}

create();