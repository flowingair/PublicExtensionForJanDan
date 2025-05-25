const load = async () => {
    const oldRules = await chrome.declarativeNetRequest.getDynamicRules();
    const oldRuleIds = oldRules.map(rule => rule.id);
    const rules = [
        {
            id: 1,
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
            id: 2,
            priority: 2,
            action: {
                type: "redirect",
                redirect: {
                    regexSubstitution: "\\1://wx1.sinaimg.cn/\\2"
                }
            },
            condition: {
                regexFilter: "^([^\\.]*)://img\\.toto\\.im/(.*?)\\.webp$",
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
            id: 3,
            priority: 2,
            action: {
                type: "redirect",
                redirect: {
                    regexSubstitution: "\\1://wx1.sinaimg.cn/\\2.gif"
                }
            },
            condition: {
                regexFilter: "^([^\\.]*)://img\\.toto\\.im/(.*?)\\.mp4$",
                resourceTypes: [
                    "main_frame",
                ]
            }
        },
        {
            id: 4,
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
                    "image",
                    "main_frame",
                    "sub_frame",
                ]
            }
        }
    ];
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: oldRuleIds,
        addRules: rules,
    });
}
load();