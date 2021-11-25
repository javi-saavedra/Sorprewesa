import React, { useState } from "react";
import { Input, Space,  Steps, Button, message, Layout } from "antd";
import imagen from '../imgs/Imagen.svg';
import { HeartFilled } from '@ant-design/icons';

export default function StepsClues() {
  const { Step } = Steps;
  const {Footer} = Layout;

  const steps = [
    {
      title: '#1',
      description: 'Pista',
      content: 'Bienvenido al juego... Comenzaremos fácil: Similar a New York, camino a comprar almuerzo. \nVerde es el lugar, entre lápiz lópez y la cruz en alto mirar.',
      ans: ['pasto templo', 'templo'],
    },
    {
      title: '#1',
      description: 'Lugar',
      content: 'Muy bieeeen ewe, ahora debes dirigirte al pasto frente al templo <3 te espero ahí...',
      ans: [],
    },
    {
      title: '#2',
      description: 'Pista',
      content: 'Desde el 2019 la polera te representa <3 \npero ojo que no es roja, ni tono magenta.',
      ans: ['proyecta'],
    },
    {
      title: '#2',
      description: 'Lugar',
      content: 'Esta estaba fácil - Comunícate con la Michi para que sepas hacia donde ir',
      ans: [],
    },
    {
      title: '#3',
      description: 'Pista',
      content: 'Plural es la estación, futuro cargo de Boric \nSi llegas a este lugar, no sé qué rima con Boric',
      ans: ['presidentes', 'los presidentes'],
    },
    {
      title: '#3',
      description: 'Lugar',
      content: 'Ahora debes dirigirte al metro Los Presidentes, apúrate! (llama a la javi)',
      ans: [],
    },
    {
      title: '#4',
      description: 'Pista',
      content: 'Norte, este, oeste, ninguno te llevará.\nNadando con patitos, hogar dulce hogar.',
      ans: ['casa', 'hogar', 'laguna sur'],
    },
    {
      title: '#4',
      description: 'Lugar',
      content: 'Hemos llegado al final del recorrido <3 ahora solo queda volver a casa jj',
      ans: [],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [ans, setAns] = useState("");

  const next = () => {
    if (steps[current].ans.length === 0) {
      setAns("");
      setCurrent(current + 1);
      return;
    } 

    for (const i in steps[current].ans) {
      if (steps[current].ans[i] === ans.toLowerCase()) {
        setAns("");
        setCurrent(current + 1);
        return;
      }
    }
    
    message.error('Respuesta incorrecta');
  };

  const prev = () => {
    setAns("");
    setCurrent(current - 1);
  };

  return(
    <div className="steps-container">
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} description={item.description} />
        ))}
      </Steps>
      <div className="steps-content">
        <Space direction="vertical">
          {steps[current].content}

          {current%2 === 0 && (
            <Input placeholder="Respuesta" value={ans} onChange={(d) => setAns(d.target.value)}/>
          )}
          
        </Space>
      </div>
      <div className="steps-action">
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
      </div>

      <img src={imagen} className="imgHeader" alt="" />
      
      <Footer style={{ textAlign: 'center' }}>Made with {<HeartFilled />} by PFGang</Footer>

    </div>
  )
}