import { extension, Banner } from "@shopify/ui-extensions/checkout";

export default extension("purchase.checkout.block.render", (root, api) => {
  const { extension, i18n } = api;

  root.appendChild(
    root.createComponent(
      Banner,
      { status: 'info',
        title: "Delivery delay due to large number of order."
      },
    )
  );
});