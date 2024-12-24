import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";


export default function App() {

  const [activeQuestionId, setActiceQuestionId] = useState(null);

  // 摺疊資料
  const question = [
    {
      id: 1,
      question: "題目1",
      answer: "答案1",
    },
    {
      id: 2,
      question: "題目2",
      answer: "答案2",
    },
    {
      id: 3,
      question: "題目3",
      answer: "答案3",
    },
  ];
  return (
    <>
      {/* <div>Accordion</div> */}
      <div
        className="wrapper"
        style={{
          backgroundColor: "black",
          maxWidth: "100vw",
          height: "95vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
          color: "#ccc",
        }}
      >
        {/* FAQ區 */}
        <div
          className="faq"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            backgroundColor: "gray",
            justifyContent: "center",
            borderRadius: "10px",
            padding: '10px',
          }}
        >
          {/* 主標題 */}
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            FAQ列表
          </h2>
          {
            // 帶出陣列資料
            question.map((q) => {
              return (
                <div key={q.id} style={{ marginBottom: "5px" }}>
                  {/* QA按鈕 */}
                  <button style={{
                    width: '100%',
                    padding: '5px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1.5rem',
                  }}
                    onClick={() => setActiceQuestionId(activeQuestionId === q.id ? null : q.id)}>
                    {/* 帶出題目 */}
                    {q.question}
                    {/* 加減號icon */}
                    {/* 如果這個Q正作用，顯示-，如果不是，顯示+ */}
                    {
                      activeQuestionId === q.id ? <FaCircleMinus /> : <FaCirclePlus />
                    }
                  </button>
                  {/* 摺疊鈕動畫→ https://motion.dev/docs/react-quick-start */}
                  <AnimatePresence>
                    {
                      // 作用中的id與跟展開的id相同時(使用&&)
                      activeQuestionId === q.id && (
                        <motion.div
                        // 初始化
                        initial={{opacity:0,height:0}}
                        // 展開動畫
                        animate={{opacity:1,height:"auto"}}
                        // 闔起動畫
                        exit={{opacity:0,height:0}}
                        style={{marginTop:"5px",marginLeft:"8px",color:"lightgray",fontSize: '1.2rem'}}>
                          {/* 答案 */}
                          {q.answer}
                        </motion.div>
                      )
                    }
                  </AnimatePresence>
                </div>
              );
            })
          }
        </div>
      </div>
    </>
  );
}
