import React from "react";
import { FormattedMessage } from "react-intl";

import { Link } from "react-router-dom";
import { Button, OverlayTheme, OverlayType } from "..";
import { OverlayContextInterface } from "../Overlay";

const CheckoutAsGuest: React.FC<{
  overlay: OverlayContextInterface;
  checkoutUrl: string;
}> = ({ overlay, checkoutUrl }) => (
  <div className="checkout-login__guest">
    <h3 className="checkout__header">
      <FormattedMessage defaultMessage="Register as new user" />
    </h3>
    <p>
      <FormattedMessage defaultMessage="Please proceed to register yourself as user to proceed our checkout process. This will help you to track all your orders at one place." />
    </p>
    <Link to={undefined} onClick={() => overlay.show(OverlayType.register, OverlayTheme.right)}>
      <Button testingContext="continueAsGuestButton">
        <FormattedMessage defaultMessage="Signup" />
      </Button>
    </Link>

    {/* <p>
      <FormattedMessage defaultMessage="or you can" />{" "}
      <span
        data-test="showRegisterOverlay"
        className="u-link"
        onClick={() => overlay.show(OverlayType.register, OverlayTheme.right)}
      >
        <FormattedMessage defaultMessage="create an account" />
      </span>
    </p> */}
  </div>
);

export default CheckoutAsGuest;
