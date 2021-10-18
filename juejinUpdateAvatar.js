fetch("https://juejin.cn/web/user/update/user_info/", {
	headers: {
		accept: "*/*",
		"accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
		"cache-control": "no-cache",
		"content-type":
			"multipart/form-data; boundary=----WebKitFormBoundary85EiYKBjSAycuybQ",
		pragma: "no-cache",
		"sec-ch-ua":
			'"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
		"sec-ch-ua-mobile": "?0",
		"sec-ch-ua-platform": '"Windows"',
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin",
	},
	referrer: "https://juejin.cn/user/settings/profile",
	referrerPolicy: "strict-origin-when-cross-origin",
	body: '------WebKitFormBoundary85EiYKBjSAycuybQ\r\nContent-Disposition: form-data; name="aid"\r\n\r\n2608\r\n------WebKitFormBoundary85EiYKBjSAycuybQ\r\nContent-Disposition: form-data; name="avatar"\r\n\r\nhttps://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8783497b1cd445afaaeb16575c181d7f~tplv-k3u1fbpfcp-watermark.image?\r\n------WebKitFormBoundary85EiYKBjSAycuybQ--\r\n',
	method: "POST",
	mode: "cors",
	credentials: "include",
});
