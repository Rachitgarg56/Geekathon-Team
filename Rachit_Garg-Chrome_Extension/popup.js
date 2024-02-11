import { getActiveTabURL  } from "./utils.js";

const addNewBookmark = (bookmarkElement, bookmark) => {
    const bookmarkTitleElement = document.createElement("div");
    const newBookMarkElement = document.createElement("div");
    const controlsElement = document.createElement("div");

    bookmarkTitleElement.textContent = bookmark.desc;
    bookmarkTitleElement.className = "bookmark-title";

    controlsElement.className = "bookmark-controls";

    newBookMarkElement.id = "bookmark-" + bookmark.time;
    newBookMarkElement.className = "bookmark";
    newBookMarkElement.setAttribute("timestamp", bookmark.time);

    setBookmarkAttributes("play", onPlay, controlsElement);

    newBookMarkElement.appendChild(bookmarkTitleElement);
    newBookMarkElement.appendChild(controlsElement);
    bookmarkElement.appendChild(newBookMarkElement);
};

const viewBookmarks = (currentBookmarks=[]) => {
    const bookmarkElement = document.getElementById("bookmarks");
    bookmarkElement.innerHTML = "";

    if (currentBookmarks.length > 0) {
        for (let i = 0; i < currentBookmarks.length; i++) {
            const bookmark = currentBookmarks[i];
            addNewBookmark(bookmarkElement, bookmark);
        }
    } else {
        bookmarkElement.innerHTML = '<i class="row">No bookmarks to show</i>';
    }
};

const onPlay = () => {

};


const setBookmarkAttributes = (src, eventListener, controlParentElement) => {
    const controlElement = document.createElement("img");

    controlElement.src = "assets/" + src + ".png";
    controlElement.title = src;
    controlElement.addEventListener("click", eventListener);
    controlParentElement.appendChild(controlElement);
};


document.addEventListener("DOMContentLoaded", async () => {
    const activeTab = await getActiveTabURL();
    const queryParameters = activeTab.url.split("?")[1];
    const urlParameters = new URLSearchParams(queryParameters);

    const currentVideo = urlParameters.get("v");

    if (activeTab.url.includes("youtube.com/watch") && currentVideo) {
        chrome.storage.sync.get([currentVideo], (data) => {
            const currentVideoBookmarks = data[currentVideo] ? JSON.parse(data[currentVideo]) : [];
            console.log('view');
            viewBookmarks(currentVideoBookmarks);
        })
    } else {
        const container = document.getElementsByClassName("container")[0];
        container.innerHTML = '<div class="title">This is not a youtube video page.</div>';
    }
});

