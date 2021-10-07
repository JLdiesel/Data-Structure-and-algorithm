const msg1: '123' = '123';
type Alignment = 'left' | 'right' | 'center';
let align: Alignment = 'left';
align = 'center';
align = 'right';
type Methods = 'GET' | 'POST';
/* type Request = {
    url: string,
    method:Methods
} */

function request(url: string, method: Methods) {}
/* const options:Request = {
    url: '/home',
    method: 'POST'
} */
const options = {
  url: '/home',
  method: 'POST',
} as const;
request(options.url, options.method);

export default {};
