import React, { useState } from 'react';

const Task3Registration = () => {
  const [formData, setFormData] = useState({
    fio: '',
    login: '',
    password: '',
    birthdate: ''
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fio && formData.login && formData.password && formData.birthdate) {
      setIsRegistered(true);
    }
  };

  if (isRegistered) {
    return (
      <div className="success-message">
        <h2>Успешная регистрация!</h2>
        <p><strong>ФИО:</strong> {formData.fio}</p>
        <p><strong>Логин:</strong> {formData.login}</p>
        <p><strong>Дата рождения:</strong> {formData.birthdate}</p>
        <button onClick={() => {
          setIsRegistered(false);
          setFormData({ fio: '', login: '', password: '', birthdate: '' });
        }}>Зарегистрировать другого</button>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h2>Задание 3: Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ФИО:</label>
          <input type="text" name="fio" value={formData.fio} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Логин:</label>
          <input type="text" name="login" value={formData.login} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Пароль:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div class="form-group">
          <label>Дата рождения:</label>
          <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} required />
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Task3Registration;