function removeUrlAnchor(url) {
    return url.split('#')[0];
}

console.log(removeUrlAnchor('www.codewars.com#about') === 'www.codewars.com');