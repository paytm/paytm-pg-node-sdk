/**
 * Copyright (C) 2019 Paytm.
 */

/* interface: Response */
export interface Response {

    /**
     * @return ResponseHeader
     */
    getHead();

    /**
     * @return BaseResponseBody
     */
    getBody();
}