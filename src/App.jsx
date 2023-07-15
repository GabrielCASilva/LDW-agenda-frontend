import { useCallback, useState } from "react";
import "./app.css"
import Calendar from "./components/Calendar";
import Registers from "./components/Registers";

import dayjs from "dayjs"
import Details from "./components/Details";
import NewRegister from "./components/NewRegister";
import { message } from "antd";
dayjs.locale("pt-br")

function App() {
  const today = dayjs().format('YYYY-MM-DD');
  const [messageApi, contextHolder] = message.useMessage();

  const [ date, setDate ] = useState(today); 
  const [ registers, setRegisters ] = useState([]);
  const [ register, setRegister ] = useState(undefined);
  const [ createRegister, setCreateRegister ] = useState(false);

  const handleSelectDate = (value) => {
    setDate(value.format('YYYY-MM-DD'));
    setRegister(undefined);
    setCreateRegister(false);
  };

  const handleSelectRegister = (register) => {
    setRegister(register)
  }

  const handleCreateRegister = (bool) => {
    setCreateRegister(bool);
  }

  const handleRegisters = useCallback((registers) => {
    if(Array.isArray(registers)) registers.sort((a, b) => a.horario - b.horario)
    setRegisters(registers);
  }, [])

  return (
    <>
      {contextHolder}
      <header>
        <h1>Agenda</h1>
      </header>
      <main className="agenda">
        <Calendar handleSelect={handleSelectDate}/>

        <Registers
          today={today}
          date={date} 
          registers={registers}
          handleRegisters={handleRegisters}
          handleClick={handleSelectRegister}
          handleCreate={handleCreateRegister}
        />

        {createRegister ? 
          <NewRegister 
            key={date}
            date={date} 
            message={messageApi}
            handleRegisters={handleRegisters}
          />
        :
          <Details
            key={date}
            date={date}
            register={register}
            message={messageApi}
          />
        }
      </main>
    </>
  )
}

export default App
