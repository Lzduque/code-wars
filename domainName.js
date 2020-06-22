function domainName(url) {
  let domain;
  if (url.includes('http://www.')) {
    domain = url.slice(11);
  } else if (url.includes('http://')) {
    domain = url.slice(7);
  } else if (url.includes('https://www.')) {
    domain = url.slice(12);
  } else if (url.includes('https://')) {
    domain = url.slice(8);
  } else if (url.includes('www.')) {
    domain = url.slice(4);
  } else {
    domain = url;
  }
  return domain.split('.')[0];
}

console.log(domainName("http://google.com"), "google");
console.log(domainName("http://google.co.jp"), "google");
console.log(domainName("www.xakep.ru"), "xakep");
console.log(domainName("https://youtube.com"), "youtube");
console.log(domainName("http://www.rh8z3l0.co.uk/default.html"), "rh8z3l0");