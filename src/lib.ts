import { request, RequestOptions } from 'https';
import { ResponseObject } from './interfaces';

export default async function httpsRequest(
  urlOptions: RequestOptions,
  inputData = '',
): Promise<ResponseObject> {
  return new Promise((resolve, reject) => {
    const req = request(urlOptions, (res) => {
      const chunks: unknown[] = [];

      res.on('data', (chunk) => chunks.push(chunk));
      res.on('error', reject);
      res.on('end', () => {
        const { statusCode, headers } = res;
        const validResponse = statusCode && statusCode >= 200 && statusCode <= 299;
        const body = chunks.join('').trim();

        if (validResponse) {
          resolve({ response: res, body });
        } else {
          reject(
            new Error(
              `Request failed. HTTPS request error code ${statusCode}\n${body} \nResponse: ${res} \n\nHeaders: ${headers}`,
              { cause: { body, headers, response: res } },
            ),
          );
        }
      });
    });

    req.on('error', reject);
    req.write(inputData);
    req.end();
  });
}
