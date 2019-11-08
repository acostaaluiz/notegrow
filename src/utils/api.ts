import Config from 'react-native-config';
const { SERVER_URL, SERVER_MOCK } = Config;

const API = {
  url: SERVER_URL,
  urlMock: SERVER_MOCK,

  _handleError(_res: Response) {
    return _res.ok ? _res : Promise.reject(_res.statusText);
  },

  /**
     * Check whether the content type is correct before you process it further.
     */
  _handleContentType(_response: Response) {
    const contentType = _response.headers.get('content-type');

    if (contentType && contentType.includes('application/json'))
      return _response.json();
    else
      return _response.status;
  },

  get(endpoint: string, headersProp?: Headers | string[][] | Record<string, string>): Promise<any> {

    let headers = {
    };

    if (headersProp) {
      headers = { ...headers, ...headersProp };
    }

    return fetch(`${this.url}/${endpoint}`, {
      method: 'GET',
      headers
    })
      .then(this._handleError)
      .then(this._handleContentType)
      .catch((error) => { throw new Error(error); });
  },

  getMock(endpoint: string, headersProp?: Headers | string[][] | Record<string, string>): Promise<any> {

    let headers = {
    };

    if (headersProp) {
      headers = { ...headers, ...headersProp };
    }

    return fetch(`${this.urlMock}/${endpoint}`, {
      method: 'GET',
      headers
    })
      .then(this._handleError)
      .then(this._handleContentType)
      .catch((error) => { throw new Error(error); });
  },

  post<T>(endpoint: string, body: T, headersProp?: Headers | string[][] | Record<string, string>): Promise<any> {
    const _body = JSON.stringify(body);

    let headers = {
    };

    if (headersProp) {
      headers = { ...headers, ...headersProp };
    }

    console.log(this.url + '/' + endpoint);

    return fetch(`${this.url}/${endpoint}`, {
      method: 'POST',
      headers,
      body: _body
    })
      .then(this._handleError)
      .then(this._handleContentType)
      .catch((error) => { throw new Error(error); });
  }
};
export default API;
