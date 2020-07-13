import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { MemoryRouter } from "react-router";
import { QuantityInput } from ".";
import { IQuantityInput } from "./QuantityInput";

const DEFAULT_PROPS: IQuantityInput = {
  quantity: 1,
  maxQuantity: 10,
  disabled: false,
  onQuantityChange: (value: number) => undefined,
  hideErrors: false,
};

storiesOf("@components/molecules/QuantityInput", module)
  .addParameters({ component: QuantityInput })
  .addDecorator(story => (
    <IntlProvider locale="en">
      <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
    </IntlProvider>
  ))
  .add("default", () => <QuantityInput {...DEFAULT_PROPS} />)
  .add("disabled", () => <QuantityInput {...DEFAULT_PROPS} disabled />);