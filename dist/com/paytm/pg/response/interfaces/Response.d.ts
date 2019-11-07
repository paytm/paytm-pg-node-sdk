/**
 * Copyright (C) 2019 Paytm.
 */
export interface Response {
    /**
     * @return ResponseHeader
     */
    getHead(): any;
    /**
     * @return BaseResponseBody
     */
    getBody(): any;
}
