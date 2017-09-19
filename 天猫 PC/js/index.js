/*
* @Author: lenovo
* @Date:   2017-09-18 17:16:11
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-19 18:45:20
*/
window.onload=function(){
    // 侧导航
	let left=document.getElementsByClassName('banner-left')[0];
	let wordli=left.getElementsByTagName('li');
	let aside=document.getElementsByClassName('aside');
	for(let i=0;i<wordli.length;i++){
		wordli[i].onmouseover=function(){
			// let item=this[i].getElementsByClassName('aside');
			// item.style.display='block';
			aside[i].style.display='block';
		}
		wordli[i].onmouseout=function(){
			aside[i].style.display='none';
		}
	}
    // 点击效果
	let bannerImg=document.getElementsByClassName('banner-img')[0];
	let img=bannerImg.getElementsByTagName('li');
	let yuan=document.getElementsByClassName('yuan')[0];
	let yuan1=yuan.getElementsByTagName('li');
    let num=0;
      for(let i=0;i<yuan1.length;i++){
         yuan1[i].onmouseover=function(){
            for(let j=0;j<img.length;j++){
                img[j].style.display='none';
                yuan1[j].style.background='#A2A2A2';
                    }
            img[i].style.display='block';
            yuan1[i].style.background='yellowgreen';
            num=i;
         }
        
     }
     let banner=document.getElementsByClassName('banner')[0];
     // 轮播图自动轮播
     //停止
     let t=setInterval(move,1000);
     banner.onmouseover=function(){
        clearInterval(t);
      }
     banner.onmouseout=function(){
        t=setInterval(move,1000);
     }  
     
     function move(){
         num++;
         if(num==img.length)
         {num=0;}
         for(let i=0;i<img.length;i++){
            img[i].style.display='none'; 
            yuan1[i].style.background='#A2A2A2';
         }
         img[num].style.display='block'; 
         yuan1[num].style.background='yellowgreen';
     }
    
}


   // let temp=0;
        // for(var i=0;i<yuan1.length;i++){
        //     yuan1[i].index=i;
        //     yuan1[i].onclick=function(){
        //        img[temp].style.display='none';
        //        img[this.index].style.display='block';
        //        temp=this.index;
        //     }
        // }
   


        // for(let i=0;i<yuan1.length;i++){
        //  yuan1[i].onmouseover=function(){
        //      for(let j=0;j<img.length;j++){
        //          img[j].style.zIndex=0;
        //      }
        //      img[i].style.zIndex=99;
        //  }
        // }
  
        // let temp=0;
        // for(var i=0;i<yuan1.length;i++){
        //     yuan1[i].onclick=(function(i){
        //            return function(){
        //             img[temp].style.display='none';
        //             img[i].style.display='block';
        //             temp=i;
        //            }
        //     })(i)
        // }
     // let temp=0;
     // for(let i=0;i<yuan1.length;i++){
     //     yuan1[i].onmouseover=function(){
     //         img[temp].style.display='none';
     //         img[i].style.display='block';
     //         temp=i;
     //     }
     // }
     // 
     //         // let temp=0;
        // for(var i=0;i<yuan1.length;i++){
        //     yuan1[i].onclick=(function(i){
        //            return function(){
        //             img[temp].style.display='none';
        //             img[i].style.display='block';
        //             temp=i;
        //            }
        //     })(i)
        // }