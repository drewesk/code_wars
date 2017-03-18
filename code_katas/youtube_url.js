/*
 Please write a function that converts the string in the correct format for the iframe.

 There are many kinds of links to the video:

 https://www.youtube.com/embed/UN8oLGBNXpE - is correct for iframe

 https://www.youtube.com/watch?v=UN8oLGBNXpE

 http://www.youtube.com/watch?v=UN8oLGBNXpE

 https://youtu.be/UN8oLGBNXpE

 If we insert the first link in the iframe, it works, but another do not work.
*/

function makeYoutubeLink(str){
  var embedUrl = 'https://www.youtube.com/embed/';
  var iframeKey = str.substr(-11);
  return embedUrl + iframeKey;
}
