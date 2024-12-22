const rules = [
    {
        id: 1,
        priority: 1,
        action: {
            type: "redirect",
            redirect: {
                regexSubstitution: "\\1://\\2.sinaimg.cn/\\3"
            }
        },
        condition: {
            regexFilter: "^([^\\.]*)://([^/]*)\\.moyu\\.im/(.*)$",
            resourceTypes: [
                "csp_report",
                "font",
                "image",
                "main_frame",
                "media",
                "object",
                "other",
                "ping",
                "script",
                "stylesheet",
                "sub_frame",
                "webbundle",
                "websocket",
                "webtransport",
                "xmlhttprequest"
            ]
        }
    },
    {
        id: 2,
        priority: 1,
        action: {
            type: "modifyHeaders",
            requestHeaders: [
                {
                    "header": "referer",
                    "operation": "set",
                    "value": "https://weibo.com/"
                }
            ]
        },
        condition: {
            "regexFilter": "^[^\\.]*://[^/]*\\.sinaimg\\.cn/.*$",
            "resourceTypes": [
                "csp_report",
                "font",
                "image",
                "main_frame",
                "media",
                "object",
                "other",
                "ping",
                "script",
                "stylesheet",
                "sub_frame",
                "webbundle",
                "websocket",
                "webtransport",
                "xmlhttprequest"
            ]
        }
    },
    {
        id: 3,
        priority: 1,
        action: {
            type: "redirect",
            redirect: {
                regexSubstitution: "\\1://wx1.sinaimg.cn/\\2"
            }
        },
        condition: {
            regexFilter: "^([^\\.]*)://img\\.toto\\.im/(.*)$",
            resourceTypes: [
                "csp_report",
                "font",
                "image",
                "main_frame",
                "media",
                "object",
                "other",
                "ping",
                "script",
                "stylesheet",
                "sub_frame",
                "webbundle",
                "websocket",
                "webtransport",
                "xmlhttprequest"
            ]
        }
    }
];
chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: rules.map(r => r.id),
    addRules: rules,
});