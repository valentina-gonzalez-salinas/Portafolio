import React, { useState } from 'react';
import { Card, Form, Input, Button, Space, Alert, message } from 'antd';
import { GithubOutlined, MailOutlined, SendOutlined } from '@ant-design/icons';
import { SectionTitle } from '../atoms/SectionTitle';

export const ContactForm = () => {
  const [form] = Form.useForm();
  

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    
  
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      message.success('¡Mensaje enviado correctamente!');
      form.resetFields();
    }, 1000);
  };

  return (
    <Card id="contacto" style={{ marginBottom: 24 }}>
      <SectionTitle>Contacto</SectionTitle>


      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <Space size="large" wrap>
     
          <Button
            type="primary"
            icon={<GithubOutlined />}
            href="https://github.com/valentina-gonzalez-salinas"
            target="_blank"
            size="large"
            style={{ backgroundColor: '#24292e' }}
          >
            GitHub
          </Button>
        </Space>
      </div>

      {submitted && (
        <Alert
          message="¡Gracias por contactarme!"
          description="Tu mensaje ha sido enviado exitosamente. Responderé a la brevedad."
          type="success"
          showIcon
          closable
          onClose={() => setSubmitted(false)}
          style={{ maxWidth: 600, margin: '0 auto 24px' }}
        />
      )}

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        style={{ maxWidth: 600, margin: '0 auto' }}
      >
        <Form.Item
          label="Nombre"
          name="name"
          rules={[
            { required: true, message: 'Por favor ingresa tu nombre' },
            { min: 3, message: 'El nombre debe tener al menos 3 caracteres' }
          ]}
        >
          <Input placeholder="Tu nombre" size="large" />
        </Form.Item>

        <Form.Item
          label="Correo Electrónico"
          name="email"
          rules={[
            { required: true, message: 'Por favor ingresa tu correo electrónico' },
            { type: 'email', message: 'Ingresa un correo electrónico válido' }
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="correo@ejemplo.com" size="large" />
        </Form.Item>

        <Form.Item
          label="Mensaje"
          name="message"
          rules={[
            { required: true, message: 'Por favor ingresa tu mensaje' },
            { min: 10, message: 'El mensaje debe tener al menos 10 caracteres' }
          ]}
        >
          <Input.TextArea rows={4} placeholder="¿En qué puedo ayudarte?" size="large" />
        </Form.Item>

        <Form.Item style={{ textAlign: 'center', marginTop: 24 }}>
          <Button 
            type="primary" 
            htmlType="submit" 
            icon={<SendOutlined />} 
            size="large"
            loading={loading}
          >
            Enviar Mensaje
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};