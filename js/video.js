var yt_frame = document.querySelector('.video__player'),
	video_placeholder = document.querySelector('.video__placeholder');
  
  video_placeholder.addEventListener('click',play);

function play(){
	yt_frame.contentWindow.postMessage(JSON.stringify({
                'event': 'command',
                'func': 'playVideo',
                'args': []
            }),'*');
          video_placeholder.style.display="none";  
}