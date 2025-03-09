import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Text from '@/components/Text/Text';
import useCounter from '@/hooks/useCounter';

function App() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-red-500">Vite + React</h1>
      <div className="card">
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
        <Text txt="text" />
        count is {count}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
