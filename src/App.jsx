import './App.css'
import TextForm from './components/TextForm';
import NavBar from './components/NavBar';
import { useState } from 'react';
import Alert from './components/Alert';
// import PropsExam from './components/PropsExam';
import About from './components/About'
import { Routes, Route } from 'react-router-dom';


function App() {
  const [Mode, setMode] = useState('light');  // wheather dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode has been enabled", "success")
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")

    }

  }


  return (              // props is used to validate we cant pass no only string in props
    <>
      <NavBar title="Textutils" Mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container" my-3>
        <Routes>


          <Route path="/" element={<TextForm heading="Enter the text to analyze" Mode={Mode} />} />
          <Route path="/about" element={<About Mode={Mode} />} />

        </Routes>
      </div>

    </>  //why here you write mode in capital . The yellow color is propName and White is UseState Variable Name
  );  // yeh mode kya show karta hai? Mode in Yellow is props name. and in white state. yellow will be used in
}

export default App;


/* but this is alternative method. i can do these things in 3 way. you just stick with harry method.  i wil
tell you once you understand one method properly ok ok one thing we can do this understanding part tommorrow you can tell me now i do something different ok <div className=" this will waste of time if you dont
understand how to do in one way u can't do another way. so you will tell now
it was game of props you don't know exactly how to use props why to use props. thats the reason you made these error

also was one speling mistake. in place of success. you written sucess like this hmmm props i know the use but the thing is not soo clearly i used thats why i have confusion soo you tell me in brief

i will clear but if want to understand without voice . it will not go in your mind ok call me but you csan speak and i listen


      {/*
      <PropsExam title="parrot" img="https://rukminim1.flixcart.com/image/612/612/kdt50nk0/candle-tealight-holder/3/8/z/fksb03661-flipkart-smartbuy-original-imafumagzhfmgsyz.jpeg?q=70" />
      <PropsExam img="https://rukminim1.flixcart.com/image/612/612/kdt50nk0/candle-tealight-holder/3/8/z/fksb03661-flipkart-smartbuy-original-imafumagzhfmgsyz.jpeg?q=70" title="apple" />
      <About /> */


      // 1. need to install react-router-dom
      // added react router dom
      // 3. import Routes and Route Here