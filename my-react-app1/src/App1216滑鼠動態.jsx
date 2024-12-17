import { useEffect } from 'react'
import $ from "jquery";


export default function App() {

  useEffect(() => {
    // 移入 → mouseover()
    // 移出 → mouseout()
    // 移動 → mousemove()
    // X、Y座標 → pageX、pageY
    // 取得HTML的內容 → html()
    // 淡入 → fadeIn()
    // 淡出 → fadeOut()
    // 速度 → 毫秒、(slow、normal、fast)
    // 尋找指定的名稱 → has()
    // 新增html元素 → html()
    // 取得子元素 → children()

    $('a:has(.ttpShow)').on('mouseover',function (e) {
      $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
      $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' }).fadeIn('fast');
    }).on('mouseout',function (e) {
      $('#ttpPanel').remove();
    }).on('mousemove',function (e) {
      $('#ttpPanel').css({ top: (e.pageY + 10) + 'px', left: (e.pageX + 10) + 'px' }).fadeIn('fast');
    })
  }, []);


  return (
    <>

      <h2>ToolTip顯示說明</h2>
      <p>
        Lorem ipsum, dolor sit amet
        <a href="#">consectetur<span className="ttpShow">consectetur說明</span></a>
        adipisicing elit. Dolore suscipit delectus iure dignissimos cupiditate quisquam aliquam minima? Ducimus doloremque architecto recusandae alias? Voluptates obcaecati, dolore tempore ipsa quam vitae ab molestias optio quos, dicta sed sit dolorum similique dignissimos itaque vel explicabo deserunt commodi! Magnam deserunt mollitia odit atque? Neque!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore suscipit delectus iure dignissimos cupiditate quisquam aliquam minima? Ducimus doloremque architecto recusandae alias? Voluptates obcaecati, dolore tempore ipsa quam vitae ab molestias optio quos, dicta sed sit dolorum similique dignissimos itaque vel explicabo deserunt commodi! Magnam deserunt <a href="#">mollitia<span className="ttpShow"> <img src="./images/03.jpg" alt="" style={{width:'100px'}}/> </span></a> odit atque? Neque!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo tempora delectus voluptates! Temporibus provident aliquam, facilis, consectetur esse laborum blanditiis natus repudiandae nostrum, eaque iusto delectus magnam officia? Alias eos quod ipsum explicabo eveniet deserunt laboriosam nam pariatur, dicta fugiat. Dolor architecto fugit ab corporis. Quaerat architecto doloremque tenetur laborum sit ipsa, consectetur exercitationem id rem veniam, a in nostrum.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus perspiciatis dolore explicabo aperiam quos adipisci consequatur soluta reprehenderit nobis repellendus possimus nemo in, corrupti, minima ad accusamus sit. Similique, eos! Autem dolores recusandae sequi! Rerum rem repellendus nobis sit, sunt quae voluptatem praesentium ipsam asperiores ea voluptates blanditiis aperiam placeat et vero consectetur dignissimos magni! Aliquam totam distinctio veniam obcaecati reiciendis expedita quasi? Aliquam itaque repellat molestias nobis quisquam ab assumenda atque, repudiandae, voluptas, numquam consequatur ipsum aspernatur odio laudantium!
      </p>
    </>
  )
}