/**
 * Copyright (C) 2019 Paytm.
 */

import * as _Response from "./Response";
import * as _SecureResponseHeader from "../SecureResponseHeader"

/* interface: SecureResponse */
export interface SecureResponse extends _Response.Response {

    /**
     * @return SecureResponseHeader
     */
    getHead(): _SecureResponseHeader.SecureResponseHeader;
}