import Content from "./components/Content";
import Csssample from "./components/Csssample";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Onewaybind from "./components/Onewaybind";
import Onewaybind2 from "./components/Onewaybind2";
import Statesample from "./components/Statesample";
import Team from "./components/Team";
import Useeffectsample from "./components/Useeffectsample";
import User from "./components/User"
import Usercard from "./components/Usercard";
import 'antd/dist/antd.css';
import { DatePicker, Button, Row, Col } from 'antd';
import locale from 'antd/es/date-picker/locale/tr_TR';
import Statesample2 from "./components/Statesample2";
import Formelement from "./components/Formelement";
import Todolist from "./components/Todolist";
import Todolistant from "./components/Todolistant";
import Modalexample from "./components/Modalexample";

function App() {
  let diller = ['Csharp', 'JS', 'SQL', 'CSS'];

  function hello() {
    console.log('Hello propss!!')
  }
  return (
    <div>

      <div>
        <Modalexample></Modalexample>
        {/* <Todolist></Todolist> */}
        {/* <Formelement></Formelement> */}
        {/* <Statesample2></Statesample2> */}
        {/* <Onewaybind></Onewaybind> */}

        {/* <Button type="primary">Gönder</Button> */}

        {/* <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row> */}

      </div>
      {/* <div>
        <DatePicker locale={locale} />

      </div> */}

      {/* <input type="date" className="antdate" /> */}

      {/* <Csssample></Csssample> */}
      {/* <Useeffectsample></Useeffectsample> */}
      {/* <Onewaybind2></Onewaybind2> */}
      {/* <Usercard name={'Çağatay'} surname={'Yıldız'} age={34} languages={diller} country={'TR'} hi={hello}></Usercard> */}

    </div>
  )

}

export default App;
