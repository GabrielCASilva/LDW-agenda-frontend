import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { deleteRegister, getRegisters } from "../api/server";
import { Button } from "antd";

const Registers = (props) => {
  const {
    today,
    date,
    registers,
    handleClick,
    handleCreate,
    handleRegisters,
  } = props;

  const [ loading, setLoading ] = useState(false);

  const handleEdit = (register) => {
    handleCreate(false)
    handleClick(register)
  }

  const handleDelete = async (id) => {
    const status = await deleteRegister(id);
    if(status === 204){
      handleRegisters((registers) => {
        return registers.filter((register) => register.id !== id)
      })
      handleClick(undefined);
    }
  }

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      
      try{
        const data = await getRegisters(`?data=${date}`);
        handleRegisters(data ? data : []);
      }catch(e){
        console.log(e);
      }
      finally{
        setLoading(false);
      }
    };

    getData();

  }, [date, handleRegisters])

  return ( 
    <section className="registers">
      <header className="flex">
        <h2>Agendamentos</h2>
        <Button 
          type="primary" 
          disabled={date < today}
          onClick={() => handleCreate(true)}
        >
          Novo
        </Button>
      </header>
      {loading && <p>Carregando...</p>}

      {!loading && registers.length === 0 && <p>Nenhum agendamento encontrado</p>}

      {!loading && registers.length > 0 && (
        <>
          <ul className="list">
            {registers?.map((register) => {
              const {nome, id} = register;
              return (
                <li key={id} className="flex">
                  <p onClick={() => handleEdit(register)}>
                    {nome}
                  </p>
                  <Button danger onClick={() => handleDelete(id)}>Deletar</Button>
                </li>
              )}
            )}
          </ul>
        </>
      )}
    </section>
  );
}

Registers.propTypes = {
  today: PropTypes.string,
  date: PropTypes.string,
  registers: PropTypes.array,
  handleClick: PropTypes.func,
  handleCreate: PropTypes.func,
  handleRegisters: PropTypes.func,
}
 
export default Registers;