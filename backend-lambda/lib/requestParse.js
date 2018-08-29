import queryString from 'query-string';

/**
 * Parse incoming lambda event to request
 *
 * @param event
 * @returns {Promise<{headers: (*|{}), params: (*|{}), query, body: *, method: *, path: *}>}
 */
const requestParse = async (event) => {
    const { pathParameters: params, httpMethod: method, queryStringParameters: query, body, headers, path, } = event;
    const enhancedQuery = queryString.parse(queryString.stringify(query || {}, { encode: false }));
    return {
        headers: headers || {},
        params: params || {},
        query: enhancedQuery,
        body,
        method,
        path,
    };
}

export {
  requestParse,
}