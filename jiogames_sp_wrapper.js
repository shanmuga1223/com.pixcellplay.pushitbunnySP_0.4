var adSpotInterstitial = "3oqceyn2";
var adSpotRewardedVideo = "sycg5hki";
var adSpotInStreamVideo = "";
var package = "com.pixcellplay.pushitbunnySP";
var isAdReady = false;
var isRVReady = false;
var isINSReady = false;
var isRewardUser = false;

console.log("Jiogames: Initialized SDK in .js!");

function postScore(score) {
    console.log("Jiogames: postScore() ",score);
    if(!score){
        console.log("Jiogames: postScore() no value ",score);
    }
    // window.topScore is integer
    if  (window.DroidHandler) {
        window.DroidHandler.postScore(score);
    }
}


function cacheAdMidRoll(adKeyId, source) {
    console.log ("cacheAdMidRoll Called in js");
    if(!adKeyId || !source){
        adKeyId? null: (console.log("Jiogames: cacheAdMidRoll() no adKeyId to cacheAd ",adKeyId));
        source? null : (console.log("Jiogames: cacheAdMidRoll() no source to cacheAd ",source));
        return;
    }
    if (window.DroidHandler) {
        window.DroidHandler.cacheAd(adKeyId, source);
    }
}

function showAdMidRoll(adKeyId, source) {
    console.log ("showAdMidRoll Called in js");
    if(!adKeyId || !source){
        adKeyId? null: (console.log("Jiogames: showAdMidRoll() no adKeyId to showAd ",adKeyId));
        source? null : (console.log("Jiogames: showAdMidRoll() no source to showAd ",source));
        return;
    }
    if (window.DroidHandler) {
        window.DroidHandler.showAd(adKeyId, source);
    }
}

function cacheAdRewardedVideo(adKeyId, source) {
    console.log ("cacheAdRewardedVideo Called in js");    
    if (!adKeyId || !source) {
        adKeyId ? null : (console.log("Jiogames: cacheAdRewardedVideo() no adKeyId to cacheAd ", adKeyId));
        source ? null : (console.log("Jiogames: cacheAdRewardedVideo() no source to cacheAd ", source));
        return;
    }
    if (window.DroidHandler) {
        window.DroidHandler.cacheAdRewarded(adKeyId, source);    
    }
}

function showAdRewardedVideo(adKeyId, source) {
    console.log ("showAdRewardedVideo Called in js");      
    if (!adKeyId || !source) {
        adKeyId ? null : (console.log("Jiogames: showAdRewardedVideo() no adKeyId to showAd ", adKeyId));
        source ? null : (console.log("Jiogames: showAdRewardedVideo() no source to showAd ", source));
        return;
    }
    if (window.DroidHandler) {
        isRewardUser = false;
        window.DroidHandler.showAdRewarded(adKeyId, source);
    }
}

function cacheAdInstream(adKeyId, source) {
    if (!adKeyId || !source) {
        adKeyId ? null : (console.log("Jiogames: cacheAdInstream() no adKeyId to cacheAd ", adKeyId));
        source ? null : (console.log("Jiogames: cacheAdInstream() no source to cacheAd ", source));
        return;
    }
    if (window.DroidHandler) {
        window.DroidHandler.cacheAdInstream(adKeyId, source);
    }
}

function showAdInstream(adKeyId, source) {
    if (!adKeyId || !source) {
        adKeyId ? null : (console.log("Jiogames: showAdInstream() no adKeyId to showAd ", adKeyId));
        source ? null : (console.log("Jiogames: showAdInstream() no source to showAd ", source));
        return;
    }
    if (window.DroidHandler) {
        window.DroidHandler.showAdInstream(adKeyId, source);
    }
}


function setInStreamControl(adKeyId, visible) {
    console.log("Jiogames: setInStreamControl() for adSpotKey: "+adKeyId+" visible "+visible);
    if (!adKeyId || !visible) {
        adKeyId ? null : (console.log("Jiogames: setInStreamControl() no adKeyId ", adKeyId));
        visible ? null : (console.log("Jiogames: setInStreamControl() no visible ", visible));
        return;
    }
    if (window.DroidHandler) {
        window.DroidHandler.setInStreamControl(adKeyId, visible);       
    }
}

function isSoundEnable() {
    return window.JioGames_isGameSound;
}

function getUserProfile() {
    console.log("Jiogames: getUserProfile called");
    if (window.DroidHandler) {
        window.DroidHandler.getUserProfile();
    }
}

window.onAdReady = function (adSpotKey) {
     console.log("JioGames: onAdReady "+adSpotKey.toString());
     adSpotKey == adSpotInterstitial && (isAdReady = true, console.log("JioGames: onAdReady MidRoll " + isAdReady));
     adSpotKey == adSpotRewardedVideo && (isRVReady = true, console.log("JioGames: onAdReady RewardedVideo " + isRVReady));   
};

window.onAdPrepared = function (adSpotKey) {
    console.log("JioGames: onAdPrepared "+adSpotKey.toString());
    adSpotKey == adSpotInterstitial && (isAdReady = true, console.log("JioGames: onAdPrepared MidRoll " + isAdReady));
    adSpotKey == adSpotRewardedVideo && (isRVReady = true, console.log("JioGames: onAdPrepared RewardedVideo " + isRVReady));   
};

// window.onAdClose = function (adSpotKey) {
//     console.log("JioGames: onAdClose "+adSpotKey.toString());
//     adSpotKey == adSpotInterstitial && (isAdReady = false, console.log("JioGames: onAdClose MidRoll " + isAdReady));
//     adSpotKey == adSpotRewardedVideo && (isRVReady = false, console.log("JioGames: onAdClose RewardedVideo " + isRVReady));
//     if (adSpotKey == adSpotRewardedVideo && isRewardUser) {
//         GratifyReward();
//         //Gratify User
//     }
// };

window.onAdClosed = function (data, pIsVideoCompleted, pIsEligibleForReward) {
    var localData = data.split(",");
    var adSpotKey = data;
    var isVideoCompleted = pIsVideoCompleted;
    var isEligibleForReward = pIsEligibleForReward;

    if (localData != null && localData.length > 1) {
        adSpotKey = localData[0].trim();
        isVideoCompleted = Boolean(localData[1].trim());
        isEligibleForReward = Boolean(localData[2].trim());
    }
    //console.log("JioGames: onAdClosed "+data.toString(), "localData "+localData[0]+" "+localData[1]+" "+localData[2]);

    adSpotKey == adSpotInterstitial && (isAdReady = false, console.log("JioGames: onAdClose MidRoll " + isAdReady));
    adSpotKey == adSpotRewardedVideo && (isRVReady = false, console.log("JioGames: onAdClose RewardedVideo " + isRVReady));

    if (adSpotKey == adSpotRewardedVideo && isVideoCompleted) {
        //console.log("Rewarded Ad Closed moving to gratification ! ");
        GratifyReward();
        isRewardUser = isEligibleForReward;
        //Gratify User
    } else {
        //console.log("Interstitial Ad Closed js! ");
        unityGameInstance.SendMessage('Jio', 'OnInterstitialAdShownOrClosed');
    }
};

window.onAdError = function (data, pErrorMessage) {
    var localData = data.split(",");
    var adSpotKey = data;
    var errorMessage = pErrorMessage;
    if (localData != null && localData.length > 1) {
        adSpotKey = localData[0].trim();
        errorMessage = localData[1].trim();
    }

    console.log("JioGames: onAdError "+data.toString()+" localData "+localData[0]+" "+localData[1]);
    adSpotKey == adSpotInterstitial && (isAdReady = false, console.log("JioGames: onAdError MidRoll " + isAdReady+" errorMessage "+errorMessage));
    adSpotKey == adSpotRewardedVideo && (isRVReady = false, console.log("JioGames: onAdError RewardedVideo " + isRVReady+" errorMessage "+errorMessage));
};

window.onAdFailedToLoad = function (data, pDescription){
    var localData = data.split(",");
    var adSpotKey = data;
    var description = pDescription;

    if (localData != null && localData.length > 1) {
        adSpotKey = localData[0].trim();
        description = localData[1].trim();
    }

    console.log("JioGames: onAdFailedToLoad "+data.toString()+" localData "+localData[0]+" "+localData[1]);
    
    adSpotKey == adSpotInterstitial && (isAdReady = false, console.log("JioGames: onAdFailedToLoad MidRoll " + isAdReady+" description "+description));
    adSpotKey == adSpotRewardedVideo && (isRVReady = false, console.log("JioGames: onAdFailedToLoad RewardedVideo " + isRVReady+" description "+description));  

    if (adSpotKey == adSpotRewardedVideo) {
        console.log("Rewarded Ad Failed to Open js! ");
        unityGameInstance.SendMessage('Jio', 'OnRewardedAdFailedToShow');
    } else {
        console.log("Interstitial Failed to Open js! ");
        unityGameInstance.SendMessage('Jio', 'OnInterstitialAdShownOrClosed');
    }
};

// window.onAdMediaEnd = function (data, pSuccess, pValue) {
//     var localData = data.split(",");
//     var adSpotKey = data;
//     var success = pSuccess;
//     var value = pValue;

//     if (localData != null && localData.length > 1) {
//         adSpotKey = localData[0].trim();
//         success = Boolean(localData[1].trim());
//         value = parseInt(localData[2].trim());
//     }    
//     console.log("JioGames: onAdMediaEnd "+adSpotKey.toString());
//     adSpotKey == adSpotRewardedVideo && (isRVReady = false, console.log("JioGames: onAdMediaEnd RewardedVideo " + isRVReady));
//     if (adSpotKey == adSpotRewardedVideo && success) {
//         isRewardUser = success;
//     }

// };

window.onAdClick = function (adSpotKey) {};
window.onAdMediaCollapse = function (adSpotKey) {};
window.onAdMediaExpand = function (adSpotKey) {};
window.onAdMediaStart = function (adSpotKey) {};
window.onAdRefresh = function (adSpotKey) {};
window.onAdRender = function (adSpotKey) {};
window.onAdRender = function (adSpotKey) {};
window.onAdReceived = function (adSpotKey) {};
window.onAdSkippable = function (adSpotKey) {};
window.onAdView = function (adSpotKey) {};

window.onUserProfileResponse = function(message)
{
   console.log("JioGames: onUserProfileResponse "+[JSON.stringify(message)]);
};

window.onClientPause = function () {
    console.log("JioGames: onClientPause called");
    unityGameInstance.SendMessage('Jio', 'PauseGame');  // Set the timescale to zero 
};

window.onClientResume = function () {
    console.log("JioGames: onClientResume called");
    unityGameInstance.SendMessage('Jio', 'ResumeGame');  // Set the timescale to zero 
    if (gratifyUser()) {
        //call that method from here
    }
};


function GratifyReward() {
    //console.log("JioGames: GratifyReward Game user here");
    console.log("Rewarded! ");
    unityGameInstance.SendMessage('Jio', 'OnRewardGranted');
    //isRewardUser = false;
}

function gratifyUser() {
    return isRewardUser;
}


/*
function cacheAd() {
     if (!isAdReady) {
        cacheAdMidRoll(adSpotInterstitial, package);
    }
}

function cacheAdRewarded() {
    if (!isRVReady) {
        cacheAdRewardedVideo(adSpotRewardedVideo, package);
    }    
}

function showAd() {
    if (isAdReady) {
        showAdMidRoll(adSpotInterstitial, package);
    }
}

function showAdRewarded() {
    if (isRVReady) {
        showAdRewardedVideo(adSpotRewardedVideo, package);
        
    }
}
*/

// Callback received whenever the Jio app is sent to background or brought to foreground
document.addEventListener("visibilitychange", function() {
     if (document.visibilityState === 'visible') {
        console.log("JioGames: App Visible");
        unityGameInstance.SendMessage('Jio', 'ResumeGameSound');
     } else {  
        console.log("JioGames: App Hidden");
        unityGameInstance.SendMessage('Jio', 'PauseGameSound');
     }
});