import logo_aurora from '../../public/images/logo_aurora.png';

export const Header = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-300 via-green-500 to-yellow-200">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <header className="flex items-center justify-between py-4 md:py-4">
            <a
              href="/"
              className="inline-flex items-center gap-2.5 text-2xl font-sans font-bold text-white md:text-3xl"
              aria-label="logo"
            >
              <img className="h-auto w-8 mr-0.5 md:w-10" src={logo_aurora} />
              Aurora Calendar
            </a>
          </header>
        </div>
      </div>
    </>
  );
};
