const FooterSection = () => {
  return (
    <footer className="mt-2 flex w-full flex-col items-center justify-between gap-2 px-2 py-4 font-medium text-muted-foreground md:flex-row md:items-center md:justify-between">
      <p>
        Designed & Developed by{" "}
        <a
          href="https://santoshmarar.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          Santosh Marar
        </a>
      </p>

      <p>
        Code available on{" "}
        <a
          href="https://github.com/santosh-marar/santoshmarar.com"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          GitHub
        </a>
        .
      </p>
    </footer>
  );
};

export default FooterSection;
