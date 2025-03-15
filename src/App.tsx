const techInfoButtons = [
  { name: 'React', url: 'https://react.dev/' },
  { name: 'Typescript', url: 'https://www.typescriptlang.org' },
  { name: 'tailwindcss', url: 'https://tailwindcss.com' },
  { name: 'DaisyUI', url: 'https://daisyui.com/' },
];

function App() {
  return (
    <div className="flex flex-col w-dvw h-dvh border-4 border-amber-400 items-center justify-center">
      <article className="flex flex-col items-center prose prose-slate">
        <h1>Starter Frontend Template</h1>
        <p>React + Typescript + tailwindcss + DaisyUI</p>
        <footer>
          <div className="join">
            {techInfoButtons.map((item, index) => (
              <a
                aria-label={`${item.name} information link`}
                className="btn btn-info join-item"
                href={item.url}
                key={index}
                target="_blank"
              >
                {item.name}
              </a>
            ))}
          </div>
        </footer>
      </article>
    </div>
  );
}

export default App;
