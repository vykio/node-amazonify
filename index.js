function amazonify(urlString, affiliateTag) {
    const parsedUrl = new URL(urlString);

    if (!parsedUrl.hostname || parsedUrl.hostname.indexOf('amazon') === -1) {
        return null; // Invalid Amazon URL
    }

    const queryParams = new URLSearchParams(parsedUrl.search);
    queryParams.set('tag', affiliateTag);

    parsedUrl.search = queryParams.toString();

    return parsedUrl.toString();
}

module.exports = amazonify;