import { Form as AntForm, Button, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import PropTypes from 'prop-types';
import { useEffect } from "react";

const Form = (props) => {
  const { initialValues, onFinish, btnText } = props

  const [form] = AntForm.useForm();

  useEffect(() => {
    if(initialValues) form.setFieldsValue(initialValues);
  }, [form, initialValues])

  return ( 
    <AntForm 
      form={form}
      initialValues={initialValues}
      layout="vertical"
      onFinish={onFinish}
    >
      <AntForm.Item 
        label="Nome" name="nome"
        rules={[
          {
            required: true,
            message: "Insira o nome do agendado"
          }
        ]}
      >
        <Input />
      </AntForm.Item>

      <AntForm.Item 
        label="Compromisso" name="compromisso"
        rules={[
          {
            required: true,
            message: "Insira o compromisso do agendamento"
          }
        ]}
      >
        <TextArea />
      </AntForm.Item>

      <AntForm.Item 
        label="Horario" name="horario"
        rules={[
          {
            required: true,
            message: "Insira o horário do agendamento"
          }
        ]}
      >
        <Input />
      </AntForm.Item>

      <AntForm.Item 
        label="Telefone" name="telefone"
        rules={[
          {
            required: true,
            message: "Insira o horário do agendamento"
          }
        ]}
      >
        <Input />
      </AntForm.Item>

      <Button type="primary" htmlType="submit">
        {btnText}
      </Button>
    </AntForm>
  );
}

Form.propTypes = {
  initialValues: PropTypes.object,
  onFinish: PropTypes.func,
  btnText: PropTypes.string,
}
 
export default Form;