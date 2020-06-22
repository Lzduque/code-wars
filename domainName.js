function domainName(url) {
  const www = url.split('www.');
  let domain;
  www.length >= 2 ? domain = www[1] : domain = www[0];

  const http = domain.split('//');
  http.length >= 2 ? domain = http[1] : domain = http[0];

  return domain.split('.')[0];
}


console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");
console.log(domainName("http://www.rh8z3l0.co.uk/default.html"), "rh8z3l0");