import { useCallback, useState } from "react";
import "./app.css"
import Calendar from "./components/Calendar";
import Registers from "./components/Registers";

import dayjs from "dayjs"
import Details from "./components/Details";
import NewRegister from "./components/NewRegister";
dayjs.locale("pt-br")

function App() {
  const today = dayjs().format('YYYY-MM-DD');

  const [ date, setDate ] = useState(today); 
  const [ registers, setRegisters ] = useState([]);
  const [ register, setRegister ] = useState(undefined);
  const [ createRegister, setCreateRegister ] = useState(false);

  const handleSelectDate = (value) => {
    setDate(value.format('YYYY-MM-DD'));
  };

  const handleSelectRegister = (register) => {
    setRegister(register)
  }

  const handleCreateRegister = (bool) => {
    setCreateRegister(bool);
  }

  const handleRegisters = useCallback((registers) => {
    setRegisters(registers);
  }, [])

  return (
    <>
      <header>
        <h1>Agenda</h1>
      </header>
      <main className="agenda">
        <Calendar handleSelect={handleSelectDate}/>

        <Registers 
          date={date} 
          registers={registers}
          handleRegisters={handleRegisters}
          handleClick={handleSelectRegister}
          handleCreate={handleCreateRegister}
        />

        {createRegister ? 
          <NewRegister 
            date={date} 
            handleRegisters={handleRegisters}
          />
        :
          <Details 
            date={date} 
            register={register}
          />
        }
      </main>
    </>
  )
}

export default App
