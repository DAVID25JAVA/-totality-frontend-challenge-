("use strict");
const stripe = require("stripe")(process.env.VITE_STRIPE_SECRET_KEY);
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { properties } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        properties.map(async (products) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(products.id);

          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: item.title,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: products.attributes.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["AUS"] },
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.CLIENT_URL + "/success",
        cancel_url: process.env.CLIENT_URL + "?success=false",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: {properties, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
}));