// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <header className='text-gray-700 border-b border-gray-200'>
    <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
        <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
          <span className='text-xl ml-3'>NisshoCode</span>
        </a>
        <nav className='md:ml-auto text-base'>
          <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
          <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
          <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
          <a href="#blog" className='mr-5 hover:text-blue-400 duration-300'>Blog</a>
        </nav>
      </div>
      </header>
      <section className='text-gray-700' id="home">
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
          <div className='md:w-1/2 grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>NisshoCode<br />
              My Portfolio WebSite</h1>
            <p className='mb-8 leading-relaxed'>現在、Webエンジニアとしてデビューしたてのほやほやです。得意な言語はHTML,CSS,JavaScript,TypeScript,PHP,SQL,ReactなどWeb全般とPythonです。自身が作ったものを公開しておりますので、ぜひ見にいってください。</p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
          </div>
          <div className='md:w-1/2 lg:max-w-lg w-5/6'>
            <img src="/img/myPicture.png" alt="" />
          </div>
        </div>
      </section>
      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
          <p className='pb-10'>これまで、マーケティングや業界に数年財務分析を行っていました。現在はIT業界でシステム構築に従事しながら副業としてwebサイトやwebAppを個人として受注しています。また投資やコンサルティングも積極的に行っており、ご相談されたい方はコンタクトお待ちしています。</p>
          <p>以下に個人としての成果物を公開しています。主にSNSなどのChatアプリの構築をReactのJSやTSで実装しています。また、pythonを使ってAIによる株価の予想のサイトを構築しました。また数件の事業所のwebサイトの構築など多岐にわたります。</p>
        </div>
        <div className='flex flex-wrap'>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3H11V11H3V3Z" fill="currentColor" />
                    <path d="M3 13H11V21H3V13Z" fill="currentColor" />
                    <path d="M13 3H21V11H13V3Z" fill="currentColor" />
                    <path d="M13 13H21V21H13V13Z" fill="currentColor" />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
              </div>
              <div>
                <p>ReactとJavaScriptで投稿機能付きのChatアプリ。仕様はJavaScript,html,css,firebase,AWS,ログイン・ログアウト認証機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっと見る➔</a>
              </div>
            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>twitter</h2>
              </div>
              <div>
                <p>ReactとJavaScriptで投稿機能付きのChatアプリ。仕様はJavaScript,html,css,firebase,AWS,ログイン・ログアウト認証機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっと見る➔</a>
              </div>
            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>FaceBook</h2>
              </div>
              <div>
                <p>ReactとJavaScriptで投稿機能付きのChatアプリ。仕様はJavaScript,html,css,firebase,AWS,ログイン・ログアウト認証機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっと見る➔</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='text-gray-700 border-t border-gray-200'>
        <div  className='container px-5 py-24 mx-auto flex flex-wrap'>
          <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
              <img src="/img/pc.jpg" alt="" className='rounded' />
          </div>
            <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
              <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skills</h1>
                <div>
              <h2>HTML</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"85%"}}>85%</div>
              </div>
              <h2>JavaScript</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-orange-600 text-xs leading-none py-1 text-center text-white' style={{width:"75%"}}>75%</div>
              </div>
              <h2>React</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-blue-600 text-xs leading-none py-1 text-center text-white' style={{width:"60%"}}>60%</div>
              </div>
              <h2>Python</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-yellow-600 text-xs leading-none py-1 text-center text-white' style={{width:"80%"}}>80%</div>
              </div>
                </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
