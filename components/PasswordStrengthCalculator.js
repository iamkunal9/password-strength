import { useState } from 'react';

const PasswordStrengthCalculator = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(0);

  const handleNameChange = (event) => {
    calculatePasswordStrength(password)
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    calculatePasswordStrength(password)
    setSurname(event.target.value);
  };

  const handleEmailChange = (event) => {
    calculatePasswordStrength(password)
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    calculatePasswordStrength(newPassword);
  };

  const calculatePasswordStrength = (password) => {
    // Your password strength calculation logic here
    // Modify this function to calculate the strength based on your criteria
    
    // For demonstration purposes, let's assume a simple calculation
    const hasNameSurnameEmail = password.toLowerCase().includes(name.toLowerCase()) || password.toLowerCase().includes(surname.toLowerCase()) || password.toLowerCase().includes(email.toLowerCase());
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/.test(password);
    const meetsLength = password.length >= 8;

    let strength = 0;
    if (!hasNameSurnameEmail) {
      strength += 20;
    }
    if (hasUppercase && hasLowercase) {
      strength += 20;
    }
    if (hasNumber) {
      strength += 20;
    }
    if (hasSpecialChar) {
      strength += 20;
    }
    if (meetsLength) {
      strength += 20;
    }

    setStrength(strength);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Password Strength Calculator</h1>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded"
          placeholder="Enter your surname"
          value={surname}
          onChange={handleSurnameChange}
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          className="w-full p-2 border rounded"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          className="w-full p-2 border rounded"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="bg-gray-200 rounded">
        <div
          className="bg-green-400 text-white py-1 rounded"
          style={{ width: `${strength}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        Strength: {strength}%
      </p>
      <div className='flex justify-center'>
      <button
      type="submit"
      disabled={strength<80}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {strength>=80?"Submit":"Low Strength"}
    </button>
    </div>
    </div>
  );
};

export default PasswordStrengthCalculator;
