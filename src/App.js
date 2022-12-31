import React from "react";
import "./app.css";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const[questionNumber,setQuestionNumber]=React.useState(1)
  const[username,setUsername]=React.useState(null)
  const[timeOut,setTimeOut]=React.useState(false)
  const[earned,setEarned,]=React.useState("0")

  const moneyPyramid =React.useMemo(
    () =>
  [
    {id:1,amount:" 1000"},
    {id:2,amount:" 2000"},
    {id:3,amount:" 3000"},
    {id:4,amount:" 5000"},
    {id:5,amount:" 10000"},
    {id:6,amount:" 20000"},
    {id:7,amount:" 40000"},
    {id:8,amount:" 80000"},
    {id:9,amount:" 160000"},
    {id:10,amount:" 320000"},
    {id:11,amount:" 640000"},
    {id:12,amount:" 1250000"},
    {id:13,amount:" 2500000"},
    {id:14,amount:" 5000000"},
    {id:15,amount:" 10000000"},
    
  ].reverse(),
  []
  );
  const data = [
    {
      id: 1,
      question: "'Gelir hesapları .....tarafından çalışır.' Aşağıdaki kavramlardan hangisi boşluğa yerleştirmeye uygundur?",
      answers: [
        {
          text: "Borç",
          correct: false,
        },
        {
          text: "Alacak",
          correct: true,
        },
        {
          text: "Pasif",
          correct: false,
        },
        {
          text: "Aktif",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Bilanço'da Özkaynak hesapları kaçla başalar?",
      answers: [
        {
          text: "2 (iki)",
          correct: false,
        },
        {
          text: "3 (üç)",
          correct: false,
        },
        {
          text: "4 (dört)",
          correct: false,
        },
        {
          text: "5 (beş)",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: " Tek düzende Mal alışlarında kullanılar hesap adı ve kodu nedir?",
      answers: [
        {
          text: "600 Yurt içi satışlar",
          correct: false,
        },
        {
          text: "131 Ortaklardan Alacaklar",
          correct: false,
        },
        {
          text: "153 Ticari mallar",
          correct: true,
        },
        {
          text: "326 Alınan depozito ve teminatlar",
          correct: false,
        },
        
      ],
    },
    {
      id: 4,
      question: "Tek düzende FAİZ GİDERLERİ aşağıdaki hesapların hangisine kaydedilir",
      answers: [
        {
          text: "652 Faiz giderleri",
          correct: false,
        },
        {
          text: "642 Faiz gelirleri",
          correct: false,
        },
        {
          text: "653 Komisyon giderleri",
          correct: false,
        },
        {
          text: "780 Finansman giderleri",
          correct: true,
        },
        
      ],
    },
    {
      id: 5,
      question: "%80 ortağı olduğumuz X şirketine verilen borlar tek düzen hesap planında hangi hesab kaydedilir?",
      answers: [
        {
          text: "132 İştiraklerden alacaklar",
          correct: false,
        },
        {
          text: "133 Bağlı ortaklardan alacaklar",
          correct: true,
        },
        {
          text: "121 Alacak senetleri",
          correct: false,
        },
        {
          text: "120 Alıcılar",
          correct: false,
        },
        
      ],
    },
    {
      id: 6,
      question: "Tek düzende kredi kartıyla mal satışları aşağıdaki hesaplardan hangisine kaydedilir?",
      answers: [
        {
          text: "108 Diğer hazır değerler",
          correct: false,
        },
        {
          text: "198 Diğer dönen varlıklar",
          correct: false,
        },
        {
          text: "116 Diğer menkul kıymetler",
          correct: false,
        },
        {
          text: "157 Diğer stoklar",
          correct: false,
        },
        
      ],
    },
    {
      id: 7,
      question: "Hangi bilgi yanlıştır?",
      answers: [
        {
          text: "KDV beyannamesi her ay verilir",
          correct: false,
        },
        {
          text: "Alış iadeleri ticari mallara alacak kaydedilir",
          correct: false,
        },
        {
          text: "Mal alışında nakliye giderleri 381. Gider Tahakkukları'na akydedilir",
          correct: true,
        },
        {
          text: "Blançoda aktif ve pasif taraflar birbirine eşit olmalıdır",
          correct: false,
        },
        
      ],
    },
    {
      id: 8,
      question: "Hangisi Fransız heykeltıraş Rodin’in eserlerinden biri değildir??",
      answers: [
        {
          text: "Uyuyan Kadın",
          correct: true,
        },
        {
          text: "Düşünen Adam",
          correct: false,
        },
        {
          text: "Yürüyen Adam",
          correct: false,
        },
        {
          text: "Çömelen Kadın",
          correct: false,
        },
        
      ],
    },
    {
      id: 9,
      question: "Bir kız bana emmi dedi neyleyim sözü hangi halk ozanına aittir",
      answers: [
        {
          text: "Ercişli Emrah",
          correct: false,
        },
        {
          text: "Dadaloğlu",
          correct: false,
        },
        {
          text: "Aşık Daimi",
          correct: false,
        },
        {
          text: "Karacaoğlan",
          correct: true,
        },
        
      ],
    },
    {
      id: 10,
      question: "Filozoflar dünyayı yalnızca yorumlamışlardır, oysa sorun onu değiştirmektir' sözü kime aittir?",
      answers: [
        {
          text: "Büyük İskender",
          correct: false,
        },
        {
          text: "Karl Marx",
          correct: true,
        },
        {
          text: "Mahatma Gandhi",
          correct: false,
        },
        {
          text: "Ernesto Che Guevera",
          correct: false,
        },
        
      ],
    },
    {
      id: 11,
      question: "Hangi ünlü çizgi karakter genellikle sarı renkli bir şapka takar?",
      answers: [
        {
          text: "Road Runner",
          correct: false,
        },
        {
          text: "Tazmanya Canavarı",
          correct: false,
        },
        {
          text: "Kirpi Sonic",
          correct: false,
        },
        {
          text: "Hızlı Gonzales",
          correct: true,
        },
        
      ],
    },
    {
      id: 12,
      question: "Hangisi bir deyimde de adı geçen bir tür güvercindir?",
      answers: [
        {
          text: "Arpacı kumrusu",
          correct: true,
        },
        {
          text: "Yulafçı turnası",
          correct: false,
        },
        {
          text: "Baklacı kekliği",
          correct: false,
        },
        {
          text: "Darıcı bülbülü",
          correct: false,
        },
        
      ],
    },
    {
      id: 13,
      question: "333'ün 3 katı, 333'ün 3'te birinden kaç fazladır?",
      answers: [
        {
          text: "0",
          correct: false,
        },
        {
          text: "222",
          correct: false,
        },
        {
          text: "555",
          correct: false,
        },
        {
          text: "888",
          correct: true,
        },
        
      ],
    },
    {
      id: 14,
      question: "1982’de David Grundman’ın eğlence amaçlı ateş ettiği yaklaşık sekiz metre uzunluğundaki hangi bitki devrilerek ölümüne neden olmuştur?",
      answers: [
        {
          text: "Muz Ağacı",
          correct: false,
        },
        {
          text: "Palmiye",
          correct: false,
        },
        {
          text: "Bambu",
          correct: false,
        },
        {
          text: "Kaktüs",
          correct: true,
        },
        
      ],
    },
    {
      id: 15,
      question: "Guinness Dünya Rekorlarına göre Sri Lanka'da bulunan ve insan eliyle dikilmiş bilinen en eski ağaç olan 'Sri Maha Bodhiya' adlı ağaç hangi tarihte dikilmiştir?",
      answers: [
        {
          text: "MÖ 1288",
          correct: false,
        },
        {
          text: "MS 308",
          correct: false,
        },
        {
          text: "MÖ 288",
          correct: true,
        },
        {
          text: "MS 1205",
          correct: false,
        },
        
      ],
    },
  ];
  React.useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">{earned} TL Kazandınız..</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App; 