chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {

    if (changeInfo.status === 'complete') {


        if (tab.url.indexOf('laravel.com/docs') !== -1) {

            chrome.tabs.executeScript(tabId, {
                file: 'js/laravel.en.insert.js'
            });
        }

        if (tab.url.indexOf('laravel.kr/docs') !== -1) {

            chrome.tabs.executeScript(tabId, {
                file: 'js/laravel.ko.insert.js'
            });
        }

    }


});

