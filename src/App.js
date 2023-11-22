import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import SwipeView from './components/SwipeView';
import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from 'react';
import { PostData, AuthUrl } from './components/utils/http';

function App() {
  useEffect(() => {
      PostData(AuthUrl, {
          // "location": "Angel Lane",
          // "fullName": "Test test",
          "password": "12345656",
          // "studentIDNumber": "3442344324",
          // "university": "King's College London",
          // "phoneNumber": "122342434",
          "email": "test@email.com",
        }
      );
  });
  return (
    <NextUIProvider>
      <SwipeView />
    </NextUIProvider>
  );
}

export default App;
