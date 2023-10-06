import React from 'react';
import SpotifyEmbed from './SpotifyEmbed';

const Podcast: React.FC = ({  }) =>  {
  return (
    <div className="bg-gray-100 py-12 bg-opacity-50 h-full flex justify-center flex-col">
        <h1 className="text-2xl text-black font-semibold text-center mb-8 "> 🎧 My Podcast</h1>
        <div>
            <p className='text-start ml-10 mr-10 font-semibold text-gray-400 italic'>Books, Movies, Feminism, and Highs and Lows of Our 20s. 书，电影，女权主义，以及我们20多岁时的高高低低。</p>
            <p className='text-start ml-10 mt-2 font-medium text-white'></p>
        </div>
        <div className="container mx-auto px-4">
            <div className="max-w-5xl w-full h-full p-5 grid grid-cols-1 md:grid-cols-2 gap-6 z-50">
              <SpotifyEmbed url="https://open.spotify.com/embed/episode/3WGVUWK2XaTpwJsAozfdrw?utm_source=generator&theme=0" />            
              <SpotifyEmbed url="https://open.spotify.com/embed/episode/62nzzScXx3IPCWCmUhdcMj?utm_source=generator&theme=0" />
              <SpotifyEmbed url="https://open.spotify.com/embed/episode/4tBI4smSXznIhbESBUD7tm?utm_source=generator&theme=0" />
              <SpotifyEmbed url="https://open.spotify.com/embed/episode/5JNIrtOqRFK3fsdp4OfHzW?utm_source=generator&theme=0" />
              <SpotifyEmbed url="https://open.spotify.com/embed/episode/4450eWpSPTAetKOtaKCwFq?utm_source=generator&theme=0" />
              <SpotifyEmbed url="https://open.spotify.com/embed/episode/1ZPDHlex34xhrCgTqEMtss?utm_source=generator&theme=0" />
			      </div>
        </div>  
        
        <div className='flex flex-col items-start ml-6 my-5'>
          <p className='ml-3 font-bold text-gray-500'>Also available on</p>
          <p className='flex justify-center items-center'>
            <a href="https://podcasts.apple.com/us/podcast/%E5%8D%95%E4%BA%BA%E6%88%BF/id1630064863">
              <img src="https://d1f8ha51vzawnk.cloudfront.net/images/podcast/logo-square/006/apple_podcasts@2x.png" alt="Apple Podcast Logo" className='h-8 w-8 m-3'/>
            </a>
            <a href="https://pca.st/gtk4ar4c">
              <img src="https://d1f8ha51vzawnk.cloudfront.net/images/podcast/logo-square/006/pocket_casts@2x.png" alt="Pocket Casts Logo" className='h-8 w-8 m-3'/>
            </a>
            <a href="https://open.spotify.com/show/7oYpGRkq3rNp9BvOzYzwn9">
              <img src="https://d1f8ha51vzawnk.cloudfront.net/images/podcast/logo-square/006/spotify@2x.png" alt="Spotify Podcast Logo" className='h-8 w-8 m-3'/>
            </a>
            <a href="https://www.xiaoyuzhoufm.com/podcast/625629c4020537ed9fbedafb">
              <img src="/images/xiaoyuzhou.png" alt="xiaoyuzhou Podcast Logo" className='h-8 w-8 m-3'/>
            </a>
            <a href="https://afdian.net/a/aloneroom?tab=feed">
              <img src="/images/aifadian.png" alt="aifadian Podcast Logo" className='h-8 w-8 m-3 rounded'/>
            </a>
          </p>
        </div>
        
    </div>
        
  );
};

export default Podcast;